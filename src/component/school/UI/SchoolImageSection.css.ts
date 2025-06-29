import { style } from "@vanilla-extract/css";
import { color } from "@/component/shared/designed/color";

export const outer = style({
  width: "100%",
  display: "flex",
  justifyContent: "center"
});

export const imageWrapper = style({
  width: "100%",
  maxWidth: "1680px",
  margin: "40px 0",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  "@media": {
    "(max-width: 900px)": {
      width: "100%",
      padding: "0 20px"
    }
  }
});

export const image = style({
  width: "100%",
  maxWidth: "1680px",
  borderRadius: "20px",
  display: "block"
});

export const infoBox = style({
  display: "none",
  "@media": {
    "(max-width: 900px)": {
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      background: color.brand[700],
      color: color.brand[0],
      borderRadius: "16px",
      padding: "20px 32px",
      margin: "16px auto 0",
      width: "100%",
      minWidth: "0",
      boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
      fontSize: "16px",
      alignItems: "center"
    }
  }
});

export const infoTitle = style({
  fontWeight: 700,
  marginBottom: "4px",
  fontSize: "18px"
});

export const infoText = style({
  fontWeight: 400,
  fontSize: "16px",
  display: "flex",
  justifyContent: "space-between",
  gap: "8px"
});
