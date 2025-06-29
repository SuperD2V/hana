import React from "react";
import { TypographyEn } from "@/component/shared";
import { schoolContainer, schoolWrapper, title } from "./index.css";
import { SchoolImageSection } from "./SchoolImageSection";

export const Title = () => {
  return (
    <div className={schoolContainer}>
      <div className={schoolWrapper}>
        <TypographyEn variant='largetitle2' className={title}>
          하나비전스쿨
        </TypographyEn>
        <SchoolImageSection />
      </div>
    </div>
  );
};
