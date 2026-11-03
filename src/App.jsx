import React, { useEffect, useRef, useState } from "react";
import { BookOpen, Check, Moon, RotateCcw, Smartphone, Sun, X } from "lucide-react";
import { BottomNav } from "./components/apex/BottomNav";
import { ClubCrest } from "./components/apex/ClubCrest";
import { featureGuide } from "./data/demoData";
import { AIAssistantScreen } from "./screens/AIAssistantScreen";
import { HomeScreen } from "./screens/HomeScreen";
import { MatchCenterScreen } from "./screens/MatchCenterScreen";
import { MembershipScreen } from "./screens/MembershipScreen";
import { StoreScreen } from "./screens/StoreScreen";
import { TicketsScreen } from "./screens/TicketsScreen";

function PhoneApp({ alternateTheme }) {
  const [screen, setScreen] = useState("home");
  const [bag, setBag] = useState([]);
  const [motmVote, setMotmVote] = useState(null);
  const [toast, setToast] = useState("");
  const scrollRef = useRef(null);
  const toastTimer = useRef(null);

  useEffect(() => () => window.clearTimeout(toastTimer.current), []);

  const showToast = (message) => {
    setToast(message);
    window.clearTimeout(toastTimer.current);
    toastTimer.current = window.setTimeout(() => setToast(""), 2600);
  };

  const navigate = (nextScreen) => {
    setScreen(nextScreen);
    window.requestAnimationFrame(() => {
      if (scrollRef.current) scrollRef.current.scrollTop = 0;
    });
  };

  const addToBag = (product) => {
    setBag((items) => {
      const matchIndex = items.findIndex((item) => item.id === product.id && item.size === product.size);
      if (matchIndex === -1) return [...items, product];
      return items.map((item, index) =>
        index === matchIndex ? { ...item, quantity: item.quantity + product.quantity } : item,
      );
    });
  };

  const castVote = (player) => {
    setMotmVote(player);
    showToast(`Your vote for ${player} has been counted`);
  };

  const screens = {
    home: <HomeScreen onNavigate={navigate} onNotify={() => showToast("You’re all caught up — no new alerts")} motmVote={motmVote} onVote={castVote} />,
    match: <MatchCenterScreen motmVote={motmVote} onVote={castVote} />,
    store: <StoreScreen bag={bag} onAddToBag={addToBag} onClearBag={() => setBag([])} onToast={showToast} />,
    tickets: <TicketsScreen onToast={showToast} />,
    ai: <AIAssistantScreen onNavigate={navigate} />,
    membership: <MembershipScreen onBack={() => navigate("home")} onNavigate={navigate} />,
  };

  const bagCount = bag.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className={`phone-app relative h-full w-full overflow-hidden ${alternateTheme ? "app-alt" : ""}`}>
      <div ref={scrollRef} className="app-scroll h-full overflow-y-auto overscroll-contain">
        {screens[screen]}
      </div>

      {toast && (
        <div className="absolute inset-x-4 bottom-[92px] z-[70] flex animate-screen-in items-center gap-2 rounded-2xl border border-apex-teal/20 bg-[#102A43]/95 px-4 py-3 text-[10px] font-bold text-white shadow-2xl backdrop-blur-xl">
          <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-apex-teal text-apex-navy"><Check size={12} strokeWidth={3} /></span>
          {toast}
        </div>
      )}

      <BottomNav active={screen} onNavigate={navigate} bagCount={bagCount} />
    </div>
  );
}

function DesktopControls({ onReset, alternateTheme, onTheme, onGuide }) {
  const controls = [
    { label: "Reset Demo", detail: "Return every flow to its starting state", icon: RotateCcw, action: onReset },
    { label: "Switch Theme", detail: alternateTheme ? "Currently ocean blue" : "Currently royal blue", icon: alternateTheme ? Sun : Moon, action: onTheme },
    { label: "Feature Guide", detail: "Explore the prototype capabilities", icon: BookOpen, action: onGuide },
  ];

  return (
    <aside className="absolute left-10 top-1/2 hidden w-[240px] -translate-y-1/2 xl:block 2xl:left-16">
      <div className="mb-8 flex items-center gap-3">
        <ClubCrest size={50} />
        <div>
          <p className="text-[10px] font-black uppercase tracking-[.22em] text-apex-teal">Apex FC</p>
          <p className="mt-1 text-xs font-bold text-white/50">Digital experience lab</p>
        </div>
      </div>
      <p className="mb-3 text-[9px] font-black uppercase tracking-[.2em] text-white/30">Demo controls</p>
      <div className="space-y-2">
        {controls.map(({ label, detail, icon: Icon, action }) => (
          <button key={label} onClick={action} className="group flex w-full items-center gap-3 rounded-2xl border border-white/[.07] bg-white/[.035] p-3 text-left transition hover:border-apex-teal/30 hover:bg-apex-teal/[.06]">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/[.05] text-white/60 transition group-hover:bg-apex-teal group-hover:text-apex-navy"><Icon size={17} /></span>
            <span className="min-w-0"><span className="block text-[11px] font-extrabold text-white">{label}</span><span className="mt-1 block text-[8px] leading-snug text-white/35">{detail}</span></span>
          </button>
        ))}
      </div>
      <div className="mt-6 flex items-center gap-2 text-[9px] font-bold text-emerald-400/75"><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" /> Client-side demo online</div>
    </aside>
  );
}

