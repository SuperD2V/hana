import { api } from "@/component/shared";
import { ApiResponse, PaginatedResponse } from "@/component/shared/type";

export interface BulletinItem {
  announcementId: number;
  title: string;
  topExposureTag: string;
  files: null;
  views: number;
  updatedAt: string;
}

export const getBulletin = async ({
  page,
  size
}: {
  page: number;
  size: number;
}) => {
  const response = await api.request<
    ApiResponse<PaginatedResponse<BulletinItem>>
  >({
    url: `/api/common/main/bulletin/list?page=${page}&size=${size}`,
    method: "GET"
  });
  return response.data;
};
