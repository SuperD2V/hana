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
  const fileInputRef = useRef<HTMLInputElement>(null);

  const { data, isLoading, error } = useQuery({
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
    }
  };

  const handleImageChange = () => {
    fileInputRef.current?.click();
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

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
        <Image
          src={previewUrl || data?.data.content[0].url || ""}
          alt='banner'
          fill
          style={{ objectFit: "contain", position: "absolute" }}
        />
      </div>
      <div className={bulletinContainer}>
        <button className={registerButtonStyle} onClick={handleImageChange}>
          사진 변경
        </button>
        <button
          onClick={() => {
            if (selectedFile) {
              changeBanner({
                data: { type: "gif", displayOrder: 0 },
                file: selectedFile
              });
              setSelectedFile(null);
            } else {
              toast.error("변경할 사진을 선택해주세요.");
            }
          }}
          className={deleteButtonStyle}
        >
          등록하기
        </button>
        <input
          type='file'
          ref={fileInputRef}
          onChange={handleFileChange}
          accept='image/*'
          style={{ display: "none" }}
        />
      </div>
    </div>
  );
};

export default Banner;
