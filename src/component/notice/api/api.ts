import { api } from "@/component/shared";
import { ApiResponse } from "@/component/shared/type";

export interface NoticeDetail {
  announcementId: number;
  title: string;
  topExposureTag: string;
  files: Files[];
  views: number;
  updatedAt: string;
}

interface Files {
  fileId: number;
  fileName: string;
  fileUrl: string;
}

export const getNoticeDetail = async (id: string) => {
  try {
    const response = await api.request<ApiResponse<NoticeDetail>>({
      url: `/api/common/main/announcement/${id}`,
      method: "GET"
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getBulletinDetail = async (id: string) => {
  try {
    const response = await api.request<ApiResponse<NoticeDetail>>({
      url: `/api/common/main/bulletin/${id}`,
      method: "GET"
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
