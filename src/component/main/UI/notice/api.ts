import { api } from "@/component/shared";
import { ApiResponse } from "@/component/shared/type";
import { NewsItem } from "../../type";
import { PaginatedResponse } from "@/component/shared/type";

export const getNews = async ({
  page,
  size
}: {
  page: number;
  size: number;
}) => {
  const response = await api.request<ApiResponse<PaginatedResponse<NewsItem>>>({
    url: `/api/common/main/announcement/list?page=${page}&size=${size}`,
    method: "GET"
  });
  return response.data;
};
