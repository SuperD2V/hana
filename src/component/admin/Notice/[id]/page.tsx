import NoticeDetailContent from "@/component/notice/NoticeDetailContent";
import { useResponsiveTypography } from "@/component/shared";
import { Button } from "@/components/ui/button";
import React from "react";
import { useSearchParams } from "next/navigation";

interface NoticeDetailProps {
  id: string;
}

const NoticeDetail = ({ id }: NoticeDetailProps) => {
  const { mounted, isMobile } = useResponsiveTypography();
  const searchParams = useSearchParams();
  const type = searchParams.get("type") || "notice";
  return (
    <div
      className={`w-full h-full flex flex-col gap-[20px] bg-[#FFFDF5] max-w-[1680px] !mx-auto ${
        isMobile && mounted
          ? "!pt-[92px] !px-[20px]"
          : "!pt-[192px] !px-[120px]"
      } `}
    >
      <div className='flex justify-start'>
        <Button title='목록' onClick={() => {}} />
      </div>
      <NoticeDetailContent id={id} type={type} />
    </div>
  );
};

export default NoticeDetail;
