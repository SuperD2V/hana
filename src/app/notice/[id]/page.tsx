"use client";
import React from "react";
import NoticeDetail from "@/component/notice/NoticeDetail";
import { useParams } from "next/navigation";

const NoticePage = () => {
  const params = useParams();
  const id = params.id;

  return <NoticeDetail id={id as string} />;
};

export default NoticePage;
