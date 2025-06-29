"use client";
import CategoryList from "@/component/introduce/category/CategoryList";
import MainTop from "@/component/introduce/section1/MainTop";
import { IntroduceNavigation } from "@/component/introduce/section1/IntroduceNavigation";
import { Typography } from "@/component/shared/ui/Typography";
import React from "react";
import Section2 from "@/component/introduce/section2/Section2";

const page = () => {
  return (
    <div>
      <div className='w-full bg-[#1350A0]'>
        <div className='w-full flex flex-col items-center'>
          <IntroduceNavigation />
          <Typography
            variant='title1Bold'
            className='text-white !font-semibold'
          >
            소개
          </Typography>
        </div>
      </div>
      <div
        className='w-full bg-[#1350A0] sticky top-0 z-50'
        style={{ padding: "16px 0" }}
      >
        <CategoryList />
      </div>
      <div style={{ padding: "120px 120px 98px 120px" }}>
        <MainTop />
      </div>
      <Section2 />
    </div>
  );
};

export default page;
