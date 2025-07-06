import { globalStyle, style } from "@vanilla-extract/css";

export const scrollContainer = style({
  scrollbarWidth: "none",
  msOverflowStyle: "none",
  WebkitOverflowScrolling: "touch"
});

globalStyle(`${scrollContainer}::-webkit-scrollbar`, {
  display: "none"
}); 