"use client";

import React, { useState } from "react";
import { Typography } from "../shared";
import { inputBox, inputStyle } from "./index.css";

export const InputBox = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

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
