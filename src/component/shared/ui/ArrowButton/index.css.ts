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

  ":disabled": {
    opacity: 0.3,
    cursor: "not-allowed"
  },

  ":hover": {
    opacity: 0.8
  }
});
