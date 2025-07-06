import React from "react";
import {
  mobileTableRow,
  mobileTitleSection,
  mobileInfoSection,
  mobileNumber,
  mobileTitle,
  mobileDivider
} from "./index.css";
import { Typography } from "@/component/shared";
import { useRouter } from "next/navigation";

interface TableData {
  no: number;
  title: string;
  date: string;
  views: number;
}

interface MobileTableProps {
  data: TableData[];
}

export const MobileTable: React.FC<MobileTableProps> = ({ data }) => {
  const router = useRouter();

  return (
    <div>
      {data.map(item => (
        <div key={item.no} className={mobileTableRow}>
          <div className={mobileTitleSection}>
            <div className={mobileNumber}>
              <Typography variant='headlineMedium'>{item.no}</Typography>
            </div>
            <div
              className={mobileTitle}
              onClick={() => router.push(`/notice/${item.no}`)}
            >
              <Typography variant='title3Medium'>{item.title}</Typography>
            </div>
          </div>
          <div className={mobileInfoSection}>
            <Typography variant='body1Medium'>{item.date}</Typography>
            <div className={mobileDivider}></div>
            <Typography variant='body1Medium'>{item.views}</Typography>
          </div>
        </div>
      ))}
    </div>
  );
};
