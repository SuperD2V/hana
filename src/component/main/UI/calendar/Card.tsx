import { Typography } from "@/component/shared";
import { cardContainer, cardTitle } from "./index.css";

export const Card = () => {
  return (
    <div className={cardContainer}>
      <div className={cardTitle}>
        <Typography variant='headlineSemibold'>Card Title</Typography>
        <Typography variant='title3Medium'>Card Description</Typography>
        <Typography>date</Typography>
      </div>
    </div>
  );
};
