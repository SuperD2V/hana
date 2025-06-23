import { Typography } from "@/component/shared/ui/Typography";
import React from "react";

const CategoryItem = ({
  title,
  isSelected,
  onClick,
  isLast
}: {
  title: string;
  isSelected: boolean;
  onClick: () => void;
  isLast: boolean;
}) => {
  return (
    <div className='flex items-center'>
      <div
        className={`${
          isSelected ? "bg-white " : ""
        }  rounded-[999px] cursor-pointer`}
        style={{ padding: "10px 32px", color: isSelected ? "#1350A0" : "#fff" }}
        onClick={onClick}
      >
        <Typography variant='title1Bold' className='!text-[18px]'>
          {title}
        </Typography>
      </div>
      {!isLast && (
        <div
          className='w-[1px] h-[16px] bg-blue-500'
          style={{ margin: "0 16px" }}
        ></div>
      )}
    </div>
  );
};

export default CategoryItem;
