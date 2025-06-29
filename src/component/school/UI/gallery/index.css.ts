import { color } from "@/component/shared/designed/color";
import { style } from "@vanilla-extract/css";

export const title = style({
  color: color.brand[0]
});
export const container = style({
  width: "100%",
  height: "100%",
  backgroundColor: color.brand[800]
});
export const wrapper = style({
  padding: "120px 0",
  width: "90%",
  margin: "0 auto",
  "@media": {
    "(max-width: 768px)": {
      padding: "110px 0px"
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
  objectFit: "cover"
});
