import { style } from "@vanilla-extract/css";

export const overlay = style({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.4)",
  zIndex: 99998,
  backdropFilter: "blur(2px)"
});

export const content = style({
  backgroundColor: "white",
  padding: "40px",
  borderRadius: "60px",
  boxShadow:
    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  zIndex: 99999,
  width: "1240px",
  height: "660px",
  minWidth: "1240px",
  minHeight: "660px",
  maxWidth: "1240px",
  maxHeight: "660px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  margin: 0,
  "@media": {
    "(max-width: 768px)": {
      width: "90vw",
      height: "auto",
      minWidth: "auto",
      minHeight: "auto",
      maxWidth: "90vw",
      maxHeight: "90vh",
      padding: "24px",
      borderRadius: "30px"
    }
  }
});

export const contentInner = style({
  display: "flex",
  flexDirection: "row",
  height: "540px",
  gap: "48px",
  "@media": {
    "(max-width: 768px)": {
      flexDirection: "column",
      height: "auto",
      gap: "24px"
    }
  }
});

export const imageBox = style({
  width: "50%",
  height: "100%",
  background: "#E5E7EB",
  borderRadius: "30px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  "@media": {
    "(max-width: 768px)": {
      width: "100%",
      height: "200px",
      borderRadius: "20px"
    }
  }
});

export const infoBox = style({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  "@media": {
    "(max-width: 768px)": {
      gap: "24px"
    }
  }
});

export const title = style({
  fontSize: "32px",
  fontWeight: 700,
  marginBottom: "24px",
  color: "#222",
  "@media": {
    "(max-width: 768px)": {
      fontSize: "24px",
      marginBottom: "16px"
    }
  }
});

export const description = style({
  color: "#222",
  fontSize: "18px",
  marginBottom: "16px",
  lineHeight: 1.6,
  "@media": {
    "(max-width: 768px)": {
      fontSize: "16px",
      marginBottom: "12px"
    }
  }
});

export const list = style({
  color: "#444",
  fontSize: "16px",
  marginBottom: "32px",
  lineHeight: 1.7,
  "@media": {
    "(max-width: 768px)": {
      fontSize: "14px",
      marginBottom: "24px"
    }
  }
});

export const submitButton = style({
  backgroundColor: "#2563eb",
  color: "white",
  padding: "18px 0",
  borderRadius: "12px",
  border: "none",
  cursor: "pointer",
  fontSize: "18px",
  fontWeight: 600,
  width: "100%",
  marginTop: "auto",
  display: "block",
  flex: 1,
  ":hover": {
    backgroundColor: "#1749b2"
  },
  "@media": {
    "(max-width: 768px)": {
      padding: "14px 0",
      fontSize: "16px"
    }
  }
});

export const closeButton = style({
  position: "absolute",
  top: "32px",
  right: "40px",
  background: "none",
  border: "none",
  cursor: "pointer",
  padding: 0,
  width: "36px",
  height: "36px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "50%",
  transition: "background 0.15s",
  flex: 1,
  ":hover": {
    background: "#f3f4f6"
  },
  "@media": {
    "(max-width: 768px)": {
      position: "static",
      width: "auto",
      height: "auto",
      background: "#f3f4f6",
      padding: "14px 20px",
      borderRadius: "12px",
      fontSize: "16px",
      fontWeight: 600,
      color: "#666"
    }
  }
});

export const closeIcon = style({
  width: "28px",
  height: "28px",
  color: "#888",
  transition: "color 0.15s",
  ":hover": {
    color: "#222"
  },
  "@media": {
    "(max-width: 768px)": {
      display: "none"
    }
  }
});

export const buttonContainer = style({
  display: "flex",
  gap: "12px",
  width: "100%",
  "@media": {
    "(max-width: 768px)": {
      flexDirection: "row",
      gap: "12px",
      width: "100%"
    }
  }
});
