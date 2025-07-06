"use client";

import React from "react";
import { ArrowLeft, ArrowRight } from "@/component/shared";
import { arrowButton } from "./index.css";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

interface ArrowButtonProps {
  direction: "left" | "right";
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export const ArrowButton: React.FC<ArrowButtonProps> = ({
  direction,
  onClick,
  disabled = false,
  className
}) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <button
      className={`${arrowButton} ${className || ""}`}
      onClick={onClick}
      disabled={disabled}
      aria-label={`${direction === "left" ? "이전" : "다음"} 슬라이드`}
    >
      <Image
        src={
          direction === "left"
            ? "/images/arrowLeft.svg"
            : "/images/arrowRight.svg"
        }
        alt={direction === "left" ? "이전" : "다음"}
        width={isMobile ? 7.5 : 15}
        height={isMobile ? 12 : 24}
      />
    </button>
  );
};
