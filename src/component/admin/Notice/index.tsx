"use client";

import { DesktopTable } from "@/component/notice/UI/dashboard/DesktopTable";
import { Pagination } from "@/component/notice/UI/dashboard/Pagination";
import { AdminHeader } from "@/component/shared";
import { noticePageContainer, noticeContainer } from "./index.css";
import { getNoticeList } from "./api";
import { NoticeItem } from "@/component/notice/type";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { formatDateOnly } from "@/lib/utils";

const Notice = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const { data, isLoading, error } = useQuery({
    queryKey: ["noticeList", currentPage],
    queryFn: () => getNoticeList({ page: currentPage - 1, size: pageSize }),
    staleTime: 5 * 60 * 1000, // 5분
    gcTime: 10 * 60 * 1000 // 10분
  });

  // API 응답 데이터를 NoticeItem 타입으로 변환
  const convertedData: NoticeItem[] =
    data?.content?.map((notice, index) => ({
      no: notice.announcementId,
      title: notice.title,
      date: formatDateOnly(notice.updatedAt),
      views: notice.views
    })) || [];

  const totalPages = data?.totalPages || 1;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleItemClick = (item: NoticeItem) => {
    // 공지사항 클릭 처리
    console.log("공지사항 클릭:", item);
  };

  const handleRegisterClick = () => {
    // 등록하기 버튼 클릭 처리
    console.log("등록하기 클릭");
  };

  if (isLoading) {
    return (
      <div className={noticePageContainer}>
        <div className={noticeContainer}>
          <AdminHeader
            title='공지'
            buttonText='등록하기'
            buttonClick={handleRegisterClick}
            isButton={true}
          />
          <div>로딩 중...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={noticePageContainer}>
        <div className={noticeContainer}>
          <AdminHeader
            title='공지'
            buttonText='등록하기'
            buttonClick={handleRegisterClick}
            isButton={true}
          />
          <div>데이터를 불러오는 중 오류가 발생했습니다.</div>
        </div>
      </div>
    );
  }

  return (
    <div className={noticePageContainer}>
      <div className={noticeContainer}>
        <AdminHeader
          title='공지'
          buttonText='등록하기'
          buttonClick={handleRegisterClick}
          isButton={true}
        />
        <DesktopTable data={convertedData} onItemClick={handleItemClick} />
        <Pagination
          current={currentPage}
          total={totalPages}
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default Notice;
