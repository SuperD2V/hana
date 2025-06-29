import { color } from "@/component/shared/designed/color";
import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  gap: "40px",
  background: color.brand_yellow[1]
});
