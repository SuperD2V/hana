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
