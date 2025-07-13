"use client";

import React from "react";
import { noticeContainer, noticeWrapper, rightBox, leftBox } from "./index.css";
import NewsSection from "./NewsSection";
import TimeSection from "./TimeSection";
import HelpSection from "./HelpSection";
import { NewsItem } from "../../type";
import { useRouter } from "next/navigation";
import { newsDummyData } from "../../data/dummyData";

interface NoticeProps {
  newsData?: NewsItem[];
  onNewsItemClick?: (item: NewsItem) => void;
}

export const Notice: React.FC<NoticeProps> = ({
  newsData = newsDummyData,
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
