import { style } from "@vanilla-extract/css";

export const arrowButton = style({
  background: "none",
  border: "none",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "8px",
  borderRadius: "50%",
  transition: "opacity 0.3s ease",
  width: "40px",
  height: "40px",

  "@media": {
    "(max-width: 768px)": {
      padding: "6px",
      width: "32px",
      height: "32px"
    },
    "(max-width: 480px)": {
      padding: "4px",
      width: "28px",
      height: "28px"
    }
  },

  ":disabled": {
    opacity: 0.3,
    cursor: "not-allowed"
  },

  ":hover": {
    opacity: 0.8
  }
});
