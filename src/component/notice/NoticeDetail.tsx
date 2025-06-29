import React from "react";
import Button from "../introduce/Button";
import NoticeDetailContent from "./NoticeDetailContent";

const NoticeDetail = () => {
  return (
    <div className='flex flex-col gap-[20px]'>
      <Button title='목록' onClick={() => {}} />
      <NoticeDetailContent />
    </div>
  );
};

export default NoticeDetail;
