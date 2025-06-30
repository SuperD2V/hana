"use client";

import React, { useState } from "react";
import { TypographyEn, useResponsiveTypography } from "@/component/shared";
import * as styles from "./index.css";
import { Card } from "./Card";
import { ApplicationModal } from "./ApplicationModal";

export const Schedule = () => {
  const [selectedCardId, setSelectedCardId] = useState<number | null>(null);

  // 예시 데이터 - 실제로는 props나 API에서 받아올 수 있습니다
  const scheduleData = [
    {
      id: 1,
      date: "May 26",
      title: "코바늘 손뜨개 파우치 만들기",
      teacher: "노원예 집사"
    },
    { id: 2, date: "May 27", title: "도자기 만들기", teacher: "김미영 집사" },
    { id: 3, date: "May 28", title: "꽃꽂이 교실", teacher: "박지영 집사" },
    { id: 4, date: "May 29", title: "요리 교실", teacher: "이순자 집사" },
    { id: 5, date: "May 30", title: "요리 교실", teacher: "이순자 집사" }
  ];
  const { mounted, isMobile } = useResponsiveTypography();

  const handleCardClick = (cardId: number) => {
    setSelectedCardId(cardId);
  };

  if (!mounted) return null;
  return (
    <div className={styles.container}>
      <TypographyEn
        variant={isMobile ? "largetitle3Bold" : "largetitle1"}
        className={styles.title}
      >
        SCHEDULE
      </TypographyEn>
      <div className={styles.scheduleList}>
        <div className={styles.divider} />

        {scheduleData.map((item, index) => (
          <React.Fragment key={item.id}>
            <Card
              date={item.date}
              title={item.title}
              teacher={item.teacher}
              isSelected={selectedCardId === item.id}
              onClick={() => handleCardClick(item.id)}
            />
            {index < scheduleData.length - 1 && (
              <div className={styles.divider} />
            )}
          </React.Fragment>
        ))}

        <div className={styles.divider} />
      </div>

      <ApplicationModal
        scheduleData={scheduleData}
        trigger={<button className={styles.button}>신청하기</button>}
      />
    </div>
  );
};
