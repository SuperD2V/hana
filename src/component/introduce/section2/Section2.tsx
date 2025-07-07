import React from "react";
import SectionTitle from "../SectionTitle";
import HistoryContent from "../HistoryContent";
import { useIntroduceStore } from "../../../../hooks/store/useIntroduceStore";
import { useShallow } from "zustand/shallow";
import { useResponsiveTypography } from "@/component/shared";
const historyContent = [
  {
    id: 1,
    content: {
      mainTitleDate: {
        date: "23.02 ~ 23.03",
        content: "파송과 창립"
      },
      content: [
        {
          date: "23.02.26",
          content: "파송예배(원천침례교회에서)"
        },
        {
          date: "23.03.05",
          content: "창립예배(세인트 폴 광교 체육관에서)"
        }
      ]
    }
  },
  {
    id: 2,
    content: {
      mainTitleDate: {
        date: "23.04 ~ 24.08",
        content: "세인트 폴"
      },
      content: [
        {
          date: "23.04.09",
          content: "부활주일 야외예배"
        },
        {
          date: "23.10.11",
          content: "추수감사 야외예배"
        },
        {
          date: "23.11.05",
          content: "부흥회(1) - 김인중 목사(안산동산교회 원로목사)"
        },
        {
          date: "23.11.12",
          content: "부흥회(2) - 조경호 목사(전 형제교회 담임목사)"
        },
        {
          date: "24.07.28",
          content: "세인트 폴 마지막 예배"
        },
        {
          date: "24.08.03~04",
          content: "전교인 리트릿(경기도 수지 새움센터)"
        }
      ]
    }
  },
  {
    id: 3,
    content: {
      mainTitleDate: {
        date: "24.08 ~",
        content: "광교시대"
      },
      content: [
        {
          date: "24.08.11",
          content: "현 위치로 이전, 입당예배"
        },
        {
          date: "24.10.19",
          content: "현판식"
        },
        {
          date: "24.11.03",
          content: "전도 집회 - 김요한 목사(전 GMP대표)"
        },
        {
          date: "24.11.30",
          content: "하나비전스쿨 1기 개강"
        },
        {
          date: "25.02.02",
          content: "하나비전스쿨 2기 개강"
        }
      ]
    }
  }
];

const Section2 = () => {
  const { selectSection2Content } = useIntroduceStore(
    useShallow(state => ({
      selectSection2Content: state.selectSection2Content
    }))
  );
  const { mounted, isMobile } = useResponsiveTypography();

  const currentIndex = selectSection2Content - 1;
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < historyContent.length - 1;

  return (
    <div className='w-full'>
      <div className='flex flex-col gap-[36px]'>
        <SectionTitle EnglishTitle='History' KoreanTitle='교회연혁' />
        <HistoryContent
          mainTitleDate={historyContent[currentIndex].content.mainTitleDate}
          content={historyContent[currentIndex].content.content}
          nextContentTitle={
            hasNext
              ? {
                  ...historyContent[currentIndex + 1].content.mainTitleDate,
                  id: historyContent[currentIndex + 1].id
                }
              : { date: "", content: "", id: 0 }
          }
          prevContentTitle={
            hasPrev
              ? {
                  ...historyContent[currentIndex - 1].content.mainTitleDate,
                  id: historyContent[currentIndex - 1].id
                }
              : { date: "", content: "", id: 0 }
          }
        />
      </div>
    </div>
  );
};

export default Section2;
