import { color } from "@/component/shared/designed/color";
import { style } from "@vanilla-extract/css";

export const calendarContainer = style({
  width: "100%",
  height: "776px",
  padding: "160px 120px",
  backgroundColor: color.brand_yellow[1]
});

export const calendarWrapper = style({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center"
});

export const calendarTitle = style({
  width: "100%",
  color: color.brand[800],
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start"
});

export const calendarContent = style({
  width: "100%",
  height: "68px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: color.brand[800],
  borderRadius: "12px"
});

export const calendarDay = style({
  width: "100%",
  height: "68px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: color.gray[700]
});

export const calendarDays = style({
  width: "100%",
  height: "104px",
  borderRadius: "12px",
  display: "flex",
  alignItems: "center",
  backgroundColor: color.gray[100],
  justifyContent: "center",
  marginTop: "8px"
});

export const cardWrapper = style({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  gap: "12px"
});

export const cardContainer = style({
  width: "277px",
  height: "176px",
  backgroundColor: color.brand_yellow[2],
  borderRadius: "20px",
  padding: "20px"
});

export const cardTitle = style({
  color: color.brand[900]
});

export const arrow = style({
  width: "64px",
  height: "167px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: color.gray[100],
  borderRadius: "12px"
});
