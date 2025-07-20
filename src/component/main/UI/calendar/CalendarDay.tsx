import { TypographyEn } from "@/component/shared";
import {
  calendarDay,
  todayCalendarDay,
  todayCircle,
  todayDot
} from "./index.css";

interface CalendarDayProps {
  dayNumber: number;
  isToday: boolean;
  hasEvent: boolean;
  onClick?: () => void;
}

export const CalendarDay = ({
  dayNumber,
  isToday,
  hasEvent,
  onClick
}: CalendarDayProps) => {
  return (
    <div
      className={isToday ? todayCalendarDay : calendarDay}
      onClick={onClick}
      style={{ cursor: onClick ? "pointer" : "default" }}
    >
      {isToday ? (
        <>
          <div className={todayCircle}>
            <TypographyEn variant='title3Semibold'>{dayNumber}</TypographyEn>
          </div>
          <div style={{ height: "10px" }}>
            {hasEvent && <div className={todayDot} />}
          </div>
        </>
      ) : (
        <>
          <TypographyEn variant='title3Semibold'>{dayNumber}</TypographyEn>
          <div style={{ height: "10px" }}>
            {hasEvent && <div className={todayDot} />}
          </div>
        </>
      )}
    </div>
  );
};
