import React, { useMemo, useState } from "react";
import "./styles/dashboard-pages.css";

export const LoanApplication = () => {
  const [step, setStep] = useState(1);
  const [savedMsg, setSavedMsg] = useState("");

  const [form, setForm] = useState({
    amount: "50000",
    purpose: "Working Capital",
    term: "12 months",
    rateRange: "10% - 18%",

    projectTitle: "",
    description: "",
    useOfFunds: "",
    outcomes: "",
    timeline: "",

    annualRevenue: "",
    profitMargin: "",
    existingDebt: "",
    collateral: false,
    collateralDesc: "",
    financialStatements: null,

    repaymentSchedule: "Monthly",
    primarySource: "",
    secondarySource: "",
    businessPlan: null,
    registrationDocs: null,
    taxReturns: null,
    additionalDocs: null,

    certify: true,
    creditCheck: true,
  });

  const purposes = useMemo(
    () => ["Working Capital", "Equipment Purchase", "Expansion", "Inventory", "R&D", "Other"],
    []
  );

  const terms = useMemo(
    () => ["6 months", "12 months", "18 months", "24 months", "36 months"],
    []
  );

  const rateRanges = useMemo(
    () => ["8% - 12%", "10% - 18%", "12% - 22%", "18% - 30%"],
    []
  );

  const schedules = useMemo(
    () => ["Monthly", "Quarterly", "Bullet"],
    []
  );

  const set = (key) => (e) => {
    const value =
      e.target.type === "checkbox"
        ? e.target.checked
        : e.target.type === "file"
        ? e.target.files?.[0] ?? null
        : e.target.value;

    setForm((p) => ({ ...p, [key]: value }));
  };

  const saveDraft = () => {
    try {
      const safe = { ...form, financialStatements: null, businessPlan: null, registrationDocs: null, taxReturns: null, additionalDocs: null };
      localStorage.setItem("loanAppDraft", JSON.stringify({ step, form: safe, savedAt: Date.now() }));
      setSavedMsg("Draft saved (demo).");
      setTimeout(() => setSavedMsg(""), 2000);
    } catch {
      setSavedMsg("Could not save draft.");
      setTimeout(() => setSavedMsg(""), 2000);
    }
  };

  const next = (e) => {
    e.preventDefault();
    setStep((s) => Math.min(5, s + 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const back = (e) => {
    e.preventDefault();
    setStep((s) => Math.max(1, s - 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const submit = (e) => {
    e.preventDefault();
    window.location.href = "/borrower/dashboard";
  };

  return (
    <main className="dash" aria-labelledby="loanapp-title">
      <section className="dash__hero">
        <div className="dash__container">
          <div className="dash__kicker">Borrower</div>
          <h1 className="dash__title" id="loanapp-title">
            Loan Application
          </h1>
          <p className="dash__lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. This is a frontend demo, so you can proceed without real documents.
          </p>

          <div className="dashSteps" aria-label="Progress">
            <div className={`dashStep ${step >= 1 ? "isOn" : ""}`}>1</div>
            <div className={`dashStep ${step >= 2 ? "isOn" : ""}`}>2</div>
            <div className={`dashStep ${step >= 3 ? "isOn" : ""}`}>3</div>
            <div className={`dashStep ${step >= 4 ? "isOn" : ""}`}>4</div>
            <div className={`dashStep ${step >= 5 ? "isOn" : ""}`}>5</div>
          </div>

          <form className="dashCard" onSubmit={step === 5 ? submit : next}>
            {step === 1 ? (
              <>
                <h2 className="dashCard__title">Loan details</h2>

                <div className="dashGrid">
                  <div className="dashField dashField--full">
                    <label className="dashLabel" htmlFor="la-amount">
                      Loan amount requested
                    </label>

                    <div className="dashAmount">
                      <input
                        className="dashInput"
                        id="la-amount"
                        value={form.amount}
                        onChange={set("amount")}
                        inputMode="numeric"
                        placeholder="50000"
                      />
                      <span className="dashAmount__suffix">ZAR</span>
                    </div>

                    <input
                      className="dashRange"
                      type="range"
                      min="5000"
                      max="500000"
                      step="1000"
                      value={Number(form.amount || 0)}
                      onChange={set("amount")}
                      aria-label="Loan amount slider"
                    />
                    <div className="dashHint">Lorem: slide to adjust. Demo only.</div>
                  </div>

                  <div className="dashField">
                    <label className="dashLabel" htmlFor="la-purpose">
                      Loan purpose
                    </label>
                    <select className="dashSelect" id="la-purpose" value={form.purpose} onChange={set("purpose")}>
                      {purposes.map((p) => (
                        <option key={p} value={p}>
                          {p}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="dashField">
                    <label className="dashLabel" htmlFor="la-term">
                      Preferred term
                    </label>
                    <select className="dashSelect" id="la-term" value={form.term} onChange={set("term")}>
                      {terms.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="dashField dashField--full">
                    <label className="dashLabel" htmlFor="la-rate">
                      Desired interest rate range
                    </label>
                    <select className="dashSelect" id="la-rate" value={form.rateRange} onChange={set("rateRange")}>
                      {rateRanges.map((r) => (
                        <option key={r} value={r}>
                          {r}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </>
            ) : null}

            {step === 2 ? (
              <>
                <h2 className="dashCard__title">Project and use of funds</h2>

                <div className="dashGrid">
                  <div className="dashField dashField--full">
                    <label className="dashLabel" htmlFor="la-ptitle">
                      Project title
                    </label>
                    <input
                      className="dashInput"
                      id="la-ptitle"
                      value={form.projectTitle}
                      onChange={set("projectTitle")}
                      placeholder="Lorem project title"
                    />
                  </div>

                  <div className="dashField dashField--full">
                    <label className="dashLabel" htmlFor="la-desc">
                      Detailed description
                    </label>
                    <textarea
                      className="dashTextarea"
                      id="la-desc"
                      rows={6}
                      value={form.description}
                      onChange={set("description")}
                      placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
                    />
                    <div className="dashHint">Lorem: aim for 500 to 1000 characters later.</div>
                  </div>

                  <div className="dashField">
                    <label className="dashLabel" htmlFor="la-use">
                      How funds will be used
                    </label>
                    <textarea
                      className="dashTextarea"
                      id="la-use"
                      rows={4}
                      value={form.useOfFunds}
                      onChange={set("useOfFunds")}
                      placeholder="• Lorem item 1&#10;• Lorem item 2"
                    />
                  </div>

                  <div className="dashField">
                    <label className="dashLabel" htmlFor="la-outcomes">
                      Expected outcomes or ROI
                    </label>
                    <textarea
                      className="dashTextarea"
                      id="la-outcomes"
                      rows={4}
                      value={form.outcomes}
                      onChange={set("outcomes")}
                      placeholder="Lorem outcomes..."
                    />
                  </div>

                  <div className="dashField dashField--full">
                    <label className="dashLabel" htmlFor="la-timeline">
                      Timeline for project completion
                    </label>
                    <input
                      className="dashInput"
                      id="la-timeline"
                      value={form.timeline}
                      onChange={set("timeline")}
                      placeholder="e.g. 3 to 6 months"
                    />
                  </div>
                </div>
              </>
            ) : null}

            {step === 3 ? (
              <>
                <h2 className="dashCard__title">Financial information</h2>

                <div className="dashGrid">
                  <div className="dashField">
                    <label className="dashLabel" htmlFor="la-rev">
                      Annual revenue
                    </label>
                    <input className="dashInput" id="la-rev" value={form.annualRevenue} onChange={set("annualRevenue")} placeholder="Lorem" />
                  </div>

                  <div className="dashField">
                    <label className="dashLabel" htmlFor="la-margin">
                      Profit margin
                    </label>
                    <input className="dashInput" id="la-margin" value={form.profitMargin} onChange={set("profitMargin")} placeholder="e.g. 12%" />
                  </div>

                  <div className="dashField">
                    <label className="dashLabel" htmlFor="la-debt">
                      Existing debt
                    </label>
                    <input className="dashInput" id="la-debt" value={form.existingDebt} onChange={set("existingDebt")} placeholder="Lorem" />
                  </div>

                  <div className="dashField">
                    <label className="dashLabel">Collateral available</label>
                    <label className="dashToggle">
                      <input type="checkbox" checked={form.collateral} onChange={set("collateral")} />
                      <span>Yes</span>
                    </label>
                    {form.collateral ? (
                      <input
                        className="dashInput"
                        value={form.collateralDesc}
                        onChange={set("collateralDesc")}
                        placeholder="Describe collateral (Lorem)"
                      />
                    ) : null}
                  </div>

                  <div className="dashField dashField--full">
                    <label className="dashLabel" htmlFor="la-fin">
                      Upload financial statements (PDF or Excel)
                    </label>
                    <input className="dashFile" id="la-fin" type="file" onChange={set("financialStatements")} />
                    <div className="dashHint">
                      Demo: file is not uploaded. You can skip this.
                    </div>
                  </div>
                </div>
              </>
            ) : null}

            {step === 4 ? (
              <>
                <h2 className="dashCard__title">Repayment plan and documents</h2>

                <div className="dashGrid">
                  <div className="dashField dashField--full">
                    <label className="dashLabel" htmlFor="la-sched">
                      Proposed repayment schedule
                    </label>
                    <select className="dashSelect" id="la-sched" value={form.repaymentSchedule} onChange={set("repaymentSchedule")}>
                      {schedules.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="dashField">
                    <label className="dashLabel" htmlFor="la-primary">
                      Primary repayment source
                    </label>
                    <textarea
                      className="dashTextarea"
                      id="la-primary"
                      rows={4}
                      value={form.primarySource}
                      onChange={set("primarySource")}
                      placeholder="Lorem primary source..."
                    />
                  </div>

                  <div className="dashField">
                    <label className="dashLabel" htmlFor="la-secondary">
                      Secondary repayment source
                    </label>
                    <textarea
                      className="dashTextarea"
                      id="la-secondary"
                      rows={4}
                      value={form.secondarySource}
                      onChange={set("secondarySource")}
                      placeholder="Lorem secondary source..."
                    />
                  </div>

                  <div className="dashField">
                    <label className="dashLabel" htmlFor="la-bp">
                      Business plan
                    </label>
                    <input className="dashFile" id="la-bp" type="file" onChange={set("businessPlan")} />
                  </div>

                  <div className="dashField">
                    <label className="dashLabel" htmlFor="la-regdocs">
                      Company registration documents
                    </label>
                    <input className="dashFile" id="la-regdocs" type="file" onChange={set("registrationDocs")} />
                  </div>

                  <div className="dashField">
                    <label className="dashLabel" htmlFor="la-tax">
                      Tax returns (optional)
                    </label>
                    <input className="dashFile" id="la-tax" type="file" onChange={set("taxReturns")} />
                  </div>

                  <div className="dashField">
                    <label className="dashLabel" htmlFor="la-add">
                      Additional documentation (optional)
                    </label>
                    <input className="dashFile" id="la-add" type="file" onChange={set("additionalDocs")} />
                  </div>
                </div>
              </>
            ) : null}

            {step === 5 ? (
              <>
                <h2 className="dashCard__title">Final submission</h2>

                <div className="dashGrid">
                  <div className="dashField dashField--full">
                    <div className="dashNotice">
                      <div className="dashNotice__title">Demo mode</div>
                      <div className="dashNotice__text">
                        Lorem ipsum dolor sit amet. You can submit without completing every field.
                      </div>
                    </div>

                    <label className="dashCheck">
                      <input type="checkbox" checked={form.certify} onChange={set("certify")} />
                      <span>Certification of accuracy</span>
                    </label>

                    <label className="dashCheck">
                      <input type="checkbox" checked={form.creditCheck} onChange={set("creditCheck")} />
                      <span>Authorization for credit check</span>
                    </label>
                  </div>

                  <div className="dashField dashField--full">
                    <div className="dashSummary">
                      <div className="dashSummary__row">
                        <span>Loan amount</span>
                        <strong>{form.amount || "Lorem"}</strong>
                      </div>
                      <div className="dashSummary__row">
                        <span>Purpose</span>
                        <strong>{form.purpose}</strong>
                      </div>
                      <div className="dashSummary__row">
                        <span>Term</span>
                        <strong>{form.term}</strong>
                      </div>
                      <div className="dashSummary__row">
                        <span>Rate range</span>
                        <strong>{form.rateRange}</strong>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : null}

            <div className="dashActions">
              <button className="dashBtn dashBtn--outline" type="button" onClick={back} disabled={step === 1}>
                Back
              </button>

              <div className="dashActions__right">
                <button className="dashBtn dashBtn--ghost" type="button" onClick={saveDraft}>
                  Save draft
                </button>

                {step < 5 ? (
                  <button className="dashBtn" type="submit">
                    Next
                  </button>
                ) : (
                  <button className="dashBtn" type="submit">
                    Submit application
                  </button>
                )}
              </div>
            </div>

            {savedMsg ? <p className="dashStatus" role="status">{savedMsg}</p> : null}

            <div className="dashLinks">
              <a className="dashLink" href="/login">
                Login
              </a>
              <span className="dashDot" aria-hidden="true" />
              <a className="dashLink" href="/terms">
                Terms
              </a>
              <span className="dashDot" aria-hidden="true" />
              <a className="dashLink" href="/privacy">
                Privacy
              </a>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};
