"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle, AlertTriangle, Info } from "lucide-react";
import { cn } from "@/lib/utils";
import * as styles from "./index.css";

export type LogType = "success" | "error" | "warning" | "info";

export interface LogDialogProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  message?: string;
  type?: LogType;
  showIcon?: boolean;
  showCloseButton?: boolean;
  confirmText?: string;
  cancelText?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
  className?: string;
  contentClassName?: string;
  headerClassName?: string;
  footerClassName?: string;
  children?: React.ReactNode;
  showHeader?: boolean;
  showFooter?: boolean;
}

const LogDialog: React.FC<LogDialogProps> = ({
  isOpen,
  onClose,
  title,
  message,
  type = "info",
  showIcon = true,
  showCloseButton = true,
  confirmText,
  cancelText,
  onConfirm,
  onCancel,
  className,
  contentClassName,
  headerClassName,
  footerClassName,
  children,
  showHeader = true,
  showFooter = true
}) => {
  const handleConfirm = () => {
    onConfirm?.();
    onClose();
  };

  const handleCancel = () => {
    onCancel?.();
    onClose();
  };

  const getIcon = () => {
    if (!showIcon) return null;

    const iconProps = { size: 24 };

    switch (type) {
      case "success":
        return <CheckCircle className='text-green-500' {...iconProps} />;
      case "error":
        return <XCircle className='text-red-500' {...iconProps} />;
      case "warning":
        return <AlertTriangle className='text-yellow-500' {...iconProps} />;
      case "info":
      default:
        return <Info className='text-blue-500' {...iconProps} />;
    }
  };

  const getTypeStyles = () => {
    switch (type) {
      case "success":
        return styles.successStyles;
      case "error":
        return styles.errorStyles;
      case "warning":
        return styles.warningStyles;
      case "info":
      default:
        return styles.infoStyles;
    }
  };

  const getButtonStyles = () => {
    switch (type) {
      case "success":
        return styles.successButton;
      case "error":
        return styles.errorButton;
      case "warning":
        return styles.warningButton;
      case "info":
      default:
        return styles.infoButton;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className={cn(
          styles.logDialogContent,
          getTypeStyles(),
          contentClassName
        )}
        showCloseButton={showCloseButton}
      >
        {showHeader && (title || message) && (
          <DialogHeader className={cn(styles.logDialogHeader, headerClassName)}>
            <div className={styles.logDialogIcon}>{getIcon()}</div>
            <div className={styles.logDialogContentWrapper}>
              {title && (
                <DialogTitle className={cn(styles.logDialogTitle, className)}>
                  {title}
                </DialogTitle>
              )}
              {message && (
                <DialogDescription className={styles.logDialogDescription}>
                  {message}
                </DialogDescription>
              )}
            </div>
          </DialogHeader>
        )}

        {children && <div className='py-4'>{children}</div>}

        {showFooter && (confirmText || cancelText) && (
          <DialogFooter className={cn(styles.logDialogFooter, footerClassName)}>
            {cancelText && (
              <Button
                variant='outline'
                onClick={handleCancel}
                className={styles.logDialogButton}
              >
                {cancelText}
              </Button>
            )}
            {confirmText && (
              <Button
                onClick={handleConfirm}
                className={cn(styles.logDialogButton, getButtonStyles())}
              >
                {confirmText}
              </Button>
            )}
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default LogDialog;
