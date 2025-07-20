import React from "react";
import Button from "../introduce/Button";
import NoticeDetailContent from "./NoticeDetailContent";
import { useResponsiveTypography } from "../shared";

interface NoticeDetailProps {
  id: string;
  type: string;
}

const NoticeDetail = ({ id, type }: NoticeDetailProps) => {
  const { mounted, isMobile } = useResponsiveTypography();

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
