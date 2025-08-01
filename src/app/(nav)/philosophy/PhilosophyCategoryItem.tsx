import { Typography } from "@/component/shared/ui/Typography";
import React from "react";
import { useResponsiveTypography } from "@/component/shared";
const PhilosophyCategoryItem = ({
  title,
  isSelected,
  onClick,
  isLast,
  style
}: {
  title: string;
  isSelected: boolean;
  onClick: () => void;
  isLast: boolean;
  style?: React.CSSProperties;
}) => {
  const { mounted, isMobile } = useResponsiveTypography();
  return (
    <div className='flex items-center justify-center' style={style}>
      <div
        className={`
          
          ${
          isSelected ? "bg-white " : ""
        }  rounded-[999px] cursor-pointer`}
        style={{
          padding: mounted && isMobile ? "12px 15px" : "12px 32px",
          color: isSelected ? "#F5F9FF" : "#44423C",
          backgroundColor: isSelected ? "#1B5FB8" : "transparent",
          textAlign: "center"
        }}
        onClick={onClick}
      >
        <Typography
          className="whitespace-nowrap"
          variant={isMobile && mounted ? "headlineSemibold" : "title1Semibold"}
        >
          {title}
        </Typography>
      </div>
      {!isLast && (
        <div
          className='w-[1px] h-[16px] bg-[#D6D4D1]'
          style={{ margin: "0 auto", zIndex: 10 }}
        />
      )}
    </div>
  );
};

export default PhilosophyCategoryItem;
