import { Typography } from "@/component/shared";
import * as styles from "./index.css";

interface DetailHeaderProps {
  title: string;
  onDelete: () => void;
  isDeleting: boolean;
}

export const DetailHeader = ({
  title,
  onDelete,
  isDeleting
}: DetailHeaderProps) => {
  return (
    <div className={styles.header}>
      <Typography variant='largetitle2Semibold'>{title}</Typography>

      <div style={{ display: "flex", gap: "8px" }}>
        <button
          style={{
            width: "152px",
            backgroundColor: "#E13A3A",
            color: "#ffffff"
          }}
          className={styles.button}
          onClick={onDelete}
          disabled={isDeleting}
        >
          <svg
            width='20'
            height='20'
            viewBox='0 0 20 20'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M7.49992 14.1667H9.16658V6.66667H7.49992V14.1667ZM10.8333 14.1667H12.4999V6.66667H10.8333V14.1667ZM4.16659 17.5V5H3.33325V3.33333H7.49992V2.5H12.4999V3.33333H16.6666V5H15.8333V17.5H4.16659Z'
              fill='currentColor'
            />
          </svg>
          {isDeleting ? "삭제 중..." : "삭제"}
        </button>
        <button
          style={{
            width: "200px",
            backgroundColor: "#1B5FB8",
            color: "#ffffff"
          }}
          className={styles.button}
        >
          <svg
            width='20'
            height='20'
            viewBox='0 0 20 20'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M2.5 17.5V13.9583L14.6875 1.8125L18.1667 5.375L6.04167 17.5H2.5ZM14.6667 6.5L15.8333 5.33333L14.6667 4.16667L13.5 5.33333L14.6667 6.5Z'
              fill='currentColor'
            />
          </svg>
          수정하기
        </button>
      </div>
    </div>
  );
};
