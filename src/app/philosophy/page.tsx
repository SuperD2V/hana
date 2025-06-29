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

export default function Philosophy() {
  const philosophyContent = PhilosophyContent;

  const { selectedCateogry } = usePhilosophyStore(
    useShallow(state => ({
      selectedCateogry: state.selectedCateogry
    }))
  );

  return (
    <div className={philosophyContainer}>
      <Typography variant='largetitle2Bold' className={PhilosophyTitle}>
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
        style={{
          backgroundImage: `url(/images/philosophy_${selectedCateogry}.png)`
        }}
      />
      <div>
        {philosophyContent[selectedCateogry - 1].content.map(
          (paragraph, index) => (
            <Typography
              key={index}
              variant='headlineRegular'
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
