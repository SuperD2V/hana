import { useState, useRef, useCallback } from "react";

interface FileItem {
  id: string;
  name: string;
  file: File | null;
  url?: string;
  isExisting?: boolean;
  fileId?: number; // 서버에서 받은 파일의 실제 ID
}

export const useFormData = () => {
  const [formData, setFormData] = useState({
    title: "",
    content: ""
  });

  const [files, setFiles] = useState<FileItem[]>([]);
  const [isPinned, setIsPinned] = useState(false);
  const [deletedFileIds, setDeletedFileIds] = useState<number[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleTitleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData(prev => ({ ...prev, title: e.target.value }));
    },
    []
  );

  const handleContentChange = useCallback((value: string) => {
    setFormData(prev => ({ ...prev, content: value }));
  }, []);

  const handleFileUpload = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const selectedFiles = e.target.files;
      if (selectedFiles) {
        const newFiles: FileItem[] = Array.from(selectedFiles).map(file => ({
          id: Math.random().toString(36).substr(2, 9),
          name: file.name,
          file
        }));
        setFiles(prev => [...prev, ...newFiles]);
      }
    },
    []
  );

  const handleFileRemove = useCallback((fileId: string) => {
    setFiles(prev => {
      const fileToRemove = prev.find(file => file.id === fileId);

      // 기존 파일(서버에서 받은 파일)을 삭제하는 경우
      if (fileToRemove?.isExisting && fileToRemove.fileId) {
        setDeletedFileIds(prevDeletedIds => [
          ...prevDeletedIds,
          fileToRemove.fileId!
        ]);
      }

      return prev.filter(file => file.id !== fileId);
    });
  }, []);

  const handlePinnedChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setIsPinned(e.target.checked);
    },
    []
  );

  const resetForm = useCallback(() => {
    setFormData({
      title: "",
      content: ""
    });
    setFiles([]);
    setIsPinned(false);
    setDeletedFileIds([]);
  }, []);

  const setFormDataFromServer = useCallback(
    (data: { title: string; content: string }) => {
      setFormData(data);
    },
    []
  );

  const setFilesFromServer = useCallback((serverFiles: FileItem[]) => {
    setFiles(serverFiles);
  }, []);

  const setPinnedFromServer = useCallback((pinned: boolean) => {
    setIsPinned(pinned);
  }, []);

  return {
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
    resetForm,
    setFormDataFromServer,
    setFilesFromServer,
    setPinnedFromServer
  };
};
