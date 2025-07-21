"use client";

import React from "react";
import { table, th, tdLeft, tdCenter, tdRight } from "./index.css";
import { Typography } from "@/component/shared";
import { useRouter } from "next/navigation";
import { NoticeItem } from "../../type";
import Image from "next/image";

interface DesktopTableProps {
  data: NoticeItem[];
  onItemClick?: (item: NoticeItem) => void;
}

export const DesktopTable: React.FC<DesktopTableProps> = ({
  data,
  onItemClick
}) => {
  const router = useRouter();

  const handleItemClick = (item: NoticeItem) => {
    if (onItemClick) {
      onItemClick(item);
    } else {
      // 기본 동작: 라우터로 이동
      router.push(`/notice/${item.no}`);
    }
  };

  return (
    <table className={table}>
      <thead>
        <tr>
          <th className={th} style={{ width: "4%", textAlign: "center" }}>
            <Typography variant='headlineMedium'>번호</Typography>
          </th>
          <th className={th} style={{ width: "80%", textAlign: "center" }}>
            <Typography variant='headlineMedium'>제목</Typography>
          </th>
          <th className={th} style={{ width: "8%", textAlign: "center" }}>
            <Typography variant='headlineMedium'>등록일</Typography>
          </th>
          <th className={th} style={{ width: "8%", textAlign: "center" }}>
            <Typography variant='headlineMedium'>조회수</Typography>
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr key={item.no}>
            <td className={tdLeft}>
              {item.tag === "공지" ? (
                <div
                  style={{
                    width: "52px",
                    height: "34px",
                    fontSize: "16px",
                    fontWeight: "500",
                    lineHeight: "26px",
                    letterSpacing: "0.28px",
                    color: "#1B5FB8",
                    backgroundColor: "#FEF4CD",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <Typography
                    style={{
                      color: "#1B5FB8",
                      backgroundColor: "#FEF4CD"
                    }}
                    variant='headlineMedium'
                  >
                    공지
                  </Typography>
                </div>
              ) : (
                <Typography variant='headlineMedium'>{item.no}</Typography>
              )}
            </td>
            <td
              className={tdCenter}
              style={{ cursor: "pointer" }}
              onClick={() => handleItemClick(item)}
            >
              <Typography variant='title3Medium'>
                {item.title}{" "}
                {item.files !== null && (
                  <Image
                    src='/images/attach.svg'
                    alt='video'
                    width={24}
                    height={24}
                  />
                )}
              </Typography>
            </td>
            <td className={tdRight}>
              <Typography variant='body1Medium'>{item.date}</Typography>
            </td>
            <td className={tdRight}>
              <Typography variant='body1Medium'>{item.views}</Typography>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
