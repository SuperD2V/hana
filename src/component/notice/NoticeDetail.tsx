import React from "react";
import Button from "../introduce/Button";
import NoticeDetailContent from "./NoticeDetailContent";
import { useResponsiveTypography } from "../shared";
import { useRouter } from "next/navigation";
import { useNoticeStore } from "./hooks/useNoticeStore";
import { useShallow } from "zustand/shallow";

interface NoticeDetailProps {
  id: string;
  type: string;
}

const NoticeDetail = ({ id, type }: NoticeDetailProps) => {
  const { mounted, isMobile } = useResponsiveTypography();
  const router = useRouter();
  const { setState, selectedCateogry } = useNoticeStore(
    useShallow(state => ({
      setState: state.setState,
      selectedCateogry: state.selectedCateogry
    }))
  );
  return (
    <div
      className={`w-full h-full flex flex-col gap-[20px] bg-[#FFFDF5] max-w-[1680px] !mx-auto ${
        isMobile && mounted
          ? "!pt-[92px] !px-[20px]"
          : "!pt-[192px] !px-[120px]"
      } `}
    >
      <div className='flex justify-start'>
        <Button title='목록' onClick={() => {
          if (type === 'notice') {
            setState('selectedCateogry', 'notice')
            router.replace('/notice')
          } else {
            setState('selectedCateogry', 'worship')
            router.replace('/notice')
          }
        }} />
      </div>
      <NoticeDetailContent id={id} type={type} />
    </div>
  );
};

export default NoticeDetail;
