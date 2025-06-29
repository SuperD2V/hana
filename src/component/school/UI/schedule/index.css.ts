import { color } from "@/component/shared/designed/color";
import { style } from "@vanilla-extract/css";

export const container = style({
  maxWidth: "1680px",
  width: "100%",
  margin: "0 auto"
});

export const title = style({
  color: color.brand[800]
});

export const scheduleList = style({
  display: "flex",
  flexDirection: "column",
  gap: "0"
});

export const divider = style({
  height: "1px",
  backgroundColor: color.gray[300],
  margin: "20px 0",
  width: "100%"
});

export const card = style({
  display: "flex",
  justifyContent: "space-between"
});

export const cardContent = style({
  display: "flex",
  gap: "20px",
  color: color.gray[800]
});

export const cardLeft = style({
  display: "flex",
  gap: "80px"
});

export const cardDate = style({
  color: color.gray[600]
});
