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
  backgroundImage: "url('/images/main.gif')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  borderRadius: "0 0 40px 40px",
  overflow: "hidden",
  color: "white",
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

export const contentContainer = style({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center"
});

export const titleContainer = style({
  display: "flex",
  justifyContent: "flex-start",
  width: "1471px",
  "@media": {
    "screen and (max-width: 768px)": {
      width: "305px"
    }
  }
});

export const titleText = style({
  color: "#FFFFFF",
  marginBottom: "4px"
});
