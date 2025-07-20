import { api } from "@/component/shared";
import { ApiResponse, PaginatedResponse } from "@/component/shared/type";

export interface Class {
  visionClassId: number;
  title: string;
  thumbnailUrl: string;
  classDate: string;
}

export const getClass = async ({
  page,
  size
}: {
  page: number;
  size: number;
}) => {
  try {
    const response = await api.request<ApiResponse<PaginatedResponse<Class>>>({
      url: `/api/admin/vision-class/list?page=${page}&size=${size}`,
      method: "GET"
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
