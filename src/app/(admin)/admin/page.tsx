import React from "react";
import AdminNavigation from "@/component/admin/AdminNavigation";
import AdminContent from "@/component/admin/AdminContent";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const page = async () => {
  // 쿠키에서 토큰 확인
  const cookieStore = await cookies();
  const token = cookieStore.get("token");

  // 토큰이 없으면 로그인 페이지로 리다이렉트
  if (!token) {
    redirect("/admin/signin");
  }

  return (
    <div style={{ display: "flex", gap: "80px" }}>
      <AdminNavigation />
      <AdminContent />
    </div>
  );
};

export default page;
