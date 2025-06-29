import React from "react";
import { Typography } from "@/component/shared";
import * as styles from "./index.css";
import { worshipClassData } from "../../const";
import { Card } from "./Card";
import { useResponsiveTypography } from "@/component/shared/hooks/useResponsiveTypography";

export const Time = () => {
  const { isMobile, mounted } = useResponsiveTypography();

  if (!mounted) return null;

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <Typography
          variant={isMobile ? "title2Medium" : "title1Medium"}
          className={styles.title}
        >
          주일예배
        </Typography>
        <Typography variant={isMobile ? "title3Medium" : "title2Medium"}>
          오전 11시
        </Typography>
      </div>
      <div className={styles.cardContainer}>
        {worshipClassData.map(item => (
          <Card key={item.title} {...item} isMobile={isMobile} />
        ))}
      </div>
      <div className={styles.buttonContainer}>
        <button type='button' className={styles.button}>
          <Typography variant={isMobile ? "body1Medium" : "headlineMedium"}>
            주일설교 유투브
          </Typography>
        </button>
        <button type='button' className={styles.button}>
          <Typography variant={isMobile ? "body1Medium" : "headlineMedium"}>
            새벽예배(온라인) 밴드
          </Typography>
        </button>
      </div>
    </div>
  );
};
