import React from "react";

export function ClubCrest({ size = 46, className = "" }) {
  return (
    <div
      className={`relative grid shrink-0 place-items-center ${className}`}
      style={{ width: size, height: size }}
      aria-label="Apex Football Club crest"
    >
      <svg viewBox="0 0 64 72" className="h-full w-full drop-shadow-[0_8px_14px_rgba(45,212,191,.2)]" aria-hidden="true">
        <path d="M32 2 58 11v22c0 17-9.8 29.8-26 37C15.8 62.8 6 50 6 33V11L32 2Z" fill="#2DD4BF" />
        <path d="M32 7 53 14v19c0 13.4-7 24.2-21 31.2C18 57.2 11 46.4 11 33V14l21-7Z" fill="#1746A2" />
        <path d="M17 21h30M14 34h36" stroke="#2DD4BF" strokeWidth="1.4" opacity=".55" />
        <text x="32" y="32" fill="#FFFFFF" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="900" textAnchor="middle">AFC</text>
        <path d="m23 45 4.6 1.4L32 43l4.4 3.4L41 45l-2.8 4.1.2 5-6.4-3.3-6.4 3.3.2-5L23 45Z" fill="#2DD4BF" />
      </svg>
    </div>
  );
}
