"use client";
import React from "react";
import { Typography, useResponsiveTypography } from "../shared";

const Button = ({ title, onClick, icon }: { title: string; onClick: () => void, icon?: React.ReactNode }) => {
  const { mounted, isMobile } = useResponsiveTypography();

  return (
    <div
      style={{
     
        borderRadius: 12,
        padding: mounted && isMobile ? "12px 26px" : "12px 40px",
        backgroundColor: "#1B5FB8",
        cursor: "pointer",
        display: "flex",
        alignSelf: "center",
        gap: '8px'
      }}
      onClick={onClick}
    >
      {icon}
      <Typography
        variant={mounted && isMobile ? "body1Medium" : "headlineMedium"}
        className='text-[#F5F9FF]'
      >
        {title}
      </Typography>
    </div>
  );
};

export default Button;
