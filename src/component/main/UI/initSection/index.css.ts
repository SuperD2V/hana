import { style } from "@vanilla-extract/css";
import { color } from "@/component/shared/designed/color";

export const homeContainer = style({
  width: "100%",
  height: "100vh"
});

export const homeWrapper = style({
  width: "100%",
  height: "934px",
  backgroundColor: color.brand[100]
});

export const homeWrapperInner = style({
  width: "100%",
  height: "934px",
  backgroundColor: color.brand[100],
  backgroundImage: "url('/images/main.png')",
  backgroundSize: "100% 100%",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  borderRadius: "0 0 40px 40px",
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
