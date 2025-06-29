import React from "react";
import Button from "../introduce/Button";
import NoticeDetailContent from "./NoticeDetailContent";
import { useResponsiveTypography } from "../shared";
const NoticeDetail = () => {
  const { mounted, isMobile } = useResponsiveTypography();
  return (
    <div
      className={`flex flex-col gap-[20px] ${
        isMobile && mounted
          ? "!mt-[52px] !px-[20px]"
          : "!mt-[192px] !px-[120px]"
      } `}
    >
      <div className='flex justify-start'>
        <Button title='목록' onClick={() => {}} />
      </div>
      <NoticeDetailContent />
    </div>
  );
};

export default NoticeDetail;
