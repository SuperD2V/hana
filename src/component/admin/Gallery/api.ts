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

export const deleteGallery = async (galleryId: number) => {
  try {
    const response = await api.request<ApiResponse<void>>({
      url: `/api/admin/gallery/${galleryId}`,
      method: "DELETE"
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export interface GalleryUpdateData {
  title: string;
  deletedFilesIdList?: number[];
}

export const registerGallery = async (
  galleryData: GalleryUpdateData,
  files?: File[]
) => {
  try {
    const formData = new FormData();

    // galleryDTO를 JSON 문자열로 변환하여 추가
    const galleryDTO = {
      title: galleryData.title,
      deletedFilesIdList: galleryData.deletedFilesIdList || []
    };
    formData.append("galleryDTO", JSON.stringify(galleryDTO));

    // 파일들 추가
    if (files) {
      files.forEach(file => {
        formData.append("files", file);
      });
    }

    const response = await api.request<ApiResponse<void>>({
      url: `/api/admin/gallery/register`,
      method: "POST",
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
