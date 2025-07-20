import { useState, useEffect, useRef } from "react";
import * as styles from "./index.css";
import {
  getGallery,
  getGalleryDetail,
  registerGallery,
  deleteGallery,
  GalleryDetail
} from "./api";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

interface ImageData {
  id: number;
  src: string;
  alt: string;
  galleryId: number; // 갤러리 ID 추가
}

const Gallery = () => {
  const [galleryImages, setGalleryImages] = useState<ImageData[]>([]);
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [selectedGalleryId, setSelectedGalleryId] = useState<number | null>(
    null
  );
  const fileInputRef = useRef<HTMLInputElement>(null);
  const queryClient = useQueryClient();

  // 갤러리 리스트 가져오기
  const {
    data: galleryList,
    isLoading: isGalleryLoading,
    refetch: refetchGallery
  } = useQuery({
    queryKey: ["gallery"],
    queryFn: getGallery
  });

  // 갤러리 상세 정보들을 병렬로 가져오기
  const {
    data: galleryDetails,
    isLoading: isDetailsLoading,
    refetch: refetchGalleryDetails
  } = useQuery({
    queryKey: ["galleryDetails", galleryList?.data?.content],
    queryFn: async () => {
      if (
        !galleryList?.data?.content ||
        galleryList.data.content.length === 0
      ) {
        return [];
      }

      const limitedItems = galleryList.data.content.slice(0, 8);

      const detailPromises = limitedItems.map(item =>
        getGalleryDetail(item.galleryId)
      );

      const details = await Promise.all(detailPromises);
      return details.filter(detail => detail !== null);
    },
    enabled: !!galleryList?.data?.content
  });

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
                alt: file.fileName || `Gallery image`,
                galleryId: detail.data.galleryId // 갤러리 ID 저장
              });
            }
          });
        }
      });

      setGalleryImages(imageData.slice(0, 8));
    }
  }, [galleryDetails]);

  const handleImageClick = (imageSrc: string, index: number) => {
    setSelectedImage({ src: imageSrc, alt: `Gallery image ${index + 1}` });
    setIsModalOpen(true);
  };

  const handleEditImage = (
    imageId: number,
    galleryId: number,
    index: number,
    e: React.MouseEvent
  ) => {
    e.stopPropagation();
    // 선택된 갤러리 ID 저장
    setSelectedGalleryId(galleryId);
    // 파일 선택 다이얼로그 열기
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    const file = files[0];
    setIsUploading(true);

    try {
      // 오늘 날짜를 YYYY-MM-DD 형식으로 가져오기
      const today = new Date().toISOString().split("T")[0];

      // 1. 기존 갤러리 삭제
      if (selectedGalleryId) {
        await deleteGallery(selectedGalleryId);
      }

      // 2. 새 갤러리 등록
      await registerGallery(
        {
          title: today
        },
        [file]
      );

      // 3. 데이터 새로고침
      await refetchGallery();
      await refetchGalleryDetails();

      toast.success("사진이 성공적으로 변경되었습니다.");
    } catch (error) {
      console.error("사진 변경 중 오류 발생:", error);
      toast.error("사진 변경 중 오류가 발생했습니다.");
    } finally {
      setIsUploading(false);
      // 파일 input 초기화
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
      setSelectedGalleryId(null);
    }
  };

  if (isGalleryLoading || isDetailsLoading) return <div>Loading...</div>;

  return (
    <div className={styles.imageGrid}>
      {/* 숨겨진 파일 input */}
      <input
        ref={fileInputRef}
        type='file'
        accept='image/*'
        onChange={handleFileChange}
        style={{ display: "none" }}
      />

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
                  onClick={e =>
                    handleEditImage(imageData.id, imageData.galleryId, index, e)
                  }
                  disabled={isUploading}
                >
                  {isUploading ? "업로드 중..." : "사진 변경"}
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
