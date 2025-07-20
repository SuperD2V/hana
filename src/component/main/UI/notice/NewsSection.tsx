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
import { NewsSectionProps, NewsItem } from "../../type";
import { getNews } from "./api";
import { useQuery } from "@tanstack/react-query";
import { formatDateOnly } from "@/lib/utils";

const NewsSection: React.FC<NewsSectionProps> = ({
  titles = "NEWS",
  onItemClick
}) => {
  const { mounted, isMobile } = useResponsiveTypography();
  const router = useRouter();
  const { data, isLoading, error } = useQuery({
    queryKey: ["news"],
    queryFn: () => getNews({ page: 0, size: 10 })
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const handleItemClick = (item: NewsItem) => {
    if (onItemClick) {
      onItemClick(item);
    } else {
      // 기본 동작: 라우터로 이동
      router.push(`/notice/${item.announcementId}`);
    }
  };

  return (
    <div className={`${sectionBox} ${newsMobileBox}`}>
      <div className={title}>
        <TypographyEn
          variant={mounted && isMobile ? "largetitle3Bold" : "largetitle1"}
        >
          {titles}
        </TypographyEn>
      </div>
      <div className={newsList}>
        {data?.data.content.slice(0, 5).map((item, idx) => (
          <div
            onClick={() => handleItemClick(item)}
            key={item.announcementId}
            className={idx === 0 ? `${newsItem} ${newsItemFirst}` : newsItem}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              {item.topExposureTag && (
                <Typography
                  variant={mounted && isMobile ? "body2Medium" : "body1Medium"}
                  className={badge}
                >
                  {item.topExposureTag}
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
              {formatDateOnly(item.updatedAt)}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsSection;
