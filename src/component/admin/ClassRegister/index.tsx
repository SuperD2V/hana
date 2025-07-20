"use client";

import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from "react";
import {
  container,
  header,
  title,
  form,
  fieldContainer,
  label,
  required,
  input,
  thumbnailContainer,
  thumbnailUpload,
  thumbnailIcon,
  thumbnailText,
  uploadButton,
  dateTimeContainer,
  dateTimeRow,
  dateTimeSelect,
  submitButton,
  submitButtonActive,
  contentContainer,
  textarea,
  hoverOverlay
} from "./index.css";
import { color } from "@/component/shared/designed/color";
import dynamic from "next/dynamic";
import { useSearchParams, useRouter } from "next/navigation";
import { useShallow } from "zustand/shallow";
import { useAdminStore } from "../../../../hooks/store/useAdminStore";
import { uploadFile } from "../Bulletin/api";
import { registerClass, updateClass, getClassById } from "./api";
import Image from "next/image";

// ReactQuill을 클라이언트 사이드에서만 로드
const ReactQuill = dynamic(() => import("react-quill-new"), {
  ssr: false,
  loading: () => (
    <div
      style={{
        height: "300px",
        backgroundColor: color.common.white,
        padding: "16px"
      }}
    >
      로딩 중...
    </div>
  )
});

interface FileItem {
  id: string;
  name: string;
  file: File;
}

