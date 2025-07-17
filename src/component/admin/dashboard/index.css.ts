import { color } from "@/component/shared/designed/color";
import { style } from "@vanilla-extract/css";

export const noticeContainer = style({
  width: "100%",
  height: "100%"
});

export const noticeWrapper = style({
  width: "100%",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "60px",
  paddingTop: "192px",
  "@media": {
    "(max-width: 1280px)": {
      width: "100%",
      paddingTop: "107px"
    }
  }
});
export const title = style({
  color: "#1B5FB8",
  textAlign: "center",
  fontWeight: "800",
  fontSize: "60px",
  lineHeight: "72px"
});

export const table = style({
  width: "100%",
  maxWidth: "1680px",
  borderCollapse: "collapse"
});

export const th = style({
  textAlign: "left",
  padding: "8px",
  fontWeight: 700,
  fontSize: "18px",
  color: color.gray[500],
  borderBottom: "1px solid #e5e2d6",
  height: "68px"
});

export const td = style({
  padding: "8px",
  fontSize: "16px",
  height: "74px",
  color: color.gray[800],
  borderBottom: "1px solid #e5e2d6"
});

export const tdLeft = style([
  td,
  { textAlign: "left", color: color.gray[600] }
]);
export const tdCenter = style([
  td,
  { textAlign: "left", color: color.gray[800] }
]);
export const tdRight = style([
  td,
  { textAlign: "center", color: color.gray[600] }
]);

// 모바일용 스타일 추가
export const mobileTableRow = style({
  "@media": {
    "(max-width: 768px)": {
      display: "flex",
      flexDirection: "column",
      borderBottom: "1px solid #e5e2d6",
      padding: "16px 0"
    }
  }
});

export const mobileTitleSection = style({
  "@media": {
    "(max-width: 768px)": {
      display: "flex",
      alignItems: "center",
      gap: "16px",
      marginBottom: "8px"
    }
  }
});

export const mobileInfoSection = style({
  "@media": {
    "(max-width: 768px)": {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      color: color.gray[600],
      fontSize: "14px"
    }
  }
});

export const mobileDivider = style({
  "@media": {
    "(max-width: 768px)": {
      width: "1px",
      height: "12px",
      backgroundColor: color.gray[300],
      margin: "0 4px"
    }
  }
});

export const mobileNumber = style({
  "@media": {
    "(max-width: 768px)": {
      color: color.gray[600],
      fontSize: "16px",
      fontWeight: "500",
      minWidth: "40px"
    }
  }
});

export const mobileTitle = style({
  "@media": {
    "(max-width: 768px)": {
      color: color.gray[800],
      fontSize: "16px",
      fontWeight: "500",
      cursor: "pointer"
    }
  }
});

export const tableContainer = style({
  width: "100%",
  maxWidth: "1680px",
  padding: "16px"
});

export const paginationContainer = style({
  width: "100%",
  maxWidth: "1680px",
  marginBottom: "152px",
  "@media": {
    "(max-width: 768px)": {
      marginBottom: "80px"
    }
  }
});
