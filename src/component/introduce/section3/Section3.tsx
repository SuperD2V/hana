import React from "react";
import SectionTitle from "../SectionTitle";
import Image from "next/image";
import pasterImg from "../../../../public/images/paster.png";
import { Typography } from "@/component/shared";

const Section3 = () => {
  return (
    <div className='flex !p-[120px] gap-[120px]'>
      <div className='flex flex-col gap-[60px]'>
        <SectionTitle EnglishTitle='Pastor' KoreanTitle='목사님 소개' />
        <div className='flex flex-col gap-[24px]'>
          <div className='flex flex-col gap-[8px]'>
            <Typography variant='title1Bold' className='text-[#292724]'>
              이현수 목사
            </Typography>
          </div>

          <div className='flex flex-col gap-[16px] text-[#44423C]'>
            <Typography variant='body1Regular'>
              London Bible College(현 London School of Theology, 성경해석학 석사
              졸), Fuller Theological Seminary(목회학박사 과정 중)에서
              공부했습니다.
            </Typography>
            <Typography variant='body1Regular'>
              Fuller Theological Seminary에서 '프로그램 매니저'로,
              제일성도교회에서 '청보교회' 출발 담임으로 섬겼으며, 원천교회에서
              1교회 담임목사로 17년간 섬기면서 원천하나기독학교 대표로도
              섬겼습니다.
            </Typography>
            <Typography variant='body1Regular'>
              저서로는 &lt;신앙 유전자&gt;(도서출판 이르카)가 있습니다.창세기의
              아브라함-이삭-야곱, 삼대에 걸친 신앙 의 대물림에 대해 묵상,
              연구하고 쓴 책으로
            </Typography>
            <Typography variant='body1Regular'>
              도서출판 &lt;이르카&gt;에서 출판되었습니다.
            </Typography>
          </div>

          <button className='w-[200px] h-[52px] !bg-[#1B5FB8] rounded-[12px] !text-[#F5F9FF] mt-[59px]'>
            책 소개 바로가기
          </button>
        </div>
      </div>
      <div className='relative'>
        <Image
          src={pasterImg}
          alt='pastor'
          width={499}
          height={454}
          className='rounded-[24px]'
        />
      </div>
    </div>
  );
};

export default Section3;
