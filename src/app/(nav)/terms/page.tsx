"use client";

import {
  SubMenu,
  Typography,
  TypographyEn,
  useResponsiveTypography
} from "@/component/shared";
import {
  title,
  worshipContainer,
  worshipContent,
  worshipWrapper
} from "./index.css";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { SubMenuItem } from "@/component/shared/ui/subMenu";

const items: SubMenuItem[] = [
  { key: "terms", label: "이용약관" },
  { key: "privacy", label: "개인정보처리방침" }
];
export default function Worship() {
  const searchParams = useSearchParams();

  // 쿼리 파라미터의 type 값을 가져오고, 유효하지 않으면 기본값 사용
  const typeFromQuery = searchParams.get("type");
  const initialSelected =
    items.find(item => item.key === typeFromQuery)?.key || items[0].key;

  const [selected, setSelected] = useState(initialSelected);
  const { mounted, isMobile } = useResponsiveTypography();
  return (
    <div className={worshipContainer}>
      <div className={worshipWrapper}>
        <TypographyEn
          variant={mounted && isMobile ? "largetitle2" : "largetitle3ExtraBold"}
          className={title}
        >
          약관 및 방침
        </TypographyEn>
        <SubMenu items={items} selectedKey={selected} onSelect={setSelected} />
        <div>
          {selected === "terms" && (
            <div>
              {TERMS_CONTENTS.map((item, index) => (
                <div key={index} style={{ marginBottom: "2rem" }}>
                  <Typography
                    variant='body1Semibold'
                    style={{ marginBottom: "1rem" }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant='body1Regular'
                    style={{ lineHeight: "1.8", whiteSpace: "pre-line" }}
                  >
                    {item.content}
                  </Typography>
                </div>
              ))}
            </div>
          )}
          {selected === "privacy" && <div>개인정보처리방침</div>}
        </div>
      </div>
    </div>
  );
}

const TERMS_CONTENTS = [
  {
    title: "제1조 (목적)",
    content:
      "이 약관은 하나비전교회(이하 '교회'라 함)가 제공하는 웹사이트 서비스(https://hanavision.org/, 이하 '본 사이트')의 이용과 관련하여 교회와 이용자 간의 권리, 의무 및 책임사항 등을 규정함을 목적으로 합니다."
  },
  {
    title: "제2조 (이용자의 정의)",
    content:
      "이용자란 본 사이트에 접속하여 본 약관에 따라 교회가 제공하는 서비스를 이용하는 자를 말합니다."
  },
  {
    title: "제3조 (서비스의 제공 및 변경)",
    content: `1. 교회는 다음과 같은 서비스를 제공합니다.
• 교회 소개 및 행사 안내
• 예배 및 교육 프로그램 정보
• 온라인 문의 및 등록
2. 교회는 필요한 경우 제공하는 서비스의 내용을 변경할 수 있습니다.`
  },
  {
    title: "제4조 (이용자의 의무)",
    content: `이용자는 다음 행위를 하여서는 안 됩니다.
1. 타인의 개인정보를 무단으로 수집하거나 도용하는 행위
2. 본 사이트를 통해 허위 정보를 등록하거나 비방, 욕설, 음란하거나 내용을 게시하는 행위
3. 교회의 승인 없이 상업적 목적의 정보 게시나 광고, 부정하거나 불법적인 내용을 게시하는 행위`
  },
  {
    title: "제5조 (저작권)",
    content:
      "본 사이트에 게재된 모든 콘텐츠(텍스트, 이미지, 영상 등)의 저작권은 교회에 있으며, 사전 동의 없이 무단 복제, 배포 등 일체의 행위를 금지합니다."
  },
  {
    title: "제6조 (면책조항)",
    content: `교회는 다음과 같은 경우에 대해 책임을 지지 않습니다.
1. 이용자의 귀책사유로 인한 서비스 이용 장애
2. 이용자 간 또는 제3자와의 분쟁
3. 천재 지변이 서비스 내용을 변경하거나 중단하는 경우`
  },
  {
    title: "제7조 (약관의 변경)",
    content:
      "교회는 관련 법령을 위반하지 않은 범위에서 본 약관을 개정할 수 있으며, 변경 시 본 사이트를 통해 공지합니다."
  }
];
