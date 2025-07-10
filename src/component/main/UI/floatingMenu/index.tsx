"use client";

import {
  floatingBar,
  floatingBarList,
  floatingBarItem,
  floatingBarItemText,
  scrollTopContainer
} from "./index.css";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Typography, useResponsiveTypography } from "@/component/shared";
import Link from "next/link";

export const FloatingBar = () => {
  const router = useRouter();
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const { mounted, isMobile } = useResponsiveTypography();

  if (mounted && isMobile) return null;

  return (
    <div className={floatingBar}>
      <div className={floatingBarList}>
        <div
          className={floatingBarItem}
          onClick={() =>
            window.open("https://forms.gle/Mdojk2Y41qFP5oVi9", "_blank")
          }
        >
          <Image
            src={"/images/money.svg"}
            alt='온라인헌금'
            width={28}
            height={28}
          />
          <Typography variant='body2Medium'>온라인헌금</Typography>
        </div>
        <Link href='https://www.band.us/band/89951906/post/320' target='_blank'>
          <div className={floatingBarItem}>
            <Image
              src={"/images/speak.svg"}
              alt='설교'
              width={28}
              height={28}
            />
            <Typography variant='body2Medium'>설교듣기</Typography>
          </div>
        </Link>
        <div
          className={floatingBarItem}
          onClick={() => window.open("h", "_blank")}
        >
          <Image
            src={"/images/receipt.svg"}
            alt='영수증'
            width={28}
            height={28}
          />
          <Typography variant='body2Medium'>영수증</Typography>
        </div>
      </div>
      <div className={scrollTopContainer}>
        <Image
          src={"/images/arrowup.svg"}
          alt='맨위로'
          width={28}
          height={28}
        />
        <Button onClick={handleScrollTop} className={floatingBarItemText}>
          맨위로
        </Button>
      </div>
    </div>
  );
};
