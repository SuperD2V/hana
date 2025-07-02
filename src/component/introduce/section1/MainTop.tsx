"use client";
import Image from "next/image";
import React from "react";

import { Typography } from "@/component/shared";
import { useResponsiveTypography } from "@/component/shared";

const MAIN_TOP_IMAGE = [
  {
    src: "/images/know.png",
    alt: "know",
    koreanTitle: '하나님을 바로 알고',
    englishTitle: 'Knowing him',
    description: '"그러므로 우리가 여호와를 알자\n힘써 여호와를 알자"(호 6:3)',
  },
  {
    src: "/images/grow.png",
    alt: "grow",
    koreanTitle: '함께 성장하며',
    englishTitle: 'Growing together',
    description: '"오직 우리 주 곧 구주 예수 그리스도의 은혜와\n그를 아는 지식에서 자라가라!"(벧후 3:18)',
  },
  {
    src: "/images/flow.png",
    alt: "flow",
    koreanTitle: '세상으로 넘쳐흐르는',
    englishTitle: 'Flowing into the world',
    description: '"물이 바다를 덮음같이 여호와를 아는 지식이\n세상에 충만할 것임이니라!"(호 6:3)',
  },
];

const MainTop = () => {
  const { mounted, isMobile } = useResponsiveTypography();

  return (
    <div className='w-full h-full flex flex-col items-center justify-center gap-10'>
      <Image
        src='/images/visionTop.png'
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

      <div className={`w-full bg-[#F5F9FF] ${mounted && isMobile ? "!px-[24px] !py-[24px]" : "!px-[80px] !py-[40px]"} rounded-[40px] flex ${mounted && isMobile ? "flex-col" : "flex-row"} justify-between items-center gap-[40px]`}>
        {MAIN_TOP_IMAGE.map((item, index) => (
          <div key={item.alt} className="flex flex-col gap-[40px]">
          <Image
            key={index}
            src={item.src}
            alt={item.alt}
            width={mounted && isMobile ? 335 : 395}
            height={mounted && isMobile ? 875 : 150}
          />
          <div className="flex flex-col">
            <Typography variant={mounted && isMobile ? "title1Bold" : "largetitle2Bold"} className="text-[#0E4287] !mb-[4px]">
              {item.koreanTitle}
            </Typography>
            <Typography variant={mounted && isMobile ? "headlineMedium" : "title3Medium"} className="text-[#0E4287] !mb-[12px]">
              {item.englishTitle}
            </Typography>
            <Typography variant={mounted && isMobile ? "body1Regular" : "headlineRegular"} className="text-[#44423C] whitespace-pre-line !leading-[28px]">
              {item.description}
            </Typography>
          </div>
          </div>
        ))}
      </div>
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
