"use client";

import { AdminDashboard } from "@/component/admin/dashboard";
import { Pagination } from "@/component/notice/UI/dashboard/Pagination";
import { AdminHeader } from "@/component/shared";
import { noticePageContainer, noticeContainer } from "./index.css";
import { getNoticeList, useDeleteNotice } from "./api";
import { NoticeItem } from "@/component/notice/type";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { formatDateOnly } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useShallow } from "zustand/shallow";
import { useAdminStore } from "../../../../hooks/store/useAdminStore";
import { useNoticeStore } from "@/component/notice/hooks/useNoticeStore";

const Notice = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;
  const router = useRouter();
  const { selectedCateogry, setState } = useAdminStore(
    useShallow(state => ({
      selectedCateogry: state.selectedCateogry,
      setState: state.setState
    }))
  );

  const { setState: setNoticeState } = useNoticeStore(
    useShallow(state => ({
      dashboardData: state.dashboardData,
      setState: state.setState
    }))
  );

  const { data, isLoading, error } = useQuery({
    queryKey: ["noticeList", currentPage],
    queryFn: () => getNoticeList({ page: currentPage - 1, size: pageSize }),
    staleTime: 5 * 60 * 1000, // 5분
    gcTime: 10 * 60 * 1000 // 10분
  });

  const deleteMutation = useDeleteNotice();

  // API 응답 데이터를 NoticeItem 타입으로 변환
  const convertedData: NoticeItem[] =
    data?.content?.map((notice, index) => ({
      no: notice.announcementId,
      title: notice.title,
      date: formatDateOnly(notice.updatedAt),
      views: notice.views,
      files: notice.files,
      tag: notice.topExposureTag
    })) || [];

  // Dashboard와 동일한 데이터 구조로 변환
  useEffect(() => {
    if (convertedData) {
      const dashboardData = {
        notice: convertedData,
        worship: [] // Notice 페이지에서는 worship 데이터가 없으므로 빈 배열
      };
      console.log("dashboardData", dashboardData);
      setNoticeState("dashboardData", dashboardData);
    }
  }, [data]);

  const totalPages = data?.totalPages || 1;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleItemClick = (item: NoticeItem) => {
    // 공지사항 클릭 처리
    console.log("공지사항 클릭:", item);
    setState("selectedCateogry", 7); // Notice Detail 페이지
    setState("selectedId", item.no.toString());
    setState("selectedType", "notice"); // 공지사항 타입 설정
  };

  const handleRegisterClick = () => {
    // 등록하기 버튼 클릭 처리
    setState("selectedCateogry", 8);
    setState("selectedType", "notice");
    // router.push(`${window.location.pathname}?type=notice`);
    console.log("등록하기 클릭");
  };

  const handleEdit = (item: NoticeItem) => {
    // 수정하기 버튼 클릭 처리 - NoticeBulletineRegister 페이지로 이동 (수정 모드)
    console.log("공지사항 수정:", item);
    setState("selectedCateogry", 8); // NoticeBulletineRegister 페이지
    setState("selectedId", item.no.toString());
    setState("selectedType", "notice"); // 공지사항 타입 설정
  };

  const handleDelete = (item: NoticeItem) => {
    deleteMutation.mutate(item.no);
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
        <AdminDashboard
          type='notice'
          data={convertedData}
          onItemClick={handleItemClick}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
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
