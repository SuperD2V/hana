"use client";
import React from "react";
import { IntroduceCategory } from "../type";
import CategoryItem from "./CategoryItem";
import { useIntroduceStore } from "../../../../hooks/store/useIntroduceStore";
import { useShallow } from "zustand/shallow";
import { useResponsiveTypography } from "@/component/shared";

const CategoryList = () => {
  const list: IntroduceCategory[] = [
    {
      id: 1,
      category: "교회소개 및 비전"
    },
    {
      id: 2,
      category: "교회 연혁"
    },
    {
      id: 6,
      category: "이름 및 소속"
    },
    {
      id: 3,
      category: "담임목사 소개"
    },
    {
      id: 4,
      category: "다음  세대"
    },
    {
      id: 5,
      category: "양육시스템"
    }
  ];

  const { mounted, isMobile } = useResponsiveTypography();

  const { selectedCateogry, setState } = useIntroduceStore(
    useShallow(state => ({
      selectedCateogry: state.selectedCateogry,
      setState: state.setState
    }))
  );

  const handleClick = (id: number) => {
    setState("selectedCateogry", id);
  };

  if (mounted && isMobile) return <></>;

  return (
    <div className='w-full flex items-center justify-center py-4'>
      {list.map((item, index) => (
        <CategoryItem
          key={item.category}
          title={item.category}
          onClick={() => handleClick(item.id)}
          isLast={index === list.length - 1}
          isSelected={selectedCateogry === item.id}
        />
      ))}
    </div>
  );
};

export default CategoryList;
