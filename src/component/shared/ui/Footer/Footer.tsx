import Image from "next/image";
import {
  footerBottom,
  footerContainer,
  footerText,
  footerWrapper
} from "./index.css";
import { Body2 } from "../Typography";
import { CHURCH_INFO } from "../../const/info";
import Link from "next/link";

// 교회 정보 상수

export function Footer() {
  return (
    <footer className={footerContainer}>
      <div>
        <div>
          <Image src='/images/footer.svg' alt='logo' width={208} height={95} />
        </div>

        <div className={footerWrapper}>
          <Body2 className={footerText}>
            {CHURCH_INFO.name} | {CHURCH_INFO.pastor} | {CHURCH_INFO.phone} |{" "}
            {CHURCH_INFO.email}
            <br />
            {CHURCH_INFO.address}
          </Body2>
          <Body2 className={footerText}>
            Copyright © 2025 {CHURCH_INFO.name}. All Rights Reserved.
          </Body2>

          <div className={footerBottom}>
            <Link href='/terms?type=terms'>
              <Body2 weight='medium' className={footerText}>
                이용약관
              </Body2>
            </Link>
            <Link href='/terms?type=privacy'>
              <Body2 weight='medium' className={footerText}>
                개인정보처리방침
              </Body2>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
