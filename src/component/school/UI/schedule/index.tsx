"use client";

import React, { useState } from "react";
import {
  Typography,
  TypographyEn,
  useResponsiveTypography
} from "@/component/shared";
import * as styles from "./index.css";
import { Card } from "./Card";
import { ApplicationModal } from "./ApplicationModal";
import { getSchedule } from "../../api";
import { useQuery } from "@tanstack/react-query";

export const Schedule = () => {
  const {
    data: scheduleData,
    isLoading,
    error
  } = useQuery({
    queryKey: ["schedule"],
    queryFn: () => getSchedule({ page: 0, size: 10 })
  });
  const [selectedCardId, setSelectedCardId] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { mounted, isMobile } = useResponsiveTypography();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!scheduleData?.data?.content) return <div>No data available</div>;
  if (!mounted) return null;

  const handleCardClick = (cardId: number) => {
    setSelectedCardId(cardId);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedCardId(null);
  };

  return (
    <div className={styles.container}>
      <TypographyEn
        variant={isMobile ? "title2Medium" : "largetitle1"}
        className={styles.title}
      >
        SCHEDULE
      </TypographyEn>
      <div className={styles.scheduleList}>
        <div className={styles.divider} />

        {scheduleData.data.content.map((item, index) => (
          <React.Fragment key={item.visionClassId}>
            <Card
              visionClassId={item.visionClassId}
              date={item.classDate}
              title={item.title}
              teacher={item.instructor}
              isSelected={selectedCardId === item.visionClassId}
              onClick={() => handleCardClick(item.visionClassId)}
              thumbnailUrl={item.thumbnail.fileUrl}
            />
            {index < scheduleData.data.content.length - 1 && (
              <div className={styles.divider} />
            )}
          </React.Fragment>
        ))}

        <div className={styles.divider} />
      </div>

      {isModalOpen && (
        <ApplicationModal
          selectedCardId={selectedCardId ?? 0}
          isOpen={isModalOpen}
          onClose={handleModalClose}
        />
      )}
    </div>
  );
};
