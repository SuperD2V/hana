"use client";

import React, { useState } from "react";
import {
  noticeContainer,
  noticeWrapper,
  title,
  tableContainer,
  paginationContainer
} from "./index.css";
import {
  SubMenu,
  TypographyEn,
  useResponsiveTypography
} from "@/component/shared";
import { Pagination } from "./Pagination";
import { SubMenuItem } from "@/component/shared/ui/subMenu";
import { DesktopTable } from "./DesktopTable";
import { MobileTable } from "./MobileTable";
const dummyData: { no: number; title: string; date: string; views: number }[] =
  [];

const noticeData = [
  { no: 1, title: "홈페이지 새단장", date: "2025.06.30", views: 0 },
  { no: 2, title: "2025년 하계 전교인 리트릿", date: "2025.06.30", views: 0 },
  { no: 3, title: "외부/ 손님 헌금 안내", date: "2025.07.13", views: 0 },
  { no: 4, title: "교인 헌금 안내", date: "2025.07.13", views: 0 }
];

const items: SubMenuItem[] = [
  { key: "notice", label: "공지" },
  { key: "worship", label: "주보" }
];

export const Dashboard = () => {
  const { mounted, isMobile } = useResponsiveTypography();
  const [page, setPage] = React.useState(1);
  const [selected, setSelected] = useState(items[0].key);

  const data = selected === "notice" ? noticeData : dummyData;

  return (
    <div className={noticeContainer}>
      <div className={noticeWrapper}>
        <TypographyEn
          variant={mounted && isMobile ? "largetitle2" : "largetitle3ExtraBold"}
          className={title}
        >
          공지 및 주보
        </TypographyEn>
        <SubMenu items={items} selectedKey={selected} onSelect={setSelected} />
        <div className={tableContainer}>
          {!isMobile ? (
            <DesktopTable data={data} />
          ) : (
            <MobileTable data={data} />
          )}
        </div>
        <div className={paginationContainer}>
          <Pagination current={page} total={2} onChange={setPage} />
        </div>
      </div>
    </div>
  );
};
