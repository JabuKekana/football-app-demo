import React, { useMemo, useState } from "react";
import "./styles/legal-pages.css";

export const FAQ = () => {
  const items = useMemo(
    () => [
      {
        q: "What is Lorem ipsum and why is it used?",
        a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      },
      {
        q: "How do I create an account?",
        a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      },
      {
        q: "Is my information secure?",
        a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
      },
      {
        q: "Can I cancel anytime?",
        a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quam. In scelerisque sem at dolor. Maecenas mattis.",
      },
      {
        q: "Do you offer support?",
        a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.",
      },
      {
        q: "How do pricing and fees work?",
        a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec tellus sed augue semper porta. Mauris massa.",
      },
    ],
    []
  );

  const [open, setOpen] = useState(() => new Set([0]));

  const toggle = (idx) => {
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(idx)) next.delete(idx);
      else next.add(idx);
      return next;
    });
  };

  return (
    <main className="legal" aria-labelledby="legal-title">
      <section className="legal__hero">
        <div className="legal__container">
          <div className="legal__kicker">Help</div>
          <h1 className="legal__title" id="legal-title">
            Frequently Asked Questions
          </h1>
          <p className="legal__lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra, purus sed dignissim aliquet,
            lorem velit tempus risus, sed ultrices neque lorem at massa.
          </p>

          <div className="legal__actions">
            <a className="legal__btn" href="#contact">
              Contact support
            </a>
            <a className="legal__btn legal__btn--outline" href="#top">
              Back to top
            </a>
          </div>
        </div>
      </section>

      <section className="legal__section" id="top">
        <div className="legal__container">
          <div className="faq">
            {items.map((it, idx) => {
              const isOpen = open.has(idx);
              return (
                <div className="faq__item" key={it.q}>
                  <button
                    className={`faq__q ${isOpen ? "isOpen" : ""}`}
                    type="button"
                    onClick={() => toggle(idx)}
                    aria-expanded={isOpen}
                  >
                    <span className="faq__qText">{it.q}</span>
                    <span className="faq__chev" aria-hidden="true" />
                  </button>

                  <div className={`faq__a ${isOpen ? "isOpen" : ""}`} role="region">
                    <div className="faq__aInner">{it.a}</div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="legal__card">
            <h2 className="legal__h2">Still need help?</h2>
            <p className="legal__p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <div className="legal__inlineBtns">
              <a className="legal__btn" href="#contact">
                Talk to us
              </a>
              <a className="legal__btn legal__btn--outline" href="/">
                Return home
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
