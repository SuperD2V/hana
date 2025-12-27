"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import "react-quill-new/dist/quill.snow.css";
import { useAdminStore } from "../../../../hooks/store/useAdminStore";
import { useShallow } from "zustand/shallow";
import { useQuillEditor, useDragAndDrop, useFormData } from "./hooks";
import { validateForm, formatFileSize, formatFileName } from "./utils";
import {
  container,
  header,
  title,
  subtitle,
  form,
  fieldContainer,
  label,
  required,
  input,
  quillContainer,
  fileUploadContainer,
  fileUploadText,
  fileUploadSubtext,
  fileList,
  fileItem,
  fileName,
  removeButton,
  buttonContainer,
  cancelButton,
  submitButton,
  pinnedContainer,
  checkboxWrapper,
  checkbox,
  checkIcon,
  checkedIcon,
  pinnedLabel
} from "./index.css";
import { color } from "@/component/shared/designed/color";
import {
  getBulletinDetail,
  getNoticeDetail,
  AnnouncementRegisterDTO,
  BulletinRegisterDTO,
  AnnouncementEditDTO,
  BulletinEditDTO
} from "@/component/notice/api/api";
import { useQuery } from "@tanstack/react-query";
import { useCreateNotice, useUpdateNotice } from "@/component/admin/Notice/api";
import {
  useCreateBulletin,
  useUpdateBulletin
} from "@/component/admin/Bulletin/api";

// react-quill-new를 dynamic import로 불러와서 SSR 문제 방지
const ReactQuill = dynamic(
  () =>
    import("react-quill-new").then(mod => {
      const Component = React.forwardRef<any, any>((props, ref) => {
        return React.createElement(mod.default, { ...props, ref });
      });
      Component.displayName = "ReactQuill";
      return { default: Component };
    }),
  {
    ssr: false,
    loading: () => <div>에디터 로딩 중...</div>
  }
);

