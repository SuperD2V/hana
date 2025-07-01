import { homeContainer } from "./index.css";
import {
  InitSection,
  HistorySection,
  LineBanner,
  Calendar,
  Notice
} from "@/component/main";
import { FloatingBar } from "@/component/main/UI/floatingMenu";
import { useRouter } from "next/navigation";

export default function Home() {
  return (
    <div className={homeContainer}>
      <InitSection />
      <HistorySection />
      <LineBanner />
      <Calendar />
      <Notice />
      <FloatingBar />
    </div>
  );
}
