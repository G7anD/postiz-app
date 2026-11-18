import React from 'react';

export const LogoTextComponent = () => {
  return (
    <div className="flex items-center gap-[10px]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="36"
        height="36"
        viewBox="0 0 40 40"
        fill="none"
      >
        <rect width="40" height="40" rx="11" fill="#612BD3" />
        <path d="M11 12.5h4.6v15h-4.6zM24.4 12.5h4.6v15h-4.6z" fill="#fff" />
        <path d="M11 12.5h4.6l13.4 15h-4.6z" fill="#fff" />
        <circle cx="31" cy="9" r="3.4" fill="#F5A524" stroke="#612BD3" strokeWidth="1.6" />
      </svg>
      <span className="text-[24px] font-[600] leading-none tracking-[-0.02em]">
        Nashrchi
      </span>
    </div>
  );
};
