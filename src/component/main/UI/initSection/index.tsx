"use client";

import {
  Typography,
  TypographyEn,
  useResponsiveTypography
} from "@/component/shared";
import {
  homeWrapper,
  homeWrapperInner,
  contentContainer,
  titleContainer,
  titleText
} from "./index.css";
import Image from "next/image";

export const InitSection = () => {
  const { mounted, isMobile } = useResponsiveTypography();

  const imageSize = mounted && isMobile ? 305 : 1471;
  const imageHeight = mounted && isMobile ? 35 : 173;
  const marginTop = mounted && isMobile ? "240px" : "600px";

  return (
    <div className={homeWrapper}>
      <div className={homeWrapperInner}>
        <div
          style={{
            marginTop: marginTop
          }}
        >
          <div className={contentContainer}>
            <div className={titleContainer}>
              <Typography
                variant={isMobile ? "body1Semibold" : "largetitle1"}
                className={titleText}
              >
                함께 하나님 나라를 소망하는 교회
              </Typography>
            </div>
            <Image
              src='/images/HANAVISION.svg'
              alt='initSection'
              width={imageSize}
              height={imageHeight}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