export const ClassRegister = () => {
  const [formData, setFormData] = useState({
    title: "",
    year: "",
    month: "",
    day: "",
    startHour: "",
    startMinute: "",
    location: "",
    instructor: "",
    applicationLink: "",
    content: ""
  });
  const searchParams = useSearchParams();
  const router = useRouter();
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

  // URL 파라미터에 id가 있을 때만 수정 모드
  const isEdit = !!urlId;
  const isNotice = type === "notice";

  const [files, setFiles] = useState<FileItem[]>([]);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [thumbnailPreview, setThumbnailPreview] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [isPinned, setIsPinned] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const quillRef = useRef<any>(null);

  // 수정 모드일 때 기존 데이터 로드
  useEffect(() => {
    if (isEdit && urlId) {
      loadExistingData();
    }
  }, [isEdit, urlId]);

  const loadExistingData = async () => {
    if (!urlId) return;

    try {
      setIsLoading(true);
      const data = await getClassById(urlId);

      // 날짜 파싱
      const classDate = new Date(data.classDate);
      const year = classDate.getFullYear().toString();
      const month = (classDate.getMonth() + 1).toString();
      const day = classDate.getDate().toString();

      // 시간 파싱 (시작 시간만 사용)
      const startHour = classDate.getHours().toString();
      const startMinute = classDate.getMinutes().toString();

      setFormData({
        title: data.title || "",
        year,
        month,
        day,
        startHour,
        startMinute,
        location: data.location || "",
        instructor: data.instructor || "",
        applicationLink: data.applyLink || "",
        content: data.content || ""
      });

      // 썸네일 이미지가 있다면 설정
      if (data.thumbnail && data.thumbnail.fileUrl) {
        setThumbnailPreview(data.thumbnail.fileUrl);
      }
    } catch (error) {
      console.error("기존 데이터 로드 실패:", error);
      alert("기존 데이터를 불러오는데 실패했습니다.");
    } finally {
      setIsLoading(false);
    }
  };

  // 썸네일 파일 선택 핸들러
  const handleThumbnailSelect = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);

      // 미리보기 생성
      const reader = new FileReader();
      reader.onload = e => {
        setThumbnailPreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // react-quill 설정
  const quillModules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [1, 2, 3, false] }],
          ["bold", "italic", "underline", "strike"],
          [{ list: "ordered" }, { list: "bullet" }],
          [{ align: [] }],
          ["link"],
          ["clean"]
        ]
      }
    }),
    []
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
    "link"
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  // 필수 요소 검증 함수
  const isFormValid = useMemo(() => {
    const hasTitle = formData.title.trim() !== "";
    const hasDate = formData.year && formData.month && formData.day;
    const hasTime = formData.startHour && formData.startMinute;
    const hasLocation = formData.location.trim() !== "";
    const hasInstructor = formData.instructor.trim() !== "";
    const hasApplicationLink = formData.applicationLink.trim() !== "";
    const hasContent = formData.content.trim() !== "";
    const hasThumbnail = selectedFile || thumbnailPreview;

    return (
      hasTitle &&
      hasDate &&
      hasTime &&
      hasLocation &&
      hasInstructor &&
      hasApplicationLink &&
      hasContent &&
      hasThumbnail
    );
  }, [formData, selectedFile, thumbnailPreview]);

  const validateForm = () => {
    if (!formData.title.trim()) {
      alert("제목을 입력해주세요.");
      return false;
    }
    if (!formData.year || !formData.month || !formData.day) {
      alert("날짜를 선택해주세요.");
      return false;
    }
    if (!formData.startHour) {
      alert("시작 시간을 선택해주세요.");
      return false;
    }
    if (!formData.startMinute) {
      alert("시작 분을 선택해주세요.");
      return false;
    }
    if (!formData.location.trim()) {
      alert("장소를 입력해주세요.");
      return false;
    }
    if (!formData.instructor.trim()) {
      alert("강사명을 입력해주세요.");
      return false;
    }
    if (!formData.applicationLink.trim()) {
      alert("신청 링크를 입력해주세요.");
      return false;
    }
    if (!formData.content.trim()) {
      alert("내용을 입력해주세요.");
      return false;
    }
    if (!selectedFile && !thumbnailPreview) {
      alert("썸네일 이미지를 선택해주세요.");
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    try {
      setIsLoading(true);

      // 디버깅: 파일 상태 확인
      console.log("selectedFile:", selectedFile);
      console.log("thumbnailPreview:", thumbnailPreview);

      // 날짜와 시간 조합
      const classDate = new Date(
        parseInt(formData.year),
        parseInt(formData.month) - 1,
        parseInt(formData.day),
        parseInt(formData.startHour),
        parseInt(formData.startMinute)
      );

      const requestData = {
        title: formData.title,
        content: formData.content,
        classDate: classDate.toISOString(),
        location: formData.location,
        instructor: formData.instructor,
        applyLink: formData.applicationLink,
        isVisible: true
      };

      console.log("requestData:", requestData);

      if (isEdit) {
        // 수정 모드
        if (!urlId) {
          alert("수정할 클래스 ID가 없습니다.");
          return;
        }
        console.log("수정 모드 - 파일:", selectedFile);
        await updateClass(urlId, requestData, selectedFile || undefined);
        alert("클래스가 성공적으로 수정되었습니다.");
      } else {
        // 등록 모드
        if (!selectedFile) {
          alert("썸네일 이미지를 선택해주세요.");
          return;
        }
        console.log("등록 모드 - 파일:", selectedFile);
        await registerClass(requestData, selectedFile);
        alert("클래스가 성공적으로 등록되었습니다.");
      }

      // 성공 후 목록 페이지로 이동
      setState("selectedCateogry", 4);
    } catch (error) {
      console.error("클래스 등록/수정 실패:", error);
      alert("클래스 등록/수정에 실패했습니다.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading && isEdit) {
    return (
      <div className={container}>
        <div style={{ textAlign: "center", padding: "50px" }}>로딩 중...</div>
      </div>
    );
  }

  return (
    <div className={container}>
      <div className={header}>
        <h1 className={title}>{isEdit ? "클래스 수정" : "클래스 등록"}</h1>
      </div>

      <form className={form}>
        <div style={{ display: "flex", justifyContent: "center", gap: "32px" }}>
          {/* 썸네일 섹션 */}
          <div style={{ width: "440px", flexShrink: 0 }}>
            <div className={fieldContainer}>
              <label className={label}>
                썸네일 <span className={required}>*</span>
              </label>
              <div className={thumbnailContainer} style={{ marginTop: "8px" }}>
                {thumbnailPreview ? (
                  <div
                    style={{
                      position: "relative",
                      width: "440px",
                      height: "440px",
                      cursor: "pointer"
                    }}
                    onMouseEnter={e => {
                      const overlay = e.currentTarget.querySelector(
                        "[data-hover-overlay]"
                      ) as HTMLElement;
                      if (overlay) {
                        overlay.style.opacity = "1";
                      }
                    }}
                    onMouseLeave={e => {
                      const overlay = e.currentTarget.querySelector(
                        "[data-hover-overlay]"
                      ) as HTMLElement;
                      if (overlay) {
                        overlay.style.opacity = "0";
                      }
                    }}
                    onClick={() => {
                      fileInputRef.current?.click();
                    }}
                  >
                    <Image
                      src={thumbnailPreview}
                      alt='썸네일'
                      fill
                      style={{
                        objectFit: "contain",
                        borderRadius: "8px",
                        position: "absolute"
                      }}
                    />
                    <button
                      type='button'
                      onClick={e => {
                        e.stopPropagation();
                        setThumbnailPreview("");
                        setSelectedFile(null);
                        if (fileInputRef.current) {
                          fileInputRef.current.value = "";
                        }
                      }}
                      style={{
                        position: "absolute",
                        top: "8px",
                        right: "8px",
                        background: "rgba(0,0,0,0.5)",
                        color: "white",
                        border: "none",
                        borderRadius: "50%",
                        width: "24px",
                        height: "24px",
                        cursor: "pointer",
                        zIndex: 2
                      }}
                    >
                      ×
                    </button>
                    <div
                      data-hover-overlay
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: "rgba(0,0,0,0.5)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "8px",
                        opacity: 0,
                        transition: "opacity 0.2s",
                        zIndex: 1
                      }}
                    >
                      <button
                        type='button'
                        className={uploadButton}
                        onClick={e => {
                          e.stopPropagation();
                          fileInputRef.current?.click();
                        }}
                      >
                        사진 변경
                      </button>
                    </div>
                  </div>
                ) : (
                  <div
                    className={thumbnailUpload}
                    style={{
                      height: "440px",
                      position: "relative",
                      cursor: "pointer"
                    }}
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <div className={thumbnailIcon}>📷</div>
                    <div className={thumbnailText}>
                      아직 등록된 사진이 없습니다.
                    </div>
                    {!isEdit && (
                      <button
                        type='button'
                        className={uploadButton}
                        style={{
                          position: "absolute",
                          bottom: "16px",
                          left: "50%",
                          transform: "translateX(-50%)"
                        }}
                        onClick={e => {
                          e.stopPropagation();
                          fileInputRef.current?.click();
                        }}
                      >
                        + 사진 등록
                      </button>
                    )}
                  </div>
                )}
                <input
                  ref={fileInputRef}
                  type='file'
                  accept='image/*'
                  onChange={handleThumbnailSelect}
                  style={{ display: "none" }}
                />
                {isEdit && (
                  <button
                    type='button'
                    className={uploadButton}
                    onClick={() => fileInputRef.current?.click()}
                  >
                    + 사진 등록
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* 오른쪽 컬럼 - 상단 섹션 */}
          <div
            style={{
              width: "720px",
              flexShrink: 0,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between"
            }}
          >
            {/* 제목 */}
            <div className={fieldContainer}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <label className={label}>
                  제목 <span className={required}>*</span>
                </label>
                <span style={{ fontSize: "14px", color: color.gray[500] }}>
                  최대 200자
                </span>
              </div>
              <input
                type='text'
                className={input}
                placeholder='클래스 제목을 입력해주세요'
                value={formData.title}
                onChange={e => handleInputChange("title", e.target.value)}
                maxLength={200}
              />
            </div>

            {/* 일시 */}
            <div className={fieldContainer}>
              <label className={label}>
                일시 <span className={required}>*</span>
              </label>
              <div className={dateTimeContainer}>
                <div className={dateTimeRow}>
                  <select
                    className={dateTimeSelect}
                    value={formData.year}
                    onChange={e => handleInputChange("year", e.target.value)}
                  >
                    <option value=''>선택</option>
                    {Array.from(
                      { length: 10 },
                      (_, i) => new Date().getFullYear() + i
                    ).map(year => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                  <span style={{ fontSize: "14px", color: color.gray[600] }}>
                    년
                  </span>
                  <select
                    className={dateTimeSelect}
                    value={formData.month}
                    onChange={e => handleInputChange("month", e.target.value)}
                  >
                    <option value=''>선택</option>
                    {Array.from({ length: 12 }, (_, i) => i + 1).map(month => (
                      <option key={month} value={month}>
                        {month}
                      </option>
                    ))}
                  </select>
                  <span style={{ fontSize: "14px", color: color.gray[600] }}>
                    월
                  </span>
                  <select
                    className={dateTimeSelect}
                    value={formData.day}
                    onChange={e => handleInputChange("day", e.target.value)}
                  >
                    <option value=''>선택</option>
                    {Array.from({ length: 31 }, (_, i) => i + 1).map(day => (
                      <option key={day} value={day}>
                        {day}
                      </option>
                    ))}
                  </select>
                  <span style={{ fontSize: "14px", color: color.gray[600] }}>
                    일
                  </span>
                </div>
                <div className={dateTimeRow}>
                  <select
                    className={dateTimeSelect}
                    value={formData.startHour}
                    onChange={e =>
                      handleInputChange("startHour", e.target.value)
                    }
                  >
                    <option value=''>선택</option>
                    {Array.from({ length: 24 }, (_, i) => i).map(hour => (
                      <option key={hour} value={hour}>
                        {hour}
                      </option>
                    ))}
                  </select>
                  <span style={{ fontSize: "14px", color: color.gray[600] }}>
                    시
                  </span>
                  <select
                    className={dateTimeSelect}
                    value={formData.startMinute}
                    onChange={e =>
                      handleInputChange("startMinute", e.target.value)
                    }
                  >
                    <option value=''>선택</option>
                    {Array.from({ length: 60 }, (_, i) => i).map(minute => (
                      <option key={minute} value={minute}>
                        {minute}
                      </option>
                    ))}
                  </select>
                  <span style={{ fontSize: "14px", color: color.gray[600] }}>
                    분
                  </span>
                </div>
              </div>
            </div>

            {/* 장소 */}
            <div className={fieldContainer}>
              <label className={label}>
                장소 <span className={required}>*</span>
              </label>
              <input
                type='text'
                className={input}
                placeholder='장소를 입력해주세요'
                value={formData.location}
                onChange={e => handleInputChange("location", e.target.value)}
              />
            </div>

            {/* 강사 */}
            <div className={fieldContainer}>
              <label className={label}>
                강사 <span className={required}>*</span>
              </label>
              <input
                type='text'
                className={input}
                placeholder='강사 이름을 입력해주세요'
                value={formData.instructor}
                onChange={e => handleInputChange("instructor", e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* 단일 컬럼 - 하단 섹션 */}
        {/* 신청 링크 */}
        <div className={fieldContainer}>
          <label className={label}>
            신청 링크 <span className={required}>*</span>
          </label>
          <input
            type='url'
            className={input}
            placeholder='링크를 입력해주세요'
            value={formData.applicationLink}
            onChange={e => handleInputChange("applicationLink", e.target.value)}
          />
        </div>

        {/* 내용 */}
        <div className={fieldContainer}>
          <label className={label}>
            내용 <span className={required}>*</span>
          </label>
          <div className={contentContainer}>
            <ReactQuill
              theme='snow'
              value={formData.content}
              onChange={e => handleInputChange("content", e)}
              modules={quillModules}
              formats={quillFormats}
              placeholder='내용을 입력하세요...'
              style={{
                height: "300px",
                paddingBottom: "43px",
                backgroundColor: color.common.white
              }}
            />
          </div>
        </div>

        {/* 등록하기 버튼 */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "40px"
          }}
        >
          <button
            type='button'
            className={isFormValid ? submitButtonActive : submitButton}
            onClick={handleSubmit}
            disabled={isLoading || !isFormValid}
          >
            {isLoading ? "처리 중..." : isEdit ? "수정하기" : "등록하기"}
          </button>
        </div>
      </form>
    </div>
  );
};
