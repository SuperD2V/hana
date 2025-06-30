"use client";

import React, { useState } from "react";
import {
  noticeContainer,
  noticeWrapper,
  title,
  table,
  th,
  tdLeft,
  tdCenter,
  tdRight
} from "./index.css";
import {
  SubMenu,
  Typography,
  TypographyEn,
  useResponsiveTypography
} from "@/component/shared";
import { Pagination } from "./Pagination";
import { SubMenuItem } from "@/component/shared/ui/subMenu";
import { useRouter } from "next/navigation";
const dummyData: { no: number; title: string; views: number }[] = [];

const noticeData = [
  { no: 1, title: "홈페이지 새단장", views: 0 },
  { no: 2, title: "2025년 하계 전교인 리트릿", views: 0 }
];

const items: SubMenuItem[] = [
  { key: "notice", label: "공지" },
  { key: "worship", label: "주보" }
];

export const Dashboard = () => {
  const { isMobile } = useResponsiveTypography();
  const [page, setPage] = React.useState(1);
  const [selected, setSelected] = useState(items[0].key);
  const router = useRouter();

  const data = selected === "notice" ? noticeData : dummyData;

  return (
    <div className={noticeContainer}>
      <div className={noticeWrapper}>
        <TypographyEn variant='largetitle2' className={title}>
          공지 및 주보
        </TypographyEn>
        <SubMenu items={items} selectedKey={selected} onSelect={setSelected} />
        <div style={{ width: "100%", maxWidth: "1680px", padding: "16px" }}>
          <table className={table}>
            {!isMobile && (
              <thead>
                <tr>
                  <th className={th} style={{ width: "10%" }}>
                    <Typography variant='headlineMedium'>번호</Typography>
                  </th>
                  <th
                    className={th}
                    style={{ width: "80%", textAlign: "center" }}
                  >
                    <Typography variant='headlineMedium'>제목</Typography>
                  </th>
                  <th
                    className={th}
                    style={{ width: "10%", textAlign: "right" }}
                  >
                    <Typography variant='headlineMedium'>조회수</Typography>
                  </th>
                </tr>
              </thead>
            )}
            <tbody>
              {data.map(item => (
                <tr key={item.no}>
                  <td className={tdLeft}>
                    <Typography variant='headlineMedium'>{item.no}</Typography>
                  </td>
                  <td
                    className={tdCenter}
                    style={{ cursor: "pointer" }}
                    onClick={() => router.push(`/notice/${item.no}`)}
                  >
                    <Typography variant='title3Medium'>{item.title}</Typography>
                  </td>
                  <td className={tdRight}>
                    <Typography variant='body1Medium'>{item.views}</Typography>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Pagination current={page} total={data.length} onChange={setPage} />
      </div>
    </div>
  );
};
