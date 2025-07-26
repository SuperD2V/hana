"use client";
import React, { useEffect } from "react";
import AdminNavigation from "@/component/admin/AdminNavigation";
import AdminContent from "@/component/admin/AdminContent";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();

  useEffect(() => {
    // 로컬스토리지에서 accessToken 확인
    const accessToken = localStorage.getItem("accessToken");

    // 토큰이 없으면 로그인 페이지로 리다이렉트
    if (!accessToken) {
      router.push("/admin/signin");
    }
  }, [router]);

  return (
    <div style={{ display: "flex", gap: "80px" }}>
      <AdminNavigation />
      <AdminContent />
    </div>
  );
};

export default page;
