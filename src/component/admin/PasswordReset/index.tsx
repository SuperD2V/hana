"use client";

import { Typography } from "@/component/shared";
import { useState } from "react";

const PasswordReset = () => {
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordConfirm, setNewPasswordConfirm] = useState("");
  return (
    <div>
      <Typography variant='headlineMedium'>비밀번호 재설정</Typography>
      <div
        style={{
          boxShadow: "0px 0px 20px 0px #2C25070A",
          borderRadius: 20,
          padding: "60px 80px",
          width: "600px",
          height: "476px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 32
        }}
      >
        <Typography variant='headlineMedium'>비밀번호 재설정</Typography>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 16
            }}
          >
            <Typography variant='headlineMedium'>새 비밀번호</Typography>
            <input
              type='password'
              value={newPassword}
              style={{
                border: "1px solid #E0E0E0",
                borderRadius: 12,
                padding: "12px 16px"
              }}
              onChange={e => setNewPassword(e.target.value)}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 16
            }}
          >
            <Typography variant='headlineMedium'>새 비밀번호 확인</Typography>
            <input
              type='password'
              value={newPasswordConfirm}
              style={{
                border: "1px solid #E0E0E0",
                borderRadius: 12,
                padding: "12px 16px"
              }}
              onChange={e => setNewPasswordConfirm(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordReset;
