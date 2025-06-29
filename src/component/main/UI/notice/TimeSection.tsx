"use client";

import React from "react";
import {
  sectionBox,
  timeBox,
  title,
  timeDept,
  timeRow,
  timeHour,
  timePlace,
  timeBar,
  timeContainer,
  timeMainSchedule,
  timeScheduleList,
  timeInfoRow
} from "./index.css";
import { Typography, TypographyEn } from "@/component/shared";
import { color } from "@/component/shared/designed/color";
import { useMediaQuery } from "react-responsive";

const TimeSection = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <div className={`${sectionBox} ${timeBox}`}>
      <div className={title}>
        <TypographyEn variant={isMobile ? "largetitle3Bold" : "largetitle1"}>
          TIME
        </TypographyEn>
      </div>
      {/* 샘플 시간표 내용 */}
      <div className={timeContainer}>
        <div className={timeMainSchedule}>
          <Typography variant='headlineMedium'>오전11:00 예배실</Typography>
        </div>
        <div className={timeScheduleList}>
          <div className={timeRow}>
            <span className={timeDept}>영아부</span>
            <div className={timeInfoRow}>
              <span className={timeHour}>오전 11:00</span>
              <span className={timeBar}>|</span>
              <span className={timePlace}>비전홀</span>
            </div>
          </div>
          <div className={timeRow}>
            <span className={timeDept}>유치부</span>
            <div className={timeInfoRow}>
              <span className={timeHour}>오전 10:00</span>
              <span className={timeBar}>|</span>
              <span className={timePlace}>비전홀</span>
            </div>
          </div>
          <div className={timeRow}>
            <span className={timeDept}>초등부</span>
            <div className={timeInfoRow}>
              <span className={timeHour}>오전 10:00</span>
              <span className={timeBar}>|</span>
              <span className={timePlace}>하나홀</span>
            </div>
          </div>
          <div className={timeRow}>
            <span className={timeDept}>중고등부</span>
            <div className={timeInfoRow}>
              <span className={timeHour}>오전 10:00</span>
              <span className={timeBar}>|</span>
              <span className={timePlace}>교육관(서울베이커리)</span>
            </div>
          </div>
          <div className={timeRow}>
            <span className={timeDept}>대학청년부</span>
            <div className={timeInfoRow}>
              <span className={timeHour}>오전 12:25</span>
              <span className={timeBar}>|</span>
              <span className={timePlace}>하나홀</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeSection;
