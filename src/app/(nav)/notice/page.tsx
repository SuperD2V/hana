"use client";

import { Dashboard } from "@/component/notice/UI/dashboard";
import { container } from "./index.css";
import { DashboardData, NoticeItem } from "@/component/notice/type";
import { useRouter } from "next/navigation";

export default function NoticePage() {
  const router = useRouter();

  // 실제로는 API에서 데이터를 가져와야 합니다
  const dashboardData: DashboardData = {
    notice: [
      { no: 1, title: "홈페이지 새단장", date: "2024.12.20", views: 0 },
      {
        no: 2,
        title: "2025년 하계 전교인 리트릿",
        date: "2024.12.19",
        views: 0
      }
    ],
    worship: [
      { no: 1, title: "2024년 12월 22일 주보", date: "2024.12.22", views: 15 },
      { no: 2, title: "2024년 12월 15일 주보", date: "2024.12.15", views: 12 }
    ]
  };

  const handleItemClick = (item: NoticeItem) => {
    // 아이템 클릭 시 상세 페이지로 이동
    router.push(`/notice/${item.no}`);
  };

  const handlePageChange = (page: number) => {
    // 페이지 변경 로직 (필요시 API 호출)
    console.log("Page changed to:", page);
  };

  const handleCategoryChange = (category: string) => {
    // 카테고리 변경 로직 (필요시 API 호출)
    console.log("Category changed to:", category);
  };

  return (
    <div className={container}>
      <Dashboard
        data={dashboardData}
        onItemClick={handleItemClick}
        onPageChange={handlePageChange}
        onCategoryChange={handleCategoryChange}
      />
    </div>
  );
}
