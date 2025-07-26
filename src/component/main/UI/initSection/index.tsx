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
import Image from "next/image";

export const InitSection = () => {
  const { mounted, isMobile } = useResponsiveTypography();

  const { data, isLoading, error } = useQuery({
    queryKey: ["banner"],
    queryFn: getBanner
  });

  const marginTop = mounted && isMobile ? "240px" : "600px";

  // 서버와 클라이언트 간의 hydration mismatch를 방지하기 위해
  // mounted 상태를 확인한 후에만 조건부 렌더링
  if (!mounted) {
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
              marginTop: "600px"
            }}
          >
            <div className={contentContainer}>
              <div className={titleContainer}>
                <Typography variant='largetitle1' className={titleText}>
                  함께 하나님 나라를 대망하는 교회
                  <Image
                    src='/images/HANAVISION.svg'
                    alt='logo'
                    width={1471}
                    height={173}
                    style={{
                      width: "auto",
                      height: "auto"
                    }}
                  />
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

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
                <Image
                  src='/images/HANAVISION.svg'
                  alt='logo'
                  width={isMobile ? 301 : 1471}
                  height={isMobile ? 36 : 173}
                />
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
