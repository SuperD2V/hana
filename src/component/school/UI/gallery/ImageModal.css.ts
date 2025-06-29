import { style } from "@vanilla-extract/css";

export const modalContent = style({
  width: "898px !important",
  height: "898px !important",
  maxWidth: "none !important",
  maxHeight: "none !important",
  padding: "0",
  border: "none",
  borderRadius: "0",
  backgroundColor: "rgba(255, 255, 255, 1)",
  boxShadow: "none",
  "@media": {
    "(max-width: 768px)": {
      width: "335px !important",
      height: "335px !important"
    }
  }
});

export const imageContainer = style({
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
});

export const modalImage = style({
  width: "100%",
  height: "100%",
  objectFit: "contain",
  borderRadius: "8px"
});
export const closeButton = style({
  position: "absolute",
  top: "32px",
  right: "40px",
  background: "none",
  border: "none",
  cursor: "pointer",
  padding: 0,
  width: "36px",
  height: "36px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "999px",
  transition: "background 0.15s",
  ":hover": {
    background: "#f3f4f6"
  }
});

export const closeIcon = style({
  width: "28px",
  height: "28px",
  color: "#888",
  transition: "color 0.15s",
  ":hover": {
    color: "#222"
  }
});
