import React from "react";
import { Typography } from "../shared";
import {
  wrapper,
  inputBox,
  inputContainer,
  inputStyle,
  signinContainer,
  buttonContainer,
  buttonStyle,
  buttonText,
  buttonTextContainer,
  buttonDivider
} from "./index.css";
import { InputBox } from "./InputBox";

export const SignIn = () => {
  return (
    <div className={wrapper}>
      <div className={signinContainer}>
        <Typography variant='largetitle2Semibold'>로그인</Typography>
      </div>

      <div className={inputContainer}>
        <InputBox />
        <div className={buttonContainer}>
          <button className={buttonStyle}>로그인</button>
          <div className={buttonTextContainer}>
            <Typography variant='body1Regular' className={buttonText}>
              아이디 찾기
            </Typography>
            <Typography variant='body1Regular' className={buttonDivider}>
              |
            </Typography>
            <Typography variant='body1Regular' className={buttonText}>
              비밀번호 찾기
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};
