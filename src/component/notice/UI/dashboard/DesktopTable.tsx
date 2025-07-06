import React from "react";
import { table, th, tdLeft, tdCenter, tdRight } from "./index.css";
import { Typography } from "@/component/shared";
import { useRouter } from "next/navigation";

interface TableData {
  no: number;
  title: string;
  date: string;
  views: number;
}

interface DesktopTableProps {
  data: TableData[];
}

export const DesktopTable: React.FC<DesktopTableProps> = ({ data }) => {
  const router = useRouter();

  return (
    <table className={table}>
      <thead>
        <tr>
          <th className={th} style={{ width: "10%" }}>
            <Typography variant='headlineMedium'>번호</Typography>
          </th>
          <th className={th} style={{ width: "70%", textAlign: "center" }}>
            <Typography variant='headlineMedium'>제목</Typography>
          </th>
          <th className={th} style={{ width: "10%", textAlign: "center" }}>
            <Typography variant='headlineMedium'>등록일</Typography>
          </th>
          <th className={th} style={{ width: "10%", textAlign: "center" }}>
            <Typography variant='headlineMedium'>조회수</Typography>
          </th>
        </tr>
      </thead>
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
