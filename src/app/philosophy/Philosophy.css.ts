import { style } from "@vanilla-extract/css";

export const philosophyContainer = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "192px 120px 0 120px"
});

export const PhilosophyTitle = style({
  color: "#1B5FB8",
  textAlign: "center",
  fontWeight: "800",
  fontSize: "60px",
  lineHeight: "72px"
});

export const PhilosophyImage = style({
  width: "100%",
  height: "512px",
  // backgroundImage: "url(/images/philosophy_1.png)",
  backgroundSize: "cover",
  backgroundPosition: "center",
  marginTop: "40px",
  borderRadius: "20px"
});

export const PhilosophyContentStyle = style({
  color: "#292724",
  fontSize: "18px",
  lineHeight: "28px",
  fontWeight: "400",
  padding: "40px 209px",
  marginTop: "20px",
  whiteSpace: "pre-line",
  marginBottom: "20px"
});
