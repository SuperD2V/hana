import { Notice } from "@/component/main/UI/notice";
import { noticeContainer } from "./index.css";

export default function NoticePage() {
  return (
    <div className={noticeContainer}>
      <Notice />
    </div>
  );
}
