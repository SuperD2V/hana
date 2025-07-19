import { api } from "@/component/shared";
import { PaginatedResponse, ApiResponse } from "@/component/shared/type";
import toast from "react-hot-toast";

interface IBanner {
  bannerId: number;
  fileId: number;
  url: string;
  type: string;
  displayOrder: number;
  createdAt: string;
  updatedAt: string;
}

export const getBanner = async () => {
  const response = await api.request<ApiResponse<PaginatedResponse<IBanner>>>({
    url: "/api/admin/banner",
    method: "GET"
  });
  return response.data;
};

interface IRegBanner {
  type: string;
  displayOrder: number;
}

export const registerBanner = async (data: IRegBanner) => {
  const response = await api.request({
    url: "/api/admin/banner",
    method: "POST",
    data
  });
  return response.data;
};

export const changeBanner = async ({
  data,
  file
}: {
  data: IRegBanner;
  file: File;
}) => {
  const formData = new FormData();

  // bannerRegisterDTO를 JSON 문자열로 추가
  formData.append("bannerRegisterDTO", JSON.stringify(data));

  // 파일 추가
  formData.append("image", file);

  try {
    const response = await api.request({
      url: "/api/admin/banner/3",
      method: "PUT",
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
    toast.success("배너 수정 성공");
    return response.data;
  } catch (error: any) {
    toast.error(error.response.data.message);
  }
};
