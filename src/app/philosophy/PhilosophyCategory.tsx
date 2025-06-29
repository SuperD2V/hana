"use client";
import React from "react";
import { IntroduceCategory } from "@/component/introduce/type";
import PhilosophyCategoryItem from "./PhilosophyCategoryItem";
import { useShallow } from "zustand/shallow";
import { usePhilosophyStore } from "../../../hooks/store/usePhilosophyStore";

const PhilosophyCategory = () => {
  const list: IntroduceCategory[] = [
    {
      id: 1,
      category: "예배중심"
    },
    {
      id: 2,
      category: "제자 훈련"
    },
    {
      id: 3,
      category: "세대통합"
    },
    {
      id: 4,
      category: "예수가족"
    },
    {
      id: 5,
      category: "일상경건"
    },
    {
      id: 6,
      category: "중보적삶"
    }
  ];

  const { selectedCateogry, setState } = usePhilosophyStore(
    useShallow(state => ({
      selectedCateogry: state.selectedCateogry,
      setState: state.setState
    }))
  );

  const handleClick = (id: number) => {
    setState("selectedCateogry", id);
  };

  return (
    <div className='w-full flex items-center justify-center py-4'>
      {list.map((item, index) => (
        <PhilosophyCategoryItem
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

export default PhilosophyCategory;
