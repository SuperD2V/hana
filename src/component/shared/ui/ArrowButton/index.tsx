import React from "react";
import { ArrowLeft, ArrowRight } from "@/component/shared";
import { arrowButton } from "./index.css";

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
  return (
    <button
      className={`${arrowButton} ${className || ""}`}
      onClick={onClick}
      disabled={disabled}
      aria-label={`${direction === "left" ? "이전" : "다음"} 슬라이드`}
    >
      {direction === "left" ? <ArrowLeft /> : <ArrowRight />}
    </button>
  );
};
