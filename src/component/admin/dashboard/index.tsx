"use client";

import React, { useState, useEffect } from "react";
import { Typography } from "@/component/shared";
import { useRouter, useSearchParams } from "next/navigation";
import { table, th, tdLeft, tdCenter, tdRight } from "./index.css";
import { NoticeItem } from "@/component/notice/type";
import Image from "next/image";
import { Dropdown } from "./ui/Dropdown";
import { useShallow } from "zustand/shallow";
import { useAdminStore } from "../../../../hooks/store/useAdminStore";

interface AdminDashboardProps {
  data: NoticeItem[];
  onItemClick?: (item: NoticeItem) => void;
  onEdit?: (item: NoticeItem) => void;
  onDelete?: (item: NoticeItem) => void;
  type: "notice" | "bulletin";
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({
  data,
  onItemClick,
  onEdit,
  onDelete,
  type
}) => {
  const router = useRouter();
  const [openDropdownId, setOpenDropdownId] = useState<number | null>(null);
  const searchParams = useSearchParams();

  const { selectedCateogry, setState } = useAdminStore(
    useShallow(state => ({
      selectedCateogry: state.selectedCateogry,
      setState: state.setState
    }))
  );
  console.log("selectedCateogry", selectedCateogry);

  const handleItemClick = (item: NoticeItem) => {
    setState("selectedCateogry", 7);
    setState("selectedId", item.no.toString());
    const params = new URLSearchParams(searchParams);
    params.set("type", type);
    params.set("id", item.no.toString());
    router.replace(`?${params.toString()}`);
  };

  const handleMoreClick = (e: React.MouseEvent, itemId: number) => {
    e.stopPropagation();
    setOpenDropdownId(openDropdownId === itemId ? null : itemId);
  };

  const handleDropdownAction = (action: string, item: NoticeItem) => {
    console.log(`${action} clicked for item:`, item);
    setOpenDropdownId(null);
  };

  const handleEdit = (item: NoticeItem) => {
    if (onEdit) {
      onEdit(item);
      const params = new URLSearchParams(searchParams);
      params.set("type", type);
      params.set("id", item.no.toString());
      router.replace(`?${params.toString()}`);
      setState("selectedCateogry", 8);
    }
    setOpenDropdownId(null);
  };

  const handleDelete = (item: NoticeItem) => {
    if (onDelete) {
      onDelete(item);
    }
    setOpenDropdownId(null);
  };

  // 드롭다운 외부 클릭 시 닫기
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest("[data-dropdown]")) {
        setOpenDropdownId(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <table className={table}>
      <thead>
        <tr>
          <th className={th} style={{ width: "10%" }}>
            <Typography variant='headlineMedium'>번호</Typography>
          </th>
          <th className={th} style={{ width: "65%", textAlign: "center" }}>
            <Typography variant='headlineMedium'>제목</Typography>
          </th>
          <th className={th} style={{ width: "10%", textAlign: "center" }}>
            <Typography variant='headlineMedium'>등록일</Typography>
          </th>
          <th className={th} style={{ width: "10%", textAlign: "center" }}>
            <Typography variant='headlineMedium'>조회수</Typography>
          </th>
          <th className={th} style={{ width: "3%", textAlign: "center" }}></th>
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr onClick={() => handleItemClick(item)} key={item.no}>
            <td className={tdLeft}>
              <Typography variant='headlineMedium'>{item.no}</Typography>
            </td>
            <td className={tdCenter} style={{ cursor: "pointer" }}>
              <Typography variant='title3Medium'>{item.title} </Typography>
            </td>
            <td className={tdRight}>
              <Typography variant='body1Medium'>{item.date}</Typography>
            </td>
            <td className={tdRight}>
              <Typography variant='body1Medium'>{item.views}</Typography>
            </td>
            <td className={tdRight} style={{ position: "relative" }}>
              <Image
                style={{ cursor: "pointer" }}
                src='/images/more.svg'
                alt='more'
                width={24}
                height={24}
                onClick={e => handleMoreClick(e, item.no)}
                data-dropdown
              />
              {openDropdownId === item.no && (
                <div
                  data-dropdown
                  style={{
                    position: "absolute",
                    top: "60%",
                    left: "-110px", // 오른쪽이 아니라 왼쪽에 붙이기
                    zIndex: 1000,
                    marginTop: "4px"
                  }}
                >
                  <Dropdown
                    onEdit={() => handleEdit(item)}
                    onDelete={() => handleDelete(item)}
                  />
                </div>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
