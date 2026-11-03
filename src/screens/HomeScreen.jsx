import React, { useEffect, useMemo, useState } from "react";
import {
  Bell,
  Bot,
  ChevronRight,
  CreditCard,
  ExternalLink,
  MapPin,
  ShoppingBag,
  Sparkles,
  Ticket,
  UserRound,
} from "lucide-react";
import { ClubCrest } from "../components/apex/ClubCrest";
import { newsItems, STADIUM_MANAGEMENT_URL } from "../data/demoData";

function getNextSaturday() {
  const next = new Date();
  const days = (6 - next.getDay() + 7) % 7;
  next.setDate(next.getDate() + days);
  next.setHours(19, 30, 0, 0);
  if (next.getTime() <= Date.now()) next.setDate(next.getDate() + 7);
  return next;
}

function useCountdown(target) {
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    const interval = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(interval);
  }, []);
  const remaining = Math.max(0, target.getTime() - now);
  return {
    days: Math.floor(remaining / 86400000),
    hours: Math.floor((remaining / 3600000) % 24),
    mins: Math.floor((remaining / 60000) % 60),
    secs: Math.floor((remaining / 1000) % 60),
  };
}

function CountdownUnit({ value, label }) {
  return (
    <div className="min-w-11 rounded-xl border border-white/10 bg-apex-navy/35 px-2 py-2 text-center backdrop-blur-md">
      <div className="text-base font-black tabular-nums text-white">{String(value).padStart(2, "0")}</div>
      <div className="text-[8px] font-bold uppercase tracking-[.16em] text-white/45">{label}</div>
    </div>
  );
}

const quickActions = [
  { id: "membership", label: "Digital ID", icon: CreditCard },
  { id: "store", label: "Official Store", icon: ShoppingBag },
  { id: "tickets", label: "Ticket Wallet", icon: Ticket },
  { id: "ai", label: "Club AI", icon: Bot },
];

