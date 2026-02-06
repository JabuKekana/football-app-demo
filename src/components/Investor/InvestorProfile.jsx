// pages/Investor/InvestorProfile.jsx
import React, { useMemo, useState } from "react";
import "./styles/investor-profile.css";

export const InvestorProfile = () => {
  const [savedMsg, setSavedMsg] = useState("");

  const [form, setForm] = useState({
    minInvestment: "2000",
    maxInvestment: "20000",
    geo: [],
    avoid: [],
    minScore: 620,
    experience: "Intermediate",
    horizon: "12-36 months",
    riskAnswers: {
      q1: "Moderate",
      q2: "Balanced",
      q3: "Some experience",
      q4: "Medium",
      q5: "Keep investing",
    },
    bankName: "",
    accountNumber: "",
    routing: "",
    accountType: "Checking",
  });

  const geos = useMemo(() => ["South Africa", "SADC", "Africa", "Global"], []);
  const industries = useMemo(
    () => ["Finance", "Retail", "Manufacturing", "Technology", "Services", "Agriculture", "Other"],
    []
  );

  const set = (key) => (e) => {
    const value = e.target.value;
    setForm((p) => ({ ...p, [key]: value }));
  };

  const toggle = (key, value) => {
    setForm((p) => {
      const arr = p[key];
      const has = arr.includes(value);
      const next = has ? arr.filter((x) => x !== value) : [...arr, value];
      return { ...p, [key]: next };
    });
  };

  const setRisk = (key) => (e) => {
    const value = e.target.value;
    setForm((p) => ({ ...p, riskAnswers: { ...p.riskAnswers, [key]: value } }));
  };

  const save = (e) => {
    e.preventDefault();
    setSavedMsg("Investor profile saved (demo).");
    setTimeout(() => setSavedMsg(""), 2000);
  };

  const proceed = () => {
    window.location.href = "/investor/commitment";
  };

  return (
    <main className="dash" aria-labelledby="ip-title">
      <section className="dash__hero">
        <div className="dash__container">
          <div className="dash__kicker">Investor</div>
          <h1 className="dash__title" id="ip-title">
            Investor Profile
          </h1>
          <p className="dash__lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Set your preferences for matching.
          </p>

          <form className="dashCard" onSubmit={save}>
            <h2 className="dashCard__title">Investment criteria</h2>

            <div className="dashGrid">
              <div className="dashField">
                <label className="dashLabel" htmlFor="ip-min">
                  Minimum per loan
                </label>
                <div className="dashAmount">
                  <input className="dashInput" id="ip-min" value={form.minInvestment} onChange={set("minInvestment")} />
                  <span className="dashAmount__suffix">ZAR</span>
                </div>
              </div>

              <div className="dashField">
                <label className="dashLabel" htmlFor="ip-max">
                  Maximum per loan
                </label>
                <div className="dashAmount">
                  <input className="dashInput" id="ip-max" value={form.maxInvestment} onChange={set("maxInvestment")} />
                  <span className="dashAmount__suffix">ZAR</span>
                </div>
              </div>

              <div className="dashField dashField--full">
                <div className="dashLabel">Geographic preferences</div>
                <div className="dashChips" role="list">
                  {geos.map((g) => {
                    const on = form.geo.includes(g);
                    return (
                      <button key={g} type="button" className={`dashChip ${on ? "isOn" : ""}`} onClick={() => toggle("geo", g)}>
                        {g}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="dashField dashField--full">
                <div className="dashLabel">Industries to avoid</div>
                <div className="dashChips" role="list">
                  {industries.map((g) => {
                    const on = form.avoid.includes(g);
                    return (
                      <button key={g} type="button" className={`dashChip ${on ? "isOn" : ""}`} onClick={() => toggle("avoid", g)}>
                        {g}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="dashField dashField--full">
                <label className="dashLabel" htmlFor="ip-score">
                  Minimum credit score requirement
                </label>
                <input
                  className="dashRange"
                  id="ip-score"
                  type="range"
                  min="300"
                  max="850"
                  step="10"
                  value={Number(form.minScore)}
                  onChange={(e) => setForm((p) => ({ ...p, minScore: Number(e.target.value) }))}
                />
                <div className="dashHint">Selected: {form.minScore}</div>
              </div>
            </div>

            <div className="dashDivider" />

            <h2 className="dashCard__title">Risk assessment (demo)</h2>
            <div className="dashGrid">
              <div className="dashField">
                <label className="dashLabel">Risk tolerance</label>
                <select className="dashSelect" value={form.riskAnswers.q1} onChange={setRisk("q1")}>
                  {["Conservative", "Moderate", "Aggressive"].map((v) => (
                    <option key={v} value={v}>
                      {v}
                    </option>
                  ))}
                </select>
              </div>

              <div className="dashField">
                <label className="dashLabel">Return preference</label>
                <select className="dashSelect" value={form.riskAnswers.q2} onChange={setRisk("q2")}>
                  {["Stable", "Balanced", "High growth"].map((v) => (
                    <option key={v} value={v}>
                      {v}
                    </option>
                  ))}
                </select>
              </div>

              <div className="dashField">
                <label className="dashLabel">Experience level</label>
                <select className="dashSelect" value={form.experience} onChange={set("experience")}>
                  {["Beginner", "Intermediate", "Advanced"].map((v) => (
                    <option key={v} value={v}>
                      {v}
                    </option>
                  ))}
                </select>
              </div>

              <div className="dashField">
                <label className="dashLabel">Time horizon</label>
                <select className="dashSelect" value={form.horizon} onChange={set("horizon")}>
                  {["0-12 months", "12-36 months", "36+ months"].map((v) => (
                    <option key={v} value={v}>
                      {v}
                    </option>
                  ))}
                </select>
              </div>

              <div className="dashField dashField--full">
                <div className="dashNotice">
                  <div className="dashNotice__title">Demo note</div>
                  <div className="dashNotice__text">Lorem ipsum dolor sit amet. Real questionnaire will be added later.</div>
                </div>
              </div>
            </div>

            <div className="dashDivider" />

            <h2 className="dashCard__title">Payment and banking</h2>
            <div className="dashGrid">
              <div className="dashField">
                <label className="dashLabel" htmlFor="ip-bank">
                  Bank name
                </label>
                <input className="dashInput" id="ip-bank" value={form.bankName} onChange={set("bankName")} placeholder="Lorem Bank" />
              </div>

              <div className="dashField">
                <label className="dashLabel" htmlFor="ip-acc">
                  Account number (masked later)
                </label>
                <input className="dashInput" id="ip-acc" value={form.accountNumber} onChange={set("accountNumber")} placeholder="••••••••" />
              </div>

              <div className="dashField">
                <label className="dashLabel" htmlFor="ip-route">
                  Routing number
                </label>
                <input className="dashInput" id="ip-route" value={form.routing} onChange={set("routing")} placeholder="Lorem" />
              </div>

              <div className="dashField">
                <label className="dashLabel" htmlFor="ip-type">
                  Account type
                </label>
                <select className="dashSelect" id="ip-type" value={form.accountType} onChange={set("accountType")}>
                  {["Checking", "Savings"].map((v) => (
                    <option key={v} value={v}>
                      {v}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="dashActions">
              <button className="dashBtn dashBtn--outline" type="button" onClick={() => (window.location.href = "/")}>
                Return home
              </button>

              <div className="dashActions__right">
                <button className="dashBtn dashBtn--ghost" type="button" onClick={proceed}>
                  Proceed to commitment
                </button>
                <button className="dashBtn" type="submit">
                  Save profile
                </button>
              </div>
            </div>

            {savedMsg ? <p className="dashStatus" role="status">{savedMsg}</p> : null}
          </form>
        </div>
      </section>
    </main>
  );
};
