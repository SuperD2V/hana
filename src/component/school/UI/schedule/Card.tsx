import React from "react";
import {
  Typography,
  TypographyEn,
  useResponsiveTypography
} from "@/component/shared";
import * as styles from "./index.css";
import Image from "next/image";

interface CardProps {
  visionClassId: number;
  date: string;
  title: string;
  teacher: string;
  isSelected?: boolean;
  onClick?: () => void;
  thumbnailUrl: string;
}

export const Card = ({
  visionClassId,
  date,
  title,
  teacher,
  isSelected = false,
  onClick,
  thumbnailUrl
}: CardProps) => {
  // classDate 형식에 맞게 날짜 파싱 (예: "2024-11-30" -> "Nov", "30")
  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      const monthNames = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ];
      const month = monthNames[date.getMonth()];
      const day = date.getDate();
      return { month, day: day.toString() };
    } catch (error) {
      // 날짜 파싱 실패 시 기본값 반환
      return { month: "Jan", day: "01" };
    }
  };

  const { month, day } = formatDate(date);
  const { mounted, isMobile } = useResponsiveTypography();

  if (!mounted) return null;
  return (
    <div
      className={`${styles.card} ${isSelected ? styles.cardSelected : ""} ${
        onClick ? styles.cardClickable : ""
      }`}
      onClick={onClick}
    >
      <div className={styles.cardLeft}>
        <div className={styles.cardDate}>
          <div className={styles.dateContainer}>
            <TypographyEn
              variant={isMobile ? "headlineMedium" : "title3Medium"}
              className={styles.month}
            >
              {month}
            </TypographyEn>
            <TypographyEn
              variant={isMobile ? "headlineMedium" : "title3Medium"}
              className={styles.month}
            >
              {day}
            </TypographyEn>
          </div>
        </div>
        <div className={styles.cardContent}>
          <div className={styles.imageContainer}>
            <Image
              src={thumbnailUrl}
              alt='school-bread'
              fill
              className={styles.image}
            />
          </div>
          <Typography
            variant={isMobile ? "title3Medium" : "title1Medium"}
            className={styles.titleText}
          >
            {title}
          </Typography>
        </div>
      </div>
      <div className={styles.cardTeacher}>
        <Typography variant='body1Medium'>{teacher}</Typography>
      </div>
    </div>
  );
};
