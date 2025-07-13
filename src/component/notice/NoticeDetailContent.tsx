import React from "react";
import { Typography } from "@/component/shared";
import { useResponsiveTypography } from "@/component/shared";
import Image from "next/image";
import Button from "../introduce/Button";

interface NoticeDetailContentProps {
  id: string;
}

interface NoticeData {
  id: number;
  title: string;
  category: string;
  date: string;
  viewLabel: string;
  viewCount: string;
  content: string[];
  attachments: {
    name: string;
    fileName: string;
    url: string;
  }[];
}

const NoticeDetailContent = ({ id }: NoticeDetailContentProps) => {
  const { mounted, isMobile } = useResponsiveTypography();

  const noticeDataList: NoticeData[] = [
    {
      id: 1,
      title: "홈페이지 새단장",
      category: "등록일",
      date: "2025.06.30",
      viewLabel: "조회수",
      viewCount: "0",
      content: ["홈페이지가 새로 단장되었습니다. 많은 이용 부탁드립니다."],
      attachments: [
        {
          name: "첨부파일",
          fileName: "첨부파일첨부파일의 제목이 들어갑니다.확장자명",
          url: "#"
        }
      ]
    },
    {
      id: 2,
      title: "2025년 하계 전교인 리트릿",
      category: "등록일",
      date: "2025.06.30",
      viewLabel: "조회수",
      viewCount: "0",
      content: [
        "-일시: 8월2일(토) 오후1:30 ~ 8월3일(일) 오후1:00",
        "-장소: 타보르산 영성센터(http://taborsm.org/) ",
        '-주제: "예배에 폭삭 빠졌수다"',
        "-강사: 주종훈교수(장년), 권진하목사(유초등)"
      ],
      attachments: [
        {
          name: "첨부파일",
          fileName: "첨부파일첨부파일의 제목이 들어갑니다.확장자명",
          url: "#"
        }
      ]
    },
    {
      id: 3,
      title: "외부/ 손님 헌금 안내",
      category: "등록일",
      date: "2025.06.30",
      viewLabel: "조회수",
      viewCount: "0",
      content: [
        "하나은행 913-910011-91304 하나비전교회",
        "영수증 신청은 아래로 접속해주세요.  ",
        "https://forms.gle/Mdojk2Y41qFP5oVi9"
      ],
      attachments: [
        {
          name: "첨부파일",
          fileName: "첨부파일첨부파일의 제목이 들어갑니다.확장자명",
          url: "#"
        }
      ]
    },
    {
      id: 4,
      title: "교인 헌금 안내",
      category: "등록일",
      date: "2025.06.30",
      viewLabel: "조회수",
      viewCount: "0",
      content: [
        "하나은행 913-910011-91304 하나비전교회",
        "온라인 헌금의 예)",
        "- 십일조: 홍길동십일조",
        "- 감사헌금: 홍길동감사",
        "- 엄경영선교사후원: 홍길동엄경영",
        "- 절기: 홍길동부활절",
        "하신 헌금은 <오직 온라인 교인센터>를 통해 확인하실 수 있습니다. ",
        "온라인 교인센터 이용 방법",
        "https://www.band.us/band/89951906/post/320"
      ],
      attachments: [
        {
          name: "첨부파일",
          fileName: "첨부파일첨부파일의 제목이 들어갑니다.확장자명",
          url: "#"
        }
      ]
    }
  ];

  // id와 매칭되는 공지사항 데이터 찾기
  const noticeData = noticeDataList.find(notice => notice.id === parseInt(id));

  // 해당 id의 공지사항이 없을 경우
  if (!noticeData) {
    return (
      <div className='w-full flex items-center justify-center py-20'>
        <Typography variant='body1Regular' className='!text-[#666666]'>
          해당 공지사항을 찾을 수 없습니다.
        </Typography>
      </div>
    );
  }

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
          mounted && isMobile ? "!py-[20px]" : "!py-[40px]"
        }  border-y-1 border-[#D6D4D1] `}
      >
        {/* 제목 */}
        <Typography
          variant={mounted && isMobile ? "title1Bold" : "largetitle2Bold"}
          className='!text-[#292724] mb-6'
        >
          {noticeData.title}
        </Typography>

        {/* 메타 정보 */}
        <div className='flex items-center gap-4 mb-8 pb-4'>
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
      <div
        className={`mb-12 ${
          mounted && isMobile ? "!px-[12px] !py-[20px]" : "!p-[40px]"
        }`}
      >
        {noticeData.content.map((paragraph: string, index: number) => (
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
          className={`!mb-[20px] flex items-center gap-4  ${
            mounted && isMobile ? "!flex-col !p-[20px]" : "flex-row !p-[40px]"
          }`}
          style={{
            // borderColor: "#E5E5E5",
            backgroundColor: "#FAFAF9"
          }}
        >
          <Image
            src='/images/file.png'
            alt='file'
            width={64}
            height={64}
            style={isMobile && mounted ? { alignSelf: "center" } : undefined}
          />
          {noticeData.attachments.map((attachment, index: number) => (
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
                style={{ textDecoration: "underline" }}
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
        className={`flex items-center border-t border-[#D6D4D1] !pt-[20px] ${
          isMobile && mounted ? "justify-center" : "justify-end"
        }  flex-row gap-[4px] !mb-[160px]`}
      >
        <Button title='이전글' onClick={() => {}} />
        <Button title='다음글' onClick={() => {}} />
        <Button title='목록' onClick={() => {}} />
      </div>
    </div>
  );
};

export default NoticeDetailContent;
