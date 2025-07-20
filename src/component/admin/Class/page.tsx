"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import * as styles from "./index.css";
import { useQuery } from "@tanstack/react-query";
import { getClass } from "./api";
import Image from "next/image";
import { AdminHeader, Typography } from "@/component/shared";
import { useShallow } from "zustand/shallow";
import { useAdminStore } from "../../../../hooks/store/useAdminStore";

const Class = () => {
  const router = useRouter();
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data: classData } = useQuery({
    queryKey: ["class"],
    queryFn: () => getClass({ page: 0, size: 10 })
  });

  const classList = classData?.data.content;

  const { selectedCateogry, setState } = useAdminStore(
    useShallow(state => ({
      selectedCateogry: state.selectedCateogry,
      setState: state.setState
    }))
  );

  const handleItemClick = () => {
    setState("selectedCateogry", 7);
    router.push(`${window.location.pathname}?type=class`);
  };

  return (
    <div>
      <AdminHeader
        title='클래스'
        buttonText='등록하기'
        buttonClick={handleItemClick}
        isButton={true}
      />
      <div className={styles.imageGrid}>
        {classList?.map(item => (
          <div className={styles.imageItemContainer}>
            <div className={styles.imageItem}>
              <Image
                src={item.thumbnailUrl}
                fill
                style={{ position: "absolute", objectFit: "contain" }}
                alt={item.title}
                className={`${styles.image} ${styles.imageHover}`}
              />
            </div>
            <div className={styles.imageItemInfo}>
              <div className={styles.imageItemTitle}>
                <Typography variant='headlineMedium'>{item.title}</Typography>
              </div>
              <div className={styles.imageItemDate}>
                <Typography variant='body1Regular'>{item.classDate}</Typography>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Class;
