import { homeContainer } from "./index.css";
import { InitSection, HistorySection } from "@/component/main";

export default function Home() {
  return (
    <div className={homeContainer}>
      <InitSection />
      <HistorySection />
    </div>
  );
}
