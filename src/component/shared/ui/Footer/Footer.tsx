import Image from "next/image";
import {
  footerBottom,
  footerContainer,
  footerText,
  footerWrapper
} from "./index.css";
import { Body2 } from "../Typography";

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
            하나비전교회 | 이현수 | 전화번호 : 031-309-0022 | 이메일 :
            info@hanavision.org
            <br />
            주소 : 경기도 수원시 영통구 이의동 1204-1
          </Body2>
          <Body2 className={footerText}>
            Copyright © 2025 하나비전교회. All Rights Reserved.
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
