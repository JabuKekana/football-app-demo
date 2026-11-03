import React, { useState } from "react";
import {
  BadgeCheck,
  Check,
  ChevronRight,
  CircleDot,
  CreditCard,
  Gift,
  HatGlasses,
  RefreshCw,
  Shirt,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { ClubCrest } from "../components/apex/ClubCrest";
import { Modal } from "../components/apex/Modal";

const bundleItems = [
  { icon: CircleDot, title: "Size 5 soccer ball", detail: "Current-season supporter edition" },
  { icon: HatGlasses, title: "Cap or bucket hat", detail: "Choose your preferred headwear" },
  { icon: CreditCard, title: "Supporter card", detail: "Physical and digital recognition" },
  { icon: Shirt, title: "Branded T-shirt", detail: "Select your size before joining" },
];

const memberBenefits = [
  "Instant digital supporter card",
  "Member-only merchandise offers",
  "Exclusive competitions and club content",
  "Annual renewal reminders",
];

export function SupporterMembershipScreen({ active, onActivate, onNavigate, onToast }) {
  const [headwear, setHeadwear] = useState("Bucket hat");
  const [shirtSize, setShirtSize] = useState("M");
  const [autoRenew, setAutoRenew] = useState(true);
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  const confirmMembership = () => {
    setCheckoutOpen(false);
    onActivate();
    onToast("Supporter membership activated for 2026/27");
  };

  if (active) {
    return (
      <div className="screen-bg min-h-full animate-screen-in pb-28">
        <header className="screen-header">
          <ClubCrest size={42} />
          <div className="min-w-0 flex-1">
            <p className="text-[9px] font-black uppercase tracking-[.18em] text-apex-teal">Khosi membership</p>
            <h1 className="text-sm font-extrabold">Welcome to the family</h1>
          </div>
          <BadgeCheck size={22} className="text-apex-teal" />
        </header>

        <main className="space-y-5 px-4 pt-5">
          <section className="membership-success relative overflow-hidden rounded-[28px] border border-apex-teal/30 p-5 text-white shadow-teal">
            <div className="relative z-10 flex items-start justify-between">
              <ClubCrest size={56} />
              <span className="rounded-full bg-apex-teal px-3 py-1.5 text-[8px] font-black uppercase tracking-[.14em] text-apex-navy">Active · 2026/27</span>
            </div>
            <p className="relative z-10 mt-10 text-[9px] font-black uppercase tracking-[.18em] text-white/55">Premium supporter</p>
            <h2 className="relative z-10 mt-1 text-2xl font-black">Kabelo Mokoena</h2>
            <div className="relative z-10 mt-6 flex items-end justify-between">
              <div><p className="text-[8px] font-black uppercase tracking-wider text-white/45">Member ID</p><p className="mt-1 font-mono text-sm font-black">KC-90405</p></div>
              <div className="text-right"><p className="text-[8px] font-black uppercase tracking-wider text-white/45">Renews</p><p className="mt-1 text-xs font-black">03 Nov 2027</p></div>
            </div>
          </section>

          <section className="surface rounded-[24px] border p-4">
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-apex-teal/10 text-apex-teal"><Gift size={19} /></div>
              <div className="min-w-0 flex-1"><h3 className="text-xs font-extrabold">Welcome pack reserved</h3><p className="mt-1 text-[9px] muted-text">{headwear} · T-shirt {shirtSize} · Ball · Supporter card</p></div>
              <Check size={17} className="text-emerald-400" />
            </div>
            <div className="mt-4 rounded-2xl bg-white/[.035] p-3">
              <div className="mb-2 flex justify-between text-[9px] font-bold"><span>Fulfilment setup</span><span className="text-apex-teal">Step 1 of 3</span></div>
              <div className="h-1.5 overflow-hidden rounded-full bg-white/10"><div className="h-full w-1/3 rounded-full bg-apex-teal" /></div>
              <p className="mt-2 text-[9px] leading-relaxed muted-text">Delivery and collection details would be confirmed during the production pilot.</p>
            </div>
          </section>

          <button onClick={() => onNavigate("membership")} className="primary-button w-full">Open digital supporter card <ChevronRight size={16} /></button>
          <p className="text-center text-[8px] leading-relaxed text-white/35">Prototype confirmation only. No payment has been processed.</p>
        </main>
      </div>
    );
  }

  return (
    <div className="screen-bg min-h-full animate-screen-in pb-28">
      <header className="screen-header">
        <ClubCrest size={42} />
        <div className="min-w-0 flex-1">
          <p className="text-[9px] font-black uppercase tracking-[.18em] text-apex-teal">Belong. Be recognised.</p>
          <h1 className="text-sm font-extrabold">Annual Supporter Membership</h1>
        </div>
        <span className="rounded-full border border-apex-teal/25 bg-apex-teal/10 px-2.5 py-1.5 text-[9px] font-black text-apex-teal">R250/yr</span>
      </header>

      <main className="space-y-5 px-4 pt-4">
        <section className="membership-hero relative isolate overflow-hidden rounded-[30px] border border-apex-teal/25 px-5 pb-5 pt-5 shadow-2xl">
          <div className="relative z-10 max-w-[220px]">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-apex-teal px-2.5 py-1.5 text-[8px] font-black uppercase tracking-[.14em] text-apex-navy"><Sparkles size={11} /> 2026/27 welcome pack</span>
            <h2 className="mt-3 text-[29px] font-black leading-[.96] tracking-[-.055em]">Your season.<br />Your colours.<br />Your family.</h2>
            <p className="mt-3 max-w-[190px] text-[10px] leading-relaxed text-white/58">Commit annually and receive immediate digital recognition plus a four-piece supporter pack.</p>
          </div>
          <img src="/assets/kc-supporter-bundle-official.png" alt="Concept supporter bundle with ball, T-shirt, bucket hat and membership card" className="relative z-10 -mb-8 -mr-12 ml-auto mt-[-25px] w-[92%] max-w-[340px] drop-shadow-2xl" />
          <div className="relative z-10 mt-1 flex items-end justify-between border-t border-white/10 pt-4">
            <div><p className="text-[8px] font-black uppercase tracking-[.18em] text-white/40">Annual commitment</p><p className="mt-1 text-3xl font-black text-apex-teal">R250</p></div>
            <div className="text-right"><p className="text-[9px] font-extrabold">Less than R21/month</p><p className="mt-1 text-[8px] text-white/40">Billed once per year</p></div>
          </div>
        </section>

        <section>
          <p className="section-kicker">Included at no extra cost</p>
          <h2 className="section-title">Your supporter welcome pack</h2>
          <div className="mt-3 grid grid-cols-2 gap-2.5">
            {bundleItems.map(({ icon: Icon, title, detail }) => (
              <div key={title} className="surface rounded-[20px] border p-3.5">
                <div className="grid h-9 w-9 place-items-center rounded-2xl bg-apex-teal/10 text-apex-teal"><Icon size={17} /></div>
                <h3 className="mt-3 text-[11px] font-extrabold leading-tight">{title}</h3>
                <p className="mt-1 text-[8px] leading-relaxed muted-text">{detail}</p>
              </div>
            ))}
          </div>
          <p className="mt-2 text-[8px] leading-relaxed text-white/35">Concept visuals shown. Final product specifications and fulfilment are subject to pilot approval.</p>
        </section>

        <section className="surface space-y-4 rounded-[24px] border p-4">
          <div><p className="section-kicker">Make it yours</p><h2 className="section-title">Choose your welcome items</h2></div>
          <div>
            <label className="mb-2 block text-[10px] font-extrabold">Headwear</label>
            <div className="grid grid-cols-2 gap-2">
              {["Baseball cap", "Bucket hat"].map((item) => <button key={item} onClick={() => setHeadwear(item)} className={`choice-button ${headwear === item ? "border-apex-teal bg-apex-teal text-apex-navy" : ""}`}>{item}</button>)}
            </div>
          </div>
          <div>
            <label className="mb-2 block text-[10px] font-extrabold">T-shirt size</label>
            <div className="grid grid-cols-6 gap-1.5">
              {["S", "M", "L", "XL", "2XL", "3XL"].map((size) => <button key={size} onClick={() => setShirtSize(size)} className={`rounded-xl border px-1 py-2.5 text-[9px] font-black ${shirtSize === size ? "border-apex-teal bg-apex-teal text-apex-navy" : "border-white/10 bg-white/[.035]"}`}>{size}</button>)}
            </div>
          </div>
        </section>

        <section className="surface rounded-[24px] border p-4">
          <div className="mb-3 flex items-center gap-2"><ShieldCheck size={16} className="text-apex-teal" /><h2 className="text-xs font-extrabold">Value all season long</h2></div>
          <div className="space-y-2.5">{memberBenefits.map((benefit) => <div key={benefit} className="flex items-center gap-2 text-[10px] font-medium"><span className="grid h-5 w-5 place-items-center rounded-full bg-apex-teal/10 text-apex-teal"><Check size={11} strokeWidth={3} /></span>{benefit}</div>)}</div>
        </section>

        <button onClick={() => setCheckoutOpen(true)} className="primary-button w-full"><Sparkles size={16} /> Join for R250 per year</button>
        <p className="text-center text-[8px] leading-relaxed text-white/35">Prototype checkout · No real payment will be processed</p>
      </main>

      <Modal open={checkoutOpen} onClose={() => setCheckoutOpen(false)} title="Confirm annual membership">
        <div className="rounded-[22px] border border-apex-teal/20 bg-apex-teal/[.07] p-4">
          <div className="flex items-start justify-between gap-3"><div><p className="text-[9px] font-black uppercase tracking-[.16em] text-apex-teal">2026/27 supporter membership</p><h3 className="mt-1 text-lg font-black">R250 once yearly</h3></div><ClubCrest size={46} /></div>
          <div className="mt-4 grid grid-cols-2 gap-2 text-[9px]"><div className="rounded-xl bg-white/[.04] p-2.5"><span className="muted-text">Headwear</span><p className="mt-1 font-extrabold">{headwear}</p></div><div className="rounded-xl bg-white/[.04] p-2.5"><span className="muted-text">T-shirt</span><p className="mt-1 font-extrabold">Size {shirtSize}</p></div></div>
        </div>
        <button onClick={() => setAutoRenew((value) => !value)} className="mt-3 flex w-full items-center gap-3 rounded-2xl border border-white/[.08] p-3 text-left">
          <span className={`grid h-5 w-5 place-items-center rounded-md border ${autoRenew ? "border-apex-teal bg-apex-teal text-apex-navy" : "border-white/20"}`}>{autoRenew && <Check size={13} strokeWidth={3} />}</span>
          <span className="min-w-0 flex-1"><span className="block text-[10px] font-extrabold">Annual renewal reminder</span><span className="mt-0.5 block text-[8px] muted-text">You’ll be notified before the next R250 renewal.</span></span>
          <RefreshCw size={14} className="muted-text" />
        </button>
        <div className="my-3 flex items-center gap-3 rounded-2xl border border-white/[.08] p-3"><div className="grid h-9 w-9 place-items-center rounded-xl bg-white text-apex-navy"><CreditCard size={17} /></div><div className="min-w-0 flex-1"><p className="text-xs font-extrabold">Visa •••• 9045</p><p className="text-[9px] muted-text">Demo payment method</p></div><ShieldCheck size={15} className="text-emerald-400" /></div>
        <button onClick={confirmMembership} className="primary-button w-full">Confirm R250 membership <ChevronRight size={16} /></button>
      </Modal>
    </div>
  );
}
