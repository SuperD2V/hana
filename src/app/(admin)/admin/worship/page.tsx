"use client";

import { DesktopTable } from "@/component/notice/UI/dashboard/DesktopTable";
import { noticeContainer, noticePageContainer } from "./index.css";
import { AdminHeader } from "@/component/shared";
import { Pagination } from "@/component/notice/UI/dashboard/Pagination";

const AdminWorshipPage = () => {
  return (
    <div className={noticePageContainer}>
      <div className={noticeContainer}>
        <AdminHeader
          title='주보'
          buttonText='등록하기'
          buttonClick={() => {}}
          isButton={true}
        />
        <DesktopTable data={[]} onItemClick={() => {}} />
        <Pagination current={1} total={2} onChange={() => {}} />
      </div>
    </div>
  );
};

export default AdminWorshipPage;
