import * as styles from "./index.css";
import { DetailHeader } from "./detailHeader";
import { getClassDetail, deleteClass } from "./api";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import { Typography, showConfirmModal } from "@/component/shared";
import { toast } from "react-hot-toast";

interface DetailProps {
  onBack: () => void;
  selectedItemId: number | null;
}

const Detail = ({ onBack, selectedItemId }: DetailProps) => {
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    queryKey: ["classDetail", selectedItemId],
    queryFn: () => getClassDetail({ classId: selectedItemId || 1 }),
    enabled: !!selectedItemId
  });

  const deleteMutation = useMutation({
    mutationFn: (classId: number) => deleteClass({ classId }),
    onSuccess: () => {
      // 삭제 성공 시 목록 페이지로 돌아가기
      onBack();
      // 클래스 목록 캐시 무효화
      queryClient.invalidateQueries({ queryKey: ["class"] });
    },
    onError: error => {
      console.error("삭제 실패:", error);
      toast.error("삭제에 실패했습니다.");
    }
  });

  const handleDelete = () => {
    if (!selectedItemId) return;

    toast.promise(deleteMutation.mutateAsync(selectedItemId), {
      loading: "삭제 중...",
      success: "클래스가 삭제되었습니다.",
      error: "삭제에 실패했습니다."
    });
  };

  const showDeleteConfirm = () => {
    showConfirmModal({
      title: "클래스 삭제",
      onConfirm: handleDelete,
      confirmText: "삭제",
      cancelText: "취소",
      confirmButtonColor: "#E13A3A"
    });
  };

  return (
    <div>
      <DetailHeader
        title={data?.data.title || "클래스 상세"}
        onDelete={showDeleteConfirm}
        isDeleting={deleteMutation.isPending}
      />
      <div style={{ display: "flex", gap: "40px" }}>
        <div style={{ width: "740px", height: "740px", position: "relative" }}>
          <Image
            src={data?.data.thumbnail.fileUrl || ""}
            alt='thumbnail'
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
        <div
          style={{
            width: "740px",
            height: "740px",
            display: "flex",
            flexDirection: "column",
            gap: "16px"
          }}
        >
          <Typography variant='headlineRegular'>
            - 일시 :{data?.data.classDate}
          </Typography>
          <Typography variant='headlineRegular'>
            - 장소 :{data?.data.location}
          </Typography>
          <Typography variant='headlineRegular'>
            - 강사 :{data?.data.instructor}
          </Typography>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              textAlign: "center"
            }}
          >
            <Typography variant='headlineRegular'>-</Typography>
            <div
              dangerouslySetInnerHTML={{ __html: data?.data.content || "" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
