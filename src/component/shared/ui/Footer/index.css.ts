import { style } from "@vanilla-extract/css";
import { color } from "../../designed/color";

export const footerContainer = style({
  height: "437px",
  position: "static",
  backgroundColor: color.gray[700],
  padding: "73px 0 85px 120px",
  "@media": {
    "(max-width: 768px)": {
      height: "347px",
      padding: "40px 20px"
    }
  }
});

export const footerWrapper = style({
  width: "458px", // 너비를 458px로 수정
  marginTop: "32px",
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  "@media": {
    "(max-width: 768px)": {
      width: "100%",
      marginTop: "20px",
      gap: "12px"
    }
  }
});
export const footerText = style({
  color: color.gray[200],
  "@media": {
    "(max-width: 768px)": {
      fontSize: "14px",
      lineHeight: "1.4"
    }
  }
});

export const footerBottom = style({
  display: "flex",
  gap: "16px",
  "@media": {
    "(max-width: 768px)": {
      marginTop: "40px"
    }
  }
});
