import { ApiResponse, PaginatedResponse } from "@/component/shared/type";
import { Notice } from "../type";
import { api } from "@/component/shared";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export interface NoticeListParams {
  page?: number;
  size?: number;
}

export const getNoticeList = async (params: NoticeListParams = {}) => {
  try {
    const { page = 0, size = 10 } = params;
    const response = await api.request<ApiResponse<PaginatedResponse<Notice>>>({
      url: "/api/admin/announcement/list",
      method: "GET",
      params: {
        page,
        size
      }
    });
    return response.data.data; // 실제 데이터는 response.data.data에 있음
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const deleteNotice = async (id: number) => {
  try {
    const response = await api.request<ApiResponse<void>>({
      url: `/api/admin/announcement/${id}`,
      method: "DELETE"
    });
    return response.data.data;
  } catch (error) {
    console.error(error);
    throw error; // 에러를 다시 던져서 뮤테이션에서 처리할 수 있도록 함
  }
};

export const useDeleteNotice = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteNotice,
    onSuccess: () => {
      // 삭제 성공 후 모든 noticeList 관련 쿼리 무효화
      queryClient.invalidateQueries({
        queryKey: ["noticeList"],
        exact: false
      });
    },
    onError: error => {
      console.error("삭제 실패:", error);
    }
  });
};
