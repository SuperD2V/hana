import Image from "next/image";
import { dropdown, dropdownContent, dropdownItem } from "./index.css";
import { Typography } from "@/component/shared";

interface DropdownProps {
  onEdit?: () => void;
  onDelete?: () => void;
}

export const Dropdown: React.FC<DropdownProps> = ({ onEdit, onDelete }) => {
  return (
    <div className={dropdown}>
      <div className={dropdownContent}>
        <div className={dropdownItem} onClick={onEdit}>
          <Image src='/images/edit.svg' alt='edit' width={24} height={24} />
          <Typography variant='body1Medium'>수정</Typography>
        </div>
        <div className={dropdownItem} onClick={onDelete}>
          <Image src='/images/delete.svg' alt='delete' width={24} height={24} />
          <Typography
            style={{
              color: "#E13A3A"
            }}
            variant='body1Medium'
          >
            삭제
          </Typography>
        </div>
      </div>
    </div>
  );
};
