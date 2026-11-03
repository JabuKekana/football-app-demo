import React from "react";
import { X } from "lucide-react";

export function Modal({ open, onClose, title, children, className = "" }) {
  if (!open) return null;

  return (
    <div className="absolute inset-0 z-[80] flex items-end bg-apex-navy/70 p-3 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label={title}>
      <button className="absolute inset-0 cursor-default" onClick={onClose} aria-label="Close dialog" />
      <section className={`surface relative z-10 w-full animate-screen-in rounded-[28px] border p-5 shadow-2xl ${className}`}>
        <div className="mb-4 flex items-center justify-between gap-4">
          <h2 className="text-lg font-extrabold tracking-[-0.02em]">{title}</h2>
          <button onClick={onClose} className="icon-button h-9 w-9" aria-label="Close">
            <X size={17} />
          </button>
        </div>
        {children}
      </section>
    </div>
  );
}
