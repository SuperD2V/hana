import { style } from "@vanilla-extract/css";

export const sliderContainer = style({
  position: "relative",
  width: "100%",
  overflow: "hidden"
});

export const sliderWrapper = style({
  display: "flex",
  transition: "transform 0.3s ease-in-out",
  width: "100%"
});

export const arrow = style({
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  background: "none",
  border: "none",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  transition: "opacity 0.3s ease",
  zIndex: 10,

  ":disabled": {
    opacity: 0.3,
    cursor: "not-allowed"
  }
});

export const arrowHover = style({
  ":hover": {
    opacity: 0.8
  }
});

export const arrowLeft = style({
  left: "10px"
});

export const arrowRight = style({
  right: "10px"
});
