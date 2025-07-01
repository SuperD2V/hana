"use client";
import { Typography } from "@/component/shared";
import {
  PhilosophyTitle,
  PhilosophyImage,
  philosophyContainer,
  PhilosophyContentStyle
} from "./Philosophy.css";
import { PhilosophyContent } from "./utils/PhilosophyContent";
import PhilosophyCategory from "./PhilosophyCategory";
import { usePhilosophyStore } from "../../../hooks/store/usePhilosophyStore";
import { useShallow } from "zustand/shallow";
import { useResponsiveTypography } from "@/component/shared";

export default function Philosophy() {
  const philosophyContent = PhilosophyContent;
  const { mounted, isMobile } = useResponsiveTypography();

  const { selectedCateogry } = usePhilosophyStore(
    useShallow(state => ({
      selectedCateogry: state.selectedCateogry
    }))
  );

  return (
    <div
      className={philosophyContainer}
      style={{
        padding:
          mounted && isMobile ? "60px 20px 80px 20px" : "192px 120px 0 120px"
      }}
    >
      <Typography
        variant={
          mounted && isMobile ? "largetitle2Semibold" : "largetitle2Bold"
        }
        className={PhilosophyTitle}
      >
        목회철학
      </Typography>
      <div
        className='w-full  top-0'
        style={{ padding: "16px 0", marginTop: 60 }}
      >
        <PhilosophyCategory />
      </div>
      <div
        className={PhilosophyImage}
        style={
          mounted && isMobile
            ? {
                width: "100%",
                height: "200px",
                backgroundImage: `url(/images/philosophy_${selectedCateogry}.png)`
              }
            : {
                width: "100%",
                height: "512px",
                backgroundImage: `url(/images/philosophy_${selectedCateogry}.png)`
              }
        }
      />
      <div
        style={
          mounted && isMobile
            ? {
                gap: 10,
                borderRadius: 20,
                paddingTop: 12,
                paddingRight: 16,
                paddingBottom: 12,
                paddingLeft: 16,
                backgroundColor: "#FFF"
              }
            : {
                gap: 10,
                borderRadius: 20,
                padding: "40px 209px",
                backgroundColor: "#FFF",
                boxShadow: "0px 0px 20px 0px #2C25070A",
                marginBottom: "160px"
              }
        }
      >
        {philosophyContent[selectedCateogry - 1].content.map(
          (paragraph, index) => (
            <Typography
              key={index}
              variant={mounted && isMobile ? "body1Regular" : "headlineRegular"}
              className={PhilosophyContentStyle}
            >
              {paragraph}
            </Typography>
          )
        )}
      </div>
    </div>
  );
}
