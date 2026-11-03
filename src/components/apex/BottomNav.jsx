import React from "react";
import { Bot, Home, ShoppingBag, Ticket, Trophy } from "lucide-react";

const items = [
  { id: "home", label: "Home", icon: Home },
  { id: "match", label: "Match", icon: Trophy },
  { id: "store", label: "Store", icon: ShoppingBag },
  { id: "tickets", label: "Tickets", icon: Ticket },
  { id: "ai", label: "Assistant", icon: Bot },
];

export function BottomNav({ active, onNavigate, bagCount }) {
  return (
    <nav className="bottom-nav absolute inset-x-0 bottom-0 z-50 flex items-end justify-around border-t px-2 pb-[max(10px,env(safe-area-inset-bottom))] pt-2 backdrop-blur-xl">
      {items.map(({ id, label, icon: Icon }) => {
        const selected = active === id;
        return (
          <button
            key={id}
            onClick={() => onNavigate(id)}
            className={`group relative flex min-w-[60px] flex-col items-center gap-1 rounded-2xl px-2 py-1.5 transition ${selected ? "text-apex-teal" : "text-white/45 hover:text-white/80"}`}
            aria-label={label}
            aria-current={selected ? "page" : undefined}
          >
            {selected && <span className="absolute -top-2 h-0.5 w-5 rounded-full bg-apex-teal shadow-[0_0_12px_#2DD4BF]" />}
            <span className={`relative grid h-7 w-7 place-items-center transition ${selected ? "-translate-y-0.5" : ""}`}>
              <Icon size={20} strokeWidth={selected ? 2.5 : 1.8} />
              {id === "store" && bagCount > 0 && (
                <span className="absolute -right-1.5 -top-1.5 grid h-4 min-w-4 place-items-center rounded-full bg-apex-teal px-1 text-[9px] font-black text-apex-navy">
                  {bagCount}
                </span>
              )}
            </span>
            <span className="text-[9px] font-bold tracking-wide">{label}</span>
          </button>
        );
      })}
    </nav>
  );
}
