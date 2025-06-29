import React from "react";
import { Typography } from "../shared/ui/Typography";
const SectionTitle = ({
  EnglishTitle,
  KoreanTitle
}: {
  EnglishTitle: string;
  KoreanTitle: string;
}) => {
  return (
    <div className='flex flex-row gap-[40px] items-baseline !px-[120px]'>
      <Typography
        variant='largetitle1'
        className='!text-[#0E4287] !text-[80px]'
      >
        {EnglishTitle}
      </Typography>
      <Typography
        variant='title1Semibold'
        className='!text-[#0E4287] !text-[28px] !important'
      >
        {KoreanTitle}
      </Typography>
    </div>
  );
};

export default SectionTitle;
