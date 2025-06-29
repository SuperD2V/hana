import { style } from "@vanilla-extract/css";

export const logDialogContent = style({
  maxWidth: "28rem",
  width: "calc(100vw - 2rem)"
});

export const logDialogHeader = style({
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  gap: "0.75rem"
});

export const logDialogIcon = style({
  flexShrink: 0
});

export const logDialogContentWrapper = style({
  flex: 1
});

export const logDialogTitle = style({
  textAlign: "left",
  margin: 0
});

export const logDialogDescription = style({
  textAlign: "left",
  marginTop: "0.5rem",
  color: "var(--muted-foreground)"
});

export const logDialogFooter = style({
  display: "flex",
  gap: "0.5rem",
  flexDirection: "column-reverse",
  "@media": {
    "(min-width: 640px)": {
      flexDirection: "row",
      justifyContent: "flex-end"
    }
  }
});

export const logDialogButton = style({
  flex: 1,
  "@media": {
    "(min-width: 640px)": {
      flex: "none"
    }
  }
});

// 타입별 스타일
export const successStyles = style({
  borderColor: "rgb(187 247 208)",
  backgroundColor: "rgb(240 253 244)"
});

export const errorStyles = style({
  borderColor: "rgb(254 202 202)",
  backgroundColor: "rgb(254 242 242)"
});

export const warningStyles = style({
  borderColor: "rgb(254 243 199)",
  backgroundColor: "rgb(255 251 235)"
});

export const infoStyles = style({
  borderColor: "rgb(219 234 254)",
  backgroundColor: "rgb(239 246 255)"
});

// 버튼 타입별 스타일
export const successButton = style({
  backgroundColor: "rgb(22 163 74)",
  ":hover": {
    backgroundColor: "rgb(21 128 61)"
  }
});

export const errorButton = style({
  backgroundColor: "rgb(220 38 38)",
  ":hover": {
    backgroundColor: "rgb(185 28 28)"
  }
});

export const warningButton = style({
  backgroundColor: "rgb(202 138 4)",
  ":hover": {
    backgroundColor: "rgb(161 98 7)"
  }
});

export const infoButton = style({
  backgroundColor: "rgb(37 99 235)",
  ":hover": {
    backgroundColor: "rgb(29 78 216)"
  }
});
