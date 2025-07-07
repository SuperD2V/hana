"use client";

import React, { useState } from "react";
import { TypographyEn } from "@/component/shared";
import { useResponsiveTypography } from "@/component/shared";
import { ImageModal } from "./ImageModal";
import * as styles from "./index.css";
import { color } from "@/component/shared/designed/color";

// 임시 이미지 데이터 (실제 이미지 경로로 교체하세요)
const galleryImages = [
  "/images/001.jpeg",
  "/images/002.jpeg",
  "/images/003.jpeg",
  "/images/004.jpeg",
  "/images/005.jpeg",
  "/images/006.jpeg",
  "/images/007.jpeg",
  "/images/008.jpeg"
];

export const Gallery = () => {
  const { mounted, isMobile } = useResponsiveTypography();
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!mounted) return null;

  const handleImageClick = (imageSrc: string, index: number) => {
    setSelectedImage({ src: imageSrc, alt: `Gallery image ${index + 1}` });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className={`flex justify-center bg-[${color.brand[800]}]`}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <TypographyEn
            variant={isMobile ? "largetitle3Bold" : "largetitle1"}
            className={styles.title}
          >
            GALLERY
          </TypographyEn>

          <div className={styles.imageGrid}>
            {galleryImages.map((imageSrc, index) => (
              <div
                key={index}
                className={styles.imageItem}
                onClick={() => handleImageClick(imageSrc, index)}
              >
                <img
                  src={imageSrc}
                  alt={`Gallery image ${index + 1}`}
                  className={styles.image}
                />
              </div>
            ))}
          </div>
        </div>

        {selectedImage && (
          <ImageModal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            imageSrc={selectedImage.src}
            imageAlt={selectedImage.alt}
          />
        )}
      </div>
    </div>
  );
};
