import { style } from "@vanilla-extract/css";
import { color } from "../../designed/color";

export const navigationContainer = style({
  width: "90vw",
  position: "fixed",
  top: 32,
  left: 0,
  right: 0,
  margin: "0 auto",
  padding: "20px 40px",
  zIndex: 50,
  backgroundColor: color.brand_yellow[2],
  boxShadow: "0 0 12px 0 rgba(rgba(99, 83, 19, 0.08))",
  borderRadius: "999px",
  "@media": {
    "(max-width: 768px)": {
      height: "52px",
      width: "100vw",
      top: 0,
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
  justifyContent: "space-around",
  gap: "80px",
  "@media": {
    "(max-width: 768px)": {
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
    "(max-width: 768px)": {
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
    "(max-width: 768px)": {
      display: "none"
    }
  }
});

export const navLink = style({
  color: color.gray[800],
  textDecoration: "none",
  transition: "color 0.2s ease"
});

export const mobileMenuButton = style({
  display: "none",
  background: "none",
  border: "none",
  cursor: "pointer",
  padding: "0.5rem",
  "@media": {
    "(max-width: 768px)": {
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
  position: "fixed",
  top: "4rem",
  left: 0,
  right: 0,
  backgroundColor: "white",
  borderTop: "1px solid rgba(0, 0, 0, 0.1)",
  transform: "translateY(-100%)",
  transition: "transform 0.3s ease",
  zIndex: 40,
  "@media": {
    "(max-width: 768px)": {
      top: "5rem"
    }
  }
});

export const mobileMenuOpen = style({
  transform: "translateY(0)"
});

export const mobileNavLinks = style({
  display: "flex",
  flexDirection: "column",
  padding: "1rem"
});

export const mobileNavLink = style({
  color: "#333",
  textDecoration: "none",
  fontSize: "1.125rem",
  fontWeight: "500",
  padding: "0.75rem 0",
  borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
  transition: "color 0.2s ease",
  ":hover": {
    color: "#007bff"
  },
  ":last-child": {
    borderBottom: "none"
  }
});
