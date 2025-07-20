"use client";

import NoticeDetailContent from "@/component/notice/NoticeDetailContent";
import { useResponsiveTypography } from "@/component/shared";

import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import Button from "@/component/introduce/Button";
import { useAdminStore } from "../../../../../hooks/store/useAdminStore";
import { useShallow } from "zustand/shallow";

interface NoticeDetailProps {
  id: string;
}

const NoticeDetail = ({ id }: NoticeDetailProps) => {
  const { mounted, isMobile } = useResponsiveTypography();
  const searchParams = useSearchParams();
  const { selectedCateogry, setState } = useAdminStore(
    useShallow(state => ({
      selectedCateogry: state.selectedCateogry,
      setState: state.setState
    }))
  );
  const type = searchParams.get("type") || "notice";
  const router = useRouter();
  return (
    <div
      className={`w-full h-full flex flex-col gap-[20px] bg-[#FFFDF5] max-w-[1680px] ${
        isMobile && mounted
          ? "!pt-[92px] !px-[20px]"
          : "!pt-[192px] !px-[120px]"
      } `}
    >
      <div className='flex justify-between'>
        <Button
          title='목록'
          onClick={() => {
            setState("selectedCateogry", type === "notice" ? 6 : 3);
          }}
        />
        <Button
          title='수정하기'
          onClick={() => {
            setState("selectedCateogry", 8);
            router.push(`?type=${type}&id=${id}`);
          }}
          icon={
            <Image
              src='/images/updateIcon.png'
              alt='edit'
              width={20}
              height={20}
            />
          }
        />
      </div>
      <NoticeDetailContent id={id} type={type} />
    </div>
  );
};

export default NoticeDetail;
