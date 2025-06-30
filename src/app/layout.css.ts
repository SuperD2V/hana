import { style } from "@vanilla-extract/css";

export const mainContent = style({
  flex: "1",
  "@media": {
    "(max-width: 768px)": {
      marginTop: "52px"
    }
  }
});
