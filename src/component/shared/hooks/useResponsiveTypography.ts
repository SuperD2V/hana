"use client";

import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

export const useResponsiveTypography = () => {
  const [mounted, setMounted] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  useEffect(() => {
    setMounted(true);
  }, []);

  return {
    mounted,
    isMobile
  };
};
