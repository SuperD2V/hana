import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError
} from "axios";
import https from "https";
import { ApiResponse } from "../type";

// Request 설정 타입 정의
export interface RequestConfig
  extends Omit<AxiosRequestConfig, "url" | "method"> {
  url: string;
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  data?: any;
}

// 기본 설정
const DEFAULT_CONFIG: AxiosRequestConfig = {
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000/api",
  timeout: 10000,
  withCredentials: true, // 쿠키 주고받기 위해 필요
  headers: {
    "Content-Type": "application/json"
  },
  httpsAgent: new https.Agent({
    rejectUnauthorized: false // 개발용 SSL 우회
  })
};

class ApiClient {
  private instance: AxiosInstance;
  private isRefreshing = false;
  private failedQueue: Array<{
    resolve: (value?: any) => void;
    reject: (error?: any) => void;
  }> = [];

  constructor(config: AxiosRequestConfig = {}) {
    this.instance = axios.create({
      ...DEFAULT_CONFIG,
      ...config
    });

    this.setupInterceptors();
  }

  private setupInterceptors() {
    // 요청 인터셉터
    this.instance.interceptors.request.use(
      config => {
        // 토큰이 있다면 헤더에 추가
        const token = this.getaccessToken();
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      error => {
        console.error("❌ Request Error:", error);
        return Promise.reject(error);
      }
    );

    // 응답 인터셉터
    this.instance.interceptors.response.use(
      (response: AxiosResponse) => {
        // 응답 헤더에서 새로운 액세스 토큰이 있는지 확인
        const newToken =
          response.headers["authorization"] ||
          response.headers["Authorization"];
        if (newToken) {
          this.setaccessToken(newToken.replace("Bearer ", ""));
        }

        console.log("✅ API Response:", response.status, response.config.url);
        return response;
      },
      async (error: AxiosError) => {
        const originalRequest = error.config as any;

        if (error.response?.status === 401 && !originalRequest._retry) {
          if (this.isRefreshing) {
            // 이미 토큰 갱신 중이면 대기열에 추가
            return new Promise((resolve, reject) => {
              this.failedQueue.push({ resolve, reject });
            })
              .then(() => {
                return this.instance(originalRequest);
              })
              .catch(err => {
                return Promise.reject(err);
              });
          }

          originalRequest._retry = true;
          this.isRefreshing = true;

          try {
            // 원래 요청을 리프레시 토큰과 함께 다시 보내기
            const response = await axios({
              ...originalRequest,
              withCredentials: true // 쿠키에 저장된 리프레시 토큰 포함
            });

            // 응답 헤더에서 새로운 액세스 토큰 추출
            const newToken =
              response.headers["authorization"] ||
              response.headers["Authorization"];
            if (newToken) {
              this.setaccessToken(newToken.replace("Bearer ", ""));
            }

            // 대기열에 있던 요청들 처리
            this.failedQueue.forEach(({ resolve }) => {
              resolve();
            });
            this.failedQueue = [];

            return response;
          } catch (refreshError) {
            // 토큰 갱신 실패 시 대기열에 있던 요청들 거부
            this.failedQueue.forEach(({ reject }) => {
              reject(refreshError);
            });
            this.failedQueue = [];

            this.handleUnauthorized();
            return Promise.reject(refreshError);
          } finally {
            this.isRefreshing = false;
          }
        }

        this.handleError(error);
        return Promise.reject(this.formatError(error));
      }
    );
  }

  private getaccessToken(): string | null {
    // 로컬 스토리지나 세션 스토리지에서 토큰 가져오기
    if (typeof window !== "undefined") {
      return (
        localStorage.getItem("accessToken") ||
        sessionStorage.getItem("accessToken")
      );
    }
    return null;
  }

  private handleError(error: AxiosError) {
    const status = error.response?.status;

    switch (status) {
      case 401:
        // 인증 실패 - 토큰 갱신 시도 후에도 실패하면 로그인 페이지로 리다이렉트
        console.error("인증에 실패했습니다.");
        break;
      case 403:
        // 권한 없음
        console.error("접근 권한이 없습니다.");
        break;
      case 404:
        // 리소스를 찾을 수 없음
        console.error("요청한 리소스를 찾을 수 없습니다.");
        break;
      case 500:
        // 서버 에러
        console.error("서버 오류가 발생했습니다.");
        break;
      default:
        console.error("알 수 없는 오류가 발생했습니다.");
    }
  }

  private handleUnauthorized() {
    // 토큰 제거
    if (typeof window !== "undefined") {
      localStorage.removeItem("accessToken");
      sessionStorage.removeItem("accessToken");

      // 로그인 페이지로 리다이렉트 (Next.js router 사용)
      // router.push('/login');
    }
  }

  private formatError(error: AxiosError) {
    const errorData = error.response?.data as any;
    return {
      message:
        errorData?.message ||
        error.message ||
        "알 수 없는 오류가 발생했습니다.",
      status: error.response?.status || 500,
      code: error.code
    };
  }

  // 통합 request 메서드
  async request<T = any>(config: RequestConfig): Promise<ApiResponse<T>> {
    try {
      const { url, method, data, ...restConfig } = config;
      const response = await this.instance.request<T>({
        url,
        method,
        data,
        ...restConfig
      });

      return {
        data: response.data,
        message: response.statusText
      };
    } catch (error) {
      throw error;
    }
  }

  // 토큰 설정
  setaccessToken(token: string, persist: boolean = true) {
    if (typeof window !== "undefined") {
      if (persist) {
        localStorage.setItem("accessToken", token);
      } else {
        sessionStorage.setItem("accessToken", token);
      }
    }
  }

  // 토큰 제거
  removeaccessToken() {
    if (typeof window !== "undefined") {
      localStorage.removeItem("accessToken");
      sessionStorage.removeItem("accessToken");
    }
  }

  // 기본 URL 변경
  setBaseURL(baseURL: string) {
    this.instance.defaults.baseURL = baseURL;
  }
}

// 싱글톤 인스턴스 생성
export const apiClient = new ApiClient();

// 타입 안전성을 위한 제네릭 함수들
export const api = {
  // 통합 request 메서드
  request: <T = any>(config: RequestConfig) => apiClient.request<T>(config)
};

export default apiClient;
