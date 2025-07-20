"use client";

import { useState } from "react";
import * as styles from "./index.css";

const Class = () => {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <div className={styles.imageItem}>
        <img
          src={""}
          alt={""}
          className={`${styles.image} ${styles.imageHover}`}
        />
      </div>
    </div>
  );
};

export default Class;
