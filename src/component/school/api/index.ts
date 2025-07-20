import { api } from "@/component/shared";
import { ApiResponse } from "@/component/shared/type";
import { PaginatedResponse } from "@/component/shared/type";

export interface ScheduleItem {
  visionClassId: number;
  title: string;
  classDate: string;
  thumbnail: {
    fileId: number;
    fileName: string;
    fileUrl: string;
  };
  instructor: string;
  views: number;
}

export interface ScheduleDetailItem {
  visionClassId: number;
  title: string;
  content: string;
  thumbnail: {
    fileId: number;
    fileName: string;
    fileUrl: string;
  };
  classDate: string;
  location: string;
  instructor: string;
  applyLink: string;
  views: number;
}

export const getSchedule = async ({
  page,
  size
}: {
  page: number;
  size: number;
}) => {
  try {
    const response = await api.request<
      ApiResponse<PaginatedResponse<ScheduleItem>>
    >({
      url: `/api/common/main/vision-class/list?page=${page}&size=${size}`,
      method: "GET"
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getScheduleDetail = async ({
  visionClassId
}: {
  visionClassId: number;
}) => {
  try {
    const response = await api.request<ApiResponse<ScheduleDetailItem>>({
      url: `/api/common/main/vision-class/${visionClassId}`,
      method: "GET"
    });
    return response.data.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export interface GalleryItem {
  announcementId: number;
  title: string;
  topExposureTag: string | null;
  files: string | null;
  views: number;
  updatedAt: string;
}

export const getGallery = async () => {
  try {
    const response = await api.request<
      ApiResponse<PaginatedResponse<GalleryItem>>
    >({
      url: `/api/common/main/gallery/list?page=0&size=10`,
      method: "GET"
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export interface GalleryDetailItem {
  announcementId: number;
  title: string;
  content: string;
  files: [
    {
      fileId: number;
      fileName: string;
      fileUrl: string;
    }
  ];
  views: number;
  updatedAt: string;
}
export const getGalleryDetail = async ({
  announcementId
}: {
  announcementId: number;
}) => {
  try {
    console.log(
      `Fetching gallery detail for announcementId: ${announcementId}`
    );
    const response = await api.request<ApiResponse<GalleryDetailItem>>({
      url: `/api/common/main/gallery/${announcementId}`,
      method: "GET"
    });
    console.log(`Gallery detail response for ${announcementId}:`, response);
    return response.data;
  } catch (error) {
    console.error(
      `Error fetching gallery detail for ${announcementId}:`,
      error
    );
    return null;
  }
};
