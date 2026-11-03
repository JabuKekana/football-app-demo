import React, { useState } from "react";
import { Activity, ChevronRight, CircleDot, ExternalLink, Radio, Shield, Sparkles, Trophy, UsersRound } from "lucide-react";
import { ClubCrest } from "../components/apex/ClubCrest";
import { STADIUM_MANAGEMENT_URL } from "../data/demoData";

const timeline = [
  { minute: "63’", icon: CircleDot, title: "GOAL · Apex FC", detail: "T. Ndlovu · Right-foot finish" },
  { minute: "51’", icon: Shield, title: "Yellow card · Rival City", detail: "M. Daniels · Late challenge" },
  { minute: "34’", icon: CircleDot, title: "GOAL · Rival City", detail: "J. Molefe · Header" },
  { minute: "18’", icon: CircleDot, title: "GOAL · Apex FC", detail: "L. Silva · Penalty" },
];

const stats = [
  { label: "Possession", home: 58, away: 42, suffix: "%" },
  { label: "Total shots", home: 14, away: 9 },
  { label: "Shots on target", home: 7, away: 4 },
  { label: "Corners", home: 6, away: 3 },
  { label: "Pass accuracy", home: 88, away: 81, suffix: "%" },
];

export function MatchCenterScreen({ motmVote, onVote }) {
  const [tab, setTab] = useState("overview");

  return (
    <div className="screen-bg min-h-full animate-screen-in pb-28">
      <header className="screen-header">
        <div className="grid h-10 w-10 place-items-center rounded-2xl bg-apex-teal text-apex-navy"><Trophy size={19} /></div>
        <div className="min-w-0 flex-1">
          <p className="text-[9px] font-bold uppercase tracking-[.18em] text-apex-teal">Matchday live</p>
          <h1 className="text-sm font-extrabold">Match Centre</h1>
        </div>
        <div className="flex items-center gap-1.5 rounded-full bg-red-500/10 px-2.5 py-1.5 text-[8px] font-black uppercase tracking-wider text-red-400"><Radio size={11} /> Live</div>
      </header>

      <main>
        <section className="relative overflow-hidden border-b border-white/[.07] px-5 pb-5 pt-6">
          <img src="/assets/stadium-hero.png" alt="" className="absolute inset-0 h-full w-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-apex-navy/45 to-[var(--app-bg)]" />
          <div className="relative z-10">
            <div className="mb-5 flex items-center justify-center gap-2 text-[9px] font-black uppercase tracking-[.18em] text-red-400"><span className="h-2 w-2 animate-pulse rounded-full bg-red-500" /> 68:12 · Second half</div>
            <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-5 text-center">
              <div><ClubCrest size={62} className="mx-auto" /><p className="mt-2 text-xs font-black">Apex FC</p></div>
              <div><p className="text-4xl font-black tracking-[-.06em]">2<span className="mx-2 text-white/25">:</span>1</p><p className="mt-1 text-[8px] font-bold uppercase tracking-widest muted-text">Main Stadium</p></div>
              <div><div className="mx-auto grid h-[62px] w-[62px] place-items-center rounded-[21px] border border-white/10 bg-white/[.05] text-sm font-black">RCF</div><p className="mt-2 text-xs font-black">Rival City</p></div>
            </div>
          </div>
        </section>

        <div className="sticky top-[73px] z-20 flex border-b border-white/[.07] bg-[var(--app-bg)]/95 px-4 backdrop-blur-xl">
          {[{ id: "overview", label: "Overview" }, { id: "stats", label: "Stats" }, { id: "lineups", label: "Line-ups" }].map((item) => (
            <button key={item.id} onClick={() => setTab(item.id)} className={`relative flex-1 py-3.5 text-[10px] font-black transition ${tab === item.id ? "text-apex-teal" : "muted-text"}`}>
              {item.label}
              {tab === item.id && <span className="absolute inset-x-5 bottom-0 h-0.5 rounded-full bg-apex-teal" />}
            </button>
          ))}
        </div>

        <div className="animate-screen-in space-y-5 px-4 pt-5" key={tab}>
          {tab === "overview" && (
            <>
              <section className="surface rounded-[24px] border p-4">
                <div className="mb-4 flex items-center justify-between"><h2 className="text-sm font-extrabold">Match timeline</h2><Activity size={16} className="text-apex-teal" /></div>
                <div className="space-y-4">
                  {timeline.map(({ minute, icon: Icon, title, detail }, index) => (
                    <div key={`${minute}-${title}`} className="relative flex items-start gap-3">
                      {index < timeline.length - 1 && <span className="absolute left-[34px] top-8 h-8 w-px bg-white/10" />}
                      <span className="w-6 pt-1 text-right text-[9px] font-black text-apex-teal">{minute}</span>
                      <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-apex-teal/10 text-apex-teal"><Icon size={10} /></span>
                      <div><p className="text-[10px] font-extrabold">{title}</p><p className="mt-0.5 text-[9px] muted-text">{detail}</p></div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="surface rounded-[24px] border p-4">
                <div className="mb-3 flex items-center justify-between"><div><p className="section-kicker">Your voice counts</p><h2 className="section-title">Man of the Match</h2></div><Sparkles size={18} className="text-apex-teal" /></div>
                {motmVote ? (
                  <div className="rounded-2xl border border-apex-teal/20 bg-apex-teal/10 p-4 text-center"><p className="text-[9px] font-black uppercase tracking-wider text-apex-teal">Vote recorded</p><p className="mt-1 text-base font-black">{motmVote}</p></div>
                ) : (
                  <div className="grid grid-cols-3 gap-2">
                    {["Dube", "Silva", "Ndlovu"].map((player, index) => (
                      <button key={player} onClick={() => onVote(player)} className="surface-soft rounded-2xl border border-transparent p-3 text-center transition hover:border-apex-teal/40">
                        <div className="mx-auto grid h-10 w-10 place-items-center rounded-full bg-white/5 text-xs font-black text-apex-teal">{[4, 10, 9][index]}</div>
                        <p className="mt-2 text-[10px] font-extrabold">{player}</p>
                      </button>
                    ))}
                  </div>
                )}
              </section>
            </>
          )}

          {tab === "stats" && (
            <section className="surface rounded-[24px] border p-4">
              <div className="mb-5 flex items-center justify-between text-[10px] font-black"><span className="text-apex-teal">Apex FC</span><span className="muted-text">Rival City</span></div>
              <div className="space-y-5">
                {stats.map((stat) => {
                  const total = stat.home + stat.away;
                  const homeWidth = `${(stat.home / total) * 100}%`;
                  return (
                    <div key={stat.label}>
                      <div className="mb-2 flex items-center justify-between text-[10px]"><span className="font-black">{stat.home}{stat.suffix}</span><span className="font-bold muted-text">{stat.label}</span><span className="font-black">{stat.away}{stat.suffix}</span></div>
                      <div className="flex h-1.5 overflow-hidden rounded-full bg-white/10"><span className="bg-apex-teal" style={{ width: homeWidth }} /><span className="bg-white/25" style={{ flex: 1 }} /></div>
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          {tab === "lineups" && (
            <section className="surface overflow-hidden rounded-[24px] border">
              <div className="football-pitch relative mx-3 mt-3 h-[390px] overflow-hidden rounded-[20px] border border-white/20 bg-[#153d2a]">
                <div className="absolute inset-x-4 top-1/2 h-px bg-white/20" /><div className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20" />
                {[{ x: "50%", y: "88%", n: 1 }, { x: "20%", y: "68%", n: 3 }, { x: "40%", y: "72%", n: 4 }, { x: "62%", y: "72%", n: 5 }, { x: "82%", y: "68%", n: 2 }, { x: "30%", y: "47%", n: 8 }, { x: "50%", y: "53%", n: 6 }, { x: "70%", y: "47%", n: 11 }, { x: "22%", y: "23%", n: 7 }, { x: "50%", y: "16%", n: 9 }, { x: "78%", y: "23%", n: 10 }].map((player) => (
                  <span key={player.n} className="absolute grid h-8 w-8 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-2 border-apex-teal bg-apex-navy text-[9px] font-black text-apex-teal shadow-xl" style={{ left: player.x, top: player.y }}>{player.n}</span>
                ))}
              </div>
              <button className="flex w-full items-center gap-3 p-4 text-left"><UsersRound size={17} className="text-apex-teal" /><span className="flex-1 text-xs font-extrabold">Starting XI · 4-3-3</span><ChevronRight size={15} className="muted-text" /></button>
            </section>
          )}

          <a href={STADIUM_MANAGEMENT_URL} target="_blank" rel="noreferrer" className="surface flex w-full items-center gap-3 rounded-[20px] border p-3 text-left">
            <div className="grid h-10 w-10 place-items-center rounded-2xl bg-apex-teal/10 text-apex-teal"><Trophy size={17} /></div>
            <div className="min-w-0 flex-1"><p className="text-xs font-extrabold">Official match tickets</p><p className="mt-0.5 text-[9px] muted-text">Continue to Stadium Management SA</p></div>
            <ExternalLink size={15} className="muted-text" />
          </a>
        </div>
      </main>
    </div>
  );
}
