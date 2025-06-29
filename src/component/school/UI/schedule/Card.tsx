import React from "react";
import { Typography, TypographyEn } from "@/component/shared";
import * as styles from "./index.css";
import Image from "next/image";

interface CardProps {
  date: string;
  title: string;
  teacher: string;
}

export const Card = ({ date, title, teacher }: CardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardLeft}>
        <div className={styles.cardDate}>
          <TypographyEn variant='title3Medium'>{date}</TypographyEn>
        </div>
        <div className={styles.cardContent}>
          <Image
            src='/images/school.jpg'
            alt='school-bread'
            width={126}
            height={126}
          />
          <Typography variant='title1Medium'>{title}</Typography>
        </div>
      </div>
      <div className={styles.cardDate}>
        <Typography variant='body1Medium'>{teacher}</Typography>
      </div>
    </div>
  );
};
