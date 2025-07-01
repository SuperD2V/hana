import { style } from "@vanilla-extract/css";
import { color } from "@/component/shared/designed/color";

export const homeWrapper = style({
  width: "100%",
  height: "934px",
  backgroundColor: color.brand[100],
  "@media": {
    "screen and (max-width: 768px)": {
      height: "auto",
      minHeight: "369px",
      marginTop: "52px"
    },
    "screen and (max-width: 425px)": {
      height: "auto",
      minHeight: "300px",
      marginTop: "52px"
    }
  }
});

export const homeWrapperInner = style({
  width: "100%",
  margin: "0 auto",
  padding: "0 20px",
  height: "934px",
  backgroundColor: color.brand[100],
  backgroundImage: "url('/images/main.png')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  borderRadius: "0 0 40px 40px",
  overflow: "hidden",
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
      minHeight: "369px",
      aspectRatio: "16/9",
      backgroundSize: "cover",
      backgroundPosition: "center"
    }
  }
});
