import { style, keyframes } from "@vanilla-extract/css";
import { color } from "@/component/shared/designed/color";

const scrollAnimation = keyframes({
  "0%": {
    transform: "translateX(100%)"
  },
  "100%": {
    transform: "translateX(-100%)"
  }
});

export const lineBanner = style({
  width: "100%",
  height: "60px",
  backgroundColor: color.brand[500],
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "62px",
  overflow: "hidden",
  position: "relative",
  "@media": {
    "(max-width: 768px)": {}
  }
});

export const bannerText = style({
  color: color.brand[500],
  textShadow: `
    -1px -1px 0 ${"#88B3EB"},
    -1px 1px 0 ${"#88B3E9"},
    1px -1px 0 ${"#88B3E9"},
    1px 1px 0 ${"#88B3E9"}
  `,
  whiteSpace: "nowrap",
  animation: `${scrollAnimation} 15s linear infinite`
});
