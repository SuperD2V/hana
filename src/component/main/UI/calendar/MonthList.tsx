import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TypographyEn } from "@/component/shared";
import { monthNames } from "../../const";
import { color } from "@/component/shared/designed/color";
import {
  calendarContent,
  calendarContentMobile,
  calendarDay,
  calendarMonthTextWhite
} from "./index.css";

interface MonthListProps {
  isMobile: boolean;
  currentMonth?: number; // 0-11 (0: January, 11: December)
  selectedMonth: number; // 선택된 달 (0-11)
  onMonthSelect: (monthIndex: number) => void; // 선택된 달을 부모 컴포넌트에 전달
}

const MonthList = ({
  isMobile,
  currentMonth,
  selectedMonth,
  onMonthSelect
}: MonthListProps) => {
  const handleMonthClick = (monthIndex: number) => {
    onMonthSelect(monthIndex);
  };

  if (isMobile) {
    const sliderSettings = {
      dots: false,
      infinite: true,
      speed: 400,
      slidesToShow: 7,
      slidesToScroll: 1,
      arrows: false,
      centerMode: true,
      centerPadding: "12%",
      initialSlide: selectedMonth,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: "12%",
            initialSlide: selectedMonth
          }
        },
        {
          breakpoint: 425,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: "8%",
            initialSlide: selectedMonth
          }
        }
      ]
    };
    return (
      <div
        className={calendarContent}
        style={{ width: "100%", margin: "16px 0" }}
      >
        <div
          style={{
            height: "auto",
            overflow: "hidden",
            position: "relative"
          }}
        >
          <Slider {...sliderSettings}>
            {monthNames.map((month, index) => {
              const isSelectedMonth = index === selectedMonth;
              return (
                <div
                  key={month}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "0 4px"
                  }}
                  onClick={() => handleMonthClick(index)}
                >
                  <div
                    style={{
                      backgroundColor: isSelectedMonth
                        ? color.brand_yellow[1]
                        : "transparent",
                      textAlign: "center",
                      padding: "12px 8px",
                      borderRadius: 999,
                      color: isSelectedMonth ? color.brand[900] : undefined,
                      cursor: "pointer",
                      minWidth: "68px",
                      minHeight: "44px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    <TypographyEn
                      variant={"title3Semibold"}
                      className={
                        isSelectedMonth ? undefined : calendarMonthTextWhite
                      }
                    >
                      {month}
                    </TypographyEn>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    );
  }
  // 데스크탑: 기존처럼 가로 나열
  return (
    <div className={calendarContent}>
      {monthNames.map((month, index) => {
        const isSelectedMonth = index === selectedMonth;
        return (
          <div
            key={month}
            className={isSelectedMonth ? undefined : calendarMonthTextWhite}
            style={{}}
            onClick={() => handleMonthClick(index)}
          >
            <div
              style={{
                backgroundColor: isSelectedMonth
                  ? color.brand_yellow[1]
                  : "transparent",
                textAlign: "center",
                padding: "8px 37.21px",
                borderRadius: 999,
                color: isSelectedMonth ? color.brand[900] : undefined,
                cursor: "pointer",
                minWidth: "80px",
                minHeight: "40px",
                display: "flex",
                alignItems: "center",
                gap: "12px",
                justifyContent: "center"
              }}
            >
              <TypographyEn variant={"title3Semibold"}>{month}</TypographyEn>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MonthList;
