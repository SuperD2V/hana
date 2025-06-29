"use client";

import React from "react";
import * as styles from "./SchoolImageSection.css";
import { useResponsiveTypography } from "@/component/shared/hooks/useResponsiveTypography";

export const SchoolImageSection = () => {
  const { isMobile, mounted } = useResponsiveTypography();
  if (!mounted) return null;

  return (
    <div className={styles.outer}>
      <div className={styles.imageWrapper}>
        <img
          src={isMobile ? "/images/school.jpg" : "/images/school-desk.png"}
          alt='빵 반죽하는 사진'
          className={styles.image}
        />
        {isMobile && (
          <div className={styles.infoBox}>
            <div className={styles.infoTitle}>문의 및 상담</div>
            <div className={styles.infoText}>
              노원예 집사 <span>010-9607-2231</span>
            </div>
            <div className={styles.infoText}>
              변종일 집사 <span>010-3282-1833</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
