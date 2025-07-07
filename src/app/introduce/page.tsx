"use client";
import CategoryList from "@/component/introduce/category/CategoryList";
import MainTop from "@/component/introduce/section1/MainTop";
import { IntroduceNavigation } from "@/component/introduce/section1/IntroduceNavigation";
import { Typography } from "@/component/shared/ui/Typography";
import React from "react";
import Section2 from "@/component/introduce/section2/Section2";
import Section3 from "@/component/introduce/section3/Section3";
import Section4 from "@/component/introduce/section4/Section4";
import Section5 from "@/component/introduce/section5/Section5";
import Section6 from "@/component/introduce/section6/Section6";
import { useResponsiveTypography } from "@/component/shared";

const page = () => {
  const { mounted, isMobile } = useResponsiveTypography();

  return (
    <div
      className={`bg-[#FFFDF5] max-w-[1680px] !mx-auto ${
        mounted && isMobile ? "mt-[-54px]" : ""
      }`}
    >
      {mounted && isMobile && <IntroduceNavigation />}
      <div className='w-full bg-[#1350A0]'>
        <div className='w-full flex flex-col items-center !pt-[32px] !gap-[28px]'>
          {mounted && !isMobile && (
            <>
              <IntroduceNavigation />

              <Typography
                variant='title1Bold'
                className='text-white !font-semibold'
              >
                소개
              </Typography>
            </>
          )}
        </div>
      </div>
      {!isMobile && (
        <div
          className='w-full bg-[#1350A0] sticky top-0 z-50'
          style={{ padding: "16px 0" }}
        >
          <CategoryList />
        </div>
      )}
      <div
        style={{
          padding: mounted && isMobile ? "112px 20px" : "120px 120px 98px 120px"
        }}
      >
        <MainTop />
      </div>
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
    </div>
  );
};

export default page;
