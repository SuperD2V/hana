import { AdminHeader } from "@/component/shared";
import {
  bannerContainer,
  bulletinContainer,
  buttonStyle,
  imageContainer,
  registerButtonStyle,
  deleteButtonStyle
} from "./index.css";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { changeBanner, getBanner } from "./api";
import { useState, useRef } from "react";
import toast from "react-hot-toast";

const Banner = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>("");
  const [imageError, setImageError] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["banner"],
    queryFn: getBanner
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      // 파일을 URL로 변환하여 미리보기 생성
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
      setImageError(false); // 새 파일 선택시 에러 상태 초기화
    }
  };

  const handleImageChange = () => {
    fileInputRef.current?.click();
  };

  const handleBannerSubmit = async () => {
    if (selectedFile) {
      try {
        await changeBanner({
          data: { type: "gif", displayOrder: 0 },
          file: selectedFile
        });
        setSelectedFile(null);
        setPreviewUrl("");
        setImageError(false);
        // 배너 변경 성공 후 데이터 다시 가져오기
        await refetch();
        toast.success("배너가 성공적으로 변경되었습니다.");
      } catch (error) {
        console.error("배너 변경 실패:", error);
        toast.error("배너 변경에 실패했습니다.");
      }
    } else {
      toast.error("변경할 사진을 선택해주세요.");
    }
  };

  const handleImageError = () => {
    setImageError(true);
    console.error("이미지 로딩 실패:", displayImageUrl);
  };

  const handleImageLoad = () => {
    setImageError(false);
    console.log("이미지 로딩 성공:", displayImageUrl);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  // 이미지 URL이 있는지 확인
  const imageUrl = data?.data?.content?.[0]?.url;
  const hasValidImage = imageUrl && imageUrl.trim() !== "";

  // 미리보기 이미지가 있으면 우선 표시, 아니면 서버 이미지 표시
  const displayImageUrl = previewUrl || imageUrl;
  const shouldShowImage =
    displayImageUrl && (previewUrl || hasValidImage) && !imageError;

  // 디버깅을 위한 콘솔 로그
  console.log("Banner Debug Info:", {
    imageUrl,
    hasValidImage,
    previewUrl,
    displayImageUrl,
    shouldShowImage,
    imageError
  });

  return (
    <div
      style={{ width: "100%", maxWidth: "1520px", margin: "80px auto 0 auto" }}
    >
      <AdminHeader
        title='배너사진'
        buttonClick={() => {}}
        isButton={false}
        buttonText=''
      />
      <div className={imageContainer}>
        {shouldShowImage && displayImageUrl ? (
          <Image
            src={displayImageUrl}
            alt='banner'
            fill
            unoptimized={true} // GIF 최적화 방지
            style={{ objectFit: "contain", position: "absolute" }}
            onError={handleImageError}
            onLoad={handleImageLoad}
            priority={true} // 우선 로딩
          />
        ) : (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              color: "#666",
              flexDirection: "column",
              gap: "10px"
            }}
          >
            {imageError ? (
              <>
                <div>이미지를 불러올 수 없습니다</div>
                <div style={{ fontSize: "14px", color: "#999" }}>
                  이미지 URL: {displayImageUrl}
                </div>
              </>
            ) : (
              "배너 이미지가 없습니다"
            )}
          </div>
        )}
      </div>

      {/* 선택된 파일이 있을 때 미리보기 정보 표시 */}
      {selectedFile && (
        <div
          style={{
            margin: "10px 0",
            padding: "10px",
            backgroundColor: "#f5f5f5",
            borderRadius: "4px"
          }}
        >
          <p style={{ margin: "0", fontSize: "14px", color: "#666" }}>
            선택된 파일: {selectedFile.name} (
            {(selectedFile.size / 1024 / 1024).toFixed(2)}MB)
          </p>
        </div>
      )}

      <div className={bulletinContainer}>
        <button className={registerButtonStyle} onClick={handleImageChange}>
          사진 변경
        </button>
        <button onClick={handleBannerSubmit} className={deleteButtonStyle}>
          등록하기
        </button>
        <input
          type='file'
          ref={fileInputRef}
          onChange={handleFileChange}
          accept='image/*,image/gif'
          style={{ display: "none" }}
        />
      </div>
    </div>
  );
};

export default Banner;
