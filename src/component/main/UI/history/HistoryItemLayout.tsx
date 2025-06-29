"use client";

import { Typography, TypographyEn, Line } from "@/component/shared";
import {
  historyLeft,
  historyLeftInner,
  historyLine,
  historyLineContainer,
  historySquare,
  historySquareFlipped,
  historySquareLast,
  keywordGroup,
  lastKeywordContainer,
  number,
  textLineClamp,
  responsiveKeyword
} from "./index.css";
import { color } from "@/component/shared/designed/color";

interface HistoryItemProps {
  item: {
    title: string;
    keyword: string[];
  };
  index: number;
  isFlipped?: boolean;
  isLast?: boolean;
}

export const HistoryItemLayout: React.FC<HistoryItemProps> = ({
  item,
  index,
  isFlipped,
  isLast
}) => {
  return (
    <div className={historyLeft}>
      <div className={historyLeftInner}>
        <TypographyEn variant='title1Semibold' className={number}>
          {String(index + 1).padStart(2, "0")}
        </TypographyEn>
        <Typography variant='largetitle1'>{item.title}</Typography>
      </div>
      <div className={historyLineContainer}>
        <div
          className={`${historySquare} ${
            isFlipped ? historySquareFlipped : ""
          } ${isLast ? historySquareLast : ""}`}
        >
          {isLast && item.keyword.length >= 3 ? (
            <div className={lastKeywordContainer}>
              <div className={keywordGroup}>
                <TypographyEn
                  variant='headlineMedium'
                  className={`${number} ${textLineClamp}`}
                >
                  {item.keyword[0]}
                </TypographyEn>
                <TypographyEn
                  variant='largetitle3Bold'
                  className={`${number} ${textLineClamp} ${responsiveKeyword}`}
                >
                  {item.keyword[1]}
                </TypographyEn>
              </div>
              <TypographyEn
                variant='largetitle3Bold'
                className={`${number} ${textLineClamp} ${responsiveKeyword}`}
              >
                {item.keyword[2]}
              </TypographyEn>
            </div>
          ) : (
            <div className={lastKeywordContainer}>
              <TypographyEn
                variant='largetitle3Bold'
                className={`${number} ${textLineClamp} ${responsiveKeyword}`}
              >
                {item.keyword.join(" ")}
              </TypographyEn>
            </div>
          )}
        </div>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: 0,
            transform: "translateY(-50%)",
            zIndex: 0,
            width: "100%"
          }}
        >
          <Line className={historyLine} color={color.brand[600]} />
        </div>
      </div>
    </div>
  );
};
