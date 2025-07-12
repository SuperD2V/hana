import { color } from "@/component/shared/designed/color";
import { style } from "@vanilla-extract/css";

export const worshipContainer = style({
  width: "100%",
  margin: "0 auto",
  backgroundColor: color.brand_yellow[1],
  paddingTop: "192px",
  "@media": {
    "(max-width: 1280px)": {
      paddingTop: "107px"
    }
  }
});

export const worshipWrapper = style({
  width: "100%",
  maxWidth: "1680px",
  height: "100%",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto",
  gap: "60px",
  "@media": {
    "(max-width: 1280px)": {
      width: "100%"
    }
  }
});
export const worshipContent = style({
  width: "100%",
  height: "100%",
  backgroundColor: color.brand_yellow[1]
});

export const title = style({
  color: "#1B5FB8",
  textAlign: "center",
  fontWeight: "800",
  fontSize: "60px",
  lineHeight: "72px"
});
