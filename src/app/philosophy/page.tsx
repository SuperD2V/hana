import { Typography } from "@/component/shared";
import {
  PhilosophyTitle,
  PhilosophyImage,
  philosophyContainer,
  PhilosophyContentStyle
} from "./Philosophy.css";
import { PhilosophyContent } from "./utils/PhilosophyContent";

export default function Philosophy() {
  const philosophyContent = PhilosophyContent;
  console.log(philosophyContent);
  return (
    <div className={philosophyContainer}>
      <Typography variant='largetitle2Bold' className={PhilosophyTitle}>
        목회철학
      </Typography>
      <div>메뉴 자리</div>
      <div className={PhilosophyImage} />
      <div>
        <Typography
          variant='headlineRegular'
          className={PhilosophyContentStyle}
        >
          {philosophyContent[0].content}
        </Typography>
      </div>
    </div>
  );
}
