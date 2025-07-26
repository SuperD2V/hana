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
import { useState, useEffect } from "react";
import { SubMenuItem } from "@/component/shared/ui/subMenu";

const items: SubMenuItem[] = [
  { key: "terms", label: "이용약관" },
  { key: "privacy", label: "개인정보처리방침" }
];
export default function Worship() {
  const [selected, setSelected] = useState(items[0].key);

  useEffect(() => {
    // 클라이언트 사이드에서 URL 파라미터 읽기
    const urlParams = new URLSearchParams(window.location.search);
    const typeFromQuery = urlParams.get("type");
    const initialSelected =
      items.find(item => item.key === typeFromQuery)?.key || items[0].key;

    setSelected(initialSelected);
  }, []);
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
            <div
              className='flex flex-col gap-[8px] bg-[#fff] max-w-[1680px] !py-[40px] !px-[209px] items-start'
              style={{ textAlign: "left", marginBottom: "80px" }}
            >
              {TERMS_CONTENTS.map((item, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "4px"
                  }}
                >
                  <Typography variant='body1Semibold'>{item.title}</Typography>
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
          {selected === "privacy" && (
            <div
              className='flex flex-col gap-[8px] bg-[#fff] max-w-[1680px] !py-[40px] !px-[209px] items-start'
              style={{ textAlign: "left", marginBottom: "80px" }}
            >
              {PRIVACY_CONTENTS.map((item, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "4px"
                  }}
                >
                  <Typography variant='body1Semibold'>{item.title}</Typography>
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

const PRIVACY_CONTENTS = [
  {
    title: "",
    content:
      "하나비전교회(이하 ‘교회’라 함)는 개인정보보호법에 따라 이용자의 개인정보를 보호하고, 관련한 고충을 원활하게 처리할 수 있도록 다음과 같은 개인정보처리방침을 수립·공개합니다."
  },
  {
    title: "1. 수집하는 개인정보 항목",
    content:
      "교회는 다음과 같은 개인정보를 수집합니다.\n• 수집 항목: 이름, 연락처, 이메일 주소\n• 수집 방법: 웹사이트 내 문의 / 신청 양식 작성 시"
  },
  {
    title: "2. 개인정보의 수집 및 이용목적",
    content:
      "수집된 개인정보는 다음의 목적으로 이용됩니다.\n• 문의사항 응대 및 교회 프로그램 등록\n• 교회 소식 전달 및 사역 관련 연락\n• 통계 및 서비스 개선 목적의 내부 분석"
  },
  {
    title: "3. 개인정보의 보유 및 이용기간",
    content:
      "수집된 개인정보는 수집 목적 달성 시까지 보유하며, 이후에는 즉시 파기합니다.\n다만, 관계 법령에 따라 보존할 필요가 있는 경우 해당 기간 동안 보관할 수 있습니다."
  },
  {
    title: "4. 개인정보의 제3자 제공",
    content:
      " 교회는 이용자의 동의 없이 개인정보를 외부에 제공하지 않습니다. 단, 법령에 정해진 경우에는 예외로 합니다."
  },
  {
    title: "5. 개인정보의 안전성 확보 조치",
    content:
      "교회는 개인정보보호를 위해 다음과 같은 조치를 취하고 있습니다.\n• 접근 권한 제한\n• 데이터 암호화 및 보안 서버 사용\n• 관리자 교육 및 내부 점검"
  },
  {
    title: "6. 개인정보에 대한 권리 및 행사방법",
    content:
      "이용자는 언제든지 자신의 개인정보에 대해 열람, 정정, 삭제, 처리정지를 요청할 수 있습니다. \n 문의: [ info@hanavision.org / 031-309-0022 ]"
  },
  {
    title: "7. 개인정보보호책임자",
    content:
      "개인정보보호책임자: [ 이현수 목사] \n연락처: [ info@hanavision.org / 031-309-0022 ]"
  },
  {
    title: "8. 개인정보처리방침의 변경",
    content:
      " 본 방침은 관련 법령 및 내부 방침에 따라 변경될 수 있으며, 변경 시 본 사이트를 통해 공지합니다."
  }
];
