"use client";

import {
  SubMenu,
  Typography,
  TypographyEn,
  useResponsiveTypography
} from "@/component/shared";
import {
  title,
  worshipContainer,
  worshipContent,
  worshipWrapper
} from "./index.css";
import { useState } from "react";
import { SubMenuItem } from "@/component/shared/ui/subMenu";
import { Place } from "@/component/worship/UI/place";
import { Time } from "@/component/worship/UI/time";
const items: SubMenuItem[] = [
  { key: "place", label: "장소" },
  { key: "time", label: "시간" }
];
export default function Worship() {
  const [selected, setSelected] = useState(items[0].key);
  const { mounted, isMobile } = useResponsiveTypography();
  return (
    <div className={worshipContainer}>
      <div className={worshipWrapper}>
        <TypographyEn
          variant={mounted && isMobile ? "largetitle2" : "largetitle3ExtraBold"}
          className={title}
        >
          예배안내
        </TypographyEn>
        <SubMenu items={items} selectedKey={selected} onSelect={setSelected} />
        <div className={worshipContent}>
          {selected === "place" && <Place />}
          {selected === "time" && <Time />}
        </div>
      </div>
    </div>
  );
}
