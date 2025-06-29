import React from "react";
import SectionTitle from "../SectionTitle";
import { Typography } from "@/component/shared";
import { useResponsiveTypography } from "@/component/shared";
const circleData = [
  { text: "성경지식의 성숙" },
  { text: "사회적 성숙" },
  { text: "영적 성숙" },
  { text: "관계적 성숙" },
  { text: "정서적 성숙" },
  { text: "가정적 성숙" }
];

const EnglishTitle = "Discipleship System";
const KoreanTitle = "양육시스템";

const Section5 = () => {
  const { mounted, isMobile } = useResponsiveTypography();
  return (
    <div
      className={`bg-[#D7E8FF] ${
        mounted && isMobile ? "!py-[60px] " : "!py-[100px]"
      } flex flex-col gap-[40px]`}
    >
      <div
        className={`flex flex-col   ${
          mounted && isMobile
            ? "!px-[20px] gap-[20px]"
            : "!px-[120px] gap-[40px]"
        }`}
      >
        <Typography
          variant={mounted && isMobile ? "largetitle2Bold" : "largetitle1"}
          className={`!text-[#0E4287] ${
            mounted && isMobile ? "!text-[40px]" : "!text-[80px]"
          }`}
        >
          {EnglishTitle}
        </Typography>
        <Typography
          variant={mounted && isMobile ? "title3Semibold" : "title1Semibold"}
          className={`!text-[#0E4287] ${
            mounted && isMobile ? "!text-[20px]" : "!text-[28px]"
          }`}
        >
          {KoreanTitle}
        </Typography>
      </div>

      <div
        className={`flex ${
          mounted && isMobile ? "flex-col gap-[40px]" : "flex-row"
        } justify-between ${
          mounted && isMobile ? "!px-[20px]" : "!px-[120px]"
        }`}
      >
        <div className='flex flex-col gap-[12px] max-w-[824px]'>
          <Typography
            variant='title2Bold'
            className='!text-[#292724] !mb-[12px]'
          >
            제자훈련으로서의 독서
          </Typography>
          <Typography
            variant='body1Regular'
            className='!text-[#44423C] whitespace-pre-line'
          >
            하나비전교회는 ‘단계별’ 제자 훈련을 하지 않습니다. 본래 제자
            훈련이란, 예수 그리스도를 {"\n"} 따르기 위해 훈련돼야 할 소양을
            기르는 훈련 과정을 말합니다. 그러나 한국 교회에서는{"\n"} ‘나는 제자
            훈련을 몇 단계까지 받았다’ 는 식의, 특정 훈련 단계를 거쳐 올라가는
            것으로{"\n"}
            오해되어 왔습니다. 본 교회에서는 그러한 식의 제자 훈련을 하지
            않습니다.{"\n"} 하나비전교회는 신앙의 기초를 닦은 이후에는 수직적인
            단계가 아닌 수평적으로, 다양한 분야의{"\n"} 다양한 주제 대한 훈련과
            성숙을 추구합니다. (우측 표 참조) 아울러 하나비전교회 양육의{"\n"}{" "}
            중요한 특징은 주로 독서를 통해서 이루어진다는 것입니다 각 카테고리에
            주요 책들을 함께{"\n"} 읽고 나눔으로 훈련과 성숙을 도모하고자
            합니다.
          </Typography>
        </div>

        <div className='flex flex-col items-center gap-[32px]'>
          {/* 원형 버튼들 */}
          <div className='flex flex-wrap gap-[12px] justify-center'>
            {circleData.map((item, index) => (
              <div
                key={index}
                className='w-[120px] h-[120px] rounded-full bg-white flex items-center justify-center !px-[21.5px] !py-[32px]'
              >
                <Typography
                  variant='caption1Medium'
                  className='text-center text-[#1B5FB8] !text-[16px] leading-[20px]'
                >
                  {item.text}
                </Typography>
              </div>
            ))}
          </div>

          {/* 하단 텍스트 박스들 */}
          <div className='flex flex-col gap-[12px] w-full'>
            <div className='w-full h-[52px] bg-[#FFF8E4] rounded-[8px] flex items-center justify-center'>
              <Typography variant='body1Medium' className='text-[#292724]'>
                하나비전교회 베이직 (신앙의 기초)
              </Typography>
            </div>
            <div className='w-full h-[52px] bg-[#FFF8E4] rounded-[8px] flex items-center justify-center'>
              <Typography variant='body1Medium' className='text-[#292724]'>
                하나비전교회, 출발! (새가족)
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;
