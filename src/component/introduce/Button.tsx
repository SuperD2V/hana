import React from "react";
import { Typography } from "../shared";

const Button = ({ title, onClick }: { title: string; onClick: () => void }) => {
  return (
    <div
      style={{
        gap: 10,
        borderRadius: 12,
        paddingTop: 12,
        paddingRight: 40,
        paddingBottom: 12,
        paddingLeft: 40,
        backgroundColor: "#1B5FB8",
        cursor: "pointer"
      }}
      onClick={onClick}
    >
      <Typography variant='headlineMedium' className='text-[#F5F9FF]'>
        {title}
      </Typography>
    </div>
  );
};

export default Button;
