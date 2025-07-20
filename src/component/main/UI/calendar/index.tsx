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
  calendarDays,
  cardContainer,
  cardWrapper,
  arrow,
  calendarSlider
} from "./index.css";
import { getDate } from "../../utils/getDate";
import { Card } from "./Card";
import { CalendarDay } from "./CalendarDay";
import { useRef, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import MonthList from "./MonthList";
import { color } from "@/component/shared/designed/color";
import { useQuery } from "@tanstack/react-query";
import { getGoolgeSchedule } from "../../api/api";
import { sliderSettings } from "./const";

export const Calendar = () => {
  const [dateInfo, setDateInfo] = useState<ReturnType<typeof getDate> | null>(
    null
  );
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedDay, setSelectedDay] = useState(new Date().getDate());
  const sliderRef = useRef<Slider>(null);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const { data, isLoading, error } = useQuery({
    queryKey: ["calendar", selectedMonth],
    queryFn: () =>
      getGoolgeSchedule({
        year: new Date().getFullYear(),
        month: selectedMonth + 1
      })
  });

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
    // 월이 변경되면 선택된 날짜를 1일로 초기화
    setSelectedDay(1);
  };

  const handleDaySelect = (dayNumber: number) => {
    setSelectedDay(dayNumber);
  };

  if (!dateInfo) return null; // 또는 로딩 UI

  const { year, month, monthName, day, dayOfWeek } = dateInfo;

  // API 데이터에서 일정 추출
  const allEvents = data?.data.calendarEvents || [];
  const summaryDays = data?.data.summaryDays || [];

  // 선택된 날짜의 일정만 필터링
  const selectedDate = new Date(
    new Date().getFullYear(),
    selectedMonth,
    selectedDay
  );

  // 선택된 날짜가 현재 월의 유효한 날짜인지 확인
  const lastDayOfMonth = new Date(
    new Date().getFullYear(),
    selectedMonth + 1,
    0
  ).getDate();
  const validSelectedDay = Math.min(selectedDay, lastDayOfMonth);

  // 유효한 날짜로 선택된 날짜 업데이트
  if (validSelectedDay !== selectedDay) {
    setSelectedDay(validSelectedDay);
  }

  const events = allEvents.filter(event => {
    const eventStartDate = new Date(event.startDate);
    const eventEndDate = new Date(event.endDate);

    // 날짜 비교를 위해 시간을 제거하고 날짜만 비교
    const selectedDateOnly = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth(),
      selectedDate.getDate()
    );
    const eventStartDateOnly = new Date(
      eventStartDate.getFullYear(),
      eventStartDate.getMonth(),
      eventStartDate.getDate()
    );
    const eventEndDateOnly = new Date(
      eventEndDate.getFullYear(),
      eventEndDate.getMonth(),
      eventEndDate.getDate()
    );

    // 선택된 날짜가 이벤트 기간 내에 있는지 확인
    return (
      selectedDateOnly >= eventStartDateOnly &&
      selectedDateOnly <= eventEndDateOnly
    );
  });

  // 디버깅을 위한 로그
  console.log("Selected Date:", selectedDate);
  console.log("All Events:", allEvents);
  console.log("Filtered Events:", events);
  console.log("Selected Day:", selectedDay);

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
              {summaryDays.map((data, index) => {
                const dayNumber = index + 1;
                const isSelected = dayNumber === selectedDay;

                return (
                  <CalendarDay
                    key={index}
                    dayNumber={dayNumber}
                    isToday={isSelected}
                    hasEvent={data && data[dayNumber.toString()] === true}
                    onClick={() => handleDaySelect(dayNumber)}
                  />
                );
              })}
            </div>
          )}
        </div>
        <div className={cardWrapper}>
          {events.length > 0 && (
            <ArrowButton
              direction='left'
              onClick={handlePrevClick}
              className={arrow}
            />
          )}
          <Slider
            ref={sliderRef}
            {...sliderSettings}
            className={calendarSlider}
          >
            {!isLoading &&
              events.length > 0 &&
              events.map((event, idx) => (
                <div
                  key={`calendar-card-${idx}`}
                  style={{
                    padding: isMobile ? "0 12px" : "0 12px"
                  }}
                >
                  <Card event={event} />
                </div>
              ))}
          </Slider>
          {events.length > 0 && (
            <ArrowButton
              direction='right'
              onClick={handleNextClick}
              className={arrow}
            />
          )}
        </div>
      </div>
    </div>
  );
};
