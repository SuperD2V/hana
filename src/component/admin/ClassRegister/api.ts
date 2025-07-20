import { api } from "@/component/shared";
import { ApiResponse } from "@/component/shared/type";

interface RegisterClassRequest {
  title: string;
  content: string;
  classDate: string;
  location: string;
  instructor: string;
  applyLink: string;
  isVisible: boolean;
}

interface ClassData {
  id: string;
  title: string;
  content: string;
  classDate: string;
  location: string;
  instructor: string;
  applyLink: string;
  isVisible: boolean;
  imageUrl?: string;
}

export const registerClass = async (data: RegisterClassRequest, file: File) => {
  const formData = new FormData();

  console.log("API - 전송할 데이터:", data);
  console.log("API - 전송할 파일:", file);
  console.log("파일 정보:", {
    name: file.name,
    type: file.type,
    size: file.size
  });

  // visionClassDTO를 JSON 문자열로 추가
  formData.append("visionClassDTO", JSON.stringify(data));

  // 파일을 직접 추가 (파일명 지정)
  formData.append("file", file, file.name);

  // FormData 내용 확인
  for (let [key, value] of formData.entries()) {
    console.log(`FormData - ${key}:`, value);
    if (value instanceof File) {
      console.log(
        `  파일 정보: ${value.name}, ${value.type}, ${value.size} bytes`
      );
    }
  }

  try {
    const response = await api.request({
      url: "/api/admin/vision-class/register",
      method: "POST",
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const updateClass = async (
  id: string,
  data: RegisterClassRequest,
  file?: File
) => {
  const formData = new FormData();

  console.log("API - 수정할 데이터:", data);
  console.log("API - 수정할 파일:", file);

  formData.append("visionClassDTO", JSON.stringify(data));
  if (file) {
    console.log("파일 정보:", {
      name: file.name,
      type: file.type,
      size: file.size
    });
    formData.append("file", file, file.name);
  }

  // FormData 내용 확인
  for (let [key, value] of formData.entries()) {
    console.log(`FormData - ${key}:`, value);
    if (value instanceof File) {
      console.log(
        `  파일 정보: ${value.name}, ${value.type}, ${value.size} bytes`
      );
    }
  }

  try {
    const response = await api.request({
      url: `/api/admin/vision-class/${id}`,
      method: "PUT",
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export interface IClassData {
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

export const getClassById = async (id: string) => {
  try {
    const response = await api.request<ApiResponse<IClassData>>({
      url: `/api/admin/vision-class/${id}`,
      method: "GET"
    });

    return response.data.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
