import Image from "next/image";
import {
  footerBottom,
  footerContainer,
  footerText,
  footerWrapper
} from "./index.css";
import { Body2 } from "../Typography";
import { CHURCH_INFO } from "../../const/info";

// 교회 정보 상수

export function Footer() {
  return (
    <footer className={footerContainer}>
      <div>
        <div>
          <Image
            src='/images/logo-typo.png'
            alt='logo'
            width={120}
            height={120}
          />
        </div>

        <div className={footerWrapper}>
          <Body2 className={footerText}>
            {CHURCH_INFO.name} | {CHURCH_INFO.pastor} | 전화번호 :{" "}
            {CHURCH_INFO.phone} | 이메일 :{CHURCH_INFO.email}
            <br />
            주소 : {CHURCH_INFO.address}
          </Body2>
          <Body2 className={footerText}>
            Copyright © 2025 {CHURCH_INFO.name}. All Rights Reserved.
          </Body2>

          <div className={footerBottom}>
            <Body2 weight='medium' className={footerText}>
              이용약관
            </Body2>
            <Body2 weight='medium' className={footerText}>
              개인정보처리방침
            </Body2>
          </div>
        </div>
      </div>
    </footer>
  );
}
