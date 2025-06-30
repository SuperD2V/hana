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
              width={24}
              height={24}
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
              width={24}
              height={24}
              className={styles.iconImage}
            />
            <span>위치</span>
          </div>
          <Typography variant={variant} className={styles.infoValue}>
            {CHURCH_INFO.address}
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
        <KakaoMap />
        <div className={styles.parkingInfo}>
          <Image
            src='/images/parking.svg'
            alt='주차'
            width={24}
            height={24}
            className={styles.iconImage}
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
