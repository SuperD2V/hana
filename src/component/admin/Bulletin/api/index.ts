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
  // 일반적으로 사용되는 필드명들을 순서대로 시도
  const fieldNames = ['file', 'image', 'upload', 'photo'];
  
  for (const fieldName of fieldNames) {
    try {
      console.log(`uploadFile 호출 (필드명: ${fieldName}):`, {
        fileName: file.name,
        fileSize: file.size,
        fileType: file.type
      });

      const formData = new FormData();
      formData.append(fieldName, file);
      
      // 추가 메타데이터 (일부 서버에서 요구할 수 있음)
      formData.append('fileName', file.name);
      formData.append('fileType', file.type);
      
      // FormData 내용 확인
      console.log('FormData 내용:');
      for (let [key, value] of formData.entries()) {
        console.log(key, value);
      }
      
      const response = await api.request<ApiResponse<string>>({
        url: "/api/admin/bulletin/file",
        method: "POST",
        data: formData,
        timeout: 30000, // 30초 타임아웃
        headers: {
          // Content-Type을 명시적으로 설정하지 않음 (브라우저가 자동 설정)
        }
      }); 
      
      console.log('업로드 성공:', response.data);
      return response.data.data;
      
    } catch (error: any) {
      console.error(`uploadFile API 에러 (필드명: ${fieldName}):`, error);
      console.error('에러 상세:', {
        message: error?.message,
        status: error?.response?.status,
        statusText: error?.response?.statusText,
        data: error?.response?.data,
        config: error?.config
      });
      
      // 마지막 필드명이 아니면 다음 시도
      if (fieldName !== fieldNames[fieldNames.length - 1]) {
        console.log(`필드명 ${fieldName} 실패, 다음 필드명 시도...`);
        continue;
      }
      
      // 모든 필드명 시도 후에도 실패하면 에러 throw
      throw error;
    }
  }
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
