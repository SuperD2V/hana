import React from "react";
import SectionTitle from "../SectionTitle";
import Image from "next/image";

import { Typography } from "@/component/shared";
import { useResponsiveTypography } from "@/component/shared";

const Section3 = () => {
  const { mounted, isMobile } = useResponsiveTypography();
  return (
    <div
      className={`flex !mx-auto max-w-[1680px] ${
        mounted && isMobile
          ? "!p-[0px] flex-col !mt-[60px]"
          : "!pt-[120px] flex justify-between"
      } ${mounted && isMobile ? "!gap-[40px]" : "!gap-[120px]"}`}
    >
      <div
        className={`flex flex-col ${
          mounted && isMobile ? "gap-[40px] w-full" : "gap-[60px] !pb-[96px]"
        }`}
      >
        <SectionTitle EnglishTitle='Pastor' KoreanTitle='담임목사' />
        <div
          className={`flex flex-col gap-[24px] ${
            mounted && isMobile ? "!p-[20px]" : "!pl-[120px] !mt-[40px]"
          }`}
        >
          <div className='flex flex-row gap-[8px] items-center'>
            <Typography variant='title1Bold' className='text-[#292724]'>
              이현수
            </Typography>
            <Typography variant='headlineRegular' className='text-[#57554E]'>
              목사
            </Typography>
          </div>

          <div className='flex flex-col gap-[16px] text-[#44423C]'>
            <Typography
              variant='body1Regular'
              className={`max-w-[720px] ${
                mounted && isMobile ? "" : "whitespace-pre-line"
              }`}
            >
              London Bible College(현 London School of Theology, 성경해석학 석사
              졸)에서 공부하고 , Fuller Theological Seminary에서 '프로그램
              매니저'로, 제일성도교회에서 '청년교회' 총괄 담임으로 섬겼으며,
              원천교회 1교회 담임목사로 17년간 섬기면서 원천하나기독학교
              대표로도 섬겼습니다. {"\n"}
              {"\n"}
              저서로는 &lt;신앙 유전자&gt;(도서출판 이르카)가 있습니다.창세기의
              아브라함-이삭-야곱, 삼대에 걸친 신앙의 대물림에 대해 묵상,
              연구하고 쓴 책으로 도서출판 &lt;이르카&gt;에서 출판되었습니다.
            </Typography>
          </div>
          <div className='flex flex-row gap-[12px]'>
            <button
              className='w-[200px] h-[52px] !bg-[#1B5FB8] rounded-[12px] !text-[#F5F9FF] mt-[59px] cursor-pointer !mt-[35px]'
              onClick={() => {
                window.open(
                  "https://www.kctusa.org/news/articleView.html?idxno=17166"
                );
              }}
            >
              저자 인터뷰
            </button>
            <button
              className='w-[200px] h-[52px] !bg-[#1B5FB8] rounded-[12px] !text-[#F5F9FF] mt-[59px] cursor-pointer !mt-[35px]'
              onClick={() => {
                window.open("https://m.blog.naver.com/arca_pub/222482522524");
              }}
            >
              출판사 리뷰
            </button>
          </div>
        </div>
      </div>
      {mounted && isMobile ? (
        <div className='w-full h-[384px] relative !px-[20px]  '>
          <Image
            src='/images/paster.png'
            alt='pastor'
            fill
            style={{ objectFit: "contain", padding: "20px" }}
          />
        </div>
      ) : (
        <div className='relative flex items-center'>
          <Image
            src='/images/paster.png'
            alt='pastor'
            width={499}
            height={454}
            className='rounded-[24px] !mr-[120px]'
          />
        </div>
      )}
    </div>
  );
};

export default Section3;
