import React from "react";
import { Typography } from "@/component/shared";
import { useResponsiveTypography } from "@/component/shared";
import Image from "next/image";
import fileImage from "../../../public/images/file.png";
import Button from "../introduce/Button";

const NoticeDetailContent = () => {
  const { mounted, isMobile } = useResponsiveTypography();

  const noticeData = {
    title: "공지의 제목이 들어갑니다",
    category: "등록일",
    date: "2025.05.20",
    viewLabel: "조회수",
    viewCount: "13584",
    content: [
      "안녕하세요! 여러분을 위한 최신 소식을 전해드립니다. 이번 주에는 여러 가지 중요한 공지사항이 있습니다.",
      "",
      "1. 주일 예배 안내: 매주 일요일 오전 10시에 본당에서 예배가 진행됩니다. 모든 성도님들의 많은 참여 부탁드립니다.",
      "",
      "2. 특별 기도회: 매주 수요일 저녁 7시에 특별 기도회가 열립니다. 기도의 힘을 함께 나누는 시간이 되길 참석 바랍니다.",
      "",
      "3. 여름 수련회: 여름 방학을 맞이 청소년 및 청년부를 위한 수련회가 7월 15일부터 17일까지 진행됩니다. 참가를 원하시는 분들은 사무실에 신청해 주세요.",
      "",
      "4. 봉사자 모집: 교회 내 여러 사역을 위해 봉사자를 모집합니다. 관심 있으신 분들은 교회 홈페이지를 통해 신청해 주세요.",
      "",
      "5. 교회 소식지 발행: 매달 첫째 주에 교회 소식지가 발행됩니다. 소식지를 통해 교회의 다양한 소식을 확인하세요.",
      "",
      "6. 성경 공부 모임: 매주 금요일 저녁 8시에 성경 공부 모임이 있습니다. 성경을 깊이 있게 배우고 싶은 분들은 누구나 참여하실 수 있습니다.",
      "",
      "7. 가족 나들이: 오는 8월 20일에 가족 나들이가 예정되어 있습니다. 친소와 시간을 추후 공지하겠습니다.",
      "",
      "8. 교회 청소 봉사: 매월 첫째 주 토요일에 교회 청소 봉사가 있습니다. 많은 성도님들의 참여 부탁드립니다.",
      "",
      "9. 신입 회원 환영회: 새로 오신 분들을 위한 환영회가 6월 5일에 있습니다. 많은 참석 부탁드립니다.",
      "",
      "10. 교회 행사 일정: 교회 행사 일정은 홈페이지와 게시판을 통해 확인하실 수 있습니다.",
      "",
      "여러분의 많은 관심과 참여 부탁드립니다. 감사합니다!"
    ],
    attachments: [
      {
        name: "첨부파일",
        fileName: "첨부파일첨부파일의 제목이 들어갑니다.확장자명",
        url: "#"
      }
    ]
  };

  return (
    <div
      className={`w-full `}
      style={
        {
          // padding: mounted && isMobile ? "20px" : "60px 120px",
          // maxWidth: "1200px",
          // margin: "0 auto"
        }
      }
    >
      <div
        className={`flex flex-col gap-[20px]  ${
          mounted && isMobile ? "!py-[40px]" : "!py-[20px]"
        }  border-t-1 border-[#D6D4D1] `}
      >
        {/* 제목 */}
        <Typography
          variant={mounted && isMobile ? "title1Bold" : "largetitle2Bold"}
          className='!text-[#292724] mb-6'
        >
          {noticeData.title}
        </Typography>

        {/* 메타 정보 */}
        <div
          className='flex items-center gap-4 mb-8 pb-4'
          style={{
            borderBottom: "1px solid #E5E5E5"
          }}
        >
          <div className='flex items-center gap-2'>
            <Typography
              variant={mounted && isMobile ? "body2Regular" : "body1Regular"}
              className='!text-[#999999]'
            >
              {noticeData.category}
            </Typography>
            <Typography
              variant={mounted && isMobile ? "body2Regular" : "body1Regular"}
              className='!text-[#666666]'
            >
              {noticeData.date}
            </Typography>
          </div>
          <div className='flex items-center gap-2'>
            <Typography
              variant={mounted && isMobile ? "body2Regular" : "body1Regular"}
              className='!text-[#999999]'
            >
              {noticeData.viewLabel}
            </Typography>
            <Typography
              variant={mounted && isMobile ? "body2Regular" : "body1Regular"}
              className='!text-[#666666]'
            >
              {noticeData.viewCount}
            </Typography>
          </div>
        </div>
      </div>

      {/* 본문 내용 */}
      <div className='mb-12'>
        {noticeData.content.map((paragraph, index) => (
          <div key={index}>
            {paragraph === "" ? (
              <div className='h-4' />
            ) : (
              <Typography
                variant={mounted && isMobile ? "body2Regular" : "body1Regular"}
                className='!text-[#292724] !leading-relaxed mb-2'
              >
                {paragraph}
              </Typography>
            )}
          </div>
        ))}
      </div>

      {/* 첨부파일 */}
      {noticeData.attachments.length > 0 && (
        <div
          className='border-t pt-6 flex items-center gap-4 !p-[40px]'
          style={{
            // borderColor: "#E5E5E5",
            backgroundColor: "#FAFAF9"
          }}
        >
          <Image src={fileImage} alt='file' width={64} height={64} />
          {noticeData.attachments.map((attachment, index) => (
            <div key={index} className='flex items-center gap-3 mb-3'>
              {/* 파일 아이콘 */}
              {/* <div
                className='w-5 h-5 flex-shrink-0'
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11.25 1.25H5C4.58579 1.25 4.25 1.58579 4.25 2V18C4.25 18.4142 4.58579 18.75 5 18.75H15C15.4142 18.75 15.75 18.4142 15.75 18V6.25L11.25 1.25Z' stroke='%231B5FB8' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M11.25 1.25V6.25H15.75' stroke='%231B5FB8' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat"
                }}
              /> */}
              {/* <Typography
                variant={mounted && isMobile ? "body2Regular" : "body1Regular"}
                className='!text-[#1B5FB8] cursor-pointer hover:underline'
              >
                {attachment.name}
              </Typography> */}

              <Typography
                variant={mounted && isMobile ? "body2Regular" : "body1Regular"}
                className='!text-[#666666]'
              >
                {attachment.fileName}
              </Typography>
              {/* 다운로드 아이콘 */}
              <div
                className='w-5 h-5 flex-shrink-0 cursor-pointer'
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 13.75L6.25 10L7.1875 9.0625L9.375 11.25V3.75H10.625V11.25L12.8125 9.0625L13.75 10L10 13.75Z' fill='%23666666'/%3E%3Cpath d='M3.75 16.25V14.375H16.25V16.25H3.75Z' fill='%23666666'/%3E%3C/svg%3E")`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat"
                }}
              />
            </div>
          ))}
        </div>
      )}

      <div
        className={`flex items-center ${
          isMobile && mounted ? "justify-center" : "justify-end"
        }  flex-row gap-[4px] !mb-[160px]`}
      >
        <Button title='이전글' onClick={() => {}} />
        <Button title='다음글' onClick={() => {}} />
        <Button title='목록으로' onClick={() => {}} />
      </div>
    </div>
  );
};

export default NoticeDetailContent;
