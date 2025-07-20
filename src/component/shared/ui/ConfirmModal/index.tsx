import { toast } from "react-hot-toast";

interface ConfirmModalProps {
  title: string;
  onConfirm: () => void;
  confirmText?: string;
  cancelText?: string;
  confirmButtonColor?: string;
}

export const showConfirmModal = ({
  title,
  onConfirm,
  confirmText = "확인",
  cancelText = "취소",
  confirmButtonColor = "#E13A3A"
}: ConfirmModalProps) => {
  toast(
    t => (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          minWidth: "300px",
          padding: "20px",
          backgroundColor: "white",
          borderRadius: "8px",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
          border: "1px solid #e0e0e0"
        }}
      >
        <div style={{ fontWeight: "bold", fontSize: "16px" }}>{title}</div>
        <div
          style={{ display: "flex", gap: "8px", justifyContent: "flex-end" }}
        >
          <button
            onClick={() => toast.dismiss(t.id)}
            style={{
              padding: "8px 16px",
              border: "1px solid #ddd",
              borderRadius: "4px",
              backgroundColor: "#fff",
              cursor: "pointer",
              fontSize: "14px"
            }}
          >
            {cancelText}
          </button>
          <button
            onClick={() => {
              toast.dismiss(t.id);
              onConfirm();
            }}
            style={{
              padding: "8px 16px",
              border: "none",
              borderRadius: "4px",
              backgroundColor: confirmButtonColor,
              color: "#fff",
              cursor: "pointer",
              fontSize: "14px"
            }}
          >
            {confirmText}
          </button>
        </div>
      </div>
    ),
    {
      duration: 0, // 무제한 지속
      position: "top-center",
      style: {
        background: "transparent",
        boxShadow: "none",
        padding: 0,
        marginTop: "25%" // 화면 중앙에 가깝게 배치
      }
    }
  );
};
