import { FILE_CONSTANTS, FORM_CONSTANTS } from './constants';

export const validateFile = (file: File): string | null => {
  // 파일 크기 검사
  if (file.size > FILE_CONSTANTS.MAX_SIZE) {
    return `파일 크기는 ${FILE_CONSTANTS.MAX_SIZE / (1024 * 1024)}MB 이하여야 합니다.`;
  }

  // 파일 타입 검사
  if (!FILE_CONSTANTS.ALLOWED_TYPES.includes(file.type)) {
    return '지원하지 않는 파일 형식입니다. (JPEG, PNG, GIF, WebP만 가능)';
  }

  return null;
};

export const validateTitle = (title: string): string | null => {
  if (!title.trim()) {
    return '제목을 입력해주세요.';
  }

  if (title.length > FORM_CONSTANTS.TITLE_MAX_LENGTH) {
    return `제목은 ${FORM_CONSTANTS.TITLE_MAX_LENGTH}자 이하여야 합니다.`;
  }

  return null;
};

export const validateContent = (content: string): string | null => {
  if (!content.trim()) {
    return '내용을 입력해주세요.';
  }

  if (content.length > FORM_CONSTANTS.CONTENT_MAX_LENGTH) {
    return `내용은 ${FORM_CONSTANTS.CONTENT_MAX_LENGTH}자 이하여야 합니다.`;
  }

  return null;
};

export const validateForm = (title: string, content: string): string[] => {
  const errors: string[] = [];

  const titleError = validateTitle(title);
  if (titleError) errors.push(titleError);

  const contentError = validateContent(content);
  if (contentError) errors.push(contentError);

  return errors;
}; 