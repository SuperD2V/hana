"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogClose,
  DialogTitle
} from "@/components/ui/dialog";
import * as styles from "./ApplicationModal.css";
import { X } from "lucide-react";
import { Typography, useResponsiveTypography } from "@/component/shared";
import { getScheduleDetail, ScheduleItem } from "../../api";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

interface ApplicationModalProps {
  selectedCardId: number;
  isOpen: boolean;
  onClose: () => void;
}

export const ApplicationModal: React.FC<ApplicationModalProps> = ({
  selectedCardId,
  isOpen,
  onClose
}) => {
  const { mounted, isMobile } = useResponsiveTypography();

  // 날짜를 한국어 형식으로 포맷팅하는 함수
  const formatKoreanDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      const weekdays = ["일", "월", "화", "수", "목", "금", "토"];

      const month = date.getMonth() + 1;
      const day = date.getDate();
      const weekday = weekdays[date.getDay()];
      const hours = date.getHours();
      const minutes = date.getMinutes();

      const period = hours >= 12 ? "오후" : "오전";
      const displayHour = hours > 12 ? hours - 12 : hours === 0 ? 12 : hours;
      const displayMinutes =
        minutes === 0 ? "00" : minutes.toString().padStart(2, "0");

      return `${month}월 ${day}일(${weekday}) ${period}${displayHour}:${displayMinutes}`;
    } catch (error) {
      return dateString; // 파싱 실패 시 원본 반환
    }
  };

  const {
    data: scheduleDetailData,
    isLoading,
    error
  } = useQuery({
    queryKey: ["scheduleDetail", selectedCardId],
    queryFn: () => getScheduleDetail({ visionClassId: selectedCardId })
  });

  if (!mounted) return null;
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogOverlay className={styles.overlay} />
      <DialogContent className={styles.content} showCloseButton={false}>
        {/* 데스크톱용 오른쪽 위 X 닫기 버튼 */}
        {!isMobile && (
          <DialogClose asChild>
            <button className={styles.closeButton} aria-label='닫기'>
              <X className={styles.closeIcon} />
            </button>
          </DialogClose>
        )}
        <div className={styles.contentInner}>
          {/* 좌측 이미지 영역 */}
          <div className={styles.imageBox}>
            <Image
              src={scheduleDetailData?.thumbnail.fileUrl ?? ""}
              alt={scheduleDetailData?.title ?? "thumbnail"}
              fill
              style={{ position: "absolute" }}
            />
          </div>
          {/* 우측 정보 영역 */}
          <div className={styles.infoBox}>
            <div>
              <DialogTitle className={styles.title}>
                {scheduleDetailData?.title}
              </DialogTitle>
              <div className={styles.description}>
                - 일시: {formatKoreanDate(scheduleDetailData?.classDate ?? "")}
                <br />- 장소: {scheduleDetailData?.location}
                <br />- 강사: {scheduleDetailData?.instructor}
                <br />
              </div>
              <ul className={styles.list}>
                <li>- {scheduleDetailData?.content}</li>
              </ul>
            </div>
            <DialogFooter>
              <div className={styles.buttonContainer}>
                <button
                  onClick={() => {
                    window.open(scheduleDetailData?.applyLink, "_blank");
                  }}
                  className={styles.submitButton}
                >
                  <Typography variant={"headlineMedium"}>+ 신청하기</Typography>
                </button>
                {/* 모바일용 닫기 버튼 */}
                <DialogClose asChild>
                  <button className={styles.closeButton} aria-label='닫기'>
                    <Typography variant={"headlineMedium"}>
                      {isMobile && "닫기"}
                    </Typography>
                  </button>
                </DialogClose>
              </div>
            </DialogFooter>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
