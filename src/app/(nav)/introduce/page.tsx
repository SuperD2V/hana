"use client";
import CategoryList from "@/component/introduce/category/CategoryList";
import MainTop from "@/component/introduce/section1/MainTop";
import { IntroduceNavigation } from "@/component/introduce/section1/IntroduceNavigation";
import { Typography } from "@/component/shared/ui/Typography";
import React, { useRef, useEffect, useState } from "react";
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
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");
  const [navHeight, setNavHeight] = useState(250); // 네비게이션 높이 상태
  const fullNavRef = useRef<HTMLDivElement>(null);
  const categoryNavRef = useRef<HTMLDivElement>(null);
  const lastScrollYRef = useRef(0);

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
  // 콜백 내에서 최신 selectedCateogry를 참조하기 위한 ref
  const selectedCateogryRef = useRef(selectedCateogry);

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

  // selectedCateogryRef를 항상 최신값으로 유지
  useEffect(() => {
    selectedCateogryRef.current = selectedCateogry;
  }, [selectedCateogry]);

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

  // 네비게이션 높이 측정 - fullNav 기준으로만 측정 (스크롤 상태와 무관하게 고정)
  // categoryNav가 보일 때도 paddingTop을 바꾸면 스크롤 앵커링이 발동해 flickering 발생
  useEffect(() => {
    if (!mounted || isMobile) return;

    const measureHeight = () => {
      if (fullNavRef.current) {
        const height = fullNavRef.current.offsetHeight;
        if (height > 0) {
          setNavHeight(height);
        }
      }
    };

    const timers = [50, 150, 300].map(delay =>
      setTimeout(measureHeight, delay)
    );

    window.addEventListener("resize", measureHeight);

    return () => {
      timers.forEach(timer => clearTimeout(timer));
      window.removeEventListener("resize", measureHeight);
    };
  }, [mounted, isMobile]);

  // 스크롤 위치와 방향에 따라 헤더 상태 변경
  useEffect(() => {
    const SCROLL_THRESHOLD = 5; // 방향 변경에 필요한 최소 스크롤 거리
    const SCROLL_LIMIT = 100; // 이 이상 스크롤해야 축소 네비게이션 표시

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollDifference = scrollPosition - lastScrollYRef.current;

      // 스크롤 위치가 일정 이하면 항상 전체 네비게이션 표시
      if (scrollPosition < SCROLL_LIMIT) {
        setIsScrolled(prev => {
          if (prev !== false) return false;
          return prev;
        });
        setScrollDirection(prev => {
          if (prev !== "up") return "up";
          return prev;
        });
        lastScrollYRef.current = scrollPosition;
        return;
      }

      // 스크롤이 일정 이상일 때 상태 업데이트
      setIsScrolled(prev => {
        if (prev !== true) return true;
        return prev;
      });

      // threshold 이상 움직였을 때만 방향 변경
      if (Math.abs(scrollDifference) > SCROLL_THRESHOLD) {
        if (scrollDifference > 0) {
          // 아래로 스크롤 중
          setScrollDirection(prev => {
            if (prev !== "down") return "down";
            return prev;
          });
        } else {
          // 위로 스크롤 중
          setScrollDirection(prev => {
            if (prev !== "up") return "up";
            return prev;
          });
        }
        lastScrollYRef.current = scrollPosition;
      }
    };

    // 초기 스크롤 위치 체크
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // 단일 스크롤 스파이 - 섹션 활성화를 하나의 로직으로 통합
  useEffect(() => {
    // DOM 상의 섹션 순서
    const sectionOrder = [1, 2, 6, 3, 4, 5] as const;

    const detectActiveSection = () => {
      if (isScrollingProgrammatically.current || isInitialLoad.current) return;

      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // 페이지 하단이면 무조건 마지막 섹션
      if (scrollY + windowHeight >= documentHeight - 100) {
        if (selectedCateogryRef.current !== 5) {
          setState("selectedCateogry", 5);
        }
        return;
      }

      // 화면 상단 30% 지점을 기준으로 어느 섹션에 있는지 판단
      const threshold = windowHeight * 0.3;
      let active: number = sectionOrder[0];

      for (const id of sectionOrder) {
        const ref = sectionRefs[id];
        if (ref.current) {
          const top = ref.current.getBoundingClientRect().top;
          if (top <= threshold) {
            active = id;
          }
        }
      }

      if (active !== selectedCateogryRef.current) {
        setState("selectedCateogry", active);
      }
    };

    window.addEventListener("scroll", detectActiveSection, { passive: true });
    return () => window.removeEventListener("scroll", detectActiveSection);
  }, [setState]);

  return (
    <div className={`bg-[#FFFDF5]`}>
      {/* 고정 네비게이션 */}
      {mounted && !isMobile && (
        <>
          {/* 전체 네비게이션 - 최상단이거나 스크롤 올릴 때 보임 */}
          <div
            ref={fullNavRef}
            className='bg-[#1350A0] fixed top-0 z-50 w-full flex flex-col items-center !pt-[32px] !gap-[28px]'
            style={{
              transform:
                !isScrolled || scrollDirection === "up"
                  ? "translateY(0)"
                  : "translateY(-100%)",
              opacity: !isScrolled || scrollDirection === "up" ? 1 : 0,
              transition:
                "transform 0.3s ease-in-out, opacity 0.3s ease-in-out",
              pointerEvents:
                !isScrolled || scrollDirection === "up" ? "auto" : "none"
            }}
          >
            <IntroduceNavigation />
            <Typography
              variant='title1Bold'
              className='text-white !font-semibold'
            >
              스토리
            </Typography>
            <div className='w-full' style={{ padding: "16px 0" }}>
              <CategoryList />
            </div>
          </div>

          {/* CategoryList만 고정 - 스크롤 내릴 때 보임 */}
          <div
            ref={categoryNavRef}
            className='bg-[#1350A0] fixed top-0 z-50 w-full flex flex-col items-center'
            style={{
              padding: "16px 0",
              transform:
                isScrolled && scrollDirection === "down"
                  ? "translateY(0)"
                  : "translateY(-100%)",
              opacity: isScrolled && scrollDirection === "down" ? 1 : 0,
              transition:
                "transform 0.3s ease-in-out, opacity 0.3s ease-in-out",
              pointerEvents:
                isScrolled && scrollDirection === "down" ? "auto" : "none"
            }}
          >
            <CategoryList />
          </div>
        </>
      )}

      {/* 컨텐츠 영역 - 네비게이션 높이만큼 패딩 추가 */}
      <div
        ref={sectionRefs[1]}
        style={{
          paddingTop: mounted && isMobile ? "112px" : `${navHeight}px`,
          paddingLeft: mounted && isMobile ? "20px" : "120px",
          paddingRight: mounted && isMobile ? "20px" : "120px",
          paddingBottom: "98px"
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
