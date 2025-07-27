import { api } from "@/component/shared";
import { toast } from "react-hot-toast";

export const resetPassword = async ({
  newPassword,
  confirmPassword
}: {
  newPassword: string;
  confirmPassword: string;
}) => {
  try {
    const response = await api.request({
      url: "/api/admin/account/password",
      method: "PUT",
      params: { newPassword, confirmPassword }
    });

    return response.data;
  } catch (error) {
    toast.error("비밀번호 재설정에 실패했습니다.");
    console.error(error);
    throw error;
  }
};
