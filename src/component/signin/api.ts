import { api } from "@/component/shared";
import { SignInResponse } from "@/component/shared/type";

export const signIn = async (name: string, password: string) => {
  const response = await api.request<SignInResponse>({
    url: "/api/login",
    method: "POST",
    data: { username: name, password }
  });
  const { accessToken, username } = response.data;

  localStorage.setItem("accessToken", accessToken);
  localStorage.setItem("username", username);

  return response.data;
};
