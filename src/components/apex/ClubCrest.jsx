import React from "react";

export function ClubCrest({ size = 46, className = "" }) {
  return (
    <div
      className={`relative grid shrink-0 place-items-center ${className}`}
      style={{ width: size, height: size }}
      aria-label="Kaizer Chiefs crest"
    >
      <img
        src="/assets/kaizer-chiefs-logo.webp"
        alt=""
        className="h-full w-full rounded-full object-cover drop-shadow-[0_8px_16px_rgba(255,182,18,.24)]"
        aria-hidden="true"
      />
    </div>
  );
}
