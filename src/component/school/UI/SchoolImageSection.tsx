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
        {/* <img alt='빵 반죽하는 사진' className={styles.image} /> */}
        <div className='relative'>
          <img
            src={isMobile ? "/images/school.jpg" : "/images/school-desk.png"}
            alt='Hands holding over water'
            className='w-full h-64 md:h-80 object-cover rounded-lg'
          />
          {/* <div className='absolute bottom-0 right-0'>
            <div className='absolute bottom-0 right-0 bg-[#276fcd] text-white p-4 rounded-[16px] text-sm w-[254px] h-[106px]'>
              <div className='font-bold mb-2 text-center'>담임목사</div>
              <div className='space-y-1'>
                <div className='flex items-center gap-2'>
                  <span className='text-xs'>010-9607-2231</span>
                </div>
                <div className='flex items-center gap-2'>
                  <span className='text-xs'>010-3282-1833</span>
                </div>
              </div>
            </div>
          </div> */}
        </div>
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
