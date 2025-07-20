"use client";
import React from "react";
import NoticeDetail from "@/component/notice/NoticeDetail";
import { useParams, useSearchParams } from "next/navigation";

const NoticePage = () => {
  const params = useParams();
  const searchParams = useSearchParams();
  const id = params.id;
  const type = searchParams.get("type") || "notice";

  return <NoticeDetail id={id as string} type={type} />;
};

export default NoticePage;
