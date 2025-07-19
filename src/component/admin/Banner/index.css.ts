import { color } from "@/component/shared/designed/color";
import { style } from "@vanilla-extract/css";

export const bannerContainer = style({});

export const imageContainer = style({
  width: "100%",
  height: "739px",
  backgroundColor: "#000",
  position: "relative"
});

export const bulletinContainer = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
  marginTop: "25px"
});

export const buttonStyle = style({
  width: "240px",
  height: "52px",
  borderRadius: "12px",
  border: "none",
  cursor: "pointer",
  fontSize: "16px",
  fontWeight: "600",
  transition: "all 0.2s ease-in-out",
  ":hover": {
    opacity: 0.8
  }
});

// 등록하기 버튼 스타일
export const registerButtonStyle = style({
  width: "240px",
  height: "52px",
  borderRadius: "12px",
  border: "1px solid #5093E9",
  cursor: "pointer",
  transition: "all 0.2s ease-in-out",
  backgroundColor: color.common.white,
  color: color.brand[700],
  ":hover": {
    opacity: 0.8
  }
});

// 삭제하기 버튼 스타일
export const deleteButtonStyle = style({
  width: "240px",
  height: "52px",
  borderRadius: "12px",
  border: "none",
  cursor: "pointer",
  backgroundColor: color.brand[700],
  color: color.common.white,
  ":hover": {
    opacity: 0.8
  }
});
