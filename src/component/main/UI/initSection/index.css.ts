import { style } from "@vanilla-extract/css";
import { color } from "@/component/shared/designed/color";

export const homeContainer = style({
  width: "100%",
  height: "100vh"
});

export const homeWrapper = style({
  width: "100%",
  height: "934px",
  backgroundColor: color.brand[100],
  "@media": {
    "screen and (max-width: 768px)": {
      height: "auto",
      minHeight: "369px"
    },
    "screen and (max-width: 425px)": {
      height: "auto",
      minHeight: "300px"
    }
  }
});

export const homeWrapperInner = style({
  width: "100%",
  height: "934px",
  backgroundColor: color.brand[100],
  backgroundImage: "url('/images/main.png')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  borderRadius: "0 0 40px 40px",
  "@media": {
    "screen and (max-width: 768px)": {
      height: "auto",
      minHeight: "369px",
      aspectRatio: "16/9",
      backgroundSize: "cover",
      backgroundPosition: "center"
    },
    "screen and (max-width: 480px)": {
      height: "auto",
      minHeight: "369px",
      aspectRatio: "16/9",
      backgroundSize: "cover",
      backgroundPosition: "center"
    },
    "screen and (max-width: 425px)": {
      height: "auto",
      minHeight: "300px",
      aspectRatio: "16/9",
      backgroundSize: "cover",
      backgroundPosition: "center"
    }
  }
});
