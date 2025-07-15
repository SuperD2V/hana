import { Typography } from "@/component/shared";
import Image from "next/image";
import { color } from "@/component/shared/designed/color";
import React from "react";

interface PaginationProps {
  current: number;
  total: number;
  onChange: (page: number) => void;
}

export const Pagination = ({ current, total, onChange }: PaginationProps) => {
  const pages = Array.from({ length: total }, (_, i) => i + 1);

  return (
    <div
      style={{
        display: "flex",
        gap: 16,
        justifyContent: "center",
        marginTop: 24
      }}
    >
      {pages.map(page => (
        <button
          key={page}
          onClick={() => onChange(page)}
          style={{
            width: 32,
            height: 32,
            border: "none",
            borderRadius: 6,
            background: current === page ? "#e3edfd" : "transparent",
            fontWeight: 500,
            cursor: "pointer",
            color: current === page ? color.brand[800] : color.gray[700]
          }}
        >
          <Typography variant='title3Medium'>{page}</Typography>
        </button>
      ))}
      <button
        onClick={() => onChange(Math.min(current + 1, total))}
        style={{
          background: "transparent",
          border: "none",
          cursor: "pointer"
        }}
        aria-label='다음'
      >
        <Image src='/images/right.svg' alt='다음' width={24} height={24} />
      </button>
      <button
        onClick={() => onChange(total)}
        style={{
          background: "transparent",
          border: "none",
          cursor: "pointer"
        }}
        aria-label='마지막'
      >
        <Image
          src='/images/double_arrow_right.svg'
          alt='다음'
          width={24}
          height={24}
        />
      </button>
    </div>
  );
};
