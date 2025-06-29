import React from "react";
import { noticeContainer, noticeWrapper, rightBox, leftBox } from "./index.css";
import NewsSection from "./NewsSection";
import TimeSection from "./TimeSection";
import HelpSection from "./HelpSection";

export const Notice = () => {
  return (
    <div className={noticeContainer}>
      <div className={noticeWrapper}>
        <div className={leftBox}>
          <NewsSection />
        </div>
        <div className={rightBox}>
          <TimeSection />
          <HelpSection />
        </div>
      </div>
    </div>
  );
};
