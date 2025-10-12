"use client";

import React from "react";
import Image from "next/image";
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
          style={{
            fontSize: isMobile ? "40px" : "60px"
          }}
          variant={mounted && isMobile ? "largetitle3Bold" : "largetitle1"}
        >
          HELP
        </TypographyEn>
        {/* <Typography variant='title1Semibold'>연락</Typography> */}
      </div>
      {/* 샘플 연락처 내용 */}
      <div className={helpContent}>
        <div className={helpItem}>
          <Image
            src='/images/call.svg'
            alt='전화'
            width={24}
            height={24}
            className={helpIcon}
          />
          <Typography
            className={helpText}
            variant={mounted && isMobile ? "title3Medium" : "title2Medium"}
          >
            031-309-0022
          </Typography>
        </div>
        <div className={helpItem}>
          <Image
            src='/images/mail.svg'
            alt='이메일'
            width={24}
            height={24}
            className={helpIcon}
          />
          <Typography
            className={helpText}
            variant={mounted && isMobile ? "title3Medium" : "title2Medium"}
          >
            info@hanavision.org
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default HelpSection;
