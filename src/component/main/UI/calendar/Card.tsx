import { Typography, useResponsiveTypography } from "@/component/shared";
import {
  cardContainer,
  cardDescription,
  cardDuration,
  cardDurationContainer,
  cardTitle
} from "./index.css";

export const Card = () => {
  return (
    <div className={cardContainer}>
      <div className={cardTitle}>
        <Typography variant='headlineSemibold'>Card Title</Typography>
      </div>
      <Typography variant='title3Medium' className={cardDescription}>
        Card Description
      </Typography>
      <div className={cardDurationContainer}>
        <Typography className={cardDuration}>25.05.20(화)</Typography>
        <Typography className={cardDuration}>~25.05.20(화)</Typography>
      </div>
    </div>
  );
};
