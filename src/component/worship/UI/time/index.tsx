import React from "react";
import { Typography } from "@/component/shared";
import * as styles from "./index.css";
import { worshipClassData } from "../../const";
import { Card } from "./Card";
import { useResponsiveTypography } from "@/component/shared/hooks/useResponsiveTypography";
import Link from "next/link";

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
        <Link
          href='https://youtube.com/@hanavisionch?si=_KQD1m_YA_iSD5B8'
          target='_blank'
        >
          <button type='button' className={styles.button}>
            <Typography variant={isMobile ? "body1Medium" : "headlineMedium"}>
              주일설교 유튜브
            </Typography>
          </button>
        </Link>
        <Link href='https://band.us/@dawnofhanavision' target='_blank'>
          <button type='button' className={styles.button}>
            <Typography variant={isMobile ? "body1Medium" : "headlineMedium"}>
              새벽예배(온라인) 밴드
            </Typography>
          </button>
        </Link>
      </div>
    </div>
  );
};
