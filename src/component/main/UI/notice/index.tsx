"use client";

import React from "react";
import { noticeContainer, noticeWrapper, rightBox, leftBox } from "./index.css";
import NewsSection from "./NewsSection";
import TimeSection from "./TimeSection";
import HelpSection from "./HelpSection";
import { NewsItem } from "../../type";
import { useRouter } from "next/navigation";

interface NoticeProps {
  newsData?: NewsItem[];
  onNewsItemClick?: (item: NewsItem) => void;
}

export const Notice: React.FC<NoticeProps> = ({
  newsData = [
    { id: 1, title: "홈페이지 새단장", date: "25.06.30", isNotice: true },
    {
      id: 2,
      title: "2025년 하계 전교인 리트릿",
      date: "25.06.30",
      isNotice: true
    }
  ],
  onNewsItemClick
}) => {
  const router = useRouter();

  const handleNewsItemClick = (item: NewsItem) => {
    if (onNewsItemClick) {
      onNewsItemClick(item);
    } else {
      // 기본 동작: 라우터로 이동
      router.push(`/notice/${item.id}`);
    }
  };

  return (
    <div className={noticeContainer}>
      <div className={noticeWrapper}>
        <div className={leftBox}>
          <NewsSection data={newsData} onItemClick={handleNewsItemClick} />
        </div>
        <div className={rightBox}>
          <TimeSection />
          <HelpSection />
        </div>
      </div>
    </div>
  );
};
