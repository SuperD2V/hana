import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

// API 응답 타입 정의
export interface ApiResponse<T = any> {
  data: T;
  status: number;
  message?: string;
  success: boolean;
}

// 에러 응답 타입 정의
export interface ApiError {
  message: string;
  status: number;
  code?: string;
}

// Request 설정 타입 정의
export interface RequestConfig extends Omit<AxiosRequestConfig, 'url' | 'method'> {
  url: string;
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  data?: any;
}

// 기본 설정
const DEFAULT_CONFIG: AxiosRequestConfig = {
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
};

class ApiClient {
  private instance: AxiosInstance;

  constructor(config: AxiosRequestConfig = {}) {
    this.instance = axios.create({
      ...DEFAULT_CONFIG,
      ...config,
    });

    this.setupInterceptors();
  }

  private setupInterceptors() {
    // 요청 인터셉터
    this.instance.interceptors.request.use(
      (config) => {
        // 토큰이 있다면 헤더에 추가
        const token = this.getAuthToken();
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        
        console.log('🚀 API Request:', config.method?.toUpperCase(), config.url);
        return config;
      },
      (error) => {
        console.error('❌ Request Error:', error);
        return Promise.reject(error);
      }
    );

    // 응답 인터셉터
    this.instance.interceptors.response.use(
      (response: AxiosResponse) => {
        console.log('✅ API Response:', response.status, response.config.url);
        return response;
      },
      (error: AxiosError) => {
        this.handleError(error);
        return Promise.reject(this.formatError(error));
      }
    );
  }

  private getAuthToken(): string | null {
    // 로컬 스토리지나 세션 스토리지에서 토큰 가져오기
    if (typeof window !== 'undefined') {
      return localStorage.getItem('authToken') || sessionStorage.getItem('authToken');
    }
    return null;
  }

  private handleError(error: AxiosError) {
    const status = error.response?.status;
    
    switch (status) {
      case 401:
        // 인증 실패 - 로그인 페이지로 리다이렉트
        this.handleUnauthorized();
        break;
      case 403:
        // 권한 없음
        console.error('접근 권한이 없습니다.');
        break;
      case 404:
        // 리소스를 찾을 수 없음
        console.error('요청한 리소스를 찾을 수 없습니다.');
        break;
      case 500:
        // 서버 에러
        console.error('서버 오류가 발생했습니다.');
        break;
      default:
        console.error('알 수 없는 오류가 발생했습니다.');
    }
  }

  private handleUnauthorized() {
    // 토큰 제거
    if (typeof window !== 'undefined') {
      localStorage.removeItem('authToken');
      sessionStorage.removeItem('authToken');
      
      // 로그인 페이지로 리다이렉트 (Next.js router 사용)
      // router.push('/login');
    }
  }

  private formatError(error: AxiosError): ApiError {
    const errorData = error.response?.data as any;
    return {
      message: errorData?.message || error.message || '알 수 없는 오류가 발생했습니다.',
      status: error.response?.status || 500,
      code: error.code,
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
        ...restConfig,
      });

      return {
        data: response.data,
        status: response.status,
        success: true,
      };
    } catch (error) {
      throw error;
    }
  }


  // 토큰 설정
  setAuthToken(token: string, persist: boolean = true) {
    if (typeof window !== 'undefined') {
      if (persist) {
        localStorage.setItem('authToken', token);
      } else {
        sessionStorage.setItem('authToken', token);
      }
    }
  }

  // 토큰 제거
  removeAuthToken() {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('authToken');
      sessionStorage.removeItem('authToken');
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
  request: <T = any>(config: RequestConfig) => apiClient.request<T>(config),
};

export default apiClient;
