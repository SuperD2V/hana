import { TypographyEn, ArrowLeft } from "@/component/shared";
import {
  calendarContainer,
  calendarTitle,
  calendarWrapper,
  calendarContent,
  calendarDay,
  calendarDays,
  cardContainer,
  cardWrapper
} from "./index.css";
import { getDate } from "../../utils/getDate";
import { monthNames } from "../../const";
import { Card } from "./Card";

export const Calendar = () => {
  const { year, month, monthName, day, dayOfWeek, lastDayOfMonth } = getDate();
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
        <div>
          <ArrowLeft />
        </div>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <div>{`>`}</div>
      </div>
    </div>
  );
};
