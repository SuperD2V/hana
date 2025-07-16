"use client";

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
import { useState } from "react";
import { signIn } from "./api";
import { useRouter } from "next/navigation";

export const SignIn = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSignIn = async () => {
    try {
      const response = await signIn(id, password);
      router.push("/admin");
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div className={wrapper}>
        <div className={signinContainer}>
          <Typography variant='largetitle2Semibold'>로그인</Typography>
        </div>

        <div className={inputContainer}>
          <InputBox
            id={id}
            password={password}
            setId={setId}
            setPassword={setPassword}
          />
          <div className={buttonContainer}>
            <button className={buttonStyle} onClick={handleSignIn}>
              로그인
            </button>
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
    </>
  );
};
