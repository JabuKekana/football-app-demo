import React, { useState } from "react";
import { CalendarDays, Car, Check, Clock3, ExternalLink, MapPin, Navigation, ShieldCheck, Ticket, WalletCards } from "lucide-react";
import { ClubCrest } from "../components/apex/ClubCrest";
import { QrCode } from "../components/apex/QrCode";
import { STADIUM_MANAGEMENT_URL } from "../data/demoData";

export function TicketsScreen({ onToast }) {
  const [walletAdded, setWalletAdded] = useState(false);

  const addToWallet = () => {
    setWalletAdded(true);
    onToast("Match ticket added to your wallet");
  };

  return (
    <div className="screen-bg min-h-full animate-screen-in pb-28">
      <header className="screen-header">
        <div className="grid h-10 w-10 place-items-center rounded-2xl bg-apex-teal text-apex-navy"><Ticket size={19} /></div>
        <div className="min-w-0 flex-1">
          <p className="text-[9px] font-bold uppercase tracking-[.18em] text-apex-teal">Matchday</p>
          <h1 className="text-sm font-extrabold">Ticket Wallet</h1>
        </div>
        <div className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1.5 text-[8px] font-black uppercase tracking-wider text-emerald-400">1 active</div>
      </header>

      <main className="space-y-5 px-4 pt-5">
        <div className="flex items-end justify-between">
          <div>
            <p className="section-kicker">Upcoming match</p>
            <h2 className="section-title">Your digital ticket</h2>
          </div>
          <span className="text-[9px] font-bold muted-text">Swipe for more →</span>
        </div>

        <section className="ticket-stub animate-ticket-float overflow-hidden rounded-[30px] bg-apex-mist text-apex-navy shadow-[0_25px_60px_rgba(3,10,30,.38)]">
          <div className="relative overflow-hidden bg-apex-navy px-5 pb-5 pt-6 text-white">
            <img src="/assets/stadium-hero.png" alt="" className="absolute inset-0 h-full w-full object-cover opacity-35" />
            <div className="absolute inset-0 bg-gradient-to-r from-apex-navy via-apex-navy/75 to-apex-navy/30" />
            <div className="relative z-10 flex items-start justify-between">
              <ClubCrest size={52} />
              <div className="text-right">
                <p className="text-[8px] font-black uppercase tracking-[.18em] text-apex-teal">Championship</p>
                <p className="mt-1 text-[10px] font-bold text-white/55">SAT · 19:30</p>
              </div>
            </div>
            <div className="relative z-10 mt-6">
              <p className="text-[9px] font-bold uppercase tracking-[.15em] text-white/45">Apex Football Club</p>
              <h3 className="mt-1 text-2xl font-black leading-none tracking-[-.04em]">Apex FC <span className="text-apex-teal">vs</span><br />Rival City FC</h3>
              <div className="mt-4 flex items-center gap-1.5 text-[10px] font-bold text-white/65"><MapPin size={13} className="text-apex-teal" /> Main Stadium · South Gate</div>
            </div>
          </div>

          <div className="ticket-perforation relative border-y-2 border-dashed border-apex-navy/10 px-5 py-5">
            <div className="grid grid-cols-3 gap-3 text-center">
              {[{ label: "Block", value: "114" }, { label: "Row", value: "F" }, { label: "Seat", value: "12" }].map((item) => (
                <div key={item.label}>
                  <p className="text-[8px] font-black uppercase tracking-[.16em] text-apex-navy/40">{item.label}</p>
                  <p className="mt-1 text-xl font-black">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4 px-5 py-5">
            <QrCode value="APEXFC://TICKET/AFC90405-MATCH09-B114-RF-S12" size={116} label="Apex FC match ticket" />
            <div className="flex-1">
              <p className="text-[8px] font-black uppercase tracking-[.16em] text-apex-navy/40">Entry details</p>
              <h4 className="mt-1 text-base font-black">Gate 4B</h4>
              <p className="mt-1 text-[10px] leading-relaxed text-apex-navy/55">Turnstiles open 16:30. Increase screen brightness before scanning.</p>
              <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-2.5 py-1.5 text-[8px] font-black uppercase tracking-wide text-emerald-700"><Check size={11} strokeWidth={3} /> Valid ticket</div>
            </div>
          </div>
          <div className="flex items-center gap-2 border-t border-apex-navy/10 bg-white/55 px-5 py-3 text-[8px] font-black uppercase tracking-[.13em] text-apex-navy/60">
            <ShieldCheck size={13} className="text-apex-primary" /> Ticket stored from an authorised external provider
          </div>
        </section>

        <section className="surface rounded-[24px] border p-4">
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-apex-teal/10 text-apex-teal"><Car size={19} /></div>
            <div className="min-w-0 flex-1">
              <h3 className="text-xs font-extrabold">Tickets and parking</h3>
              <p className="mt-0.5 text-[9px] leading-relaxed muted-text">Purchases are completed outside the club app through Stadium Management SA and its authorised ticketing platform.</p>
            </div>
          </div>
          <a
            href={STADIUM_MANAGEMENT_URL}
            target="_blank"
            rel="noreferrer"
            className="primary-button mt-4 w-full"
          >
            Open Stadium Management SA <ExternalLink size={15} />
          </a>
        </section>

        <button onClick={addToWallet} className={`w-full ${walletAdded ? "secondary-button" : "primary-button"}`}>
          {walletAdded ? <><Check size={16} /> Added to device wallet</> : <><WalletCards size={16} /> Add to device wallet</>}
        </button>

        <section className="grid grid-cols-3 gap-2">
          {[{ icon: CalendarDays, label: "Date", value: "Saturday" }, { icon: Clock3, label: "Kick-off", value: "19:30" }, { icon: Navigation, label: "Directions", value: "Open map" }].map(({ icon: Icon, label, value }) => (
            <button key={label} className="surface rounded-[18px] border p-3 text-left">
              <Icon size={16} className="text-apex-teal" />
              <p className="mt-3 text-[8px] font-bold uppercase tracking-wider muted-text">{label}</p>
              <p className="mt-1 text-[10px] font-extrabold">{value}</p>
            </button>
          ))}
        </section>

        <a href={STADIUM_MANAGEMENT_URL} target="_blank" rel="noreferrer" className="surface flex w-full items-center gap-3 rounded-[20px] border p-3 text-left">
          <div className="grid h-10 w-10 place-items-center rounded-2xl bg-white/5"><ShieldCheck size={17} className="text-apex-teal" /></div>
          <div className="min-w-0 flex-1"><p className="text-xs font-extrabold">Official ticketing information</p><p className="mt-0.5 text-[9px] muted-text">View authorised events, ticketing and venue guidance</p></div>
          <ExternalLink size={15} className="muted-text" />
        </a>
      </main>
    </div>
  );
}
