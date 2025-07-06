"use client";

import React from "react";
import {
  sectionBox,
  timeBox,
  title,
  timeDept,
  timeRow,
  timeHour,
  timePlace,
  timeBar,
  timeContainer,
  timeMainSchedule,
  timeScheduleList,
  timeInfoRow
} from "./index.css";
import { Typography, TypographyEn } from "@/component/shared";
import { color } from "@/component/shared/designed/color";
import { useResponsiveTypography } from "@/component/shared/hooks/useResponsiveTypography";

const TimeSection = () => {
  const { mounted, isMobile } = useResponsiveTypography();

  return (
    <div className={`${sectionBox} ${timeBox}`}>
      <div className={title}>
        <TypographyEn
          variant={mounted && isMobile ? "largetitle3Bold" : "largetitle1"}
        >
          TIME
        </TypographyEn>
      </div>
      {/* 샘플 시간표 내용 */}
      <div className={timeContainer}>
        <div className={timeMainSchedule}>
          <Typography
            variant={mounted && isMobile ? "body1Medium" : "headlineRegular"}
          >
            오전11:00 예배실
          </Typography>
        </div>
        <div className={timeScheduleList}>
          <div className={timeRow}>
            <Typography variant={"body1Medium"} className={timeDept}>
              영아부
            </Typography>
            <div className={timeInfoRow}>
              <Typography
                variant={
                  mounted && isMobile ? "body1Regular" : "headlineRegular"
                }
                className={timeHour}
              >
                오전 11:00
              </Typography>
              <Typography
                variant={
                  mounted && isMobile ? "body1Regular" : "headlineRegular"
                }
                className={timeBar}
              >
                |
              </Typography>
              <Typography
                variant={
                  mounted && isMobile ? "body1Regular" : "headlineRegular"
                }
                className={`${timePlace} break-words`}
              >
                비전홀
              </Typography>
            </div>
          </div>
          <div className={timeRow}>
            <span className={timeDept}>유치부</span>
            <div className={timeInfoRow}>
              <Typography
                variant={
                  mounted && isMobile ? "body1Medium" : "headlineRegular"
                }
                className={timeHour}
              >
                오전 10:00
              </Typography>
              <Typography
                variant={
                  mounted && isMobile ? "body1Medium" : "headlineRegular"
                }
                className={timeBar}
              >
                |
              </Typography>
              <Typography
                variant={
                  mounted && isMobile ? "body1Medium" : "headlineRegular"
                }
                className={`${timePlace} break-words`}
              >
                비전홀
              </Typography>
            </div>
          </div>
          <div className={timeRow}>
            <span className={timeDept}>초등부</span>
            <div className={timeInfoRow}>
              <Typography
                variant={
                  mounted && isMobile ? "body1Medium" : "headlineRegular"
                }
                className={timeHour}
              >
                오전 10:00
              </Typography>
              <Typography
                variant={
                  mounted && isMobile ? "body1Medium" : "headlineRegular"
                }
                className={timeBar}
              >
                |
              </Typography>
              <Typography
                variant={
                  mounted && isMobile ? "body1Medium" : "headlineRegular"
                }
                className={`${timePlace} break-words`}
              >
                하나홀
              </Typography>
            </div>
          </div>
          <div className={timeRow}>
            <span className={timeDept}>중고등부</span>
            <div className={timeInfoRow}>
              <Typography
                variant={
                  mounted && isMobile ? "body1Medium" : "headlineRegular"
                }
                className={timeHour}
              >
                오전 10:00
              </Typography>
              <Typography
                variant={
                  mounted && isMobile ? "body1Medium" : "headlineRegular"
                }
                className={timeBar}
              >
                |
              </Typography>
              <Typography
                variant={
                  mounted && isMobile ? "body1Medium" : "headlineRegular"
                }
                className={`${timePlace} break-words`}
              >
                교육관(서울베이커리)
              </Typography>
            </div>
          </div>
          <div className={timeRow}>
            <span className={timeDept}>대학청년부</span>
            <div className={timeInfoRow}>
              <Typography
                variant={
                  mounted && isMobile ? "body1Medium" : "headlineRegular"
                }
                className={timeHour}
              >
                오전 12:25
              </Typography>
              <Typography
                variant={
                  mounted && isMobile ? "body1Medium" : "headlineRegular"
                }
                className={timeBar}
              >
                |
              </Typography>
              <Typography
                variant={
                  mounted && isMobile ? "body1Medium" : "headlineRegular"
                }
                className={`${timePlace} break-words`}
              >
                하나홀
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeSection;
