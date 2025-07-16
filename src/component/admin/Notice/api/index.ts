import { ApiResponse, PaginatedResponse } from "@/component/shared/type";
import { Notice } from "../type";
import { api } from "@/component/shared";

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
