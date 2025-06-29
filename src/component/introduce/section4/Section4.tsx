import React from "react";
import SectionTitle from "../SectionTitle";
import { Typography } from "@/component/shared";

const EnglishTitle = "Next Generation";
const KoreanTitle = "다음 세대";

const departmentData = [
  {
    name: "믿음샘",
    age: "4세 이하",
    time: "오전 10:00 하나홀"
  },
  {
    name: "소망샘",
    age: "5세 이상",
    time: "오전 10:00 하나홀"
  },
  {
    name: "사랑샘",
    age: "초1-5학년",
    time: "오전 10:00 비전라운지"
  },
  {
    name: "지혜샘",
    age: "초6-고3",
    time: "오전 10:00 교육관(서울 베이커리)"
  },
  {
    name: "비전샘",
    age: "고교 졸업 이후",
    time: "오전 12:30 비전라운지"
  }
];

const Section4 = () => {
  return (
    <div className='flex justify-center items-center flex-col'>
      <div className='flex flex-col gap-[40px] items-center'>
        <Typography
          variant='largetitle1'
          className='!text-[#0E4287] !text-[80px]'
        >
          {EnglishTitle}
        </Typography>
        <Typography
          variant='title1Semibold'
          className='!text-[#0E4287] !text-[28px] !important'
        >
          {KoreanTitle}
        </Typography>
      </div>
      <Typography
        variant='headlineMedium'
        className='!text-[#292724] !text-center !whitespace-pre-line !mt-[20px] !font-[400] !mb-[60px]'
      >
        하나비전교회의 다음 세대 사역은 정교하고 발전된 교육 시스템을 지향하지
        않습니다.{"\n"} 교회를 확대된 가정이라고 생각하고 가정에서 부모가
        자녀들을 양육하듯 함께 뒹굴며{"\n"} 성경 지식을 나누고, 하나님의 마음을
        전하고 일상에서 하나님의 뜻대로 살 수 있도록 격려하고 있습니다.{"\n"}
        하나비전교회 다음 세대는 다음과 같은 연령별 부서가 있고 모임 시간은
        다음과 같습니다.
      </Typography>

      {/* 부서 정보 */}
      <div className='flex gap-[20px] w-full justify-between !px-[120px] !mb-[91px]'>
        {departmentData.map((dept, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-center p-[16px] rounded-[8px] bg-[#FAFAF9]
            }`}
            style={{ width: "320px", height: "178px" }}
          >
            <Typography
              variant='title2Bold'
              className={`mb-[20px] !text-[#1B5FB8]`}
            >
              {dept.name}
            </Typography>
            <Typography
              variant='body1Regular'
              className={`text-center !text-[#57554E]`}
            >
              {dept.age}
            </Typography>
            <Typography
              variant='body1Regular'
              className={`text-center text-black !mt-[20px]`}
            >
              {dept.time}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section4;
