"use client";

import { TypographyEn, ArrowButton } from "@/component/shared";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  calendarContainer,
  calendarTitle,
  calendarWrapper,
  calendarContent,
  calendarDay,
  calendarDays,
  cardContainer,
  cardWrapper,
  arrow,
  calendarSlider
} from "./index.css";
import { getDate } from "../../utils/getDate";
import { Card } from "./Card";
import { useRef, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import MonthList from "./MonthList";
import { color } from "@/component/shared/designed/color";

export const Calendar = () => {
  const [dateInfo, setDateInfo] = useState<ReturnType<typeof getDate> | null>(
    null
  );
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const sliderRef = useRef<Slider>(null);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  useEffect(() => {
    setDateInfo(getDate());
  }, []);

  const handlePrevClick = () => {
    sliderRef.current?.slickPrev();
  };

  const handleNextClick = () => {
    sliderRef.current?.slickNext();
  };

  const handleMonthSelect = (monthIndex: number) => {
    setSelectedMonth(monthIndex);
  };

  if (!dateInfo) return null; // 또는 로딩 UI

  const { year, month, monthName, day, dayOfWeek, lastDayOfMonth } = dateInfo;

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    centerPadding: "30px",
    responsive: [
      {
        breakpoint: 1441,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "8px"
        }
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "48px"
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "8px"
        }
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "15%"
        }
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "11%"
        }
      }
    ]
  };

  return (
    <div style={{ backgroundColor: color.brand_yellow[1] }}>
      <div className={calendarContainer} id='calendar'>
        <div className={calendarWrapper}>
          <div className={calendarTitle}>
            <TypographyEn
              variant={isMobile ? "largetitle3Bold" : "largetitle1"}
            >
              CALENDAR
            </TypographyEn>
          </div>
          {/* 월 리스트 분기 렌더링 */}
          <MonthList
            isMobile={isMobile}
            currentMonth={month}
            selectedMonth={selectedMonth}
            onMonthSelect={handleMonthSelect}
          />
          {/* 일(day) 리스트는 데스크탑에서만 노출 */}
          {!isMobile && (
            <div className={calendarDays}>
              {Array.from({ length: lastDayOfMonth }).map((_, index) => (
                <div key={index} className={calendarDay}>
                  <TypographyEn variant='title3Semibold'>
                    {index + 1}
                  </TypographyEn>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className={cardWrapper}>
          <ArrowButton
            direction='left'
            onClick={handlePrevClick}
            className={arrow}
          />
          <Slider
            ref={sliderRef}
            {...sliderSettings}
            className={calendarSlider}
          >
            {Array.from({ length: 10 }).map((_, idx) => (
              <div
                key={`calendar-card-${idx}`}
                style={{
                  padding: isMobile ? "0 12px" : "0 12px"
                }}
              >
                <Card />
              </div>
            ))}
          </Slider>
          <ArrowButton
            direction='right'
            onClick={handleNextClick}
            className={arrow}
          />
        </div>
      </div>
    </div>
  );
};
