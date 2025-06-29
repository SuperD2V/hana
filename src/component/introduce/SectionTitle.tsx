import React from "react";
import { Typography } from "../shared/ui/Typography";
import { useResponsiveTypography } from "../shared";
const SectionTitle = ({
  EnglishTitle,
  KoreanTitle
}: {
  EnglishTitle: string;
  KoreanTitle: string;
}) => {
  const { mounted, isMobile } = useResponsiveTypography();
  return (
    <div
      className={`flex flex-row gap-[40px] items-baseline ${
        mounted && isMobile ? "!px-[20px]" : "!px-[120px]"
      }`}
    >
      <Typography
        variant={mounted && isMobile ? "largetitle2Bold" : "largetitle1"}
        className={`!text-[#0E4287] ${
          mounted && isMobile ? "!text-[40px]" : "!text-[80px]"
        }`}
      >
        {EnglishTitle}
      </Typography>
      <Typography
        variant={mounted && isMobile ? "title3Semibold" : "title1Semibold"}
        className={`!text-[#0E4287] ${
          mounted && isMobile ? "!text-[20px]" : "!text-[28px]"
        }`}
      >
        {KoreanTitle}
      </Typography>
    </div>
  );
};

export default SectionTitle;
