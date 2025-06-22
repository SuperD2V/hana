import { Typography, TypographyEn, Line } from "@/component/shared";
import {
  historyContainer,
  historyLeft,
  historyLeftInner,
  historyLine,
  historyLineContainer,
  historySquare,
  historySquareFlipped,
  historySquareLast,
  keywordGroup,
  lastKeywordContainer,
  number
} from "./index.css";

const historyData = [
  {
    title: "모든 세대가 하나님을 알고 경험하는 교회",
    keyword: ["KNOWING HIM"]
  },
  {
    title: "함께 성장하는 교회",
    keyword: ["GROWING TOGETHER"]
  },
  {
    title: "세상으로 넘쳐흐르는 교회",
    keyword: ["OVER", "FLOWING", "TO THE WORLD"]
  }
];

interface HistoryItemProps {
  item: {
    title: string;
    keyword: string[];
  };
  index: number;
  isFlipped?: boolean;
  isLast?: boolean;
}

const HistoryItemLayout: React.FC<HistoryItemProps> = ({
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
                <TypographyEn variant='title1Semibold' className={`${number}`}>
                  {item.keyword[0]}
                </TypographyEn>
                <TypographyEn variant='largetitle3Bold' className={number}>
                  {item.keyword[1]}
                </TypographyEn>
              </div>
              <TypographyEn variant='largetitle3Bold' className={number}>
                {item.keyword[2]}
              </TypographyEn>
            </div>
          ) : (
            <div className={lastKeywordContainer}>
              <TypographyEn variant='largetitle3Bold' className={number}>
                {item.keyword.join(" ")}
              </TypographyEn>
            </div>
          )}
        </div>
        <Line className={historyLine} color='#000000' />
      </div>
    </div>
  );
};

export const HistorySection = () => {
  return (
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
  );
};
