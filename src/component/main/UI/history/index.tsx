"use client";

import { historyContainer, topContainer } from "./index.css";
import { HistoryItemLayout } from "./HistoryItemLayout";
import { historyData } from "./historyData";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const HistorySection = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      offset: 100,
      delay: 100,
      duration: 1000
    });
  }, []);

  return (
    <div className={topContainer}>
      <div className={historyContainer}>
        {historyData.map((item, index) => (
          <HistoryItemLayout
            key={item.title}
            item={item}
            index={index}
            isFlipped={index === 1}
            isLast={index === historyData.length - 1}
          />
        ))}
      </div>
    </div>
  );
};
