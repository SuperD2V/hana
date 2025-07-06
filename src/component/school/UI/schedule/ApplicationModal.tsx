"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
  DialogOverlay,
  DialogClose,
  DialogTitle
} from "@/components/ui/dialog";
import * as styles from "./ApplicationModal.css";
import { X } from "lucide-react";
import { Typography, useResponsiveTypography } from "@/component/shared";

interface ScheduleItem {
  id: number;
  date: string;
  title: string;
  teacher: string;
}

interface ApplicationModalProps {
  scheduleData: ScheduleItem[];
  trigger: React.ReactNode;
}

export const ApplicationModal: React.FC<ApplicationModalProps> = ({
  scheduleData,
  trigger
}) => {
  const { mounted, isMobile } = useResponsiveTypography();
  if (!mounted) return null;

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
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
          <div className={styles.imageBox}>{/* 실제 이미지로 교체 가능 */}</div>
          {/* 우측 정보 영역 */}
          <div className={styles.infoBox}>
            <div>
              <DialogTitle className={styles.title}>
                누구나 할 수 있는 캘리그라피
              </DialogTitle>
              <div className={styles.description}>
                - 일시: 11월 30일(토) 오후1:00~3:00
                <br />
                - 장소: 비전홀
                <br />
                - 강사: 임미진강사(캘리 지도자 자격증)
                <br />
              </div>
              <ul className={styles.list}>
                <li>
                  - 노쇼 방지와 재료비 일부를 위해 수강의 회비(10,000원)가
                  있습니다.
                </li>
                <li>
                  - 그 외 소요되는 경비(재료비 추가/간식 등)는 교회에서
                  부담합니다.
                </li>
              </ul>
            </div>
            <DialogFooter>
              <div className={styles.buttonContainer}>
                <button className={styles.submitButton}>
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
