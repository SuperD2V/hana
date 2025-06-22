import { dayNames, monthNames } from "../const";

export const getDate = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const dayOfWeek = date.getDay(); // 0: 일요일, 1: 월요일, ..., 6: 토요일

  // 현재 달의 마지막 날짜 계산
  const lastDayOfMonth = new Date(year, date.getMonth() + 1, 0).getDate();

  return {
    year,
    month,
    monthName: monthNames[date.getMonth()],
    day,
    dayOfWeek: dayNames[dayOfWeek],
    lastDayOfMonth
  };
};
