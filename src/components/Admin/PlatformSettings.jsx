import React, { useMemo, useState } from "react";
import "./styles/admin-pages.css";

export const PlatformSettings = () => {
  const [toast, setToast] = useState("");

  const [form, setForm] = useState({
    minRate: "8",
    maxRate: "30",
    feeStructure: "2% origination + 1% servicing",
    termOptions: ["6 months", "12 months", "18 months", "24 months", "36 months"],
    template: "Lorem notification template content...",
    maintenance: "off",
  });

  const termOptions = useMemo(
    () => ["6 months", "12 months", "18 months", "24 months", "36 months", "48 months"],
    []
  );

  const set = (key) => (e) => {
    setForm((p) => ({ ...p, [key]: e.target.value }));
  };

  const toggleTerm = (term) => {
    setForm((p) => {
      const has = p.termOptions.includes(term);
      const next = has ? p.termOptions.filter((t) => t !== term) : [...p.termOptions, term];
      return { ...p, termOptions: next };
    });
  };

  const save = (e) => {
    e.preventDefault();
    setToast("Settings saved (demo).");
    setTimeout(() => setToast(""), 1800);
  };

  return (
    <main className="admin" aria-labelledby="ps-title">
      <section className="admin__hero">
        <div className="admin__container">
          <div className="admin__kicker">Admin</div>
          <h1 className="admin__title" id="ps-title">
            Platform Settings
          </h1>
          <p className="admin__lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Configure core parameters for the marketplace.
          </p>

          <form className="adminCard" onSubmit={save}>
            <h2 className="adminCard__title">Rates, fees, and terms</h2>

            <div className="adminGrid">
              <div className="adminField">
                <label className="adminLabel" htmlFor="ps-min">
                  Minimum interest rate (%)
                </label>
                <input className="adminInput" id="ps-min" value={form.minRate} onChange={set("minRate")} placeholder="8" />
              </div>

              <div className="adminField">
                <label className="adminLabel" htmlFor="ps-max">
                  Maximum interest rate (%)
                </label>
                <input className="adminInput" id="ps-max" value={form.maxRate} onChange={set("maxRate")} placeholder="30" />
              </div>

              <div className="adminField adminField--full">
                <label className="adminLabel" htmlFor="ps-fee">
                  Fee structures
                </label>
                <input className="adminInput" id="ps-fee" value={form.feeStructure} onChange={set("feeStructure")} placeholder="Lorem fees" />
              </div>

              <div className="adminField adminField--full">
                <div className="adminLabel">Loan term options</div>
                <div className="adminChips" role="list">
                  {termOptions.map((t) => {
                    const on = form.termOptions.includes(t);
                    return (
                      <button
                        key={t}
                        type="button"
                        className={`adminChip ${on ? "isOn" : ""}`}
                        onClick={() => toggleTerm(t)}
                      >
                        {t}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="adminDivider" />

            <h2 className="adminCard__title">Notifications and maintenance</h2>

            <div className="adminGrid">
              <div className="adminField adminField--full">
                <label className="adminLabel" htmlFor="ps-template">
                  Notification template
                </label>
                <textarea
                  className="adminTextarea"
                  id="ps-template"
                  rows={6}
                  value={form.template}
                  onChange={set("template")}
                  placeholder="Lorem template..."
                />
              </div>

              <div className="adminField adminField--full">
                <label className="adminLabel" htmlFor="ps-maint">
                  Maintenance mode
                </label>
                <select className="adminSelect" id="ps-maint" value={form.maintenance} onChange={set("maintenance")}>
                  <option value="off">Off</option>
                  <option value="on">On</option>
                </select>

                <div className="adminNotice">
                  <div className="adminNotice__title">Demo note</div>
                  <div className="adminNotice__text">
                    Lorem ipsum dolor sit amet. This does not actually block the site yet.
                  </div>
                </div>
              </div>
            </div>

            <div className="adminActions">
              <a className="adminBtn adminBtn--outline" href="/admin/users">
                Back to users
              </a>

              <div className="adminActions__right">
                <button className="adminBtn adminBtn--ghost" type="button" onClick={() => (window.location.href = "/admin/review-loan")}>
                  Review loans
                </button>
                <button className="adminBtn" type="submit">
                  Save settings
                </button>
              </div>
            </div>

            {toast ? (
              <p className="adminStatus isSuccess" role="status">
                {toast}
              </p>
            ) : null}
          </form>
        </div>
      </section>
    </main>
  );
};
