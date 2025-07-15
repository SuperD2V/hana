import { Typography } from "../Typography";
import { adminHeader, adminButton, titleText } from "./index.css";

/**
 * @param title 헤더 타이틀
 * @param buttonText 버튼 텍스트
 * @param buttonClick 버튼 클릭 함수
 * @param isButton 버튼 표시 여부
 */
export const AdminHeader = ({
  title,
  buttonText,
  buttonClick,
  isButton
}: {
  title: string;
  buttonText: string;
  buttonClick: () => void;
  isButton: boolean;
}) => {
  return (
    <div className={adminHeader}>
      <Typography variant='largetitle2Semibold' className={titleText}>
        {title}
      </Typography>
      {isButton && (
        <button className={adminButton} onClick={buttonClick}>
          <Typography variant='headlineMedium'>{buttonText}</Typography>
        </button>
      )}
    </div>
  );
};
