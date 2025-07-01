import { color } from "@/component/shared/designed/color";
import { style } from "@vanilla-extract/css";

export const floatingBar = style({
  position: "fixed",
  top: "60vh",
  right: "4vw",
  width: "88px",
  zIndex: 100,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "8px",
  fontSize: "16px",
  lineHeight: "25px",
  letterSpacing: "-2.5%"
});

export const floatingBarList = style({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: color.common.white,
  boxShadow: "0px 0px 12px 0px #081F3C14",
  color: color.gray[700],
  padding: "12px",
  borderRadius: "12px"
});

export const floatingBarItem = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "4px",
  cursor: "pointer",
  width: "78px",
  height: "78px"
});

export const floatingBarItemText = style({
  textAlign: "center",
  fontWeight: "500",
  fontSize: "14px",
  lineHeight: "100%",
  color: color.common.white
});

export const scrollTopContainer = style({
  width: "78px",
  height: "78px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  backgroundColor: color.brand[900],
  boxShadow: "0px 0px 12px 0px #081F3C14",
  borderRadius: "8px"
});
