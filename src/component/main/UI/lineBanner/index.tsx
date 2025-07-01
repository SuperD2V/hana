"use client";

import React from "react";
import { lineBanner, bannerText } from "./index.css";
import { TypographyEn } from "@/component/shared";
import { useResponsiveTypography } from "@/component/shared";

export const LineBanner = () => {
  const { mounted, isMobile } = useResponsiveTypography();
  const text = "That is why I have come.";

  return (
    <div className={lineBanner}>
      <TypographyEn
        variant={mounted && isMobile ? "largetitle3ExtraBold" : "largetitle2"}
        className={bannerText}
      >
        {text}
      </TypographyEn>
      <TypographyEn
        variant={mounted && isMobile ? "largetitle3ExtraBold" : "largetitle2"}
        className={bannerText}
      >
        {text}
      </TypographyEn>
      <TypographyEn
        variant={mounted && isMobile ? "largetitle3ExtraBold" : "largetitle2"}
        className={bannerText}
      >
        {text}
      </TypographyEn>
      <TypographyEn
        variant={mounted && isMobile ? "largetitle3ExtraBold" : "largetitle2"}
        className={bannerText}
      >
        {text}
      </TypographyEn>
    </div>
  );
};
