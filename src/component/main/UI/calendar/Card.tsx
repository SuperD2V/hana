import { Typography, useResponsiveTypography } from "@/component/shared";
import {
  cardContainer,
  cardDescription,
  cardDuration,
  cardDurationContainer,
  cardTitle
} from "./index.css";
import { ICalenderEvent } from "../../api/api";

interface CardProps {
  event: ICalenderEvent;
}

export const Card = ({ event }: CardProps) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const year = date.getFullYear().toString().slice(-2);
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    const dayOfWeek = ["일", "월", "화", "수", "목", "금", "토"][date.getDay()];

    return `${year}.${month}.${day}(${dayOfWeek})`;
  };

  return (
    <div className={cardContainer}>
      <div className={cardTitle}>
        <Typography variant='headlineSemibold'>
          {formatDate(event.startDate)}
        </Typography>
      </div>
      <Typography variant='title3Medium' className={cardDescription}>
        {event.title}
      </Typography>
      <div className={cardDurationContainer}>
        <Typography className={cardDuration}>
          {formatDate(event.startDate)}
        </Typography>
        {event.startDate !== event.endDate && (
          <Typography className={cardDuration}>
            ~{formatDate(event.endDate)}
          </Typography>
        )}
      </div>
    </div>
  );
};
