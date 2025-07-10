import { style } from "@vanilla-extract/css";
import { color } from "../../shared/designed/color";

export const navigationContainer = style({
  // position: "fixed",
  width: "100%",
  maxWidth: "1680px",
  height: "100px",
  top: "0px",
  left: 0,
  // transform: "translateX(-50%)",
  margin: "0 auto",
  padding: "20px 40px",
  zIndex: 50,
  backgroundColor: color.brand_yellow[2],
  boxShadow: "0 0 12px 0 rgba(rgba(99, 83, 19, 0.08))",
  borderRadius: "999px",
  "@media": {
    "(max-width: 1280px)": {
      height: "51px",
      width: "100vw",
      position: "fixed",
      top: -1,
      left: 0,
      transform: "none",
      borderRadius: "0px",
      padding: "0 16px"
    }
  }
});

export const navWrapper = style({
  width: "100%",
  height: "100%",
  margin: "auto",
  padding: "0 1rem",
  display: "flex",
  alignItems: "center",
  gap: "80px",
  "@media": {
    "(max-width: 1280px)": {
      gap: "0px",
      padding: "0",
      justifyContent: "space-between"
    }
  }
});

export const logo = style({
  fontSize: "1.5rem",
  fontWeight: "bold",
  color: "#333",
  textDecoration: "none",
  cursor: "pointer",
  "@media": {
    "(max-width: 768px)": {
      display: "flex",
      alignItems: "center"
    }
  }
});

export const desktopMenu = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  fontSize: "28px",
  fontWeight: "600",
  lineHeight: "36px",
  letterSpacing: "0.36px",
  color: color.gray[800],
  "@media": {
    "(max-width: 1280px)": {
      display: "none"
    }
  }
});

export const socialLinks = style({
  display: "flex",
  alignItems: "center",
  gap: "20px",
  cursor: "pointer",
  "@media": {
    "(max-width: 1280px)": {
      display: "none"
    }
  }
});

export const navLink = style({
  color: color.gray[800],
  textDecoration: "none",
  transition: "color 0.2s ease",
  outline: "none",
  border: "none",
  ":hover": {
    color: color.brand[700]
  },
  ":focus": {
    outline: "none",
    border: "none"
  }
});
export const mobileMenuButton = style({
  display: "none",
  background: "none",
  border: "none",
  cursor: "pointer",
  padding: "0.5rem",
  "@media": {
    "(max-width: 1280px)": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "0",
      width: "24px",
      height: "24px"
    }
  }
});

export const mobileMenu = style({
  position: "absolute",
  top: "52px",
  left: 0,
  right: 0,
  backgroundColor: color.brand[900],
  borderTop: "1px solid rgba(0, 0, 0, 0.1)",
  transform: "translateY(-30px)",
  opacity: 0,
  pointerEvents: "none",
  transition:
    "transform 0.3s cubic-bezier(0.4,0,0.2,1), opacity 0.3s cubic-bezier(0.4,0,0.2,1)",
  color: color.brand[0],
  zIndex: 9999,
  "@media": {
    "(max-width: 1280px)": {}
  }
});

export const mobileMenuOpen = style({
  transform: "translateY(0)",
  opacity: 1,
  pointerEvents: "auto"
});

export const mobileNavLinks = style({
  display: "flex",
  flexDirection: "column",
  padding: "1rem"
});

export const mobileNavLink = style({
  color: color.brand[0],
  textDecoration: "none",
  fontSize: "24px",
  fontWeight: "700",
  padding: "0.75rem 0",
  borderBottom: `1px solid ${color.brand[600]}`,
  transition: "color 0.2s ease",
  ":hover": {
    color: color.brand[0]
  },
  ":last-child": {
    borderBottom: "none"
  }
});
