import React from "react";
import { Typography } from "@/component/shared";
import { useResponsiveTypography } from "@/component/shared";
import Image from "next/image";
import Button from "../introduce/Button";
import { useQuery } from "@tanstack/react-query";
import { getBulletinDetail, getNoticeDetail } from "./api/api";
import { useNavigation } from "./hooks/useNavigation";

interface NoticeDetailContentProps {
  id: string;
  type: string;
}

const NoticeDetailContent = ({ id, type }: NoticeDetailContentProps) => {
  const { mounted, isMobile } = useResponsiveTypography();
  // 타입 검증 및 변환
  const validatedType =
    type === "notice" || type === "bulletin" ? type : "notice";
  const { handlePrevious, handleNext, handleList } = useNavigation(
    id,
    validatedType
  );
  const { data: apiResponse } = useQuery({
    queryKey: ["notice", id, type],
    queryFn: () => {
      if (type === "notice") {
        return getNoticeDetail(id);
      } else {
        return getBulletinDetail(id);
      }
    }
  });

  // API 응답이 없거나 데이터가 없는 경우
  if (!apiResponse || !apiResponse.data) {
    return (
      <div className='w-full flex items-center justify-center py-20'>
        <Typography variant='body1Regular' className='!text-[#666666]'>
          해당 공지사항을 찾을 수 없습니다.
        </Typography>
      </div>
    );
  }

  const noticeData = apiResponse.data;

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
              등록일
            </Typography>
            <Typography
              variant={mounted && isMobile ? "body2Regular" : "body1Regular"}
              className='!text-[#666666]'
            >
              {new Date(noticeData.updatedAt)
                .toLocaleDateString("ko-KR", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit"
                })
                .replace(/\./g, ".")
                .replace(/\s/g, "")}
            </Typography>
          </div>
          <div className='flex items-center gap-2'>
            <Typography
              variant={mounted && isMobile ? "body2Regular" : "body1Regular"}
              className='!text-[#999999]'
            >
              조회수
            </Typography>
            <Typography
              variant={mounted && isMobile ? "body2Regular" : "body1Regular"}
              className='!text-[#666666]'
            >
              {noticeData.views}
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
        <div
          dangerouslySetInnerHTML={{ __html: noticeData.content || "" }}
          className='prose'
        />
      </div>

      {/* 첨부파일 */}
      {noticeData.files && noticeData.files.length > 0 && (
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
          {noticeData.files.map((file, index: number) => (
            <div key={index} className='flex items-center gap-3 mb-3'>
              <Typography
                variant={mounted && isMobile ? "body2Regular" : "body1Regular"}
                className='!text-[#666666]'
                style={{ textDecoration: "underline" }}
              >
                {file.fileName}
              </Typography>
              {/* 다운로드 아이콘 */}
              <div
                className='w-5 h-5 flex-shrink-0 cursor-pointer'
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 13.75L6.25 10L7.1875 9.0625L9.375 11.25V3.75H10.625V11.25L12.8125 9.0625L13.75 10L10 13.75Z' fill='%23666666'/%3E%3Cpath d='M3.75 16.25V14.375H16.25V16.25H3.75Z' fill='%23666666'/%3E%3C/svg%3E")`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat"
                }}
                onClick={() => window.open(file.fileUrl, "_blank")}
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
        <Button title='이전글' onClick={handlePrevious} />
        <Button title='다음글' onClick={handleNext} />
        <Button title='목록' onClick={handleList} />
      </div>
    </div>
  );
};

export default NoticeDetailContent;
