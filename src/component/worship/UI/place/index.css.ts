import { style } from "@vanilla-extract/css";

export const container = style({
  background: "#fdfcf6",
  padding: "32px 24px",
  borderRadius: "8px",
  width: "100%"
});

export const infoList = style({
  display: "flex",
  flexDirection: "column",
  padding: "0 24px",
  gap: "0"
});

export const infoRow = style({
  display: "flex",
  alignItems: "center",
  padding: "12px 0",
  borderBottom: "1px solid #f2f1ea",
  fontSize: "18px",
  color: "#222",
  "@media": {
    "(max-width: 600px)": {
      fontSize: "15px",
      padding: "10px 0",
      flexDirection: "column",
      alignItems: "flex-start"
    }
  }
});

export const iconLabel = style({
  display: "flex",
  alignItems: "center",
  minWidth: "120px",
  gap: "8px",
  color: "#b0b0a7",
  fontWeight: 500,
  fontSize: "16px"
});

export const iconImage = style({
  width: "24px !important",
  height: "24px !important",
  minWidth: "24px !important",
  minHeight: "24px !important",
  maxWidth: "24px !important",
  maxHeight: "24px !important"
});

export const infoValue = style({
  marginLeft: "16px",
  color: "#222",
  fontWeight: 400,
  wordBreak: "break-all"
});

export const mapWrapper = style({
  marginTop: "32px",
  width: "100%",
  maxWidth: "100%",
  margin: "0 auto",
  padding: "0 24px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center"
});

export const parkingInfo = style({
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  gap: "12px",
  padding: "12px 16px",
  background: "#f6fafd",
  borderRadius: "8px",
  marginTop: "24px",
  marginBottom: "0",
  width: "100%",
  "@media": {
    "(max-width: 600px)": {
      padding: "8px 8px",
      gap: "8px",
      alignItems: "flex-start",
      flexDirection: "row"
    }
  }
});

export const parkingText = style({
  wordBreak: "keep-all",
  lineHeight: "1.6",
  flex: 1,
  fontWeight: 400,
  textAlign: "left",
  width: "100%",
  "@media": {
    "(max-width: 600px)": {
      fontSize: "14px"
    }
  }
});

export const mapBar = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  width: "100%",
  padding: "7px 11px",
  border: "1px solid rgba(0,0,0,0.1)",
  borderRadius: "0 0 2px 2px",
  background: "#f9f9f9",
  gap: "8px",
  fontSize: 13,
  "@media": {
    "(max-width: 600px)": {
      flexDirection: "column",
      alignItems: "flex-end",
      fontSize: 11,
      padding: "7px 4px",
      gap: "4px"
    }
  }
});
