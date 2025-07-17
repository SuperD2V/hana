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

const Bulletin = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const pageSize = 10;

  const { data, isLoading, error } = useQuery({
    queryKey: ["bulletinList", currentPage],
    queryFn: () => getBulletinList({ page: currentPage, size: pageSize }),
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

  return (
    <div className={noticePageContainer}>
      <div className={noticeContainer}>
        <AdminHeader
          title='주보'
          buttonText='등록하기'
          buttonClick={() => {}}
          isButton={true}
        />
        <AdminDashboard
          data={convertedData}
          onItemClick={() => {}}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
        <Pagination current={1} total={2} onChange={() => {}} />
      </div>
    </div>
  );
};

export default Bulletin;
