"use client";

import { AdminDashboard } from "@/component/admin/dashboard";
import { Pagination } from "@/component/notice/UI/dashboard/Pagination";
import { AdminHeader } from "@/component/shared";
import { noticePageContainer, noticeContainer } from "./index.css";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getBulletinList, useDeleteBulletin } from "./api";
import { NoticeItem } from "@/component/notice/type";
import { formatDateOnly } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useShallow } from "zustand/shallow";
import { useAdminStore } from "../../../../hooks/store/useAdminStore";

const Bulletin = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;
  const router = useRouter();
  const { setState } = useAdminStore(
    useShallow(state => ({
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
      views: notice.views
    })) || [];

  const handleEdit = (item: NoticeItem) => {
    console.log("수정:", item);
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
          onItemClick={() => {
            setState("selectedCateogry", 6);
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
