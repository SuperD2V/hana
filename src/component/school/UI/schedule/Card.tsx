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
  // classDate 형식에 맞게 날짜 파싱 (예: "2024-11-30" -> "11", "30")
  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      const month = date.getMonth() + 1; // getMonth()는 0부터 시작
      const day = date.getDate();
      return { month: month.toString(), day: day.toString() };
    } catch (error) {
      // 날짜 파싱 실패 시 기본값 반환
      return { month: "01", day: "01" };
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
              {visionClassId}
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
