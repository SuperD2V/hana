"use client";

import React, { useState, useEffect } from "react";
import { TypographyEn } from "@/component/shared";
import { useResponsiveTypography } from "@/component/shared";
import { ImageModal } from "./ImageModal";
import * as styles from "./index.css";
import { color } from "@/component/shared/designed/color";
import { getGallery, getGalleryDetail, GalleryItem } from "../../api";
import { useQuery } from "@tanstack/react-query";

export const Gallery = () => {
  const { mounted, isMobile } = useResponsiveTypography();
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [galleryImages, setGalleryImages] = useState<string[]>([]);

  // 갤러리 리스트 가져오기
  const { data: galleryList, isLoading: isGalleryLoading } = useQuery({
    queryKey: ["gallery"],
    queryFn: () => getGallery()
  });

  // 갤러리 상세 정보들을 병렬로 가져오기
  const { data: galleryDetails, isLoading: isDetailsLoading } = useQuery({
    queryKey: ["galleryDetails", galleryList?.data?.content],
    queryFn: async () => {
      console.log("Gallery list data:", galleryList?.data);

      if (
        !galleryList?.data?.content ||
        galleryList.data.content.length === 0
      ) {
        console.log("No gallery data available");
        return [];
      }

      // 8개만 추출
      const limitedItems = galleryList.data.content.slice(0, 8);
      console.log("Limited items:", limitedItems);

      // 각 아이템의 상세 정보를 병렬로 가져오기
      const detailPromises = limitedItems.map((item: GalleryItem) =>
        getGalleryDetail({ announcementId: item.announcementId })
      );

      const details = await Promise.all(detailPromises);
      console.log("Gallery details:", details);
      return details.filter((detail: any) => detail !== null);
    },
    enabled: !!galleryList?.data?.content
  });

  // 이미지 링크들 추출
  useEffect(() => {
    console.log("Gallery details in useEffect:", galleryDetails);

    if (galleryDetails && galleryDetails.length > 0) {
      const imageUrls: string[] = [];

      galleryDetails.forEach((detail: any, index: number) => {
        console.log(`Detail ${index}:`, detail);

        if (detail?.data?.files && detail.data.files.length > 0) {
          console.log(`Files for detail ${index}:`, detail.data.files);

          // 각 갤러리 아이템의 파일들에서 이미지 URL 추출
          detail.data.files.forEach((file: any) => {
            if (file.fileUrl) {
              imageUrls.push(file.fileUrl);
              console.log("Added image URL:", file.fileUrl);
            }
          });
        } else {
          console.log(`No files found for detail ${index}`);
        }
      });

      console.log("Final image URLs:", imageUrls);

      // 최대 8개까지만 설정
      setGalleryImages(imageUrls.slice(0, 8));
    } else {
      console.log("No gallery details available");
    }
  }, [galleryDetails]);

  if (!mounted) return null;
  if (isGalleryLoading || isDetailsLoading) return <div>Loading...</div>;

  const handleImageClick = (imageSrc: string, index: number) => {
    setSelectedImage({ src: imageSrc, alt: `Gallery image ${index + 1}` });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  console.log("Current gallery images:", galleryImages);

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
            {galleryImages.length > 0 ? (
              galleryImages.map((imageSrc, index) => (
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
              ))
            ) : (
              <div>No images available</div>
            )}
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
