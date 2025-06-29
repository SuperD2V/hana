import { color } from "@/component/shared/designed/color";
import { style } from "@vanilla-extract/css";

export const calendarContainer = style({
  maxWidth: "1680px",
  height: "776px",
  backgroundColor: color.brand_yellow[1],
  marginBottom: "160px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  margin: "0 auto",
  overflowX: "hidden",
  "@media": {
    "(max-width: 1440px)": {
      maxWidth: "100%",
      padding: "0 20px"
    },
    "(max-width: 768px)": {
      padding: "40px 0 24px 0",
      height: "auto",
      marginBottom: "80px"
    }
  }
});

export const calendarWrapper = style({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "12px",
  marginBottom: "12px"
});

export const calendarTitle = style({
  width: "100%",
  color: color.brand[800],
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start"
});

export const calendarContent = style({
  width: "100%",
  height: "68px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: color.brand[800],
  borderRadius: "12px",
  "@media": {
    "(max-width: 768px)": {
      borderRadius: "0"
    }
  }
});

export const calendarDay = style({
  width: "100%",
  height: "68px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: color.gray[700]
});
export const calendarContentMobile = style({
  width: "100%",
  height: "68px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: color.gray[50]
});

export const calendarDays = style({
  width: "100%",
  height: "104px",
  borderRadius: "12px",
  padding: "0 20px",
  display: "flex",
  alignItems: "center",
  backgroundColor: color.gray[100],
  justifyContent: "center",
  marginTop: "8px",
  "@media": {
    "(max-width: 768px)": {
      display: "none"
    }
  }
});

export const cardWrapper = style({
  width: "100%",
  display: "flex",
  alignItems: "stretch",
  justifyContent: "flex-start",
  gap: "12px",
  position: "relative",
  "@media": {
    "(max-width: 1440px)": {
      gap: "8px"
    },
    "(max-width: 768px)": {
      gap: "4px"
    }
  }
});

export const cardContainer = style({
  width: "277px",
  height: "176px",
  backgroundColor: color.brand_yellow[2],
  borderRadius: "20px",
  padding: "20px",
  flexShrink: 0,
  "@media": {
    "(max-width: 768px)": {
      width: "92%",
      height: "auto",
      minHeight: "140px",
      padding: "16px"
    }
  }
});

export const cardTitle = style({
  color: color.brand[900]
});

export const arrow = style({
  width: "64px",
  height: "176px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: color.gray[100],
  borderRadius: "12px",
  alignSelf: "stretch",
  "@media": {
    "(max-width: 768px)": {
      width: "32px",
      height: "140px",
      minWidth: "32px",
      minHeight: "140px",
      borderRadius: "8px"
    }
  }
});

export const calendarSlider = style({
  width: "calc(100% - 140px)",
  flex: 1,
  "@media": {
    "(max-width: 768px)": {
      height: "68px"
    }
  }
});

export const calendarMonthTextWhite = style({
  color: "#fff"
});
