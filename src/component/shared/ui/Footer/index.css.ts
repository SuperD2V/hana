import { style } from "@vanilla-extract/css";
import { color } from "../../designed/color";

export const footerContainer = style({
  backgroundColor: color.gray[700],
  padding: "73px 0 85px 120px"
});

export const footerWrapper = style({
  width: "458px", // 너비를 458px로 수정
  marginTop: "32px",
  display: "flex",
  flexDirection: "column",
  gap: "16px"
});
export const footerText = style({
  color: color.gray[200]
});
