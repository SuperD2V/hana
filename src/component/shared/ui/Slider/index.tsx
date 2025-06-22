"use client";

import React, {
  useState,
  useRef,
  useEffect,
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

    const [currentIndex, setCurrentIndex] = useState(
      isInfinite ? itemsPerView : 0
    );
    const [hasTransition, setHasTransition] = useState(true);
    const isMoving = useRef(false);

    const sliderRef = useRef<HTMLDivElement>(null);
    const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

    const clonedChildren = useMemo(() => {
      if (!isInfinite) return childrenArray;
      const clones = (child: React.ReactNode, index: number, prefix: string) =>
        React.cloneElement(child as React.ReactElement, {
          key: `${prefix}-${index}`
        });

      const lastClones = childrenArray
        .slice(-itemsPerView)
        .map((child, i) => clones(child, i, "clone-last"));
      const firstClones = childrenArray
        .slice(0, itemsPerView)
        .map((child, i) => clones(child, i, "clone-first"));

      return [...lastClones, ...childrenArray, ...firstClones];
    }, [isInfinite, childrenArray, itemsPerView]);

    const actualTotalSlides = childrenArray.length;
    const totalSlides = Math.max(0, actualTotalSlides - itemsPerView);

    const handleTransitionEnd = useCallback(() => {
      isMoving.current = false;
      if (currentIndex === 0) {
        setHasTransition(false);
        setCurrentIndex(actualTotalSlides);
      } else if (currentIndex === actualTotalSlides + itemsPerView) {
        setHasTransition(false);
        setCurrentIndex(itemsPerView);
      }
    }, [currentIndex, actualTotalSlides, itemsPerView]);

    useEffect(() => {
      const slider = sliderRef.current;
      if (slider) {
        slider.addEventListener("transitionend", handleTransitionEnd);
        return () =>
          slider.removeEventListener("transitionend", handleTransitionEnd);
      }
    }, [handleTransitionEnd]);

    useEffect(() => {
      if (!hasTransition) {
        setHasTransition(true);
      }
    }, [hasTransition]);

    const move = useCallback((newIndex: number) => {
      if (isMoving.current) return;
      isMoving.current = true;
      setCurrentIndex(newIndex);
    }, []);

    const goToNext = useCallback(
      () => move(currentIndex + 1),
      [move, currentIndex]
    );
    const goToPrev = useCallback(
      () => move(currentIndex - 1),
      [move, currentIndex]
    );
    const goToSlide = useCallback(
      (index: number) => move(isInfinite ? index + itemsPerView : index),
      [move, isInfinite, itemsPerView]
    );

    useEffect(() => {
      if (autoPlay && isInfinite) {
        autoPlayRef.current = setInterval(goToNext, autoPlayInterval);
      }
      return () => {
        if (autoPlayRef.current) clearInterval(autoPlayRef.current);
      };
    }, [autoPlay, autoPlayInterval, goToNext, isInfinite]);

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
          {clonedChildren}
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
