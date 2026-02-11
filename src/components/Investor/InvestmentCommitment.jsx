import React, { useMemo, useState } from "react";
import "./styles/investment-commitment.css";

export const InvestmentCommitment = () => {
  const [status, setStatus] = useState({ type: "idle", text: "" });

  const loan = useMemo(
    () => ({
      id: "LOREM-1024",
      borrower: "Lorem SME Trading",
      amountRequested: "250000 ZAR",
      term: "24 months",
      rate: "12% - 18%",
      risk: "B",
    }),
    []
  );

  const [form, setForm] = useState({
    investmentAmount: "5000",
    signature: "",
    acceptTerms: true,
    acceptRisk: true,
    acceptKyc: true,
  });

  const set = (key) => (e) => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setForm((p) => ({ ...p, [key]: value }));
  };

  const submit = (e) => {
    e.preventDefault();
    setStatus({ type: "success", text: "Commitment submitted (demo). Redirecting..." });
    setTimeout(() => {
      window.location.href = "/investor/dashboard";
    }, 600);
  };

  return (
    <main className="dash" aria-labelledby="ic-title">
      <section className="dash__hero">
        <div className="dash__container">
          <div className="dash__kicker">Investor</div>
          <h1 className="dash__title" id="ic-title">
            Investment Commitment
          </h1>
          <p className="dash__lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Review the loan and confirm your investment.
          </p>

          <div className="dashSplit">
            <div className="dashCard">
              <h2 className="dashCard__title">Loan summary</h2>

              <div className="dashSummary">
                <div className="dashSummary__row">
                  <span>Loan ID</span>
                  <strong>{loan.id}</strong>
                </div>
                <div className="dashSummary__row">
                  <span>Borrower</span>
                  <strong>{loan.borrower}</strong>
                </div>
                <div className="dashSummary__row">
                  <span>Amount requested</span>
                  <strong>{loan.amountRequested}</strong>
                </div>
                <div className="dashSummary__row">
                  <span>Term</span>
                  <strong>{loan.term}</strong>
                </div>
                <div className="dashSummary__row">
                  <span>Rate range</span>
                  <strong>{loan.rate}</strong>
                </div>
                <div className="dashSummary__row">
                  <span>Risk rating</span>
                  <strong>{loan.risk}</strong>
                </div>
              </div>

              <div className="dashNotice">
                <div className="dashNotice__title">Agreed terms (display only)</div>
                <div className="dashNotice__text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae lorem. Duis et sem sed.
                </div>
              </div>
            </div>

            <form className="dashCard" onSubmit={submit}>
              <h2 className="dashCard__title">Commit funds</h2>

              <div className="dashGrid">
                <div className="dashField dashField--full">
                  <label className="dashLabel" htmlFor="ic-amt">
                    Investment amount
                  </label>
                  <div className="dashAmount">
                    <input className="dashInput" id="ic-amt" value={form.investmentAmount} onChange={set("investmentAmount")} />
                    <span className="dashAmount__suffix">ZAR</span>
                  </div>
                  <div className="dashHint">Demo: validation will be added later.</div>
                </div>

                <div className="dashField dashField--full">
                  <label className="dashLabel" htmlFor="ic-sig">
                    Electronic signature
                  </label>
                  <input className="dashInput" id="ic-sig" value={form.signature} onChange={set("signature")} placeholder="Type your name (Lorem)" />
                </div>

                <div className="dashField dashField--full">
                  <label className="dashCheck">
                    <input type="checkbox" checked={form.acceptTerms} onChange={set("acceptTerms")} />
                    <span>
                      Accept <a className="dashLink" href="/terms">Terms</a>
                    </span>
                  </label>

                  <label className="dashCheck">
                    <input type="checkbox" checked={form.acceptRisk} onChange={set("acceptRisk")} />
                    <span>Risk acknowledgement</span>
                  </label>

                  <label className="dashCheck">
                    <input type="checkbox" checked={form.acceptKyc} onChange={set("acceptKyc")} />
                    <span>KYC/AML acknowledgement</span>
                  </label>
                </div>
              </div>

              <div className="dashActions">
                <button className="dashBtn dashBtn--outline" type="button" onClick={() => (window.location.href = "/investor/profile")}>
                  Back
                </button>

                <div className="dashActions__right">
                  <button className="dashBtn" type="submit">
                    Submit commitment
                  </button>
                </div>
              </div>

              {status.type !== "idle" ? (
                <p className={`dashStatus ${status.type === "success" ? "isSuccess" : ""}`} role="status">
                  {status.text}
                </p>
              ) : null}
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};
