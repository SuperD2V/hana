import React from "react";
import { lineBanner, bannerText } from "./index.css";
import { TypographyEn } from "@/component/shared";

export const LineBanner = () => {
  const text = "That is why I have come.";

  return (
    <div className={lineBanner}>
      <TypographyEn variant='largetitle2' className={bannerText}>
        {text}
      </TypographyEn>
      <TypographyEn variant='largetitle2' className={bannerText}>
        {text}
      </TypographyEn>
      <TypographyEn variant='largetitle2' className={bannerText}>
        {text}
      </TypographyEn>
      <TypographyEn variant='largetitle2' className={bannerText}>
        {text}
      </TypographyEn>
    </div>
  );
};
