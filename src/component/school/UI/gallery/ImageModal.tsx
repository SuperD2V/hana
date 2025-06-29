"use client";

import React from "react";
import { Dialog, DialogClose, DialogContent } from "@/components/ui/dialog";
import * as styles from "./ImageModal.css";
import { X } from "lucide-react";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
}

export const ImageModal = ({
  isOpen,
  onClose,
  imageSrc,
  imageAlt
}: ImageModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogClose asChild>
        <button className={styles.closeButton} aria-label='닫기'>
          <X className={styles.closeIcon} />
        </button>
      </DialogClose>
      <DialogContent className={styles.modalContent}>
        <div className={styles.imageContainer}>
          <img src={imageSrc} alt={imageAlt} className={styles.modalImage} />
        </div>
      </DialogContent>
    </Dialog>
  );
};
