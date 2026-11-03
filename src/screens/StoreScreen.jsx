import React, { useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  Check,
  ChevronRight,
  CreditCard,
  LockKeyhole,
  Minus,
  PackageCheck,
  Plus,
  ShieldCheck,
  ShoppingBag,
  Trash2,
} from "lucide-react";
import { Modal } from "../components/apex/Modal";
import { formatRand, products } from "../data/demoData";

function StoreHeader({ bagCount, onOpenBag, showBack, onBack }) {
  return (
    <header className="screen-header">
      {showBack ? (
        <button onClick={onBack} className="icon-button" aria-label="Back to products"><ArrowLeft size={18} /></button>
      ) : (
        <div className="grid h-10 w-10 place-items-center rounded-2xl bg-apex-teal text-apex-navy"><ShoppingBag size={19} /></div>
      )}
      <div className="min-w-0 flex-1">
        <p className="text-[9px] font-bold uppercase tracking-[.18em] text-apex-teal">Apex Official</p>
        <h1 className="truncate text-sm font-extrabold">{showBack ? "Product details" : "Club Store"}</h1>
      </div>
      <button onClick={onOpenBag} className="icon-button relative" aria-label={`Open bag with ${bagCount} items`}>
        <ShoppingBag size={18} />
        {bagCount > 0 && <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-apex-teal px-1 text-[9px] font-black text-apex-navy">{bagCount}</span>}
      </button>
    </header>
  );
}

export function StoreScreen({ bag, onAddToBag, onClearBag, onToast, featuredProduct }) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState("M");
  const [quantity, setQuantity] = useState(1);
  const [checkoutStep, setCheckoutStep] = useState(null);

  useEffect(() => {
    if (!featuredProduct) return;
    const product = products.find((item) => item.id === featuredProduct);
    if (product) setSelectedProduct(product);
  }, [featuredProduct]);

  useEffect(() => {
    if (!selectedProduct) return;
    setSelectedSize(selectedProduct.sizes.includes("M") ? "M" : selectedProduct.sizes[0]);
    setQuantity(1);
  }, [selectedProduct]);

  const bagCount = bag.reduce((total, item) => total + item.quantity, 0);
  const subtotal = useMemo(() => bag.reduce((total, item) => total + item.price * item.quantity, 0), [bag]);

  const addCurrentProduct = () => {
    onAddToBag({ ...selectedProduct, size: selectedSize, quantity });
    onToast(`${selectedProduct.shortName} added to your bag`);
  };

  const completeOrder = () => {
    setCheckoutStep("confirmed");
    onClearBag();
  };

  return (
    <div className="screen-bg min-h-full animate-screen-in pb-28">
      <StoreHeader
        bagCount={bagCount}
        onOpenBag={() => setCheckoutStep("bag")}
        showBack={Boolean(selectedProduct)}
        onBack={() => setSelectedProduct(null)}
      />

      {selectedProduct ? (
        <main className="pb-3">
          <div className="relative aspect-square overflow-hidden bg-[#0A2342]">
            <img src={selectedProduct.image} alt={selectedProduct.name} className="h-full w-full object-cover" />
            <span className="absolute left-4 top-4 rounded-full bg-apex-teal px-3 py-1.5 text-[9px] font-black uppercase tracking-widest text-apex-navy">{selectedProduct.badge}</span>
          </div>
          <div className="space-y-5 px-5 pt-5">
            <div>
              <p className="section-kicker">Official merchandise</p>
              <h2 className="mt-1 text-2xl font-black tracking-[-.035em]">{selectedProduct.name}</h2>
              <p className="mt-2 text-xl font-black text-apex-teal">{formatRand(selectedProduct.price)}</p>
              <p className="mt-3 text-xs leading-relaxed muted-text">{selectedProduct.description}</p>
            </div>

            <div>
              <div className="mb-2.5 flex items-center justify-between">
                <label className="text-xs font-extrabold">Choose size</label>
                <button className="text-[9px] font-bold text-apex-teal">Size guide</button>
              </div>
              <div className={`grid gap-2 ${selectedProduct.sizes.length === 1 ? "grid-cols-1" : "grid-cols-4"}`}>
                {selectedProduct.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`rounded-xl border px-3 py-3 text-xs font-black transition ${selectedSize === size ? "border-apex-teal bg-apex-teal text-apex-navy" : "border-white/10 surface-soft"}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-end gap-3">
              <div>
                <label className="mb-2 block text-xs font-extrabold">Quantity</label>
                <div className="surface flex h-12 items-center rounded-2xl border p-1">
                  <button onClick={() => setQuantity((value) => Math.max(1, value - 1))} className="grid h-9 w-9 place-items-center rounded-xl hover:bg-white/5" aria-label="Decrease quantity"><Minus size={15} /></button>
                  <span className="w-7 text-center text-sm font-black tabular-nums">{quantity}</span>
                  <button onClick={() => setQuantity((value) => Math.min(5, value + 1))} className="grid h-9 w-9 place-items-center rounded-xl hover:bg-white/5" aria-label="Increase quantity"><Plus size={15} /></button>
                </div>
              </div>
              <button onClick={addCurrentProduct} className="primary-button h-12 flex-1">
                <ShoppingBag size={17} /> Add to bag
              </button>
            </div>

            <div className="surface grid grid-cols-2 gap-3 rounded-[20px] border p-3 text-[9px] font-bold muted-text">
              <div className="flex items-center gap-2"><ShieldCheck size={15} className="text-emerald-400" /> Official product</div>
              <div className="flex items-center gap-2"><PackageCheck size={15} className="text-apex-teal" /> Dispatches in 24h</div>
            </div>
          </div>
        </main>
      ) : (
        <main className="space-y-5 px-4 pt-5">
          <section className="store-banner relative overflow-hidden rounded-[26px] border border-white/10 bg-apex-navy p-5">
            <div className="relative z-10 max-w-[210px]">
              <p className="section-kicker">Member exclusive</p>
              <h2 className="mt-2 text-2xl font-black leading-[1.02] tracking-[-.04em] text-white">Wear the crest. Own the moment.</h2>
              <p className="mt-3 text-[10px] leading-relaxed text-white/55">VIP members save 10% at checkout.</p>
            </div>
            <img src="/assets/home-jersey.png" alt="" className="absolute -bottom-10 -right-16 h-64 w-64 object-cover opacity-80 mix-blend-screen" />
          </section>

          <div className="flex items-end justify-between">
            <div>
              <p className="section-kicker">24/25 Collection</p>
              <h2 className="section-title">Official merchandise</h2>
            </div>
            <span className="text-[9px] font-bold muted-text">{products.length} products</span>
          </div>

          <section className="grid grid-cols-2 gap-3">
            {products.map((product, index) => (
              <button
                key={product.id}
                onClick={() => setSelectedProduct(product)}
                className={`surface group overflow-hidden rounded-[22px] border text-left ${index === 2 ? "col-span-2 grid grid-cols-2" : ""}`}
              >
                <div className={`relative overflow-hidden bg-[#0A2342] ${index === 2 ? "aspect-square" : "aspect-[.92]"}`}>
                  <img src={product.image} alt={product.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                  <span className="absolute left-2.5 top-2.5 rounded-full bg-apex-navy/70 px-2 py-1 text-[8px] font-black uppercase tracking-wide text-apex-teal backdrop-blur">{product.badge}</span>
                </div>
                <div className="flex min-h-[86px] flex-col justify-between p-3">
                  <div>
                    <h3 className="text-xs font-extrabold leading-tight">{product.name}</h3>
                    <p className="mt-1.5 text-xs font-black text-apex-teal">{formatRand(product.price)}</p>
                  </div>
                  <span className="mt-3 flex items-center text-[9px] font-bold muted-text">View product <ChevronRight size={12} /></span>
                </div>
              </button>
            ))}
          </section>
        </main>
      )}

      <Modal open={checkoutStep === "bag"} onClose={() => setCheckoutStep(null)} title="Your bag">
        {bag.length ? (
          <>
            <div className="max-h-56 space-y-3 overflow-y-auto pr-1">
              {bag.map((item, index) => (
                <div key={`${item.id}-${item.size}-${index}`} className="surface-soft flex items-center gap-3 rounded-2xl p-2.5">
                  <img src={item.image} alt="" className="h-14 w-14 rounded-xl object-cover" />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-xs font-extrabold">{item.shortName}</p>
                    <p className="mt-1 text-[9px] muted-text">Size {item.size} · Qty {item.quantity}</p>
                  </div>
                  <p className="text-xs font-black text-apex-teal">{formatRand(item.price * item.quantity)}</p>
                </div>
              ))}
            </div>
            <div className="my-4 space-y-2 border-y border-white/[.08] py-4 text-xs">
              <div className="flex justify-between muted-text"><span>Subtotal</span><span>{formatRand(subtotal)}</span></div>
              <div className="flex justify-between muted-text"><span>VIP member saving</span><span className="text-emerald-400">−{formatRand(Math.round(subtotal * 0.1))}</span></div>
              <div className="flex justify-between font-black"><span>Total · VAT included</span><span>{formatRand(Math.round(subtotal * 0.9))}</span></div>
            </div>
            <div className="mb-3 flex items-center gap-3 rounded-2xl border border-white/[.08] p-3">
              <div className="grid h-9 w-9 place-items-center rounded-xl bg-white text-apex-navy"><CreditCard size={17} /></div>
              <div className="min-w-0 flex-1"><p className="text-xs font-extrabold">Visa •••• 9045</p><p className="text-[9px] muted-text">Saved payment method</p></div>
              <LockKeyhole size={14} className="text-emerald-400" />
            </div>
            <button onClick={completeOrder} className="primary-button w-full"><LockKeyhole size={15} /> One-tap checkout · {formatRand(Math.round(subtotal * 0.9))}</button>
            <button onClick={() => { onClearBag(); setCheckoutStep(null); }} className="mx-auto mt-3 flex items-center gap-1.5 text-[9px] font-bold muted-text"><Trash2 size={12} /> Clear bag</button>
          </>
        ) : (
          <div className="py-8 text-center">
            <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-apex-teal/10 text-apex-teal"><ShoppingBag size={22} /></div>
            <h3 className="mt-4 text-sm font-extrabold">Your bag is empty</h3>
            <p className="mx-auto mt-2 max-w-[230px] text-[10px] leading-relaxed muted-text">Choose your matchday essentials from the official collection.</p>
          </div>
        )}
      </Modal>

      <Modal open={checkoutStep === "confirmed"} onClose={() => setCheckoutStep(null)} title="Order confirmed">
        <div className="pb-2 text-center">
          <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-emerald-500/15 text-emerald-400"><Check size={28} strokeWidth={3} /></div>
          <h3 className="mt-4 text-xl font-black">You’re all set.</h3>
          <p className="mx-auto mt-2 max-w-[260px] text-[11px] leading-relaxed muted-text">Order #AFC-10945 is confirmed. We’ll send collection and delivery updates to your member profile.</p>
          <button onClick={() => { setCheckoutStep(null); setSelectedProduct(null); }} className="primary-button mt-5 w-full">Continue shopping <ChevronRight size={16} /></button>
        </div>
      </Modal>
    </div>
  );
}
