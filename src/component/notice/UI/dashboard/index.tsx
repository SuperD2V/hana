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
  titles = "공지 및 주보",
  onItemClick,
  onPageChange,
  onCategoryChange,
  currentPage = 1,
  totalPages = 1
}) => {
  const { mounted, isMobile } = useResponsiveTypography();
  const [selected, setSelected] = useState(items[0].key);

  const currentData = data[selected as keyof typeof data] || [];

  const handleCategoryChange = (category: string) => {
    setSelected(category);
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
          {titles}
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
          <Pagination
            current={currentPage + 1} // UI는 1-based로 표시
            total={totalPages}
            onChange={page => onPageChange?.(page - 1)} // 1-based를 0-based로 변환
          />
        </div>
      </div>
    </div>
  );
};
