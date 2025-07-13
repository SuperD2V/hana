"use client";

import { Dashboard } from "@/component/notice/UI/dashboard";
import { container } from "./index.css";
import { NoticeItem } from "@/component/notice/type";
import { useRouter } from "next/navigation";
import { dashboardDummyData } from "@/component/notice/data/dummyData";

export default function NoticePage() {
  const router = useRouter();

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
        data={dashboardDummyData}
        onItemClick={handleItemClick}
        onPageChange={handlePageChange}
        onCategoryChange={handleCategoryChange}
      />
    </div>
  );
}
