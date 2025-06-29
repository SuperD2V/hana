import { color } from "@/component/shared/designed/color";
import { style } from "@vanilla-extract/css";

export const noticeContainer = style({
  width: "100%",
  height: "100%"
});

export const noticeWrapper = style({
  width: "100%",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "60px",
  paddingTop: "192px",
  "@media": {
    "(max-width: 1280px)": {
      width: "100%",
      paddingTop: "60px"
    }
  }
});
export const title = style({
  color: color.brand[700]
});

export const table = style({
  width: "100%",
  maxWidth: "1680px",
  borderCollapse: "collapse"
});

export const th = style({
  textAlign: "left",
  padding: "8px",
  fontWeight: 700,
  fontSize: "18px",
  color: color.gray[500],
  borderBottom: "1px solid #e5e2d6",
  height: "68px"
});

export const td = style({
  padding: "8px",
  fontSize: "16px",
  height: "74px",
  color: color.gray[800],
  borderBottom: "1px solid #e5e2d6"
});

export const tdLeft = style([
  td,
  { textAlign: "left", color: color.gray[600] }
]);
export const tdCenter = style([
  td,
  { textAlign: "left", color: color.gray[800] }
]);
export const tdRight = style([
  td,
  { textAlign: "right", color: color.gray[600] }
]);
