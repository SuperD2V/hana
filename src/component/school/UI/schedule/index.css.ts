import { color } from "@/component/shared/designed/color";
import { style } from "@vanilla-extract/css";

export const container = style({
  maxWidth: "1680px",
  width: "100%",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  gap: "40px",
  padding: "0 120px",
  "@media": {
    "(max-width: 768px)": {
      padding: "0 20px"
    }
  }
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
  backgroundColor: color.gray[200],
  margin: "20px 0",
  width: "100%"
});

export const card = style({
  display: "flex",
  justifyContent: "space-between",
  padding: "20px",
  borderRadius: "8px",
  transition: "background-color 0.2s ease",
  "@media": {
    "(max-width: 768px)": {
      flexDirection: "column",
      gap: "16px"
    }
  }
});

export const cardSelected = style({
  backgroundColor: color.brand[100]
});

export const cardContent = style({
  display: "flex",
  gap: "20px",
  color: color.gray[800],
  padding: "0 20px",
  "@media": {
    "(max-width: 768px)": {
      gap: "12px"
    }
  }
});

export const cardLeft = style({
  display: "flex",
  gap: "80px",
  "@media": {
    "(max-width: 768px)": {
      gap: "20px"
    }
  }
});

export const cardDate = style({
  color: color.gray[600]
});

export const dateContainer = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "4px",
  color: color.gray[600]
});

export const month = style({
  color: color.gray[600],
  fontSize: "14px",
  fontWeight: "500"
});

export const day = style({
  color: color.gray[600],
  fontSize: "18px",
  fontWeight: "600"
});

export const cardTeacher = style({
  color: color.gray[600],
  "@media": {
    "(max-width: 768px)": {
      display: "none"
    }
  }
});

export const button = style({
  width: "240px",
  backgroundColor: color.brand[700],
  color: color.brand[0],
  borderRadius: "10px",
  border: "none",
  padding: "12px 89px",
  margin: "0 auto"
});
