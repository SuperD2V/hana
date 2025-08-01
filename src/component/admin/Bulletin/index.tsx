"use client";

import { AdminDashboard } from "@/component/admin/dashboard";
import { Pagination } from "@/component/notice/UI/dashboard/Pagination";
import { AdminHeader } from "@/component/shared";
import { noticePageContainer, noticeContainer } from "./index.css";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { getBulletinList, useDeleteBulletin } from "./api";
import { NoticeItem } from "@/component/notice/type";
import { formatDateOnly } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useShallow } from "zustand/shallow";
import { useAdminStore } from "../../../../hooks/store/useAdminStore";
import { useNoticeStore } from "@/component/notice/hooks/useNoticeStore";

const Bulletin = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;
  const router = useRouter();
  const { setState } = useAdminStore(
    useShallow(state => ({
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
    queryKey: ["bulletinList", currentPage],
    queryFn: () => getBulletinList({ page: currentPage - 1, size: pageSize }),
    staleTime: 5 * 60 * 1000, // 5분
    gcTime: 10 * 60 * 1000 // 10분
  });

  const deleteMutation = useDeleteBulletin();

  const convertedData: NoticeItem[] =
    data?.content?.map(notice => ({
      no: notice.announcementId,
      title: notice.title,
      date: formatDateOnly(notice.updatedAt),
      views: notice.views,
      files: notice.files,
      tag: notice.topExposureTag?.includes("TOP") ? "공지" : ""
    })) || [];

  // Dashboard와 동일한 데이터 구조로 변환
  useEffect(() => {
    if (convertedData) {
      const dashboardData = {
        notice: [], // Bulletin 페이지에서는 notice 데이터가 없으므로 빈 배열
        worship: convertedData
      };
      console.log('dashboardData', dashboardData);
      setNoticeState("dashboardData", dashboardData);
    }
  }, [data]);

  const handleEdit = (item: NoticeItem) => {
    console.log("주보 수정:", item);
    setState("selectedCateogry", 8); // NoticeBulletineRegister 페이지
    setState("selectedId", item.no.toString());
    setState("selectedType", "bulletin"); // 주보 타입 설정
  };

  const handleDelete = (item: NoticeItem) => {
    deleteMutation.mutate(item.no);
  };
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className={noticePageContainer}>
      <div className={noticeContainer}>
        <AdminHeader
          title='주보'
          buttonText='등록하기'
          buttonClick={() => {
            setState("selectedCateogry", 8);
            setState("selectedType", "bulletin");
            // router.push(`${window.location.pathname}?type=bulletin`);
          }}
          isButton={true}
        />
        <AdminDashboard
          type='bulletin'
          data={convertedData}
          onItemClick={item => {
            console.log("주보 클릭:", item);
            setState("selectedCateogry", 7); // Bulletin Detail 페이지
            setState("selectedId", item.no.toString());
            setState("selectedType", "bulletin"); // 주보 타입 설정

          }}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
        <Pagination
          current={data?.number! + 1} // API는 0부터 시작하므로 1을 더함
          total={data?.totalPages!}
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default Bulletin;
