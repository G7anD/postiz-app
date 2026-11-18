'use client';

export const Logo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="60"
      height="60"
      viewBox="-10 -10 60 60"
      fill="none"
      className="mt-[8px] min-w-[60px] min-h-[60px]"
      aria-label="Nashrchi"
    >
      <rect width="40" height="40" rx="11" fill="#612BD3" />
      <path d="M11 12.5h4.6v15h-4.6zM24.4 12.5h4.6v15h-4.6z" fill="#fff" />
      <path d="M11 12.5h4.6l13.4 15h-4.6z" fill="#fff" />
      <circle cx="31" cy="9" r="3.4" fill="#F5A524" stroke="#612BD3" strokeWidth="1.6" />
    </svg>
  );
};
