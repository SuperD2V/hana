"use client";
import CategoryList from "@/component/introduce/category/CategoryList";
import MainTop from "@/component/introduce/section1/MainTop";
import { IntroduceNavigation } from "@/component/introduce/section1/IntroduceNavigation";
import { Typography } from "@/component/shared/ui/Typography";
import React, { useRef, useEffect } from "react";
import Section2 from "@/component/introduce/section2/Section2";
import Section3 from "@/component/introduce/section3/Section3";
import Section4 from "@/component/introduce/section4/Section4";
import Section5 from "@/component/introduce/section5/Section5";
import Section6 from "@/component/introduce/section6/Section6";
import { useResponsiveTypography } from "@/component/shared";
import { useIntroduceStore } from "../../../../hooks/store/useIntroduceStore";
import { useShallow } from "zustand/shallow";

const page = () => {
  const { mounted, isMobile } = useResponsiveTypography();

  // 각 섹션에 대한 ref 생성
  const sectionRefs = {
    1: useRef<HTMLDivElement>(null),
    2: useRef<HTMLDivElement>(null),
    3: useRef<HTMLDivElement>(null),
    4: useRef<HTMLDivElement>(null),
    5: useRef<HTMLDivElement>(null),
    6: useRef<HTMLDivElement>(null)
  };

  const { selectedCateogry, reset } = useIntroduceStore(
    useShallow((state: any) => ({
      selectedCateogry: state.selectedCateogry,
      reset: state.reset
    }))
  );

  // 페이지 마운트 시 스토어 초기화 및 스크롤 맨 위로
  useEffect(() => {
    reset();
    window.scrollTo(0, 0);
  }, []);

  // 페이지 언마운트 시 스토어 초기화
  useEffect(() => {
    return () => {
      reset();
    };
  }, [reset]);

  // 선택된 카테고리가 변경될 때 해당 섹션으로 스크롤 (1번일 때만 1번 섹션으로 이동)
  useEffect(() => {
    if (selectedCateogry && selectedCateogry === 1 && sectionRefs[1]?.current) {
      sectionRefs[1].current?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    } else if (
      selectedCateogry &&
      selectedCateogry !== 1 &&
      sectionRefs[selectedCateogry as keyof typeof sectionRefs]?.current
    ) {
      sectionRefs[
        selectedCateogry as keyof typeof sectionRefs
      ].current?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  }, [selectedCateogry]);

  return (
    <div className={`bg-[#FFFDF5] ${mounted && isMobile ? "mt-[-54px]" : ""}`}>
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
                스토리
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
        ref={sectionRefs[1]}
        style={{
          padding: mounted && isMobile ? "112px 20px" : "120px 120px 98px 120px"
        }}
      >
        <MainTop />
      </div>
      <div ref={sectionRefs[2]}>
        <Section2 />
      </div>
      <div ref={sectionRefs[6]}>
        <Section6 />
      </div>
      <div ref={sectionRefs[3]}>
        <Section3 />
      </div>
      <div ref={sectionRefs[4]}>
        <Section4 />
      </div>
      <div ref={sectionRefs[5]}>
        <Section5 />
      </div>
    </div>
  );
};

export default page;
