import { useState, useEffect } from "react";
import * as styles from "./index.css";
import { getGallery, getGalleryDetail, GalleryDetail } from "./api";
import { useQuery } from "@tanstack/react-query";

interface ImageData {
  id: number;
  src: string;
  alt: string;
}

const Gallery = () => {
  const [galleryImages, setGalleryImages] = useState<ImageData[]>([]);
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 갤러리 리스트 가져오기
  const { data: galleryList, isLoading: isGalleryLoading } = useQuery({
    queryKey: ["gallery"],
    queryFn: getGallery
  });

  // 갤러리 상세 정보들을 병렬로 가져오기
  const { data: galleryDetails, isLoading: isDetailsLoading } = useQuery({
    queryKey: ["galleryDetails", galleryList?.data?.content],
    queryFn: async () => {
      if (
        !galleryList?.data?.content ||
        galleryList.data.content.length === 0
      ) {
        return [];
      }

      // 8개만 추출
      const limitedItems = galleryList.data.content.slice(0, 8);

      // 각 아이템의 상세 정보를 병렬로 가져오기
      const detailPromises = limitedItems.map(item =>
        getGalleryDetail(item.galleryId)
      );

      const details = await Promise.all(detailPromises);
      return details.filter(detail => detail !== null);
    },
    enabled: !!galleryList?.data?.content
  });

  // 이미지 링크들 추출
  useEffect(() => {
    if (galleryDetails && galleryDetails.length > 0) {
      const imageData: ImageData[] = [];

      galleryDetails.forEach((detail: any) => {
        if (detail?.data?.files && detail.data.files.length > 0) {
          // 각 갤러리 아이템의 파일들에서 이미지 URL과 ID 추출
          detail.data.files.forEach((file: any) => {
            if (file.fileUrl) {
              imageData.push({
                id: file.fileId,
                src: file.fileUrl,
                alt: file.fileName || `Gallery image`
              });
            }
          });
        }
      });

      // 최대 8개까지만 설정
      setGalleryImages(imageData.slice(0, 8));
    }
  }, [galleryDetails]);

  const handleImageClick = (imageSrc: string, index: number) => {
    setSelectedImage({ src: imageSrc, alt: `Gallery image ${index + 1}` });
    setIsModalOpen(true);
  };

  const handleEditImage = (
    imageId: number,
    index: number,
    e: React.MouseEvent
  ) => {
    e.stopPropagation();
    console.log(`Edit image ${index + 1} with ID: ${imageId}`);
    // 여기에 편집 로직 추가
  };

  if (isGalleryLoading || isDetailsLoading) return <div>Loading...</div>;

  return (
    <div className={styles.imageGrid}>
      {galleryImages.length > 0 ? (
        galleryImages.map((imageData, index) => (
          <div
            key={imageData.id}
            className={styles.imageItem}
            onClick={() => handleImageClick(imageData.src, index)}
          >
            <img
              src={imageData.src}
              alt={imageData.alt}
              className={`${styles.image} ${styles.imageHover}`}
            />
            <div className={`${styles.imageOverlay} ${styles.imageItemHover}`}>
              <div style={{ display: "flex", gap: "8px" }}>
                <button
                  className={styles.actionButton}
                  onClick={e => handleEditImage(imageData.id, index, e)}
                >
                  사진 변경
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div>No images available</div>
      )}
    </div>
  );
};

export default Gallery;
