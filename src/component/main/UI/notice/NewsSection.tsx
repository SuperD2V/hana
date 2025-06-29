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
import { TypographyEn, Typography } from "@/component/shared";
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
              {item.isNotice && (
                <Typography
                  variant={mounted && isMobile ? "body2Medium" : "body1Medium"}
                  className={badge}
                >
                  공지
                </Typography>
              )}
              <Typography
                variant={mounted && isMobile ? "title3Medium" : "title2Medium"}
                className={newsTitle}
              >
                {item.title}
              </Typography>
            </div>
            <Typography
              variant={mounted && isMobile ? "body2Regular" : "body1Regular"}
              className={newsDate}
            >
              {item.date}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsSection;
