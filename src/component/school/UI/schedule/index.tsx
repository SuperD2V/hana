import React from "react";
import { TypographyEn } from "@/component/shared";
import * as styles from "./index.css";
import { Card } from "./Card";

export const Schedule = () => {
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
    { id: 4, date: "May 29", title: "요리 교실", teacher: "이순자 집사" }
  ];

  return (
    <div className={styles.container}>
      <TypographyEn variant='largetitle1' className={styles.title}>
        SCHEDULE
      </TypographyEn>
      <div className={styles.scheduleList}>
        {scheduleData.map((item, index) => (
          <React.Fragment key={item.id}>
            <Card date={item.date} title={item.title} teacher={item.teacher} />
            {index < scheduleData.length - 1 && (
              <div className={styles.divider} />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
