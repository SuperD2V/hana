"use client";

import { homeContainer } from "../index.css";
import {
  InitSection,
  HistorySection,
  LineBanner,
  Calendar,
  Notice
} from "@/component/main";
import { FloatingBar } from "@/component/main/UI/floatingMenu";
import { useRouter } from "next/navigation";
import { NewsItem } from "@/component/main/type";
import { newsDummyData } from "@/component/main/data/dummyData";

export default function Home() {
  const router = useRouter();

  const handleNewsItemClick = (item: NewsItem) => {
    // 뉴스 아이템 클릭 시 상세 페이지로 이동
    router.push(`/notice/${item.id}`);
  };

  return (
    <div className={homeContainer}>
      <InitSection />
      <HistorySection />
      <LineBanner />
      <Calendar />
      <Notice newsData={newsDummyData} onNewsItemClick={handleNewsItemClick} />
      <FloatingBar />
    </div>
  );
}
