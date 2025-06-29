"use client";

import React from "react";
import {
  sectionBox,
  helpBox,
  title,
  helpContent,
  helpItem,
  helpIcon,
  helpText
} from "./index.css";
import { Typography, TypographyEn } from "@/component/shared";
import { useResponsiveTypography } from "@/component/shared/hooks/useResponsiveTypography";

const HelpSection = () => {
  const { mounted, isMobile } = useResponsiveTypography();

  return (
    <div className={`${sectionBox} ${helpBox}`}>
      <div className={title}>
        <TypographyEn
          variant={mounted && isMobile ? "largetitle3Bold" : "largetitle1"}
        >
          HELP
        </TypographyEn>
      </div>
      {/* 샘플 연락처 내용 */}
      <div className={helpContent}>
        <div className={helpItem}>
          <img src='/images/call.svg' alt='전화' className={helpIcon} />
          <Typography className={helpText} variant='title2Medium'>
            031-309-0022
          </Typography>
        </div>
        <div className={helpItem}>
          <img src='/images/mail.svg' alt='이메일' className={helpIcon} />
          <Typography className={helpText} variant='title2Medium'>
            info@hanavision.org
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default HelpSection;
