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

export interface ClassDetail {
  visionClassId: number;
  title: string;
  content: string;
  thumbnail: {
    fileId: number;
    fileName: string;
    fileUrl: string;
  };
  classDate: string;
  isVisible: boolean;
  location: string;
  instructor: string;
  applyLink: string;
  views: number;
  createdAt: string;
  updatedAt: string;
}

export const getClassDetail = async ({ classId }: { classId: number }) => {
  try {
    const response = await api.request<ApiResponse<ClassDetail>>({
      url: `/api/admin/vision-class/${classId}`,
      method: "GET"
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const deleteClass = async ({ classId }: { classId: number }) => {
  try {
    const response = await api.request<ApiResponse<void>>({
      url: `/api/admin/vision-class/${classId}`,
      method: "DELETE"
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
