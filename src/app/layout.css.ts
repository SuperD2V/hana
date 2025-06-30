import { style } from "@vanilla-extract/css";

export const mainContent = style({
  flex: "1",
  marginTop: "0",
  "@media": {
    "(max-width: 768px)": {
      marginTop: "52px"
    }
  }
});
