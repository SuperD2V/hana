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
import { useRouter } from "next/navigation";

const newsData = [
  { id: 1, title: "홈페이지 새단장", date: "25.06.30", isNotice: true },
  {
    id: 2,
    title: "2025년 하계 전교인 리트릿",
    date: "25.06.30",
    isNotice: true
  }
];

const NewsSection = () => {
  const { mounted, isMobile } = useResponsiveTypography();
  const router = useRouter();
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
            onClick={() => router.push(`/notice/${item.id}`)}
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
