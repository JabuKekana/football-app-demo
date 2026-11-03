import React from "react";
import { QRCodeSVG } from "qrcode.react";

export function QrCode({ value, size = 118, label }) {
  return (
    <div className="rounded-[18px] bg-white p-2.5 shadow-[0_10px_30px_rgba(3,10,30,.24)]">
      <QRCodeSVG
        value={value}
        size={size}
        bgColor="#FFFFFF"
        fgColor="#0B1736"
        level="H"
        marginSize={0}
        title={label}
      />
    </div>
  );
}