export function HomeScreen({ onNavigate, onNotify, motmVote, onVote }) {
  const matchDate = useMemo(() => getNextSaturday(), []);
  const countdown = useCountdown(matchDate);
  const formattedDate = matchDate.toLocaleDateString("en-ZA", { weekday: "short", day: "2-digit", month: "short" });

  return (
    <div className="screen-bg min-h-full animate-screen-in pb-28">
      <header className="sticky top-0 z-30 flex items-center gap-3 border-b border-white/[.06] bg-apex-navy/75 px-5 pb-3 pt-6 backdrop-blur-xl">
        <ClubCrest size={43} />
        <div className="min-w-0 flex-1">
          <p className="text-[9px] font-bold uppercase tracking-[.18em] text-apex-teal">Apex Football Club</p>
          <h1 className="truncate text-[15px] font-extrabold tracking-tight">Welcome back, Kabelo</h1>
        </div>
        <button onClick={onNotify} className="icon-button relative" aria-label="Notifications">
          <Bell size={18} />
          <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-apex-teal ring-2 ring-apex-navy" />
        </button>
        <button onClick={() => onNavigate("membership")} className="avatar-button" aria-label="Open Season Ticket Holder profile">
          <UserRound size={18} />
        </button>
      </header>

      <main className="space-y-6 px-4 pt-4">
        <section className="hero-card relative isolate overflow-hidden rounded-[28px] border border-white/10 px-5 pb-5 pt-32 shadow-2xl">
          <img src="/assets/stadium-hero.png" alt="Floodlit Apex FC stadium before kick-off" className="absolute inset-0 -z-20 h-full w-full object-cover" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-apex-navy via-apex-navy/55 to-apex-navy/5" />
          <div className="mb-3 flex items-center gap-2">
            <span className="rounded-full bg-apex-teal px-2.5 py-1 text-[9px] font-black uppercase tracking-[.12em] text-apex-navy">Next match</span>
            <span className="text-[10px] font-bold text-white/70">{formattedDate} · 19:30</span>
          </div>
          <h2 className="max-w-[280px] text-[26px] font-black leading-[1.02] tracking-[-.04em] text-white">Championship night under the lights.</h2>
          <div className="mt-4 flex gap-2">
            <CountdownUnit value={countdown.days} label="Days" />
            <CountdownUnit value={countdown.hours} label="Hours" />
            <CountdownUnit value={countdown.mins} label="Min" />
            <CountdownUnit value={countdown.secs} label="Sec" />
          </div>
          <a
            href={STADIUM_MANAGEMENT_URL}
            target="_blank"
            rel="noreferrer"
            className="primary-button mt-4 w-full"
          >
            Tickets via Stadium Management SA <ExternalLink size={15} />
          </a>
        </section>

        <section className="surface rounded-[24px] border p-4">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 animate-pulse rounded-full bg-red-500 shadow-[0_0_10px_#ef4444]" />
                <p className="text-[9px] font-black uppercase tracking-[.16em] text-red-400">Live · 68:12</p>
              </div>
              <h2 className="mt-1 text-base font-extrabold">Match Centre</h2>
            </div>
            <button onClick={() => onNavigate("match")} className="text-[10px] font-bold text-apex-teal">Full centre →</button>
          </div>

          <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 text-center">
            <div>
              <ClubCrest size={46} className="mx-auto" />
              <p className="mt-1 text-xs font-extrabold">Apex FC</p>
            </div>
            <div className="rounded-2xl bg-apex-navy px-4 py-2.5 text-2xl font-black tracking-tight text-white shadow-inner">2—1</div>
            <div>
              <div className="mx-auto grid h-[46px] w-[46px] place-items-center rounded-[15px] border border-white/10 bg-white/[.05] text-[11px] font-black">RCF</div>
              <p className="mt-1 text-xs font-extrabold">Rival City</p>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-2">
            {[{ label: "Possession", value: "58%" }, { label: "Shots", value: "14" }, { label: "On target", value: "7" }].map((stat) => (
              <div key={stat.label} className="surface-soft rounded-xl px-2 py-2 text-center">
                <p className="text-sm font-black">{stat.value}</p>
                <p className="text-[8px] font-bold uppercase tracking-wide muted-text">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 border-t border-white/[.07] pt-4">
            <div className="mb-2.5 flex items-center justify-between">
              <p className="text-xs font-bold">Man of the Match</p>
              <span className="text-[9px] font-bold text-apex-teal">1,842 votes</span>
            </div>
            {motmVote ? (
              <div className="flex items-center gap-2 rounded-xl bg-apex-teal/10 px-3 py-2.5 text-xs font-bold text-apex-teal">
                <Sparkles size={15} /> Vote counted for {motmVote}
              </div>
            ) : (
              <div className="grid grid-cols-3 gap-2">
                {["Dube", "Silva", "Ndlovu"].map((player) => (
                  <button key={player} onClick={() => onVote(player)} className="choice-button">{player}</button>
                ))}
              </div>
            )}
          </div>
        </section>

        <section>
          <div className="mb-3 flex items-end justify-between">
            <div>
              <p className="section-kicker">Your club, one tap away</p>
              <h2 className="section-title">Quick access</h2>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {quickActions.map(({ id, label, icon: Icon }) => (
              <button key={id} onClick={() => onNavigate(id)} className="quick-action group">
                <span className="grid h-10 w-10 place-items-center rounded-2xl bg-apex-teal/10 text-apex-teal transition group-hover:-translate-y-0.5 group-hover:bg-apex-teal group-hover:text-apex-navy">
                  <Icon size={18} />
                </span>
                <span>{label}</span>
              </button>
            ))}
          </div>
        </section>

        <section>
          <div className="mb-3 flex items-end justify-between">
            <div>
              <p className="section-kicker">Inside Apex</p>
              <h2 className="section-title">Latest news</h2>
            </div>
            <span className="text-[10px] font-bold muted-text">Swipe →</span>
          </div>
          <div className="hide-scrollbar -mx-4 flex snap-x gap-3 overflow-x-auto px-4 pb-1">
            {newsItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.action)}
                className="news-card group relative h-48 min-w-[82%] snap-center overflow-hidden rounded-[24px] border border-white/10 text-left"
              >
                <img src={item.image} alt="" className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-apex-navy via-apex-navy/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <p className="mb-1.5 text-[9px] font-black uppercase tracking-[.14em] text-apex-teal">{item.eyebrow}</p>
                  <h3 className="max-w-[240px] text-lg font-extrabold leading-tight text-white">{item.title}</h3>
                </div>
              </button>
            ))}
          </div>
        </section>

        <button onClick={() => onNavigate("tickets")} className="surface flex w-full items-center gap-3 rounded-[22px] border p-3 text-left">
          <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-apex-teal text-apex-navy"><MapPin size={19} /></div>
          <div className="min-w-0 flex-1">
            <p className="text-xs font-extrabold">Matchday essentials</p>
            <p className="mt-0.5 text-[10px] muted-text">Your ticket, seat and gate details in one place</p>
          </div>
          <ChevronRight size={17} className="muted-text" />
        </button>
      </main>
    </div>
  );
}
