import { style } from "@vanilla-extract/css";
import { color } from "../shared/designed/color";

export const wrapper = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh"
});

export const signinContainer = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "600px"
});

export const inputContainer = style({
  marginTop: "20px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "514px",
  width: "600px",
  padding: "60px 80px 48px 80px",
  backgroundColor: color.common.white,
  borderRadius: "20px",
  boxShadow: "0px 0px 20px 0px #2C25070A"
});

export const inputBox = style({
  width: "100%",
  display: "flex",
  gap: "12px",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  marginBottom: "28px"
});

export const inputStyle = style({
  width: "100%",
  height: "54px",
  border: `1px solid ${color.gray[200]}`,
  borderRadius: "8px",
  padding: "0 16px"
});

export const buttonContainer = style({
  width: "100%",
  height: "54px",
  borderRadius: "8px",
  textAlign: "center"
});

export const buttonStyle = style({
  width: "100%",
  height: "54px",
  borderRadius: "8px",
  border: "none",
  backgroundColor: color.gray[300],
  color: color.common.white,
  cursor: "pointer",
  fontSize: "16px",
  fontWeight: "600",
  boxShadow: "0px 0px 20px 0px #2C25070A"
});

export const buttonText = style({
  color: color.gray[700],
  cursor: "pointer"
});
export const buttonDivider = style({
  color: color.gray[300]
});

export const buttonTextContainer = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "12px",
  marginTop: "16px"
});