function DesktopFeatureRail() {
  return (
    <aside className="absolute right-10 top-1/2 hidden w-[245px] -translate-y-1/2 xl:block 2xl:right-16">
      <p className="text-[9px] font-black uppercase tracking-[.2em] text-apex-teal">White-label platform</p>
      <h2 className="mt-3 text-[28px] font-black leading-[1.02] tracking-[-.045em] text-white">Every fan touchpoint. One premium app.</h2>
      <p className="mt-4 text-[10px] leading-relaxed text-white/40">A fully interactive concept for identity, matchday, retail and club intelligence.</p>
      <div className="mt-7 space-y-4">
        {featureGuide.map((feature, index) => (
          <div key={feature.label} className="flex gap-3">
            <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-apex-teal/25 bg-apex-teal/10 text-[9px] font-black text-apex-teal">0{index + 1}</span>
            <div><p className="text-[11px] font-extrabold text-white">{feature.label}</p><p className="mt-1 text-[8px] leading-relaxed text-white/35">{feature.detail}</p></div>
          </div>
        ))}
      </div>
    </aside>
  );
}

function FeatureGuideDialog({ onClose }) {
  return (
    <div className="fixed inset-0 z-[100] grid place-items-center bg-apex-navy/75 p-5 backdrop-blur-md" role="dialog" aria-modal="true" aria-label="Prototype feature guide">
      <button className="absolute inset-0" onClick={onClose} aria-label="Close feature guide" />
      <section className="relative z-10 w-full max-w-[520px] rounded-[30px] border border-white/10 bg-[#122A4D] p-6 text-white shadow-2xl">
        <div className="flex items-start justify-between gap-4">
          <div><p className="text-[9px] font-black uppercase tracking-[.2em] text-apex-teal">Prototype map</p><h2 className="mt-2 text-2xl font-black tracking-[-.04em]">Explore every fan flow</h2></div>
          <button onClick={onClose} className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-white/5 text-white/60 hover:text-white"><X size={18} /></button>
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {featureGuide.map((feature, index) => (
            <div key={feature.label} className="rounded-[20px] border border-white/[.07] bg-white/[.035] p-4">
              <span className="text-[9px] font-black text-apex-teal">0{index + 1}</span>
              <h3 className="mt-2 text-sm font-extrabold">{feature.label}</h3>
              <p className="mt-2 text-[10px] leading-relaxed text-white/45">{feature.detail}</p>
            </div>
          ))}
        </div>
        <p className="mt-5 flex items-center gap-2 text-[9px] font-bold text-white/35"><Smartphone size={13} className="text-apex-teal" /> Use the five-tab navigation inside the device to move between core flows.</p>
      </section>
    </div>
  );
}

export default function App() {
  const [demoKey, setDemoKey] = useState(0);
  const [alternateTheme, setAlternateTheme] = useState(false);
  const [guideOpen, setGuideOpen] = useState(false);

  return (
    <main className={`desktop-stage relative grid min-h-[100dvh] place-items-center overflow-hidden p-6 ${alternateTheme ? "desk-alt" : ""}`}>
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[12%] top-[8%] h-64 w-64 rounded-full bg-apex-teal/[.06] blur-[100px]" />
        <div className="absolute bottom-[-8%] right-[10%] h-96 w-96 rounded-full bg-apex-teal/[.055] blur-[130px]" />
        <div className="desktop-grid absolute inset-0 opacity-30" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none text-[24vw] font-black tracking-[-.1em] text-white/[.018]">APEX</div>
      </div>

      <DesktopControls onReset={() => setDemoKey((key) => key + 1)} alternateTheme={alternateTheme} onTheme={() => setAlternateTheme((value) => !value)} onGuide={() => setGuideOpen(true)} />

      <div className="relative z-10">
        <div className="device-label absolute -top-5 left-1/2 hidden -translate-x-1/2 items-center gap-2 rounded-full border border-white/10 bg-apex-navy/70 px-3 py-1 text-[8px] font-black uppercase tracking-[.16em] text-white/45 backdrop-blur md:flex"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Interactive prototype</div>
        <div className="phone-frame relative overflow-hidden border-[7px] border-[#163B63] bg-apex-navy shadow-phone">
          <div className="device-island absolute left-1/2 top-2 z-[90] h-[25px] w-[104px] -translate-x-1/2 rounded-full border border-white/[.05] bg-apex-navy shadow-xl">
            <span className="absolute right-3 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-[#172848] shadow-[0_0_5px_#436292]" />
          </div>
          <PhoneApp key={demoKey} alternateTheme={alternateTheme} />
        </div>
      </div>

      <DesktopFeatureRail />

      <p className="absolute bottom-4 hidden text-[8px] font-bold uppercase tracking-[.2em] text-white/20 md:block">Apex FC · White-label digital club platform · 100% frontend prototype</p>
      {guideOpen && <FeatureGuideDialog onClose={() => setGuideOpen(false)} />}
    </main>
  );
}
