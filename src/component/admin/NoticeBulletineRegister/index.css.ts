import { style } from "@vanilla-extract/css";
import { color } from "@/component/shared/designed/color";

export const container = style({
  width: "100%",
  padding: "40px",
  backgroundColor: color.brand_yellow[1],
  minHeight: "100vh"
});

export const header = style({
  marginBottom: "40px"
});

export const title = style({
  fontSize: "24px",
  fontWeight: "700",
  color: color.gray[900],
  marginBottom: "8px"
});

export const subtitle = style({
  fontSize: "14px",
  color: color.gray[500]
});

export const form = style({
  display: "flex",
  flexDirection: "column",
  gap: "32px"
});

export const fieldContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  width: "100%"
});

export const label = style({
  fontSize: "16px",
  fontWeight: "600",
  color: color.gray[900]
});

export const required = style({
  color: color.brand[500]
});

export const input = style({
  width: "100%",
  padding: "12px 16px",
  border: `1px solid ${color.gray[300]}`,
  borderRadius: "8px",
  fontSize: "16px",
  fontFamily: "inherit",
  transition: "border-color 0.2s",
  ":focus": {
    outline: "none",
    borderColor: color.brand[500]
  }
});

export const quillContainer = style({
  // react-quill wrapper 스타일

});

export const fileUploadContainer = style({
  border: `2px dashed ${color.gray[300]}`,
  borderRadius: "8px",
  padding: "24px",
  textAlign: "center",
  cursor: "pointer",
  transition: "border-color 0.2s",
  ":hover": {
    borderColor: color.brand[500]
  }
});

export const fileUploadText = style({
  fontSize: "16px",
  color: color.gray[600],
  marginBottom: "8px"
});

export const fileUploadSubtext = style({
  fontSize: "14px",
  color: color.gray[400]
});

export const fileList = style({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  marginTop: "16px"
});

export const fileItem = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "12px 16px",
  backgroundColor: color.gray[50],
  borderRadius: "8px",
  border: `1px solid ${color.gray[200]}`
});

export const fileName = style({
  fontSize: "14px",
  color: color.gray[900]
});

export const removeButton = style({
  background: "none",
  border: "none",
  color: color.gray[500],
  cursor: "pointer",
  padding: "4px",
  borderRadius: "4px",
  ":hover": {
    backgroundColor: color.gray[200],
    color: color.gray[700]
  }
});

export const buttonContainer = style({
  display: "flex",
  justifyContent: "flex-end",
  gap: "12px",
  paddingTop: "32px",
  borderTop: `1px solid ${color.gray[200]}`
});

export const button = style({
  padding: "12px 24px",
  borderRadius: "8px",
  fontSize: "16px",
  fontWeight: "600",
  cursor: "pointer",
  border: "none",
  transition: "all 0.2s"
});

export const cancelButton = style([
  button,
  {
    backgroundColor: color.gray[100],
    color: color.gray[700],
    ":hover": {
      backgroundColor: color.gray[200]
    }
  }
]);

export const submitButton = style([
  button,
  {
    backgroundColor: color.brand[500],
    color: color.common.white,
    ":hover": {
      backgroundColor: color.brand[600]
    }
  }
]);

export const pinnedContainer = style({
  display: "flex",
  gap: "8px",
  padding: '12px 40px',
  backgroundColor: color.common.white,
  borderRadius: "1111px",
  border: `1px solid #5093E9`,
alignSelf: 'flex-end',

});

export const checkboxWrapper = style({
  position: "relative",
  display: "flex",
  alignItems: "center",
  cursor: "pointer"
});

export const checkbox = style({
  width: "20px",
  height: "20px",
  border: `2px solid ${color.brand[500]}`,
  borderRadius: "4px",
  backgroundColor: color.common.white,
  cursor: "pointer",
  appearance: "none",
  ":checked": {
    backgroundColor: color.brand[500],
    borderColor: color.brand[500]
  }
});

export const checkIcon = style({
  display: "none",
  position: "absolute",
  left: "7px",
  top: "5px",
  width: "6px",
  height: "10px",
  border: `solid ${color.common.white}`,
  borderWidth: "0 2px 2px 0",
  transform: "rotate(45deg)"
});

export const checkedIcon = style({
  display: "block"
});

export const pinnedLabel = style({
  fontSize: "14px",
  fontWeight: "500",
  cursor: "pointer",
  userSelect: "none",
  color: '#1B5FB8',
  whiteSpace: 'nowrap'
}); 