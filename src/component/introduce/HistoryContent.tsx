import React from "react";
import { Typography } from "../shared";
import { useIntroduceStore } from "../../../hooks/store/useIntroduceStore";
import { useShallow } from "zustand/shallow";

type Content = {
  date: string;
  content: string;
  id?: number;
};

type HistoryContentProps = {
  mainTitleDate: Content;
  content: Content[];
  nextContentTitle: Content;
  prevContentTitle: Content;
};

const HistoryContent = ({
  mainTitleDate,
  content,
  nextContentTitle,
  prevContentTitle
}: HistoryContentProps) => {
  const { setState } = useIntroduceStore(
    useShallow(state => ({
      setState: state.setState
    }))
  );

  const handlePrevClick = () => {
    if (prevContentTitle.id) {
      setState("selectSection2Content", prevContentTitle.id as 1 | 2 | 3);
    }
  };

  const handleNextClick = () => {
    if (nextContentTitle.id) {
      setState("selectSection2Content", nextContentTitle.id as 1 | 2 | 3);
    }
  };

  return (
    <div className='w-full h-[874px] bg-[#D7E8FF] relative'>
      <div
        style={{
          position: "absolute",
          top: "109px",
          left: "120px",
          display: "flex",
          flexDirection: "column",
          gap: "7px"
        }}
      >
        <span style={{ fontWeight: "700", fontSize: "60px", color: "#1B5FB8" }}>
          {mainTitleDate.content}
        </span>
        <span
          style={{
            fontWeight: "500",
            fontSize: "40px",
            color: "#1B5FB8",
            fontFamily: "popins"
          }}
        >
          {mainTitleDate.date}
        </span>
      </div>
      <div className='border-[1px] border-[#276FCD] h-full absolute top-0 bottom-0 left-[901px]' />
      <div className='absolute top-[108px] left-[885px] flex flex-col gap-[40px]'>
        {content.map((item, index) => (
          <HistoryContentItem key={index} content={item} />
        ))}
      </div>

      {/* 이전/다음 네비게이션 */}
      <div className='absolute bottom-[40px] w-full flex justify-between px-[120px] text-[#276FCD]'>
        {prevContentTitle.id ? (
          <div
            className='flex items-center gap-[8px] cursor-pointer'
            onClick={handlePrevClick}
          >
            <svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
              <path
                d='M15 18L9 12L15 6'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
            <div className='flex flex-col'>
              <span
                className='text-[#98C2F9]'
                style={{
                  fontFamily: "Pretendard",
                  fontWeight: "600",
                  fontSize: "60px",
                  lineHeight: "100%",
                  letterSpacing: "0%"
                }}
              >
                {prevContentTitle.content}
              </span>
              <span
                className='text-[#98C2F9]'
                style={{
                  fontFamily: "Pretendard",
                  fontWeight: "500",
                  fontSize: "36px",
                  lineHeight: "100%",
                  letterSpacing: "-3.2%"
                }}
              >
                {prevContentTitle.date}
              </span>
            </div>
          </div>
        ) : (
          <div />
        )}
        {nextContentTitle.id ? (
          <div
            className='flex items-center gap-[8px] cursor-pointer'
            onClick={handleNextClick}
          >
            <div className='flex flex-col items-end'>
              <span
                className='text-[#98C2F9]'
                style={{
                  fontFamily: "Pretendard",
                  fontWeight: "600",
                  fontSize: "60px",
                  lineHeight: "100%",
                  letterSpacing: "0%"
                }}
              >
                {nextContentTitle.content}
              </span>
              <span
                className='text-[#98C2F9]'
                style={{
                  fontFamily: "Pretendard",
                  fontWeight: "500",
                  fontSize: "36px",
                  lineHeight: "100%",
                  letterSpacing: "-3.2%"
                }}
              >
                {nextContentTitle.date}
              </span>
            </div>
            <svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
              <path
                d='M9 6L15 12L9 18'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </div>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
};

const HistoryContentItem = ({ content }: { content: Content }) => {
  return (
    <div className='flex gap-[32px] items-start'>
      <div className='mt-[12px] rounded-full w-[13px] h-[13px] bg-[#276FCD] relative left-[10px]' />
      <div className='flex flex-col gap-[12px]'>
        <span
          style={{
            fontFamily: "Poppins",
            fontWeight: "600",
            fontSize: "28px",
            lineHeight: "100%",
            letterSpacing: "0%",
            color: "#1B5FB8"
          }}
        >
          {content.date}
        </span>
        <span
          style={{
            fontFamily: "Pretendard",
            fontWeight: "400",
            fontSize: "18px",
            lineHeight: "100%",
            letterSpacing: "0%",
            color: "#292724"
          }}
        >
          {content.content}
        </span>
      </div>
    </div>
  );
};

export default HistoryContent;
