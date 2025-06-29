import { style } from "@vanilla-extract/css";

import { color } from "@/component/shared/designed/color";
export const noticeContainer = style({
  width: "100%",
  height: "100%",
  padding: "160px 120px",
  backgroundColor: color.brand[800],
  "@media": {
    "screen and (max-width: 1920px)": {
      padding: "120px 80px"
    },
    "screen and (max-width: 1440px)": {
      padding: "80px 40px"
    },
    "screen and (max-width: 1200px)": {
      padding: "40px 16px"
    },
    "screen and (max-width: 1024px)": {
      padding: "24px 8px"
    },
    "screen and (max-width: 768px)": {
      padding: "12px 0"
    }
  }
});

export const noticeWrapper = style({
  display: "flex",
  gap: "20px",
  maxWidth: "1680px",
  width: "100%",
  margin: "0 auto",
  justifyContent: "center",
  alignItems: "stretch",
  // 반응형: 모바일에서 세로 정렬
  flexDirection: "row",
  "@media": {
    "screen and (max-width: 1920px)": {
      maxWidth: "1680px"
    },
    "screen and (max-width: 1440px)": {
      maxWidth: "100%",
      width: "100%",
      padding: "0 8px"
    },
    "screen and (max-width: 1200px)": {
      maxWidth: "100%",
      width: "100%",
      padding: "0 8px"
    },
    "screen and (max-width: 1024px)": {
      maxWidth: "100%",
      width: "100%",
      padding: "0 8px"
    },
    "screen and (max-width: 768px)": {
      flexDirection: "column",
      padding: "24px 8px",
      maxWidth: "100%",
      width: "100%"
    }
  }
});

export const sectionBox = style({
  backgroundColor: "#fff",
  borderRadius: "20px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
  padding: "32px 24px",
  display: "flex",
  flexDirection: "column",
  minWidth: 0,
  minHeight: "320px",
  height: "675px",
  "@media": {
    "screen and (max-width: 768px)": {
      minHeight: "180px",
      padding: "20px 8px",
      marginBottom: "16px",
      height: "auto"
    }
  }
});

export const leftBox = style({
  flex: 1,
  minWidth: 0,
  flexBasis: "1046px",
  maxWidth: "1046px",
  "@media": {
    "screen and (max-width: 1440px)": {
      flexBasis: "700px",
      maxWidth: "700px"
    },
    "screen and (max-width: 1280px)": {
      flexBasis: "100%",
      maxWidth: "100%",
      width: "100%"
    },
    "screen and (max-width: 1024px)": {
      flexBasis: "100%",
      maxWidth: "100%",
      width: "100%"
    },
    "screen and (max-width: 768px)": {
      height: "611px",
      width: "100%",
      maxWidth: "100%",
      flexBasis: "auto"
    }
  }
});

export const rightBox = style({
  display: "flex",
  flexDirection: "column",
  flex: 1,
  gap: "24px",
  minWidth: 0,
  justifyContent: "space-between",
  height: "675px",
  "@media": {
    "screen and (max-width: 1440px)": {
      flexBasis: "100%",
      maxWidth: "100%",
      width: "100%"
    },
    "screen and (max-width: 1280px)": {
      flexBasis: "100%",
      maxWidth: "100%",
      width: "100%"
    },
    "screen and (max-width: 1024px)": {
      flexBasis: "100%",
      maxWidth: "100%",
      width: "100%"
    },
    "screen and (max-width: 768px)": {
      flexDirection: "column",
      width: "100%",
      gap: "16px",
      height: "auto"
    }
  }
});

export const timeBox = style({
  height: "403px",
  "@media": {
    "screen and (max-width: 768px)": {
      height: "550px"
    }
  }
});

export const helpBox = style({
  height: "310px",
  flex: 1,
  minHeight: 0,
  "@media": {
    "screen and (max-width: 768px)": {
      height: "230px",
      flex: "unset"
    }
  }
});

export const newsContainer = style({
  width: "100%",
  height: "100%",
  backgroundColor: "rgb(255, 255, 255, 1)",
  padding: "40px 48px"
});

export const newsMobileBox = style({
  "@media": {
    "screen and (max-width: 768px)": {
      height: "611px"
    }
  }
});

export const title = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: color.brand[800]
});

// 공지사항 리스트 스타일
export const newsList = style({
  marginTop: 32,
  borderRadius: "16px",
  background: "#fff",
  overflow: "hidden",
  boxShadow: "0 2px 8px rgba(0,0,0,0.04)"
});

export const newsItem = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "20px 32px",
  borderBottom: `1px solid #E6EEF7`,
  position: "relative",
  cursor: "pointer",
  transition: "background 0.2s",
  selectors: {
    "&:hover::after": {
      content: '""',
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      height: "3px",
      background: "#3888FF",
      borderRadius: "2px"
    },
    "&:hover": {
      background: "#F5F9FF"
    }
  }
});

export const newsItemFirst = style({
  fontWeight: 700
});

export const badge = style({
  background: "#F8F8E1",
  color: "#3888FF",
  borderRadius: "8px",
  fontSize: "14px",
  fontWeight: 600,
  padding: "4px 12px",
  marginRight: "16px",
  display: "inline-block"
});

export const newsTitle = style({
  fontSize: "18px",
  fontWeight: 500,
  color: "#222"
});

export const newsDate = style({
  fontSize: "15px",
  color: "#666"
});

export const timeRow = style({
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  width: "100%",
  "@media": {
    "screen and (max-width: 768px)": {
      flexDirection: "column",
      alignItems: "center",
      gap: "8px",
      minHeight: "auto",
      padding: "8px 0"
    }
  }
});

export const timeInfoRow = style({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "8px",
  marginLeft: "8px"
});

export const timeDept = style({
  marginRight: "8px",
  fontWeight: 600,
  width: "130px",
  display: "inline-block",
  flexShrink: 0,
  "@media": {
    "screen and (max-width: 768px)": {
      marginRight: "0",
      width: "auto",
      fontSize: "14px"
    }
  }
});

export const timeHour = style({
  width: "80px",
  display: "inline-block",
  textAlign: "left",
  "@media": {
    "screen and (max-width: 768px)": {
      width: "auto"
    }
  }
});

export const timeBar = style({
  margin: "0 8px",
  color: "#B0B0B0",
  fontWeight: 400,
  "@media": {
    "screen and (max-width: 768px)": {
      display: "inline-block",
      margin: "0 8px"
    }
  }
});

export const timePlace = style({
  flex: 1,
  minWidth: 0,
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  maxWidth: "160px",
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "14px",
      flex: "unset",
      maxWidth: "100%"
    }
  }
});

export const timeContainer = style({
  textAlign: "center"
});

export const timeMainSchedule = style({
  backgroundColor: color.brand_yellow[2],
  padding: "12px 0",
  borderRadius: "8px",
  marginBottom: "16px"
});

export const timeScheduleList = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "4px",
  width: "362px",
  margin: "0 auto",
  textAlign: "left",
  "@media": {
    "screen and (max-width: 768px)": {
      width: "100%",
      gap: "0"
    }
  }
});

export const helpContent = style({
  marginTop: 24,
  textAlign: "left",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  gap: "16px"
});

export const helpItem = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  gap: "8px",
  marginBottom: "8px",
  width: "288px"
});

export const helpText = style({
  flex: 1
});

export const helpIcon = style({
  width: "16px",
  height: "16px",
  color: color.brand[600],
  flexShrink: 0
});
