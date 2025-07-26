"use client";

import { Dashboard } from "@/component/notice/UI/dashboard";
import { container } from "./index.css";
import { NoticeItem, DashboardData } from "@/component/notice/type";
import { useRouter } from "next/navigation";
import { getNews } from "@/component/main/UI/notice/api";
import { getBulletin, BulletinItem } from "./api";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { formatDateOnly } from "@/lib/utils";

export default function NoticePage() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(0);
  const [currentCategory, setCurrentCategory] = useState("notice");

  // 공지사항 데이터
  const {
    data: noticeData,
    isLoading: noticeLoading,
    error: noticeError
  } = useQuery({
    queryKey: ["notice", currentPage],
    queryFn: () => getNews({ page: currentPage, size: 10 })
  });

  // 주보 데이터
  const {
    data: bulletinData,
    isLoading: bulletinLoading,
    error: bulletinError
  } = useQuery({
    queryKey: ["bulletin", currentPage],
    queryFn: () => getBulletin({ page: currentPage, size: 10 })
  });

  // 현재 카테고리에 따른 로딩 상태 결정
  const isLoading =
    (currentCategory === "notice" && noticeLoading) ||
    (currentCategory === "worship" && bulletinLoading);
  const error = noticeError || bulletinError;

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  // API 응답을 DashboardData 형식으로 변환
  const transformData = (): DashboardData => {
    const noticeItems = noticeData?.data.content || [];
    const bulletinItems = bulletinData?.data.content || [];

    // NewsItem을 NoticeItem으로 변환 (공지사항)
    const transformedNoticeItems: NoticeItem[] = noticeItems.map(item => ({
      no: item.announcementId,
      title: item.title,
      date: formatDateOnly(item.updatedAt),
      views: item.views,
      files: item.files,
      tag: item.topExposureTag
    }));

    // BulletinItem을 NoticeItem으로 변환 (주보)
    const transformedBulletinItems: NoticeItem[] = bulletinItems.map(
      (item: BulletinItem) => ({
        no: item.announcementId,
        title: item.title,
        date: formatDateOnly(item.updatedAt),
        views: item.views,
        files: item.files,
        tag: item.topExposureTag
      })
    );

    return {
      notice: transformedNoticeItems,
      worship: transformedBulletinItems
    };
  };

  const handleItemClick = (item: NoticeItem) => {
    // 아이템 클릭 시 상세 페이지로 이동 (현재 카테고리에 따라 type 파라미터 추가)
    const type = currentCategory === "notice" ? "notice" : "worship";
    router.replace(`/notice/${item.no}?type=${type}`);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleCategoryChange = (category: string) => {
    setCurrentCategory(category);
    setCurrentPage(0); // 카테고리 변경 시 페이지를 0으로 리셋
  };

  // 현재 카테고리에 따른 총 페이지 수 결정
  const getTotalPages = () => {
    if (currentCategory === "notice") {
      return noticeData?.data.totalPages || 1;
    } else {
      return bulletinData?.data.totalPages || 1;
    }
  };

  const totalPages = getTotalPages();

  return (
    <div className={container}>
      <Dashboard
        data={transformData()}
        onItemClick={handleItemClick}
        onPageChange={handlePageChange}
        onCategoryChange={handleCategoryChange}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </div>
  );
}
