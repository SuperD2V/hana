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

  // 슬라이더를 특정 날짜의 이벤트로 이동시키는 함수
  const moveSliderToDateEvent = (
    dayNumber: number,
    allEvents: any[],
    summaryDays: any[]
  ) => {
    const hasEventOnDay =
      summaryDays[dayNumber - 1] &&
      summaryDays[dayNumber - 1][dayNumber.toString()] === true;

    if (hasEventOnDay) {
      setTimeout(() => {
        const selectedDate = new Date(
          new Date().getFullYear(),
          selectedMonth,
          dayNumber
        );

        const eventIndex = allEvents.findIndex(event => {
          const eventStartDate = new Date(event.startDate);
          const eventEndDate = new Date(event.endDate);

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

          return (
            selectedDateOnly >= eventStartDateOnly &&
            selectedDateOnly <= eventEndDateOnly
          );
        });

        if (eventIndex !== -1) {
          sliderRef.current?.slickGoTo(eventIndex);
        }
      }, 100);
    }
  };

  // 데이터 로드 완료 시 오늘 날짜에 이벤트가 있으면 자동으로 해당 슬라이더 위치로 이동
  useEffect(() => {
    if (!isLoading && data?.data) {
      const allEvents = data.data.calendarEvents || [];
      const summaryDays = data.data.summaryDays || [];

      if (allEvents.length > 0 && summaryDays.length > 0) {
        const today = new Date();
        const currentMonth = today.getMonth();
        const currentDay = today.getDate();

        // 현재 선택된 월이 오늘의 월과 같을 때만 실행
        if (selectedMonth === currentMonth) {
          // 오늘 날짜에 이벤트가 있는지 확인
          const hasTodayEvent =
            summaryDays[currentDay - 1] &&
            summaryDays[currentDay - 1][currentDay.toString()] === true;

          // 오늘에 이벤트가 있으면 해당 위치로 이동, 없으면 처음부터 보여줌
          if (hasTodayEvent) {
            moveSliderToDateEvent(currentDay, allEvents, summaryDays);
          } else {
            // 오늘에 일정이 없으면 슬라이더를 첫 번째 슬라이드로 이동
            setTimeout(() => {
              sliderRef.current?.slickGoTo(0);
            }, 100);
          }
        }
      }
    }
  }, [isLoading, data, selectedMonth]);

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
    // 선택된 날짜는 항상 업데이트
    setSelectedDay(dayNumber);

    // 이벤트가 있는 경우에만 슬라이더를 해당 위치로 이동
    moveSliderToDateEvent(dayNumber, allEvents, summaryDays);
    // 이벤트가 없는 날짜는 선택만 되고 슬라이더는 그대로 유지
  };

  if (!dateInfo) return null; // 또는 로딩 UI

  const { year, month, monthName, day, dayOfWeek } = dateInfo;

  // API 데이터에서 일정 추출
  const allEvents = data?.data.calendarEvents || [];
  const summaryDays = data?.data.summaryDays || [];

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

  // 디버깅을 위한 로그
  console.log("All Events:", allEvents);
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
                const hasEvent = data && data[dayNumber.toString()] === true;

                return (
                  <CalendarDay
                    key={index}
                    dayNumber={dayNumber}
                    isToday={isSelected}
                    hasEvent={hasEvent}
                    onClick={() => handleDaySelect(dayNumber)}
                  />
                );
              })}
            </div>
          )}
        </div>
        <div className={cardWrapper}>
          {allEvents.length > 0 && (
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
              allEvents.length > 0 &&
              allEvents.map((event, idx) => (
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
          {allEvents.length > 0 && (
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
