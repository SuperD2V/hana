"use client";

import { Typography, LogDialog } from "@/component/shared";
import { useState } from "react";
import { resetPassword } from "./api";
import { showConfirmModal } from "@/component/shared/ui/ConfirmModal";
import { useAdminStore } from "../../../../hooks/store/useAdminStore";
import { useShallow } from "zustand/shallow";

const PasswordReset = () => {
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordConfirm, setNewPasswordConfirm] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { selectedCateogry, setState } = useAdminStore(
    useShallow(state => ({
      selectedCateogry: state.selectedCateogry,
      setState: state.setState
    }))
  );
  const handleResetPassword = async () => {
    try {
      setIsLoading(true);
      await resetPassword({ newPassword, confirmPassword: newPasswordConfirm });
      showConfirmModal({
        title: "비밀번호가 재설정되었어요!",
        onConfirm: () => {
          setState("selectedCateogry", 1);
        },
        confirmText: "확인"
      });
      setNewPassword("");
      setNewPasswordConfirm("");
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false);
  };

  return (
    <>
      <div
        style={{
          width: "100%",
          maxWidth: "1680px",
          margin: "auto",
          height: "100%",
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
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
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
                  padding: "12px 16px",
                  minWidth: "440px"
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
                  padding: "12px 16px",
                  minWidth: "440px"
                }}
                onChange={e => setNewPasswordConfirm(e.target.value)}
              />
            </div>
          </div>
          <button
            onClick={handleResetPassword}
            disabled={!newPassword || !newPasswordConfirm || isLoading}
            style={{
              backgroundColor:
                !newPassword || !newPasswordConfirm || isLoading
                  ? "#E0E0E0"
                  : "#4A5568",
              color:
                !newPassword || !newPasswordConfirm || isLoading
                  ? "#A0A0A0"
                  : "white",
              border: "none",
              borderRadius: 12,
              padding: "12px 24px",
              fontSize: "16px",
              fontWeight: "bold",
              cursor:
                !newPassword || !newPasswordConfirm || isLoading
                  ? "not-allowed"
                  : "pointer",
              transition: "all 0.2s ease"
            }}
          >
            {isLoading ? "재설정 중..." : "비밀번호 재설정"}
          </button>
        </div>
      </div>
    </>
  );
};

export default PasswordReset;
