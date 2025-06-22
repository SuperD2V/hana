export const Hamberger = ({
  isOpen,
  closeMobileMenu
}: {
  isOpen: boolean;
  closeMobileMenu: () => void;
}) => {
  return (
    <svg
      width='20'
      height='20'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      onClick={closeMobileMenu}
    >
      {isOpen ? (
        <>
          <line x1='18' y1='6' x2='6' y2='18' />
          <line x1='6' y1='6' x2='18' y2='18' />
        </>
      ) : (
        <>
          <line x1='3' y1='6' x2='21' y2='6' />
          <line x1='3' y1='12' x2='21' y2='12' />
          <line x1='3' y1='18' x2='21' y2='18' />
        </>
      )}
    </svg>
  );
};
