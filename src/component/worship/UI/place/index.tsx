import React from "react";
import { KakaoMap } from "./KakaoMap";
import Image from "next/image";
import { CHURCH_INFO, Typography } from "@/component/shared";
import * as styles from "./index.css";
import { useResponsiveTypography } from "@/component/shared";

export const Place = () => {
  const { isMobile, mounted } = useResponsiveTypography();
  // hydration mismatch 방지: mounted 체크
  const variant = mounted && isMobile ? "body1Regular" : "headlineRegular";

  return (
    <div className={styles.container}>
      <div className={styles.infoList}>
        <div className={styles.infoRow}>
          <div className={styles.iconLabel}>
            <Image
              src='/images/call.svg'
              alt='전화'
              width={18}
              height={18}
              className={styles.iconImage}
            />
            <span>전화번호</span>
          </div>
          <Typography variant={variant} className={styles.infoValue}>
            {CHURCH_INFO.phone}
          </Typography>
        </div>
        <div className={styles.infoRow}>
          <div className={styles.iconLabel}>
            <Image
              src='/images/pin.svg'
              alt='위치'
              width={18}
              height={18}
              className={styles.iconImage}
            />
            <span>위치</span>
          </div>
          <Typography variant={variant} className={styles.infoValue}>
            경기 수원 영통 웰빙타운로 49번길 8
          </Typography>
        </div>
        <div className={styles.infoRow} style={{ borderBottom: "none" }}>
          <div className={styles.iconLabel}>
            <Image
              src='/images/mail.svg'
              alt='이메일'
              width={24}
              height={24}
              className={styles.iconImage}
            />
            <span>이메일주소</span>
          </div>
          <Typography variant={variant} className={styles.infoValue}>
            {CHURCH_INFO.email}
          </Typography>
        </div>
      </div>
      <div className={styles.mapWrapper}>
        <div style={{ display: "flex", gap: 10 }}>
          <KakaoMap />
          {!isMobile && (
            <div style={{ display: "flex", flexDirection: "column" }}>
              <button
                onClick={() => {
                  window.open("https://naver.me/xprKcvhX", "_blank");
                }}
                style={{
                  width: 240,
                  height: 52,
                  backgroundColor: " #1B5FB8",
                  color: "#F5F9FF",
                  borderRadius: 12
                }}
              >
                <Typography variant='headlineMedium'>
                  네이버 지도 바로가기
                </Typography>
              </button>
              <button
                onClick={() => {
                  window.open("https://kko.kakao.com/UA2CCFOG65", "_blank");
                }}
                style={{
                  marginTop: 12,
                  width: 240,
                  height: 52,
                  backgroundColor: " #1B5FB8",
                  color: "#F5F9FF",
                  borderRadius: 12
                }}
              >
                <Typography variant='headlineMedium'>
                  카카오 지도 바로가기
                </Typography>
              </button>
            </div>
          )}
        </div>
        <div className={styles.parkingInfo}>
          <Image
            src='/images/parking.svg'
            alt='주차'
            width={24}
            height={24}
            className={styles.parkingIcon}
          />
          <Typography variant={variant} className={styles.parkingText}>
            주차는 교회 주차장을 이용해주시고, 만석 시
            광교웰빙국민체육센터(유료)를 이용해주시기 바랍니다.
          </Typography>
        </div>
      </div>
    </div>
  );
};
