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
import { DashboardProps, NoticeItem } from "../../type";

const items: SubMenuItem[] = [
  { key: "notice", label: "공지" },
  { key: "worship", label: "주보" }
];

export const Dashboard: React.FC<DashboardProps> = ({
  data,
  title = "공지 및 주보",
  onItemClick,
  onPageChange,
  onCategoryChange
}) => {
  const { mounted, isMobile } = useResponsiveTypography();
  const [page, setPage] = React.useState(1);
  const [selected, setSelected] = useState(items[0].key);

  const currentData = data[selected as keyof typeof data] || [];

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    onPageChange?.(newPage);
  };

  const handleCategoryChange = (category: string) => {
    setSelected(category);
    setPage(1); // 카테고리 변경 시 페이지를 1로 리셋
    onCategoryChange?.(category);
  };

  const handleItemClick = (item: NoticeItem) => {
    onItemClick?.(item);
  };

  return (
    <div className={noticeContainer}>
      <div className={noticeWrapper}>
        <TypographyEn
          variant={mounted && isMobile ? "largetitle2" : "largetitle3ExtraBold"}
          className={title}
        >
          {title}
        </TypographyEn>
        <SubMenu
          items={items}
          selectedKey={selected}
          onSelect={handleCategoryChange}
        />
        <div className={tableContainer}>
          {!isMobile ? (
            <DesktopTable data={currentData} onItemClick={handleItemClick} />
          ) : (
            <MobileTable data={currentData} onItemClick={handleItemClick} />
          )}
        </div>
        <div className={paginationContainer}>
          <Pagination current={page} total={2} onChange={handlePageChange} />
        </div>
      </div>
    </div>
  );
};
