"use client";

import React, {
  useState,
  useRef,
  useEffect,
  useLayoutEffect,
  forwardRef,
  useImperativeHandle,
  useMemo,
  useCallback
} from "react";
import { ArrowLeft, ArrowRight } from "@/component/shared";
import {
  sliderContainer,
  sliderWrapper,
  arrow,
  arrowLeft,
  arrowRight,
  arrowHover
} from "./index.css";

interface SliderProps {
  children: React.ReactNode;
  itemsPerView?: number;
  gap?: number;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showArrows?: boolean;
  className?: string;
  onSlideChange?: (index: number) => void;
  infinite?: boolean;
}

export interface SliderRef {
  goToNext: () => void;
  goToPrev: () => void;
  goToSlide: (index: number) => void;
  currentIndex: number;
  totalSlides: number;
}

export const Slider = forwardRef<SliderRef, SliderProps>(
  (
    {
      children,
      itemsPerView = 7,
      gap = 16,
      autoPlay = false,
      autoPlayInterval = 3000,
      showArrows = true,
      className,
      onSlideChange,
      infinite = false
    },
    ref
  ) => {
    const childrenArray = React.Children.toArray(children);
    const isInfinite = infinite && childrenArray.length > itemsPerView;

    const actualTotalSlides = childrenArray.length;
    const totalSlides = Math.max(0, actualTotalSlides - itemsPerView);

    const [currentIndex, setCurrentIndex] = useState(
      isInfinite ? itemsPerView : 0
    );
    const [hasTransition, setHasTransition] = useState(true);
    const isMoving = useRef(false);

    const sliderRef = useRef<HTMLDivElement>(null);
    const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

    // 클론 포함 렌더링된 children 생성
    const renderedChildren = useMemo(() => {
      if (!isInfinite) return childrenArray;

      const cloneStyle = (child: React.ReactElement<any>) =>
        child.props.style ? { ...child.props.style } : {};

      const lastClones = childrenArray.slice(-itemsPerView).map((child, i) =>
        React.cloneElement(child as React.ReactElement<any>, {
          key: `clone-last-${i}`,
          style: cloneStyle(child as React.ReactElement<any>)
        })
      );
      const firstClones = childrenArray.slice(0, itemsPerView).map((child, i) =>
        React.cloneElement(child as React.ReactElement<any>, {
          key: `clone-first-${i}`,
          style: cloneStyle(child as React.ReactElement<any>)
        })
      );
      return [...lastClones, ...childrenArray, ...firstClones];
    }, [isInfinite, childrenArray, itemsPerView]);

    const move = useCallback((newIndex: number) => {
      if (isMoving.current) return;
      isMoving.current = true;
      setCurrentIndex(newIndex);
    }, []);

    const goToNext = useCallback(() => {
      if (isInfinite) {
        if (currentIndex >= actualTotalSlides + itemsPerView) {
          setHasTransition(false);
          requestAnimationFrame(() => {
            setCurrentIndex(itemsPerView);
          });
        } else {
          move(currentIndex + 1);
        }
      } else {
        move(Math.min(currentIndex + 1, totalSlides));
      }
    }, [
      currentIndex,
      move,
      isInfinite,
      actualTotalSlides,
      itemsPerView,
      totalSlides
    ]);

    const goToPrev = useCallback(() => {
      if (isInfinite) {
        if (currentIndex <= 0) {
          setHasTransition(false);
          requestAnimationFrame(() => {
            setCurrentIndex(actualTotalSlides);
          });
        } else {
          move(currentIndex - 1);
        }
      } else {
        move(Math.max(currentIndex - 1, 0));
      }
    }, [currentIndex, move, isInfinite, actualTotalSlides]);

    const goToSlide = useCallback(
      (index: number) => {
        const target = isInfinite ? index + itemsPerView : index;
        move(target);
      },
      [move, isInfinite, itemsPerView]
    );

    // 트랜지션 끝 처리
    const handleTransitionEnd = useCallback(() => {
      isMoving.current = false;

      if (isInfinite) {
        if (currentIndex === 0) {
          setHasTransition(false);
          requestAnimationFrame(() => {
            setCurrentIndex(actualTotalSlides);
          });
        } else if (currentIndex === actualTotalSlides + itemsPerView) {
          setHasTransition(false);
          requestAnimationFrame(() => {
            setCurrentIndex(itemsPerView);
          });
        }
      }
    }, [currentIndex, isInfinite, actualTotalSlides, itemsPerView]);

    useEffect(() => {
      const slider = sliderRef.current;
      if (!slider) return;
      slider.addEventListener("transitionend", handleTransitionEnd);
      return () => {
        slider.removeEventListener("transitionend", handleTransitionEnd);
      };
    }, [handleTransitionEnd]);

    useLayoutEffect(() => {
      if (!hasTransition) {
        requestAnimationFrame(() => {
          setHasTransition(true);
        });
      }
    }, [hasTransition]);

    // autoplay
    useEffect(() => {
      if (autoPlay && isInfinite) {
        autoPlayRef.current = setInterval(goToNext, autoPlayInterval);
      }
      return () => {
        if (autoPlayRef.current) clearInterval(autoPlayRef.current);
      };
    }, [autoPlay, autoPlayInterval, goToNext, isInfinite]);

    // slide change callback
    useEffect(() => {
      if (onSlideChange) {
        const realIndex = isInfinite
          ? (currentIndex - itemsPerView + actualTotalSlides) %
            actualTotalSlides
          : currentIndex;
        onSlideChange(realIndex);
      }
    }, [
      currentIndex,
      onSlideChange,
      isInfinite,
      itemsPerView,
      actualTotalSlides
    ]);

    useImperativeHandle(
      ref,
      () => ({
        goToNext,
        goToPrev,
        goToSlide,
        currentIndex: isInfinite
          ? (currentIndex - itemsPerView + actualTotalSlides) %
            actualTotalSlides
          : currentIndex,
        totalSlides
      }),
      [
        goToNext,
        goToPrev,
        goToSlide,
        currentIndex,
        totalSlides,
        isInfinite,
        itemsPerView,
        actualTotalSlides
      ]
    );

    return (
      <div className={`${sliderContainer} ${className || ""}`}>
        <div
          ref={sliderRef}
          className={sliderWrapper}
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
            gap: `${gap}px`,
            transition: hasTransition ? "transform 0.3s ease-in-out" : "none"
          }}
        >
          {renderedChildren}
        </div>

        {showArrows && actualTotalSlides > itemsPerView && (
          <>
            <button
              className={`${arrow} ${arrowLeft} ${arrowHover}`}
              onClick={goToPrev}
              disabled={!isInfinite && currentIndex === 0}
              aria-label='이전 슬라이드'
            >
              <ArrowLeft />
            </button>
            <button
              className={`${arrow} ${arrowRight} ${arrowHover}`}
              onClick={goToNext}
              disabled={!isInfinite && currentIndex >= totalSlides}
              aria-label='다음 슬라이드'
            >
              <ArrowRight />
            </button>
          </>
        )}
      </div>
    );
  }
);

Slider.displayName = "Slider";
