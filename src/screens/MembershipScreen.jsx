import React from "react";
import { ArrowLeft, Check, ChevronRight, Crown, ShieldCheck, ShoppingBag, Sparkles, Ticket, Zap } from "lucide-react";
import { ClubCrest } from "../components/apex/ClubCrest";
import { QrCode } from "../components/apex/QrCode";

const perks = [
  { icon: ShoppingBag, title: "10% Store Discount", detail: "Automatically applied at checkout" },
  { icon: Ticket, title: "Priority Ticket Alerts", detail: "Get notified when official ticket sales open" },
  { icon: Sparkles, title: "Exclusive Content", detail: "Inside training and member interviews" },
];

export function MembershipScreen({ onBack, onNavigate }) {
  return (
    <div className="screen-bg min-h-full animate-screen-in pb-28">
      <header className="screen-header">
        <button onClick={onBack} className="icon-button" aria-label="Back"><ArrowLeft size={18} /></button>
        <div className="flex-1 text-center">
          <p className="text-[9px] font-bold uppercase tracking-[.18em] text-apex-teal">My Chiefs</p>
          <h1 className="text-sm font-extrabold">Digital Supporter Card</h1>
        </div>
        <button className="icon-button" aria-label="Membership security"><ShieldCheck size={18} /></button>
      </header>

      <main className="space-y-5 px-4 pt-5">
        <section className="member-card group relative isolate overflow-hidden rounded-[28px] border border-apex-teal/35 p-5 text-white shadow-teal">
          <div className="card-shine absolute inset-y-0 -left-2/3 w-1/2 skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/50 to-transparent transition-transform duration-1000 group-hover:translate-x-[370%]" />
          <div className="relative z-10 flex items-start justify-between">
            <ClubCrest size={52} />
            <div className="rounded-full border border-white/20 bg-apex-navy/15 px-3 py-1.5 text-[9px] font-black uppercase tracking-[.16em]">
              Premium Supporter
            </div>
          </div>
          <div className="relative z-10 mt-10">
            <p className="text-[9px] font-black uppercase tracking-[.18em] opacity-60">2026/27 Annual Member</p>
            <h2 className="mt-1 text-2xl font-black tracking-[-.04em]">Kabelo Mokoena</h2>
          </div>
          <div className="relative z-10 mt-6 flex items-end justify-between">
            <div>
              <p className="text-[8px] font-black uppercase tracking-[.16em] opacity-55">Member ID</p>
              <p className="mt-1 font-mono text-sm font-black tracking-wider">KC-90405</p>
            </div>
            <div className="flex items-center gap-1.5 text-[9px] font-black uppercase tracking-wide"><Crown size={14} /> Since 2018</div>
          </div>
        </section>

        <section className="surface flex items-center gap-4 rounded-[24px] border p-4">
          <QrCode value="KC://MEMBER/KC-90405?SEASON=2026-27" size={104} label="Kaizer Chiefs digital supporter membership code" />
          <div className="min-w-0 flex-1">
            <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400"><Check size={16} strokeWidth={3} /></div>
            <h3 className="text-sm font-extrabold">Membership active</h3>
            <p className="mt-1 text-[10px] leading-relaxed muted-text">Use this code for member offers and approved supporter experiences.</p>
            <div className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1.5 text-[9px] font-bold text-emerald-400">
              <Zap size={11} fill="currentColor" /> Commerce Sync Active
            </div>
          </div>
        </section>

        <section>
          <p className="section-kicker">Elite status</p>
          <h2 className="section-title">Your member perks</h2>
          <div className="mt-3 space-y-2.5">
            {perks.map(({ icon: Icon, title, detail }) => (
              <div key={title} className="surface flex items-center gap-3 rounded-[20px] border p-3.5">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-apex-teal/10 text-apex-teal"><Icon size={18} /></div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-xs font-extrabold">{title}</h3>
                  <p className="mt-0.5 text-[9px] muted-text">{detail}</p>
                </div>
                <Check size={15} className="text-apex-teal" />
              </div>
            ))}
          </div>
        </section>

        <button onClick={() => onNavigate("tickets")} className="primary-button w-full">
          Open ticket wallet <ChevronRight size={16} />
        </button>
      </main>
    </div>
  );
}
