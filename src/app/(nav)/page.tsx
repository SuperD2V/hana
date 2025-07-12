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

export default function Home() {
  const router = useRouter();

  // 실제로는 API에서 데이터를 가져와야 합니다
  const newsData: NewsItem[] = [
    { id: 1, title: "홈페이지 새단장", date: "25.06.30", isNotice: true },
    {
      id: 2,
      title: "2025년 하계 전교인 리트릿",
      date: "25.06.30",
      isNotice: true
    }
  ];

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
      <Notice newsData={newsData} onNewsItemClick={handleNewsItemClick} />
      <FloatingBar />
    </div>
  );
}
