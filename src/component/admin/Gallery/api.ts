import { api } from "@/component/shared";
import { ApiResponse, PaginatedResponse } from "@/component/shared/type";

interface GalleryItem {
  galleryId: number;
  title: string;
  updatedAt: string;
}

export const getGallery = async () => {
  try {
    const response = await api.request<
      ApiResponse<PaginatedResponse<GalleryItem>>
    >({
      url: `/api/admin/gallery/list?page=0&size=8`,
      method: "GET"
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export interface GalleryDetail {
  galleryId: number;
  title: string;
  files: {
    fileId: number;
    fileName: string;
    fileUrl: string;
  }[];
  updatedAt: string;
}

export const getGalleryDetail = async (galleryId: number) => {
  try {
    const response = await api.request<ApiResponse<GalleryDetail>>({
      url: `/api/admin/gallery/${galleryId}`,
      method: "GET"
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
