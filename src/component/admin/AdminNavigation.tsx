"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Typography } from "../shared";
import { useAdminStore } from "../../../hooks/store/useAdminStore";
import { useShallow } from "zustand/shallow";
import { useRouter } from "next/navigation";

const NAVIGATION_ITEMS = [
  {
    id: 1,
    label: "배너 사진",
    href: "/admin/banner",
    iconLink: "/images/main.svg"
  },
  {
    id: 2,
    label: "공지",
    href: "/admin/notice",
    iconLink: "/images/note.svg"
  },
  {
    id: 3,
    label: "주보",
    href: "/admin/bulletin",
    iconLink: "/images/newss.svg"
  },
  {
    id: 4,
    label: "하나비전스쿨 클래스",
    href: "/admin/class",
    iconLink: "/images/per.svg"
  },
  {
    id: 5,
    label: "하나비전스쿨 갤러리",
    href: "/admin/gallery",
    iconLink: "/images/photo.svg"
  }
];

const AdminNavigation = () => {
  const router = useRouter();
  const { selectedCateogry, setState } = useAdminStore(
    useShallow(state => ({
      selectedCateogry: state.selectedCateogry,
      setState: state.setState
    }))
  );
  return (
    <div
      style={{
        display: "flex",
        minWidth: "240px",
        height: "100%",
        minHeight: "100vh",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "20px",
        backgroundColor: "#F5F9FF"
      }}
    >
      <Image
        src='/images/adminNavLogo.png'
        alt='logo'
        width={130}
        height={60}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          gap: "10px",
          marginTop: "40px"
        }}
      >
        {NAVIGATION_ITEMS.map(item => (
          <div
            key={item.id}
            style={{
              cursor: "pointer",
              display: "flex",
              gap: 8,
              alignItems: "center",
              padding: "12px",
              borderRadius: "12px",
              width: "100%",
              backgroundColor:
                selectedCateogry === item.id ? "#1350A0" : "transparent",
              color: selectedCateogry === item.id ? "white" : "black"
            }}
            onClick={() => {
              setState("selectedCateogry", item.id as 1 | 2 | 3 | 4 | 5);
              router.replace("/admin"); // 쿼리 파라미터 제거 및 이동
            }}
          >
            {/* <Image
              src={item.iconLink}
              alt='icon'
              width={18}
              height={18}
              style={{
                color: "red"
              }}
            /> */}
            <Typography
              variant='headlineMedium'
              style={{
                color: selectedCateogry === item.id ? "#F5F9FF" : "#0E4287",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                flex: 1
              }}
            >
              {item.label}
            </Typography>
          </div>
        ))}
      </div>

      {/* 비밀번호 재설정 버튼을 바닥에 고정 */}
      <div
        style={{
          marginTop: "auto",
          width: "100%",
          cursor: "pointer",
          padding: "12px",
          borderRadius: "12px",
          backgroundColor: "#E8F0FE",
          border: "1px solid #1350A0",
          textAlign: "center"
        }}
        onClick={() => {
          setState("selectedCateogry", 10);
        }}
      >
        <Typography
          variant='headlineMedium'
          style={{
            color: "#1350A0"
          }}
        >
          비밀번호 재설정
        </Typography>
      </div>
    </div>
  );
};

export default AdminNavigation;
