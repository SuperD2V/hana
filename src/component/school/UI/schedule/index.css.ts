import { color } from "@/component/shared/designed/color";
import { style } from "@vanilla-extract/css";

export const container = style({
  maxWidth: "1680px",
  width: "100%",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  padding: "0 120px",
  "@media": {
    "(max-width: 768px)": {
      padding: "0 20px"
    }
  }
});

export const title = style({
  color: color.brand[800],
  marginBottom: "40px"
});

export const scheduleList = style({
  display: "flex",
  flexDirection: "column",
  gap: "0"
});

export const divider = style({
  height: "1px",
  backgroundColor: color.gray[200],
  margin: "0 0 8px 0",
  width: "100%",
  color: color.gray[200]
});

export const card = style({
  display: "flex",
  justifyContent: "space-between",
  padding: "20px",
  transition: "background-color 0.2s ease, border-bottom-color 0.2s ease",
  cursor: "default",
  borderBottom: "2px solid transparent",
  "@media": {
    "(max-width: 768px)": {
      flexDirection: "column",
      gap: "16px"
    }
  }
});

export const cardClickable = style({
  cursor: "pointer"
});

export const cardSelected = style({
  backgroundColor: color.brand[100],
  borderBottomColor: color.brand[200]
});

export const cardContent = style({
  width: "462px",
  color: color.gray[800],
  display: "flex",
  alignItems: "center",
  gap: "12px",
  "@media": {
    "(max-width: 768px)": {
      gap: "12px"
    }
  }
});

export const cardLeft = style({
  display: "flex",
  gap: "80px",
  "@media": {
    "(max-width: 768px)": {
      gap: "20px"
    }
  }
});

export const cardDate = style({
  color: color.gray[600]
});

export const dateContainer = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "4px",
  color: color.gray[600]
});

export const month = style({
  color: color.gray[600],
  fontSize: "14px",
  fontWeight: "500"
});

export const day = style({
  color: color.gray[600],
  fontSize: "18px",
  fontWeight: "600"
});

export const cardTeacher = style({
  color: color.gray[600],
  "@media": {
    "(max-width: 768px)": {
      display: "none"
    }
  }
});

export const button = style({
  width: "240px",
  backgroundColor: color.brand[700],
  color: color.brand[0],
  borderRadius: "10px",
  border: "none",
  padding: "12px 89px",
  margin: "0 auto"
});

// 이미지 컨테이너 스타일
export const imageContainer = style({
  position: "relative",
  width: "126px",
  height: "126px",
  "@media": {
    "(max-width: 768px)": {
      width: "81px",
      height: "81px"
    }
  }
});

// 이미지 스타일
export const image = style({
  position: "absolute"
});

// 제목 텍스트 스타일
export const titleText = style({
  width: "325px",
  wordWrap: "break-word",
  overflowWrap: "break-word",
  "@media": {
    "(max-width: 768px)": {
      width: "170px"
    }
  }
});
