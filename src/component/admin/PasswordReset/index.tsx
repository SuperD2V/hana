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

  // 비밀번호 일치 검사
  const isPasswordMatch =
    newPassword && newPasswordConfirm && newPassword === newPasswordConfirm;
  const isPasswordMismatch =
    newPasswordConfirm && newPassword !== newPasswordConfirm;
  const canSubmit =
    newPassword && newPasswordConfirm && isPasswordMatch && !isLoading;

  const handleResetPassword = async () => {
    // 비밀번호가 일치하지 않으면 실행하지 않음
    if (!isPasswordMatch) {
      return;
    }

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

          {/* 비밀번호 일치/불일치 메시지 */}
          <div
            style={{
              textAlign: "center",
              height: "24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            {newPasswordConfirm && (
              <>
                {isPasswordMatch ? (
                  <Typography style={{ color: "#4CAF50", fontWeight: "500" }}>
                    ✓ 비밀번호가 일치합니다
                  </Typography>
                ) : isPasswordMismatch ? (
                  <Typography style={{ color: "#F44336", fontWeight: "500" }}>
                    ✗ 비밀번호가 일치하지 않습니다
                  </Typography>
                ) : null}
              </>
            )}
          </div>

          <button
            onClick={handleResetPassword}
            disabled={!canSubmit}
            style={{
              backgroundColor: canSubmit ? "#4A5568" : "#E0E0E0",
              color: canSubmit ? "white" : "#A0A0A0",
              border: "none",
              borderRadius: 12,
              padding: "12px 24px",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: canSubmit ? "pointer" : "not-allowed",
              transition: "all 0.2s ease"
            }}
          >
            {isLoading ? "재설정 중..." : "확인"}
          </button>
        </div>
      </div>
    </>
  );
};

export default PasswordReset;
