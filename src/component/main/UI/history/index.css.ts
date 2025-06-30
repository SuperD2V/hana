import { color } from "@/component/shared/designed/color";
import { style } from "@vanilla-extract/css";

export const historyContainer = style({
  width: "100vw",
  backgroundColor: color.brand[100],
  display: "flex",
  flexDirection: "column",
  gap: "80px",
  padding: "180px 0",
  "@media": {
    "(max-width: 768px)": {
      gap: "40px",
      padding: "90px 0"
    }
  }
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
  color: color.brand[900],
  "@media": {
    "(max-width: 768px)": {
      gap: "10px",
      paddingLeft: "4%",
      flexDirection: "column",
      alignItems: "center"
    }
  }
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
  width: "min(371px, 90vw)",
  minWidth: "280px",
  height: "auto",
  minHeight: "104px",
  backgroundColor: color.brand[200],
  border: `1px solid ${color.brand[600]}`,
  borderRadius: "999px",
  marginLeft: "6.71875%",
  position: "relative",
  zIndex: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "16px 20px",
  wordBreak: "keep-all",
  overflowWrap: "break-word",
  "@media": {
    "(max-width: 768px)": {
      width: "188px !important",
      height: "48px !important",
      marginLeft: "4%",
      padding: "12px 16px"
    }
  }
});

export const historySquareFlipped = style({
  width: "min(499px, 90vw) !important",
  minWidth: "280px !important",
  marginLeft: "auto !important",
  marginRight: "6.71875% !important",
  "@media": {
    "(max-width: 768px)": {
      width: "188px",
      height: "48px",
      marginRight: "4% !important"
    }
  }
});

export const historySquareLast = style({
  width: "min(415px, 90vw)",
  minWidth: "280px",
  height: "auto",
  padding: "16px 0",
  "@media": {
    "(max-width: 768px)": {
      width: "188px",
      height: "48px",
      padding: "12px 0"
    }
  }
});

export const keywordGroup = style({
  display: "flex",
  gap: "8px",
  alignItems: "baseline",
  justifyContent: "center",
  flexWrap: "wrap",
  maxWidth: "100%",
  "@media": {
    "(max-width: 768px)": {
      alignItems: "flex-start"
    }
  }
});

export const lastKeywordContainer = style({
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  gap: "4px",
  maxWidth: "100%",
  "@media": {
    "(max-width: 768px)": {
      alignItems: "flex-start",
      textAlign: "left"
    }
  }
});

export const textLineClamp = style({
  display: "-webkit-box",
  WebkitLineClamp: 2,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  textOverflow: "ellipsis",
  wordBreak: "keep-all",
  overflowWrap: "break-word"
});

export const responsiveKeyword = style({
  "@media": {
    "(max-width: 768px)": {
      fontSize: "20px !important",
      lineHeight: "28px !important",
      fontWeight: "700 !important"
    }
  }
});
