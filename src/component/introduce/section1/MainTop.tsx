"use client";
import Image from "next/image";
import React from "react";
import hanaVisionImg from "/images/hanaVision.png";
import knowGrowFlowImg from "/images/know_grow_flow.png";
import knowGrowFlowMobileImg from "/images/know_grow_flow_mobile.png";

import { Typography } from "@/component/shared";
import { useResponsiveTypography } from "@/component/shared";

const MainTop = () => {
  const { mounted, isMobile } = useResponsiveTypography();

  return (
    <div className='w-full h-full flex flex-col items-center justify-center gap-10'>
      <Image
        src={hanaVisionImg}
        alt='mainTop'
        width={mounted && isMobile ? 288 : 720}
        height={mounted && isMobile ? 192 : 360}
      />
      <div className='flex flex-col items-center gap-[20px] mb-[80px]'>
        <Typography
          variant={
            mounted && isMobile ? "title2Semibold" : "largetitle2Semibold"
          }
          className='text-center text-[#292724] '
        >
          함께 하나님나라를 소망하는 하나비전교회
        </Typography>

        <Typography
          variant={mounted && isMobile ? "body1Medium" : "headlineMedium"}
          className='text-[#44423C] whitespace-pre-line text-center'
        >
          원천하나비전교회는 세대간 간극이 점점 커져가는 이 시대에 모든 세대가
          행복하게 교회 생활하고, 하나님을 바로, 깊이 알기를 힘쓰며,
          성숙하여져서, 우리끼리 좋은 신앙이 아니라 세상을 섬기고 세상에 대한
          책임을 다하는 교회가 되고자 합니다.
        </Typography>
      </div>
      <Image
        src={mounted && isMobile ? knowGrowFlowMobileImg : knowGrowFlowImg}
        alt='mainTop'
        // width={720}
        height={mounted && isMobile ? 875 : 414}
        className='w-full'
      />
    </div>
  );
};

export default MainTop;

{
  /**
      원천하나비전교회는 세대간 간극이 점점 커져가는 이 시대에 모든 세대가
          행복하게 {"\n"} 교회 생활하고, 하나님을 바로, 깊이 알기를 힘쓰며,
          성숙하여져서, 우리끼리 {"\n"} 좋은 신앙이 아니라 세상을 섬기고 세상에
          대한 책임을 다하는 교회가 되고자 합니다. */
}