const NoticeBulletineRegister = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  //   const urlType = searchParams.get("type");
  const urlId = searchParams.get("id");

  const { selectedId, setState, selectedType } = useAdminStore(
    useShallow(state => ({
      selectedId: state.selectedId,
      setState: state.setState,
      selectedType: state.selectedType
    }))
  );

  // URL 파라미터가 있으면 우선 사용, 없으면 store에서 가져오기
  const id = urlId || selectedId;
  const type = selectedType; // notice, bulletin

  const isEdit = !!urlId;
  const isNotice = type === "notice";

  // 데이터 로딩 완료 플래그
  const [isDataLoaded, setIsDataLoaded] = React.useState(false);

  // Mutation 훅들
  const createNoticeMutation = useCreateNotice();
  const updateNoticeMutation = useUpdateNotice();
  const createBulletinMutation = useCreateBulletin();
  const updateBulletinMutation = useUpdateBulletin();

  // 커스텀 훅들 사용
  const { quillRef, quillModules, quillFormats } = useQuillEditor();
  const { handleDrop, handleDragOver } = useDragAndDrop(quillRef);
  const {
    formData,
    files,
    isPinned,
    deletedFileIds,
    fileInputRef,
    handleTitleChange,
    handleContentChange,
    handleFileUpload,
    handleFileRemove,
    handlePinnedChange,
    setFormDataFromServer,
    setFilesFromServer,
    setPinnedFromServer,
    resetForm
  } = useFormData();

  // 수정 모드일 때 기존 데이터 불러오기
  const { data: apiResponse, isLoading: isDataLoading } = useQuery({
    queryKey: ["detail", id, type],
    queryFn: () => {
      if (type === "notice") {
        return getNoticeDetail(id!);
      } else {
        return getBulletinDetail(id!);
      }
    },
    enabled: isEdit && !!id // 수정 모드이고 id가 있을 때만 실행
  });

  // API 응답 데이터를 폼에 설정
  useEffect(() => {
    if (apiResponse?.data && isEdit) {
      const detailData = apiResponse.data;
      console.log("서버에서 받아온 content:", detailData.content);
      // 제목과 내용 설정
      setFormDataFromServer({
        title: detailData.title,
        content: detailData.content || "" // content가 없을 경우 빈 문자열
      });
      console.log("setFormDataFromServer 호출 완료");

      // 공지사항이고 첨부파일이 있는 경우 파일 목록 설정
      if (isNotice && detailData.files && detailData.files.length > 0) {
        // 기존 파일들을 FileItem 형태로 변환
        const existingFiles = detailData.files.map(file => ({
          id: `existing-${file.fileId}`,
          name: file.fileName,
          file: null, // 기존 파일은 File 객체가 아니므로 null로 설정
          url: file.fileUrl, // 기존 파일 URL 저장
          isExisting: true, // 기존 파일임을 표시
          fileId: file.fileId // 서버에서 받은 실제 파일 ID
        }));

        setFilesFromServer(existingFiles);
      }

      // 상단 고정 상태 설정 (공지사항인 경우)
      if (isNotice) {
        const isPinned = !!detailData.topExposureTag;
        setPinnedFromServer(isPinned);
      }
    }
  }, [apiResponse, isEdit, isNotice]); // setFormDataFromServer 의존성 제거

  // formData.content가 언제 업데이트되는지 확인
  useEffect(() => {
    console.log("formData.content 변경됨:", formData.content);
  }, [formData.content]);

  // useEffect cleanup에서 resetForm 호출
  useEffect(() => {
    return () => {
      resetForm();
    };
  }, []);

  // 로딩 상태 통합
  const isLoading = isDataLoading;

  const handleSubmit = () => {
    const errors = validateForm(formData.title, formData.content);

    if (errors.length > 0) {
      alert(errors.join("\n"));
      return;
    }

    const isCurrentlySubmitting =
      createNoticeMutation.isPending ||
      updateNoticeMutation.isPending ||
      createBulletinMutation.isPending ||
      updateBulletinMutation.isPending;

    if (isCurrentlySubmitting) {
      return;
    }
    if (isNotice) {
      // 공지사항 등록/수정
      const announcementDTO: AnnouncementRegisterDTO = {
        title: formData.title,
        content: formData.content,
        topExposure: isPinned,
        topExposureTag: isPinned ? "공지" : "",
        isVisible: true
      };

      // 실제 파일만 필터링 (기존 파일 제외)
      const actualFiles = files
        .filter(file => file.file !== null)
        .map(file => file.file!);

      console.log(isEdit ? "공지사항 수정 데이터:" : "공지사항 등록 데이터:", {
        announcementDTO,
        files: actualFiles,
        deletedFileIds
      });

      if (isEdit) {
        // 수정 모드
        updateNoticeMutation.mutate(
          {
            id: id!,
            announcementDTO,
            deletedFileIds,
            files: actualFiles
          },
          {
            onSuccess: () => {
              alert("공지사항이 수정되었습니다.");
              router.replace("/admin");
              setState("selectedCateogry", 2);
              setState("selectedId", null);
            },
            onError: () => {
              alert("공지사항 수정에 실패했습니다.");
            }
          }
        );
      } else {
        // 등록 모드
        createNoticeMutation.mutate(
          {
            announcementDTO,
            files: actualFiles
          },
          {
            onSuccess: () => {
              alert("공지사항이 등록되었습니다.");
              router.replace("/admin");
              setState("selectedCateogry", 2);
              setState("selectedId", null);
            },
            onError: () => {
              alert("공지사항 등록에 실패했습니다.");
            }
          }
        );
      }
    } else {
      // 주보 등록/수정
      const bulletinDTO: BulletinRegisterDTO = {
        title: formData.title,
        content: formData.content,
        topExposure: false, // 주보는 상단 고정 기능이 없을 것으로 추정
        topExposureTag: "",
        isVisible: true
      };

      // 실제 파일만 필터링 (기존 파일 제외)
      const actualFiles = files
        .filter(file => file.file !== null)
        .map(file => file.file!);

      console.log(isEdit ? "주보 수정 데이터:" : "주보 등록 데이터:", {
        bulletinDTO,
        files: actualFiles,
        deletedFileIds
      });

      if (isEdit) {
        // 수정 모드
        updateBulletinMutation.mutate(
          {
            id: id!,
            bulletinDTO,
            deletedFileIds,
            files: actualFiles
          },
          {
            onSuccess: () => {
              alert("주보가 수정되었습니다.");
              router.replace("/admin");
              setState("selectedCateogry", 3);
              setState("selectedId", null);
            },
            onError: () => {
              alert("주보 수정에 실패했습니다.");
            }
          }
        );
      } else {
        // 등록 모드
        createBulletinMutation.mutate(
          {
            bulletinDTO,
            files: actualFiles
          },
          {
            onSuccess: () => {
              alert("주보가 등록되었습니다.");
              setState("selectedCateogry", 3);
              setState("selectedId", null);
            },
            onError: () => {
              alert("주보 등록에 실패했습니다.");
            }
          }
        );
      }
    }
  };

  const handleCancel = () => {
    const hasContent =
      formData.title.trim() || formData.content.trim() || files.length > 0;

    if (
      hasContent &&
      !confirm("작성 중인 내용이 있습니다. 정말 취소하시겠습니까?")
    ) {
      return;
    }

    // 적절한 목록 페이지로 이동
    if (isNotice) {
      setState("selectedCateogry", 2); // Notice 페이지
    } else {
      setState("selectedCateogry", 3); // Bulletin 페이지
    }
    setState("selectedId", null);
  };

  const pageTitle = isEdit
    ? `${isNotice ? "공지" : "주보"} 수정`
    : `${isNotice ? "공지" : "주보"} 등록`;

  if (isLoading) {
    return (
      <div className={container}>
        <div className={header}>
          <h1 className={title}>{pageTitle}</h1>
          <p className={subtitle}>데이터를 불러오는 중...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={container}>
      <div className={header}>
        <h1 className={title}>{pageTitle}</h1>
      </div>
      <div className={form}>
        <div
          style={{
            display: "flex",
            gap: "10px",
            alignItems: "center",
            width: "100%"
          }}
        >
          {/* 제목 입력 */}
          <div className={fieldContainer}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <label className={label}>
                제목 <span className={required}>*</span>
              </label>
              <span className={required}>최대 200자</span>
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <input
                type='text'
                className={input}
                placeholder={`${isNotice ? "공지" : "주보"} 제목을 입력하세요`}
                value={formData.title}
                onChange={handleTitleChange}
                style={{
                  backgroundColor: color.common.white
                }}
              />
            </div>
          </div>
          {isNotice && (
            <div className={pinnedContainer}>
              <div className={checkboxWrapper}>
                <input
                  type='checkbox'
                  id='pinned'
                  className={checkbox}
                  checked={isPinned}
                  onChange={handlePinnedChange}
                />
                <div
                  className={`${checkIcon} ${isPinned ? checkedIcon : ""}`}
                ></div>
              </div>
              <label htmlFor='pinned' className={pinnedLabel}>
                상단 고정
              </label>
            </div>
          )}
        </div>

        {/* 내용 입력 */}
        <div className={fieldContainer}>
          <label className={label}>
            내용 <span className={required}>*</span>
          </label>
          <div
            className={quillContainer}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          >
            {/* 수정 모드일 때는 데이터가 로드된 후에만 렌더링 */}
            {(!isEdit ||
              (isEdit &&
                apiResponse?.data &&
                formData.content !== undefined)) && (
              <ReactQuill
                key={isEdit ? `${id}-${formData.content?.slice(0, 10)}` : "new"}
                ref={quillRef}
                theme='snow'
                value={formData.content}
                onChange={handleContentChange}
                modules={quillModules}
                formats={quillFormats}
                placeholder=''
                style={{
                  height: "600px",
                  paddingBottom: "43px",
                  backgroundColor: color.common.white
                }}
              />
            )}
            {/* 수정 모드에서 데이터 로딩 중일 때 표시 */}
            {isEdit &&
              (!apiResponse?.data || formData.content === undefined) && (
                <div
                  style={{
                    height: "300px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: color.common.white,
                    border: "1px solid #ccc"
                  }}
                >
                  에디터 로딩 중...
                </div>
              )}
          </div>
        </div>
        {isNotice && (
          <div className={fieldContainer}>
            <label className={label}>첨부파일</label>
            <div
              className={fileUploadContainer}
              onClick={() => fileInputRef.current?.click()}
            >
              <div className={fileUploadText}>
                파일을 드래그하거나 클릭하여 업로드하세요
              </div>
              <div className={fileUploadSubtext}>
                최대 10MB까지 업로드 가능합니다
              </div>
            </div>

            <input
              ref={fileInputRef}
              type='file'
              multiple
              onChange={handleFileUpload}
              style={{ display: "none" }}
              accept='image/*,.pdf,.doc,.docx,.hwp'
            />

            {files.length > 0 && (
              <div className={fileList}>
                {files.map(file => (
                  <div key={file.id} className={fileItem}>
                    <span className={fileName}>
                      {formatFileName(file.name)}
                      {file.file && `(${formatFileSize(file.file.size)})`}
                      {file.isExisting && " (기존 파일)"}
                    </span>
                    <button
                      className={removeButton}
                      onClick={() => handleFileRemove(file.id)}
                      type='button'
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* 버튼 영역 */}
        <div className={buttonContainer}>
          <button
            type='button'
            className={submitButton}
            onClick={handleSubmit}
            disabled={
              createNoticeMutation.isPending ||
              updateNoticeMutation.isPending ||
              createBulletinMutation.isPending ||
              updateBulletinMutation.isPending
            }
          >
            {createNoticeMutation.isPending ||
            updateNoticeMutation.isPending ||
            createBulletinMutation.isPending ||
            updateBulletinMutation.isPending
              ? isEdit
                ? "수정 중..."
                : "등록 중..."
              : isEdit
              ? "수정하기"
              : "등록하기"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoticeBulletineRegister;
