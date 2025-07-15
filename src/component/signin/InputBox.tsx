"use client";

import React from "react";
import { Typography } from "../shared";
import { inputBox, inputStyle } from "./index.css";

interface InputBoxProps {
  id: string;
  password: string;
  setId: (value: string) => void;
  setPassword: (value: string) => void;
}

export const InputBox = ({
  id,
  password,
  setId,
  setPassword
}: InputBoxProps) => {
  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <div className={inputBox}>
        <label>
          <Typography variant='headlineMedium'>아이디</Typography>
        </label>
        <input
          className={inputStyle}
          placeholder='아이디를 입력해주세요'
          value={id}
          onChange={handleIdChange}
        />
      </div>
      <div className={inputBox}>
        <label>
          <Typography variant='headlineMedium'>비밀번호</Typography>
        </label>
        <input
          className={inputStyle}
          placeholder='비밀번호를 입력해주세요'
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
    </>
  );
};
