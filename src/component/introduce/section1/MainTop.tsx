import Image from "next/image";
import React from "react";
import hanaVisionImg from "../../../../public/images/hanaVision.png";
import { Typography } from "@/component/shared";

const MainTop = () => {
  return (
    <div className='w-full h-full flex flex-col items-center justify-center gap-10'>
      <Image src={hanaVisionImg} alt='mainTop' width={720} height={360} />
      <div>
        <Typography
          variant='largetitle2Semibold'
          className='!text-[36px] leading-[44px] text-center text-[#292724]'
        >
          함께 하나님나라를 소망하는 하나비전교회
        </Typography>
      </div>
    </div>
  );
};

export default MainTop;
