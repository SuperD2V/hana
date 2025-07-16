import { DesktopTable } from "@/component/notice/UI/dashboard/DesktopTable";
import { Pagination } from "@/component/notice/UI/dashboard/Pagination";
import { AdminHeader } from "@/component/shared";
import { noticePageContainer, noticeContainer } from "./index.css";

const Notice = () => {
  return (
    <div className={noticePageContainer}>
      <div className={noticeContainer}>
        <AdminHeader
          title='공지'
          buttonText='등록하기'
          buttonClick={() => {}}
          isButton={true}
        />
        <DesktopTable data={[]} onItemClick={() => {}} />
        <Pagination current={1} total={2} onChange={() => {}} />
      </div>
    </div>
  );
};

export default Notice;
