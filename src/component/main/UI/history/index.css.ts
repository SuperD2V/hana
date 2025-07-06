import { color } from "@/component/shared/designed/color";
import { style } from "@vanilla-extract/css";

export const historyContainer = style({
  width: "100%",
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

export const title = style({
  textAlign: "center",
  fontWeight: "700 !important",
  fontSize: "60px !important",
  lineHeight: "70px !important",
  letterSpacing: "0.41% !important",
  whiteSpace: "pre-line",
  "@media": {
    "(max-width: 768px)": {
      fontSize: "28px !important",
      lineHeight: "36px !important",
      letterSpacing: "0.36px !important"
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

export const numberTitle = style({
  fontStyle: "italic",
  fontWeight: "600 !important",
  fontSize: "28px !important",
  lineHeight: "100% !important",
  letterSpacing: "0 !important",
  "@media": {
    "(max-width: 768px)": {
      fontSize: "16px !important",
      lineHeight: "100% !important",
      letterSpacing: "0 !important"
    }
  }
});

export const historyLeftInner = style({
  display: "flex",
  justifyContent: "center",
  gap: "20px",
  paddingLeft: "6.71875%",
  color: color.brand[900],
  marginRight: "15px",
  "@media": {
    "(max-width: 768px)": {
      gap: "10px",
      paddingLeft: "4%"
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
  alignItems: "center",
  wordBreak: "keep-all",
  overflowWrap: "break-word",
  padding: "40px 28px",
  "@media": {
    "(max-width: 768px)": {
      width: "186px",
      height: "44px",
      marginLeft: "4%",
      padding: "12px 16px"
    }
  }
});

export const historySquareFlipped = style({
  width: "499px",
  height: "104px",
  marginLeft: "auto !important",
  marginRight: "6.71875% !important",
  "@media": {
    "(max-width: 768px)": {
      width: "250px",
      height: "44px",
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
      padding: "12px 0",
      height: "72px"
    }
  }
});

export const keywordGroup = style({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  maxWidth: "100%"
});

export const lastKeywordContainer = style({
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  gap: "4px",
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
      fontSize: "20px",
      lineHeight: "28px",
      fontWeight: "700"
    }
  }
});

export const firstKeyword = style({
  fontSize: "28px !important",
  lineHeight: "36px !important",
  fontWeight: "600 !important",
  display: "flex",
  alignItems: "flex-start",
  paddingBottom: "13px",
  "@media": {
    "(max-width: 768px)": {
      fontSize: "18px !important",
      lineHeight: "26px !important",
      fontWeight: "500 !important",
      letterSpacing: "0px !important",
      paddingBottom: "3px"
    }
  }
});
