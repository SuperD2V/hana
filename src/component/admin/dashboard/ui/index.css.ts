import { color } from "@/component/shared/designed/color";
import { style } from "@vanilla-extract/css";

export const dropdown = style({
  width: "160px",
  height: "100px",
  position: "absolute",
  borderRadius: "12px",
  boxShadow: "0px 0px 20px 0px #2C25070A",
  backgroundColor: color.brand_yellow[1]
});

export const dropdownContent = style({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "5px",
  padding: "4px",
  borderRadius: "8px"
});

export const dropdownItem = style({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  padding: "8px 12px",
  cursor: "pointer",
  borderRadius: "8px",
  transition: "background-color 0.2s ease",
  selectors: {
    "&:hover": {
      backgroundColor: color.brand_yellow[2]
    }
  }
});
