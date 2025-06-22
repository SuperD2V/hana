import React from "react";
import { line } from "./index.css";

interface LineProps {
  className?: string;
  width?: string;
  height?: string;
  color?: string;
}

export const Line: React.FC<LineProps> = ({
  className,
  width = "100%",
  height = "1px",
  color
}) => {
  return (
    <div
      className={`${line} ${className || ""}`}
      style={{
        width,
        height,
        backgroundColor: color
      }}
    />
  );
};
