import { color } from "@/component/shared/designed/color";
import { style } from "@vanilla-extract/css";

export const historyContainer = style({
  width: "100vw",
  backgroundColor: color.brand[100],
  display: "flex",
  flexDirection: "column",
  gap: "80px",
  padding: "100px 0"
});

export const historyLeft = style({
  width: "100%",
  height: "100%",
  backgroundColor: color.brand[100]
});

export const historyRight = style({
  width: "50%",
  height: "100%",
  backgroundColor: color.brand[100]
});

export const number = style({
  color: color.brand[700],
  lineHeight: "100% !important"
});

export const historyLeftInner = style({
  display: "flex",
  justifyContent: "center",
  gap: "20px",
  paddingLeft: "6.71875%",
  color: color.brand[900]
});

export const historyLineContainer = style({
  position: "relative",
  marginTop: "20px"
});

export const historyLine = style({
  position: "absolute",
  top: "50%",
  left: 0,
  transform: "translateY(-50%)",
  zIndex: 0,
  width: "100%"
});

export const historySquare = style({
  width: "371px",
  height: "104px",
  backgroundColor: color.brand[200],
  border: `1px solid ${color.brand[600]}`,
  borderRadius: "999px",
  marginLeft: "6.71875%",
  position: "relative",
  zIndex: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
});

export const historySquareFlipped = style({
  width: "499px",
  marginLeft: "auto",
  marginRight: "6.71875%"
});

export const historySquareLast = style({
  width: "415px",
  height: "auto",
  padding: "16px 0"
});

export const keywordGroup = style({
  display: "flex",
  gap: "8px",
  alignItems: "baseline",
  justifyContent: "center"
});

export const lastKeywordContainer = style({
  textAlign: "center"
});
