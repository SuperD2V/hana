"use client";

import { TypographyEn, Slider, ArrowButton } from "@/component/shared";
import {
  calendarContainer,
  calendarTitle,
  calendarWrapper,
  calendarContent,
  calendarDay,
  calendarDays,
  cardContainer,
  cardWrapper,
  arrow
} from "./index.css";
import { getDate } from "../../utils/getDate";
import { monthNames } from "../../const";
import { Card } from "./Card";
import { useRef, useEffect, useState } from "react";
import type { SliderRef } from "@/component/shared/ui/Slider";

export const Calendar = () => {
  const [dateInfo, setDateInfo] = useState<ReturnType<typeof getDate> | null>(
    null
  );
  const sliderRef = useRef<SliderRef>(null);

  useEffect(() => {
    setDateInfo(getDate());
  }, []);

  const handlePrevClick = () => {
    sliderRef.current?.goToPrev();
  };

  const handleNextClick = () => {
    sliderRef.current?.goToNext();
  };

  if (!dateInfo) return null; // 또는 로딩 UI

  const { year, month, monthName, day, dayOfWeek, lastDayOfMonth } = dateInfo;

  return (
    <div className={calendarContainer} id='calendar'>
      <div className={calendarWrapper}>
        <div className={calendarTitle}>
          <TypographyEn variant='largetitle1'>CALENDAR</TypographyEn>
        </div>
        <div className={calendarContent}>
          {monthNames.map(month => (
            <div key={month} className={calendarDay}>
              <TypographyEn variant='title3Semibold'>{month}</TypographyEn>
            </div>
          ))}
        </div>
        <div className={calendarDays}>
          {Array.from({ length: lastDayOfMonth }).map((_, index) => (
            <div key={index} className={calendarDay}>
              <TypographyEn variant='title3Semibold'>{index + 1}</TypographyEn>
            </div>
          ))}
        </div>
      </div>
      <div className={cardWrapper}>
        <ArrowButton
          direction='left'
          onClick={handlePrevClick}
          className={arrow}
        />
        <Slider
          ref={sliderRef}
          itemsPerView={5}
          gap={16}
          showArrows={false}
          infinite={true}
        >
          {Array.from({ length: 10 }).map((_, idx) => (
            <Card key={`calendar-card-${idx}`} />
          ))}
        </Slider>
        <ArrowButton
          direction='right'
          onClick={handleNextClick}
          className={arrow}
        />
      </div>
    </div>
  );
};
