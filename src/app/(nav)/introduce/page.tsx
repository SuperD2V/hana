"use client";
import CategoryList from "@/component/introduce/category/CategoryList";
import MainTop from "@/component/introduce/section1/MainTop";
import { IntroduceNavigation } from "@/component/introduce/section1/IntroduceNavigation";
import { Typography } from "@/component/shared/ui/Typography";
import React, { useRef, useEffect, useCallback } from "react";
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

  const { selectedCateogry, shouldScroll, reset, setState } = useIntroduceStore(
    useShallow((state: any) => ({
      selectedCateogry: state.selectedCateogry,
      shouldScroll: state.shouldScroll,
      reset: state.reset,
      setState: state.setState
    }))
  );

  // 프로그래밍 방식으로 스크롤하는지 추적하는 ref
  const isScrollingProgrammatically = useRef(false);
  // 초기 로드 상태 추적
  const isInitialLoad = useRef(true);
  // 초기 설정 완료 여부 추적
  const isInitialSetupDone = useRef(false);

  // 페이지 마운트 시 스토어 초기화 및 스크롤 맨 위로
  useEffect(() => {
    reset();
    isInitialLoad.current = true;
    isInitialSetupDone.current = false;

    // 스크롤을 맨 위로 강제 이동
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });

    // 스크롤 위치를 계속 체크하여 맨 위에 유지
    const scrollCheck = setInterval(() => {
      if (window.scrollY > 0 && isInitialLoad.current) {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      }
    }, 10);

    // 첫 번째 탭을 활성화하되 스크롤은 하지 않음
    setTimeout(() => {
      setState("selectedCateogry", 1);
      isInitialSetupDone.current = true;
    }, 100);

    // 초기 로드 후 약간의 지연 후 플래그 해제 및 스크롤 체크 중지
    const timer = setTimeout(() => {
      isInitialLoad.current = false;
      clearInterval(scrollCheck);
    }, 1000);

    return () => {
      clearTimeout(timer);
      clearInterval(scrollCheck);
    };
  }, [reset, setState]);

  // 페이지 언마운트 시 스토어 초기화
  useEffect(() => {
    return () => {
      reset();
    };
  }, [reset]);

  // 선택된 카테고리가 변경될 때 해당 섹션으로 스크롤 (메뉴 클릭 시에만)
  useEffect(() => {
    // 초기 설정 중이거나 초기 로드 중이면 스크롤하지 않음
    if (!isInitialSetupDone.current || isInitialLoad.current) {
      return;
    }

    // 메뉴 클릭으로 인한 변경이 아니면 스크롤하지 않음
    if (!shouldScroll) {
      return;
    }

    // shouldScroll 플래그 리셋
    setState("shouldScroll", false);

    if (selectedCateogry && selectedCateogry === 1 && sectionRefs[1]?.current) {
      isScrollingProgrammatically.current = true;
      sectionRefs[1].current?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
      // 스크롤 완료 후 플래그 리셋
      setTimeout(() => {
        isScrollingProgrammatically.current = false;
      }, 1000);
    } else if (
      selectedCateogry &&
      selectedCateogry !== 1 &&
      sectionRefs[selectedCateogry as keyof typeof sectionRefs]?.current
    ) {
      isScrollingProgrammatically.current = true;
      sectionRefs[
        selectedCateogry as keyof typeof sectionRefs
      ].current?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
      // 스크롤 완료 후 플래그 리셋
      setTimeout(() => {
        isScrollingProgrammatically.current = false;
      }, 1000);
    }
  }, [selectedCateogry, shouldScroll, setState]);

  // Intersection Observer를 사용하여 현재 보이는 섹션 감지
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -50% 0px", // 섹션이 화면 상단 20% 지점에 도달하면 감지
      threshold: [0, 0.25, 0.5, 0.75, 1]
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      // 프로그래밍 방식으로 스크롤 중이면 무시
      if (isScrollingProgrammatically.current) {
        return;
      }

      // 스크롤 위치 확인
      const scrollY = window.scrollY || window.pageYOffset;

      // 초기 로드 상태이고 스크롤이 맨 위에 있으면 업데이트하지 않음
      if (isInitialLoad.current && scrollY < 50) {
        return;
      }

      // 초기 로드가 끝났거나 스크롤을 내렸으면 플래그 해제
      if (isInitialLoad.current && scrollY >= 50) {
        isInitialLoad.current = false;
      }

      // 가장 많이 보이는 섹션 찾기
      let maxVisibleRatio = 0;
      let mostVisibleSection: number | null = null;

      entries.forEach(entry => {
        const sectionId = parseInt(
          entry.target.getAttribute("data-section-id") || "0"
        );
        if (sectionId && entry.intersectionRatio > maxVisibleRatio) {
          maxVisibleRatio = entry.intersectionRatio;
          mostVisibleSection = sectionId;
        }
      });

      // 가장 많이 보이는 섹션이 있고, 현재 선택된 카테고리와 다르면 업데이트
      // 스크롤 감지로 인한 변경이므로 shouldScroll은 false로 유지 (스크롤하지 않음)
      if (mostVisibleSection && mostVisibleSection !== selectedCateogry) {
        setState("selectedCateogry", mostVisibleSection);
        // shouldScroll은 설정하지 않아서 스크롤하지 않음
      }
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // 각 섹션에 observer 등록
    Object.entries(sectionRefs).forEach(([id, ref]) => {
      if (ref.current) {
        ref.current.setAttribute("data-section-id", id);
        observer.observe(ref.current);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [mounted, setState, selectedCateogry]);

  return (
    <div className={`bg-[#FFFDF5]`}>
      {mounted && isMobile && <IntroduceNavigation />}
      <div
        className='w-full bg-[#1350A0]'
        style={{ paddingTop: mounted && isMobile ? "51px" : "100px" }}
      >
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
