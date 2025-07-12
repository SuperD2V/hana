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
import { NoticeItem } from "../../type";

interface MobileTableProps {
  data: NoticeItem[];
  onItemClick?: (item: NoticeItem) => void;
}

export const MobileTable: React.FC<MobileTableProps> = ({
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
    <div>
      {data.map(item => (
        <div key={item.no} className={mobileTableRow}>
          <div className={mobileTitleSection}>
            <div className={mobileNumber}>
              <Typography variant='headlineMedium'>{item.no}</Typography>
            </div>
            <div className={mobileTitle} onClick={() => handleItemClick(item)}>
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
