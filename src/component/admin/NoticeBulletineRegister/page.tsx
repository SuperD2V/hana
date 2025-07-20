"use client";

import { useSearchParams } from "next/navigation";
import React, {
  useState,
  useRef,
  useMemo,
  useEffect,
  useCallback
} from "react";
import dynamic from "next/dynamic";
import "react-quill-new/dist/quill.snow.css";
import { useAdminStore } from "../../../../hooks/store/useAdminStore";
import { useShallow } from "zustand/shallow";
import { uploadFile } from "../Bulletin/api";
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

interface FileItem {
  id: string;
  name: string;
  file: File;
}

const NoticeBulletineRegister = () => {
  const searchParams = useSearchParams();
  const urlType = searchParams.get("type");
  const urlId = searchParams.get("id");

  const { selectedId, setState } = useAdminStore(
    useShallow(state => ({
      selectedId: state.selectedId,
      setState: state.setState
    }))
  );

  // URL 파라미터가 있으면 우선 사용, 없으면 store에서 가져오기
  const id = urlId || selectedId;
  const type = urlType || "notice"; // notice, bulletin

  const isEdit = !!id;
  const isNotice = type === "notice";

  const [formData, setFormData] = useState({
    title: "",
    content: ""
  });

  const [files, setFiles] = useState<FileItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isPinned, setIsPinned] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const quillRef = useRef<any>(null);

  // 수정 모드일 때 기존 데이터 불러오기
  useEffect(() => {
    if (isEdit && id) {
      setIsLoading(true);
      // TODO: API 호출해서 기존 데이터 불러오기
      // 임시로 더미 데이터 설정
      setTimeout(() => {
        setFormData({
          title: `기존 ${isNotice ? "공지" : "게시글"} 제목`,
          content: `기존 ${isNotice ? "공지" : "게시글"} 내용입니다.`
        });
        setIsLoading(false);
      }, 1000);
    }
  }, [isEdit, id, isNotice]);

  // 이미지 서버 업로드 함수
  const handleImageUpload = useCallback(
    async (file: File): Promise<string | null> => {
      try {
        // 파일 크기 제한 (10MB)
        if (file.size > 10 * 1024 * 1024) {
          alert("이미지 파일 크기는 10MB 이하여야 합니다.");
          return null;
        }

        // 이미지 파일 타입 확인
        if (!file.type.startsWith("image/")) {
          alert("이미지 파일만 업로드 가능합니다.");
          return null;
        }

        console.log("업로드할 파일:", {
          name: file.name,
          size: file.size,
          type: file.type
        });

        const url = await uploadFile(file);
        console.log("업로드 성공, URL:", url);
        return url || null;
      } catch (error: any) {
        console.error("이미지 업로드 실패:", error);
        console.error("에러 상세:", {
          message: error?.message,
          status: error?.response?.status,
          statusText: error?.response?.statusText,
          data: error?.response?.data
        });
        alert("이미지 업로드에 실패했습니다.");
        return null;
      }
    },
    []
  );

  // 이미지 핸들러 함수
  const imageHandler = useCallback(() => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.onchange = async () => {
      const file = input.files?.[0];
      if (!file) return;

      // React Quill 인스턴스 가져오기
      const quill = quillRef.current?.getEditor();
      if (!quill) return;

      const range = quill.getSelection();
      const index = range ? range.index : quill.getLength();

      // 로딩 placeholder 삽입
      quill.insertText(index, "이미지 업로드 중...", "italic", true);

      // 서버에 이미지 업로드
      const imageUrl = await handleImageUpload(file);

      // placeholder 제거
      quill.deleteText(index, "이미지 업로드 중...".length);

      if (imageUrl) {
        // 이미지 삽입
        quill.insertEmbed(index, "image", imageUrl, "api");

        // 삽입된 이미지에 alt 속성 추가
        setTimeout(() => {
          const editorElement = quill.root;
          const images = editorElement.querySelectorAll(
            `img[src="${imageUrl}"]`
          );
          images.forEach((img: Element) => {
            img.setAttribute("alt", "photo-in-text-cloudfront-src");
          });
        }, 100);

        quill.setSelection(index + 1);
      }
    };
  }, [handleImageUpload]);

  // react-quill 설정
  const quillModules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [1, 2, 3, false] }],
          ["bold", "italic", "underline", "strike"],
          [{ list: "ordered" }, { list: "bullet" }],
          [{ align: [] }],
          ["link", "image"],
          ["clean"]
        ],
        handlers: {
          image: imageHandler
        }
      }
    }),
    [imageHandler]
  );

  const quillFormats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "list",
    "bullet",
    "align",
    "link",
    "image"
  ];

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, title: e.target.value }));
  };

  const handleContentChange = (value: string) => {
    setFormData(prev => ({ ...prev, content: value }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files;
    if (selectedFiles) {
      const newFiles: FileItem[] = Array.from(selectedFiles).map(file => ({
        id: Math.random().toString(36).substr(2, 9),
        name: file.name,
        file
      }));
      setFiles(prev => [...prev, ...newFiles]);
    }
  };

  const handleFileRemove = (fileId: string) => {
    setFiles(prev => prev.filter(file => file.id !== fileId));
  };

  const handlePinnedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsPinned(e.target.checked);
  };

  // 드래그앤드롭 핸들러
  const handleDrop = useCallback(
    async (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();

      const files = Array.from(e.dataTransfer.files);
      const imageFiles = files.filter(file => file.type.startsWith("image/"));

      if (imageFiles.length === 0) {
        alert("이미지 파일만 업로드 가능합니다.");
        return;
      }

      const quill = quillRef.current?.getEditor();
      if (!quill) return;

      const range = quill.getSelection(true) || { index: quill.getLength() };

      for (const file of imageFiles) {
        // 로딩 placeholder 삽입
        quill.insertText(range.index, "이미지 업로드 중...", "italic", true);

        const url = await handleImageUpload(file);

        // placeholder 제거
        quill.deleteText(range.index, "이미지 업로드 중...".length);

        if (url) {
          quill.insertEmbed(range.index, "image", url, "api");

          // 삽입된 이미지에 alt 속성 추가
          setTimeout(() => {
            const editorElement = quill.root;
            const images = editorElement.querySelectorAll(`img[src="${url}"]`);
            images.forEach((img: Element) => {
              img.setAttribute("alt", "photo-in-text-cloudfront-src");
            });
          }, 100);

          range.index += 1;
        }
      }
    },
    [handleImageUpload]
  );

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleSubmit = () => {
    if (!formData.title.trim()) {
      alert("제목을 입력해주세요.");
      return;
    }

    if (!formData.content.trim()) {
      alert("내용을 입력해주세요.");
      return;
    }

    // TODO: API 호출로 데이터 저장
    console.log("제출 데이터:", {
      type,
      id,
      title: formData.title,
      content: formData.content,
      files: files.map(f => f.file),
      isPinned: isPinned
    });

    const actionText = isEdit ? "수정" : "등록";
    const typeText = isNotice ? "공지사항" : "주보";
    alert(`${typeText}이 ${actionText}되었습니다.`);

    // 성공 후 목록 페이지로 이동
    if (isNotice) {
      setState("selectedCateogry", 2); // Notice 페이지
    } else {
      setState("selectedCateogry", 3); // Bulletin 페이지
    }
    setState("selectedId", null);
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
          {/* 상단 고정 컴포넌트 */}
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
            <ReactQuill
              ref={quillRef}
              theme='snow'
              value={formData.content}
              onChange={handleContentChange}
              modules={quillModules}
              formats={quillFormats}
              placeholder='내용을 입력하세요... (이미지를 드래그해서 넣을 수 있습니다)'
              style={{
                height: "300px",
                paddingBottom: "43px",
                backgroundColor: color.common.white
              }}
            />
          </div>
        </div>

        {/* 첨부파일 */}
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
                  <span className={fileName}>{file.name}</span>
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

        {/* 버튼 영역 */}
        <div className={buttonContainer}>
          <button type='button' className={cancelButton} onClick={handleCancel}>
            취소
          </button>
          <button type='button' className={submitButton} onClick={handleSubmit}>
            {isEdit ? "수정" : "등록"}하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoticeBulletineRegister;
