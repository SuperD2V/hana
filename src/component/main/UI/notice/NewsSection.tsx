"use client";

import React from "react";
import {
  sectionBox,
  newsMobileBox,
  title,
  newsList,
  newsItem,
  newsItemFirst,
  badge,
  newsTitle,
  newsDate
} from "./index.css";
import { TypographyEn } from "@/component/shared";
import { useResponsiveTypography } from "@/component/shared/hooks/useResponsiveTypography";

const newsData = [
  { id: 1, title: "공지 제목", date: "25.05.20", isNotice: true },
  { id: 2, title: "공지 제목", date: "25.05.20", isNotice: true },
  { id: 3, title: "공지 제목", date: "25.05.20", isNotice: false },
  { id: 4, title: "공지 제목", date: "25.05.20", isNotice: false },
  { id: 5, title: "공지 제목", date: "25.05.20", isNotice: false }
];

const NewsSection = () => {
  const { mounted, isMobile } = useResponsiveTypography();

  return (
    <div className={`${sectionBox} ${newsMobileBox}`}>
      <div className={title}>
        <TypographyEn
          variant={mounted && isMobile ? "largetitle3Bold" : "largetitle1"}
        >
          NEWS
        </TypographyEn>
      </div>
      <div className={newsList}>
        {newsData.map((item, idx) => (
          <div
            key={item.id}
            className={idx === 0 ? `${newsItem} ${newsItemFirst}` : newsItem}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              {item.isNotice && <span className={badge}>공지</span>}
              <span className={newsTitle}>{item.title}</span>
            </div>
            <span className={newsDate}>{item.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsSection;
