import React, { useMemo, useState } from "react";
import "./styles/borrower-dashboard.css";

export const BorrowerDashboard = () => {
  const data = useMemo(
    () => ({
      name: "Lorem Borrower",
      activeLoan: {
        id: "APP-LOREM-7781",
        amount: "250,000 ZAR",
        purpose: "Expansion",
        term: "24 months",
        status: "Under Review",
        fundedPct: 58,
        nextStep: "Upload missing documents (Lorem)",
      },
      notifications: [
        { id: 1, title: "Application received", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", time: "2h ago" },
        { id: 2, title: "Admin requested info", text: "Lorem ipsum dolor sit amet. Please add one more document.", time: "1d ago" },
      ],
      quickLinks: [
        { label: "Update profile", href: "/borrower/profile", icon: "fa fa-user" },
        { label: "Continue application", href: "/borrower/loan-application", icon: "fa fa-file-text-o" },
        { label: "KYC verification", href: "/kyc", icon: "fa fa-shield" },
      ],
    }),
    []
  );

  const [toast, setToast] = useState("");

  const fakeAction = (text, goTo) => {
    setToast(text);
    setTimeout(() => setToast(""), 1800);
    if (goTo) {
      setTimeout(() => {
        window.location.href = goTo;
      }, 600);
    }
  };

  return (
    <main className="core" aria-labelledby="bd-title">
      <section className="core__hero">
        <div className="core__container">
          <div className="core__kicker">Borrower</div>
          <h1 className="core__title" id="bd-title">
            Dashboard
          </h1>
          <p className="core__lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Track your application and funding progress.
          </p>

          <div className="coreGrid">
            <div className="coreCard coreCard--span2">
              <div className="coreCard__top">
                <div>
                  <div className="coreCard__eyebrow">Active request</div>
                  <h2 className="coreCard__title">Loan {data.activeLoan.id}</h2>
                  <p className="coreCard__text">
                    Amount <strong>{data.activeLoan.amount}</strong> • {data.activeLoan.purpose} • {data.activeLoan.term}
                  </p>
                </div>

                <div className="corePill">
                  <i className="fa fa-clock-o" aria-hidden="true"></i>
                  <span>{data.activeLoan.status}</span>
                </div>
              </div>

              <div className="coreProgress">
                <div className="coreProgress__row">
                  <span>Funding progress</span>
                  <strong>{data.activeLoan.fundedPct}%</strong>
                </div>
                <div className="coreProgress__bar" role="progressbar" aria-valuenow={data.activeLoan.fundedPct} aria-valuemin={0} aria-valuemax={100}>
                  <div className="coreProgress__fill" style={{ width: `${data.activeLoan.fundedPct}%` }} />
                </div>
                <div className="coreHint">
                  Next step: <span className="coreHint__strong">{data.activeLoan.nextStep}</span>
                </div>
              </div>

              <div className="coreActions">
                <button className="coreBtn coreBtn--ghost" type="button" onClick={() => fakeAction("Saved progress (demo).")}>
                  Save
                </button>
                <div className="coreActions__right">
                  <a className="coreBtn coreBtn--outline" href="/borrower/loan-application">
                    View application
                  </a>
                  <a className="coreBtn" href="/messages">
                    Message support
                  </a>
                </div>
              </div>
            </div>

            <div className="coreCard">
              <div className="coreCard__eyebrow">Quick actions</div>
              <h2 className="coreCard__title">Your shortcuts</h2>

              <div className="coreList">
                {data.quickLinks.map((l) => (
                  <a className="coreListItem" key={l.href} href={l.href}>
                    <span className="coreListItem__icon" aria-hidden="true">
                      <i className={l.icon}></i>
                    </span>
                    <span className="coreListItem__text">{l.label}</span>
                    <span className="coreListItem__arrow" aria-hidden="true">
                      →
                    </span>
                  </a>
                ))}
              </div>

              <button className="coreBtn coreBtn--outline coreBtn--full" type="button" onClick={() => fakeAction("Starting new application (demo).", "/borrower/loan-application")}>
                Apply for another loan
              </button>
            </div>

            <div className="coreCard">
              <div className="coreCard__eyebrow">Notifications</div>
              <h2 className="coreCard__title">Updates</h2>

              <div className="coreFeed">
                {data.notifications.map((n) => (
                  <div className="coreFeedItem" key={n.id}>
                    <div className="coreFeedItem__dot" aria-hidden="true" />
                    <div className="coreFeedItem__body">
                      <div className="coreFeedItem__top">
                        <strong>{n.title}</strong>
                        <span className="coreMuted">{n.time}</span>
                      </div>
                      <div className="coreFeedItem__text">{n.text}</div>
                    </div>
                  </div>
                ))}
              </div>

              <a className="coreBtn coreBtn--ghost coreBtn--full" href="/kyc">
                Complete verification
              </a>
            </div>

            <div className="coreCard coreCard--span3">
              <div className="coreCard__top">
                <div>
                  <div className="coreCard__eyebrow">Need help?</div>
                  <h2 className="coreCard__title">Support</h2>
                  <p className="coreCard__text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. You can message us or review FAQs.
                  </p>
                </div>

                <div className="coreActions__right">
                  <a className="coreBtn coreBtn--outline" href="/faq">
                    FAQ
                  </a>
                  <a className="coreBtn" href="/messages">
                    Open inbox
                  </a>
                </div>
              </div>
            </div>
          </div>

          {toast ? (
            <p className="coreToast" role="status">
              {toast}
            </p>
          ) : null}
        </div>
      </section>
    </main>
  );
};
