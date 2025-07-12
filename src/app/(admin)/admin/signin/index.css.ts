import { style } from "@vanilla-extract/css";

export const inputContainer = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "514px",
  width: "100%",
  padding: "60px 80px 48px 80px"
});

export const inputStyle = style({
  width: "100%",
  height: "40px",
  border: "1px solid #E0E0E0",
  borderRadius: "8px",
  padding: "0 16px"
});
