import React from "react";
import {
  Typography,
  TypographyEn,
  useResponsiveTypography
} from "@/component/shared";
import * as styles from "./index.css";
import Image from "next/image";

interface CardProps {
  date: string;
  title: string;
  teacher: string;
  isSelected?: boolean;
  onClick?: () => void;
}

export const Card = ({
  date,
  title,
  teacher,
  isSelected = false,
  onClick
}: CardProps) => {
  // 날짜를 월과 일로 분리
  const [month, day] = date.split(" ");
  const { mounted, isMobile } = useResponsiveTypography();

  if (!mounted) return null;
  return (
    <div
      className={`${styles.card} ${isSelected ? styles.cardSelected : ""}`}
      onClick={onClick}
      style={{ cursor: onClick ? "pointer" : "default" }}
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
              className={styles.day}
            >
              {day}
            </TypographyEn>
          </div>
        </div>
        <div className={styles.cardContent}>
          <Image
            src='/images/school.jpg'
            alt='school-bread'
            width={126}
            height={126}
          />
          <Typography variant={isMobile ? "title3Medium" : "title1Medium"}>
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
