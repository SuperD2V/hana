import { style } from "@vanilla-extract/css";

export const homeContainer = style({
  width: "100%",
  height: "100vh"
});

export const homeWrapper = style({
  width: "100%",
  height: "934px",
  backgroundImage: "url('/images/main.png')",
  backgroundSize: "100% 100%",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  "@media": {
    "screen and (max-width: 768px)": {
      height: "369px",
      backgroundSize: "100% 100%",
      backgroundPosition: "center"
    },
    "screen and (max-width: 480px)": {
      height: "369px",
      backgroundSize: "100% 100%",
      backgroundPosition: "center"
    }
  }
});
