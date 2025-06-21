import { api, apiClient, ApiResponse, RequestConfig } from './axiosInstance';

// 사용자 타입 정의 예시
interface User {
  id: number;
  name: string;
  email: string;
}

interface CreateUserRequest {
  name: string;
  email: string;
  password: string;
}

// API 사용 예시들

// 1. 새로운 request 메서드 사용법
export const userApiWithRequest = {
  // 사용자 목록 조회
  getUsers: async (): Promise<ApiResponse<User[]>> => {
    return api.request<User[]>({
      url: '/users',
      method: 'GET'
    });
  },

  // 특정 사용자 조회
  getUser: async (id: number): Promise<ApiResponse<User>> => {
    return api.request<User>({
      url: `/users/${id}`,
      method: 'GET'
    });
  },

  // 사용자 생성
  createUser: async (userData: CreateUserRequest): Promise<ApiResponse<User>> => {
    return api.request<User>({
      url: '/users',
      method: 'POST',
      data: userData
    });
  },

  // 사용자 정보 수정
  updateUser: async (id: number, userData: Partial<CreateUserRequest>): Promise<ApiResponse<User>> => {
    return api.request<User>({
      url: `/users/${id}`,
      method: 'PUT',
      data: userData
    });
  },

  // 사용자 삭제
  deleteUser: async (id: number): Promise<ApiResponse<void>> => {
    return api.request<void>({
      url: `/users/${id}`,
      method: 'DELETE'
    });
  },

  // 커스텀 헤더와 함께 요청
  getUsersWithHeaders: async (): Promise<ApiResponse<User[]>> => {
    return api.request<User[]>({
      url: '/users',
      method: 'GET',
      headers: {
        'X-Custom-Header': 'custom-value'
      }
    });
  },

  // 쿼리 파라미터와 함께 요청
  searchUsers: async (query: string): Promise<ApiResponse<User[]>> => {
    return api.request<User[]>({
      url: '/users/search',
      method: 'GET',
      params: {
        q: query,
        limit: 10
      }
    });
  },
};

// 2. 기존 방식 (api 객체 사용)
export const userApi = {
  // 사용자 목록 조회
  getUsers: async (): Promise<ApiResponse<User[]>> => {
    return api.request<User[]>({
      url: '/users',
      method: 'GET'
    });
  },

  // 특정 사용자 조회
  getUser: async (id: number): Promise<ApiResponse<User>> => {
    return api.request<User>({
      url: `/users/${id}`,
      method: 'GET'
    });
  },

  // 사용자 생성
  createUser: async (userData: CreateUserRequest): Promise<ApiResponse<User>> => {
    return api.request<User>({
      url: '/users',
      method: 'POST',
      data: userData
    });
  },

  // 사용자 정보 수정
  updateUser: async (id: number, userData: Partial<CreateUserRequest>): Promise<ApiResponse<User>> => {
    return api.request<User>({
      url: `/users/${id}`,
      method: 'PUT',
      data: userData
    });
  },

  // 사용자 삭제
  deleteUser: async (id: number): Promise<ApiResponse<void>> => {
    return api.request<void>({
      url: `/users/${id}`,
      method: 'DELETE'
    });
  },

  // 파일 업로드 예시
  uploadAvatar: async (userId: number, file: File): Promise<ApiResponse<{ avatarUrl: string }>> => {
    return api.request<{ avatarUrl: string }>({
      url: `/users/${userId}/avatar`,
      method: 'POST',
      data: file
    });
  },
};

// 3. 직접 apiClient 인스턴스 사용
export const advancedUserApi = {
  // 커스텀 헤더와 함께 요청
  getUsersWithCustomHeaders: async (): Promise<ApiResponse<User[]>> => {
    return apiClient.request<User[]>({
      url: '/users',
      method: 'GET',
      headers: {
        'X-Custom-Header': 'custom-value',
      },
    });
  },

  // 쿼리 파라미터와 함께 요청
  searchUsers: async (query: string): Promise<ApiResponse<User[]>> => {
    return apiClient.request<User[]>({
      url: '/users/search',
      method: 'GET',
      params: {
        q: query,
        limit: 10,
      },
    });
  },
};

// 4. 컴포넌트에서 사용하는 예시
export const useUserApi = () => {
  const fetchUsers = async () => {
    try {
      // 새로운 request 메서드 사용
      const response = await userApiWithRequest.getUsers();
      console.log('사용자 목록:', response.data);
      return response.data;
    } catch (error) {
      console.error('사용자 목록 조회 실패:', error);
      throw error;
    }
  };

  const createUser = async (userData: CreateUserRequest) => {
    try {
      // 새로운 request 메서드 사용
      const response = await userApiWithRequest.createUser(userData);
      console.log('사용자 생성 성공:', response.data);
      return response.data;
    } catch (error) {
      console.error('사용자 생성 실패:', error);
      throw error;
    }
  };

  return {
    fetchUsers,
    createUser,
  };
};

// 5. 인증 토큰 관리 예시
export const authApi = {
  // 로그인 후 토큰 설정
  login: async (email: string, password: string) => {
    try {
      const response = await api.request<{ token: string; user: User }>({
        url: '/auth/login',
        method: 'POST',
        data: { email, password }
      });
      
      // 토큰을 로컬 스토리지에 저장 (영구 저장)
      apiClient.setAuthToken(response.data.token, true);
      
      return response.data;
    } catch (error) {
      console.error('로그인 실패:', error);
      throw error;
    }
  },

  // 로그아웃
  logout: () => {
    apiClient.removeAuthToken();
    // 로그인 페이지로 리다이렉트
    // router.push('/login');
  },

  // 토큰을 세션 스토리지에 저장 (브라우저 종료 시 삭제)
  setSessionToken: (token: string) => {
    apiClient.setAuthToken(token, false);
  },
};

// 6. 에러 처리 예시
export const handleApiError = (error: any) => {
  if (error.status === 401) {
    // 인증 실패 - 로그인 페이지로 이동
    console.log('인증이 필요합니다.');
    // router.push('/login');
  } else if (error.status === 403) {
    // 권한 없음
    console.log('접근 권한이 없습니다.');
  } else if (error.status === 404) {
    // 리소스를 찾을 수 없음
    console.log('요청한 리소스를 찾을 수 없습니다.');
  } else {
    // 기타 에러
    console.log('오류가 발생했습니다:', error.message);
  }
};

// 7. 동적 메서드 사용 예시
export const dynamicApi = {
  // 메서드를 동적으로 결정하는 함수
  callApi: async <T = any>(
    url: string, 
    method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE',
    data?: any
  ): Promise<ApiResponse<T>> => {
    return api.request<T>({
      url,
      method,
      data
    });
  },

  // 조건부 API 호출
  conditionalApiCall: async <T = any>(
    shouldCreate: boolean,
    url: string,
    data?: any
  ): Promise<ApiResponse<T>> => {
    const method = shouldCreate ? 'POST' : 'PUT';
    return api.request<T>({
      url,
      method,
      data
    });
  }
}; 