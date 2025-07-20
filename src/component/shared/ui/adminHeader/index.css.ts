import { style } from "@vanilla-extract/css";
import { color } from "../../designed/color";

export const adminHeader = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "40px",
  width: "100%"
});

export const titleText = style({
  color: color.brand[900]
});

export const adminButton = style({
  backgroundColor: color.brand[700],
  width: "200px",
  height: "52px",
  borderRadius: "12px",
  color: color.common.white,
  border: "none"
});
