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
import { useQuery } from "@tanstack/react-query";
import { getBanner } from "../../api/api";

export const InitSection = () => {
  const { mounted, isMobile } = useResponsiveTypography();

  const { data, isLoading, error } = useQuery({
    queryKey: ["banner"],
    queryFn: getBanner
  });

  const marginTop = mounted && isMobile ? "240px" : "600px";

  return (
    <div className={homeWrapper}>
      <div
        className={homeWrapperInner}
        style={{
          backgroundImage: data?.url && `url(${data.url})`
        }}
      >
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
          </div>
        </div>
      </div>
    </div>
  );
};
