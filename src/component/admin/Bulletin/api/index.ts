import { ApiResponse, PaginatedResponse } from "@/component/shared/type";
import { api } from "@/component/shared";
import { Bulletin } from "../type";

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
