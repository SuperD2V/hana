import { Gallery, Schedule, Title } from "@/component/school";
import { container } from "./index.css";

export default function School() {
  return (
    <div className={container}>
      <Title />
      <Schedule />
      <Gallery />
    </div>
  );
}
