import { color } from "@/component/shared/designed/color";
import { style } from "@vanilla-extract/css";

export const title = style({
  color: color.brand[0]
});
export const container = style({
  width: "100%",
  maxWidth: "1680px",
  margin: "0 auto",
  height: "100%",
  backgroundColor: color.brand[800]
});
export const wrapper = style({
  padding: "100px 0 120px 0",
  width: "90%",
  margin: "0 auto",
  "@media": {
    "(max-width: 768px)": {
      padding: "52px 0px 111px 0px"
    }
  }
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
  borderRadius: "50%",
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

export const imageGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gridTemplateRows: "repeat(2, 1fr)",
  gap: "0px",
  marginTop: "40px",
  "@media": {
    "(max-width: 768px)": {
      gridTemplateColumns: "1fr",
      gridTemplateRows: "repeat(8, 1fr)",
      gap: "0px",
      marginTop: "20px",
      justifyItems: "center"
    }
  }
});

export const imageItem = style({
  position: "relative",
  width: "100%",
  aspectRatio: "1 / 1",
  backgroundColor: color.brand[700],
  overflow: "hidden",
  cursor: "pointer",
  transition: "transform 0.2s ease-in-out",
  "@media": {
    "(max-width: 768px)": {
      width: "335px",
      height: "335px",
      aspectRatio: "unset"
    }
  }
});

export const image = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  transition: "opacity 0.3s ease-in-out"
});

export const imageOverlay = style({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  opacity: 0,
  transition: "opacity 0.3s ease-in-out",
  pointerEvents: "none"
});

export const imageItemHover = style({
  selectors: {
    [`${imageItem}:hover &`]: {
      opacity: 1,
      pointerEvents: "auto"
    }
  }
});

export const imageHover = style({
  selectors: {
    [`${imageItem}:hover &`]: {
      opacity: 0.7
    }
  }
});

export const actionButton = style({
  background: "rgba(255, 255, 255, 0.9)",
  border: "none",
  borderRadius: "8px",
  padding: "8px 16px",
  cursor: "pointer",
  fontSize: "14px",
  fontWeight: "500",
  color: "#333",
  transition: "all 0.2s ease-in-out",
  ":hover": {
    background: "rgba(255, 255, 255, 1)",
    transform: "scale(1.05)"
  }
});
