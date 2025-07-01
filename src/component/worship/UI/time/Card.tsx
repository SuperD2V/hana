import React from "react";
import { WorshipClassInfo } from "../../type";
import { Typography } from "@/component/shared";
import * as styles from "./index.css";

interface CardProps extends WorshipClassInfo {
  isMobile?: boolean;
}

export const Card = ({
  title,
  description,
  time,
  place,
  isMobile
}: CardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.textContainer}>
        <Typography
          variant={isMobile ? "title2Medium" : "title1Medium"}
          className={styles.title}
        >
          {title}
        </Typography>
        <Typography
          variant={isMobile ? "body2Regular" : "body1Regular"}
          className={styles.description}
        >
          {description}
        </Typography>
      </div>
      <div className={styles.timeContainer}>
        <Typography variant={isMobile ? "body1Regular" : "headlineRegular"}>
          {time}
        </Typography>
        <Typography variant={isMobile ? "body1Regular" : "headlineRegular"}>
          {place}
        </Typography>
      </div>
    </div>
  );
};
