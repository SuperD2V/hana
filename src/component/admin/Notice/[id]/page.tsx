import NoticeDetailContent from "@/component/notice/NoticeDetailContent";
import { useResponsiveTypography } from "@/component/shared";

import React from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Button from "@/component/introduce/Button";

interface NoticeDetailProps {
  id: string;
}

const NoticeDetail = ({ id }: NoticeDetailProps) => {
  const { mounted, isMobile } = useResponsiveTypography();
  const searchParams = useSearchParams();
  const type = searchParams.get("type") || "notice";
  return (
    <div
      className={`w-full h-full flex flex-col gap-[20px] bg-[#FFFDF5] max-w-[1680px] ${
        isMobile && mounted
          ? "!pt-[92px] !px-[20px]"
          : "!pt-[192px] !px-[120px]"
      } `}
    >
      <div className='flex justify-between'>
        <Button title='목록' onClick={() => {}} />
        <Button title='수정하기' onClick={() => {}} icon={<Image src='/images/updateIcon.png' alt='edit' width={20} height={20} />} />
      </div>
      <NoticeDetailContent id={id} type={type} />
    </div>
  );
};

export default NoticeDetail;
