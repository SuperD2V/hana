import { api } from "@/component/shared";

export const getBanner = async () => {
  const response = await api.request({
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

export const changeBanner = async (data: any) => {
  const response = await api.request({
    url: "/api/admin/banner",
    method: "PUT",
    data
  });
  return response.data;
};
