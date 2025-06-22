import { style } from "@vanilla-extract/css";

export const mainContent = style({
  flex: "1",
  marginTop: "52px",
  "@media": {
    "(min-width: 768px)": {
      marginTop: "0"
    }
  }
});
