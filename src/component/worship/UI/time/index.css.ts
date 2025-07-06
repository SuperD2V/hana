import { color } from "@/component/shared/designed/color";
import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  maxWidth: "1680px",
  margin: "0 auto  160px",
  "@media": {
    "(max-width: 768px)": {
      paddingBottom: "80px"
    }
  }
});

export const cardContainer = style({
  display: "flex",
  flexDirection: "row",
  gap: "16px",
  "@media": {
    "(max-width: 768px)": {
      flexDirection: "column",
      alignItems: "center"
    }
  }
});

export const titleContainer = style({
  backgroundColor: color.brand_yellow[2],
  borderRadius: "12px",
  height: "118px",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "12px",
  "@media": {
    "(max-width: 768px)": {
      width: "332px",
      margin: "0 auto"
    }
  }
});

export const title = style({
  color: color.brand[900]
});

export const card = style({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  width: "320px",
  height: "178px",
  backgroundColor: "rgba(255, 255, 255, 1)",
  borderRadius: "20px",
  padding: "32px 20px",
  boxShadow: "0px 0px 20px 0px rgba(14, 66, 135, 0.04)",
  "@media": {
    "(max-width: 768px)": {
      width: "100%",
      maxWidth: "332px"
    }
  }
});

export const textContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: "12px"
});

export const description = style({
  color: color.gray[600]
});

export const timeContainer = style({
  color: color.gray[800],
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "12px",
  fontSize: "18px"
});

export const buttonContainer = style({
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: "60px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  gap: "12px",
  "@media": {
    "(max-width: 768px)": {
      width: "332px",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    }
  }
});

export const button = style({
  backgroundColor: color.brand[700],
  color: color.brand[0],
  padding: "12px 40px",
  borderRadius: "12px",
  width: "240px",
  cursor: "pointer",
  "@media": {
    "(max-width: 768px)": {
      width: "332px"
    }
  }
});
