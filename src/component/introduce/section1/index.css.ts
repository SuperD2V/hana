import { color } from "@/component/shared/designed/color";
import { style } from "@vanilla-extract/css";

export const navigationContainer = style({
  width: "90vw",
  //   position: "fixed",
  marginTop: "36px",
  marginBottom: "28px",
  padding: "20px 40px",
  zIndex: 50,
  backgroundColor: color.brand_yellow[2],
  boxShadow: "0 0 12px 0 rgba(rgba(99, 83, 19, 0.08))",
  borderRadius: "999px",
  "@media": {
    "(max-width: 768px)": {
      width: "100vw",
      top: 0,
      borderRadius: "0px"
    }
  }
});

export const navWrapper = style({
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "0 1rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "80px",
  "@media": {
    "(max-width: 768px)": {
      gap: "20px"
    }
  }
});

export const logo = style({
  fontSize: "1.5rem",
  fontWeight: "bold",
  color: "#333",
  textDecoration: "none",
  cursor: "pointer"
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
      display: "block"
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
