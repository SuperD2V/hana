import { ApiResponse, PaginatedResponse } from "@/component/shared/type";
import { api } from "@/component/shared";
import { Bulletin } from "../type";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export interface BulletinListParams {
  page: number;
  size: number;
}

export const getBulletinList = async (params: BulletinListParams) => {
  const { page = 0, size = 10 } = params;
  try {
    const response = await api.request<
      ApiResponse<PaginatedResponse<Bulletin>>
    >({
      url: "/api/admin/bulletin/list",
      method: "GET",
      params: {
        page,
        size
      }
    });
    return response.data.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const deleteBulletin = async (id: number) => {
  try {
    const response = await api.request<ApiResponse<void>>({
      url: `/api/admin/bulletin/${id}`,
      method: "DELETE"
    });
    return response.data.data;
  } catch (error) {
    console.error(error);
    throw error; // 에러를 다시 던져서 뮤테이션에서 처리할 수 있도록 함
  }
};

export const uploadFile = async (file: File) => {
  try {
    console.log('uploadFile 호출:', {
      fileName: file.name,
      fileSize: file.size,
      fileType: file.type,
      lastModified: file.lastModified
    });

    // 파일이 유효한지 확인
    if (!file || file.size === 0) {
      throw new Error('Invalid file');
    }

    // // 먼저 fetch API로 시도 (더 간단한 방식)
    // try {
    //   return await uploadFileWithFetch(file);
    // } catch (fetchError) {
    //   console.log('fetch 방식 실패, axios 방식으로 재시도...');
    // }

    // Swagger 스펙에 맞게 file 필드만 전송
    const formData = new FormData();
    formData.append('file', file);
    
    // FormData 내용 확인 (더 안전한 방식)
    console.log('FormData 생성 완료');
    console.log('FormData has file:', formData.has('file'));
    console.log('FormData get file:', formData.get('file'));
    
    // API 요청 전 로그
    console.log('API 요청 시작:', {
      url: "/api/admin/bulletin/file",
      method: "POST",
      hasFormData: !!formData
    });
    
    const response = await api.request<ApiResponse<any>>({
      url: "/api/admin/bulletin/file",
      method: "POST",
      data: formData,
      timeout: 30000, // 30초 타임아웃
      headers: {
        'Content-Type': undefined // FormData 사용 시 Content-Type을 undefined로 설정
      }
    }); 
    
    console.log('업로드 성공:', response);
    console.log('응답 데이터:', response.data);
    
    // URL 추출 및 검증 (axios 방식)
    const imageUrl = response.data.data.BULLETIN
    console.log('axios로 추출된 이미지 URL:', imageUrl);
    
    // if (typeof imageUrl === 'string' && imageUrl.length > 0) {
      // URL이 http나 https로 시작하지 않으면 기본 도메인 추가
      // if (!imageUrl.startsWith('http')) {
      //   const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL
      //   const fullUrl = `${baseURL}${imageUrl.startsWith('/') ? imageUrl : '/' + imageUrl}`;
      //   console.log('axios 상대 경로를 절대 경로로 변환:', fullUrl);
      //   return fullUrl;
      // }
      return imageUrl;
    // } else {
      // console.error('axios 유효하지 않은 URL 형식:', imageUrl);
      // throw new Error('서버에서 유효한 이미지 URL을 반환하지 않았습니다.');
    // }
    
  } catch (error: any) {
    console.error('uploadFile API 에러:', error);
    
    // 더 자세한 에러 정보
    if (error.response) {
      console.error('서버 응답 에러:', {
        status: error.response.status,
        statusText: error.response.statusText,
        data: error.response.data,
        headers: error.response.headers
      });
    } else if (error.request) {
      console.error('요청 실패:', error.request);
    } else {
      console.error('설정 에러:', error.message);
    }
    
    console.error('에러 설정:', {
      url: error?.config?.url,
      method: error?.config?.method,
      timeout: error?.config?.timeout
    });
    
    throw error;
  }
};

// Fetch API를 사용한 대안 업로드 함수
const uploadFileWithFetch = async (file: File): Promise<string> => {
  console.log('fetch API로 업로드 시도...');
  
  const formData = new FormData();
  formData.append('file', file);
  
  const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000/api";
  const url = `${baseURL}/api/admin/bulletin`;
  
  console.log('fetch 요청 URL:', url);
  
  const response = await fetch(url, {
    method: 'POST',
    body: formData,
    credentials: 'include', // 쿠키 포함
    // Content-Type을 명시하지 않음 (브라우저가 자동 설정)
  });
  
  console.log('fetch 응답:', {
    status: response.status,
    statusText: response.statusText,
    headers: Object.fromEntries(response.headers.entries())
  });
  
  if (!response.ok) {
    const errorText = await response.text();
    console.error('fetch 에러 응답:', errorText);
    throw new Error(`HTTP ${response.status}: ${errorText}`);
  }
  
  const result = await response.json();
  console.log('fetch 성공 결과:', result);
  
  // URL 추출 및 검증
  const imageUrl = result.data?.data.BULLETINE || result.data || result.message;
  console.log('추출된 이미지 URL:', imageUrl);
  
  // if (imageUrl.length > 0) {
    // URL이 http나 https로 시작하지 않으면 기본 도메인 추가
    if (!imageUrl.startsWith('http')) {
      const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000";
      const fullUrl = `${baseURL}${imageUrl.startsWith('/') ? imageUrl : '/' + imageUrl}`;
      console.log('상대 경로를 절대 경로로 변환:', fullUrl);
      return fullUrl;
    }
    return imageUrl;
  // } else {
  //   console.error('유효하지 않은 URL 형식:', imageUrl);
  //   throw new Error('서버에서 유효한 이미지 URL을 반환하지 않았습니다.');
  // }
};

export const useDeleteBulletin = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteBulletin,
    onSuccess: () => {
      // 삭제 성공 후 모든 bulletinList 관련 쿼리 무효화
      queryClient.invalidateQueries({
        queryKey: ["bulletinList"],
        exact: false
      });
    },
    onError: error => {
      console.error("삭제 실패:", error);
    }
  });
};
