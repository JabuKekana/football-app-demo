import React, { useMemo, useState } from "react";
import "./styles/admin-review-loan.css";

export const AdminReviewLoan = () => {
  const application = useMemo(
    () => ({
      id: "APP-LOREM-7781",
      borrower: "Lorem SME Trading",
      amount: "250000 ZAR",
      purpose: "Expansion",
      term: "24 months",
      submitted: "Lorem date",
    }),
    []
  );

  const [form, setForm] = useState({
    status: "Pending",
    creditScore: "650",
    riskRating: "B",
    notes: "",
    modifications: "",
    reason: "",
  });

  const [toast, setToast] = useState({ type: "idle", text: "" });

  const set = (key) => (e) => {
    setForm((p) => ({ ...p, [key]: e.target.value }));
  };

  const action = (type) => (e) => {
    e.preventDefault();
    setToast({ type: "success", text: `Action saved (demo): ${type}. Redirecting...` });
    setTimeout(() => {
      window.location.href = "/admin/dashboard";
    }, 700);
  };

  return (
    <main className="admin" aria-labelledby="ar-title">
      <section className="admin__hero">
        <div className="admin__container">
          <div className="admin__kicker">Admin</div>
          <h1 className="admin__title" id="ar-title">
            Loan Application Review
          </h1>
          <p className="admin__lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. This is a demo screen for reviewing applications.
          </p>

          <div className="adminSplit">
            <div className="adminCard">
              <h2 className="adminCard__title">Application summary</h2>

              <div className="adminSummary">
                <div className="adminSummary__row">
                  <span>Application ID</span>
                  <strong>{application.id}</strong>
                </div>
                <div className="adminSummary__row">
                  <span>Borrower</span>
                  <strong>{application.borrower}</strong>
                </div>
                <div className="adminSummary__row">
                  <span>Amount</span>
                  <strong>{application.amount}</strong>
                </div>
                <div className="adminSummary__row">
                  <span>Purpose</span>
                  <strong>{application.purpose}</strong>
                </div>
                <div className="adminSummary__row">
                  <span>Term</span>
                  <strong>{application.term}</strong>
                </div>
                <div className="adminSummary__row">
                  <span>Submitted</span>
                  <strong>{application.submitted}</strong>
                </div>
              </div>

              <div className="adminNotice">
                <div className="adminNotice__title">Demo note</div>
                <div className="adminNotice__text">
                  Lorem ipsum dolor sit amet. Documents and credit checks will connect later.
                </div>
              </div>
            </div>

            <form className="adminCard" onSubmit={(e) => e.preventDefault()}>
              <h2 className="adminCard__title">Review inputs</h2>

              <div className="adminGrid">
                <div className="adminField adminField--full">
                  <label className="adminLabel" htmlFor="ar-status">
                    Application status
                  </label>
                  <select className="adminSelect" id="ar-status" value={form.status} onChange={set("status")}>
                    {["Pending", "Under Review", "Approved", "Rejected", "More Info Needed"].map((v) => (
                      <option key={v} value={v}>
                        {v}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="adminField">
                  <label className="adminLabel" htmlFor="ar-score">
                    Credit score
                  </label>
                  <input className="adminInput" id="ar-score" value={form.creditScore} onChange={set("creditScore")} placeholder="Lorem" />
                </div>

                <div className="adminField">
                  <label className="adminLabel" htmlFor="ar-risk">
                    Risk rating
                  </label>
                  <select className="adminSelect" id="ar-risk" value={form.riskRating} onChange={set("riskRating")}>
                    {["A", "B", "C", "D"].map((v) => (
                      <option key={v} value={v}>
                        {v}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="adminField adminField--full">
                  <label className="adminLabel" htmlFor="ar-notes">
                    Admin notes
                  </label>
                  <textarea
                    className="adminTextarea"
                    id="ar-notes"
                    rows={5}
                    value={form.notes}
                    onChange={set("notes")}
                    placeholder="Lorem notes..."
                  />
                </div>

                <div className="adminField adminField--full">
                  <label className="adminLabel" htmlFor="ar-mod">
                    Required modifications
                  </label>
                  <textarea
                    className="adminTextarea"
                    id="ar-mod"
                    rows={4}
                    value={form.modifications}
                    onChange={set("modifications")}
                    placeholder="Lorem modifications..."
                  />
                </div>

                <div className="adminField adminField--full">
                  <label className="adminLabel" htmlFor="ar-reason">
                    Approval or rejection reason
                  </label>
                  <input className="adminInput" id="ar-reason" value={form.reason} onChange={set("reason")} placeholder="Lorem reason..." />
                </div>
              </div>

              <div className="adminActions">
                <button className="adminBtn adminBtn--outline" type="button" onClick={() => (window.location.href = "/admin/users")}>
                  User management
                </button>

                <div className="adminActions__right">
                  <button className="adminBtn adminBtn--ghost" type="button" onClick={action("Request more info")}>
                    More info needed
                  </button>
                  <button className="adminBtn adminBtn--outline" type="button" onClick={action("Reject")}>
                    Reject
                  </button>
                  <button className="adminBtn" type="button" onClick={action("Approve")}>
                    Approve
                  </button>
                </div>
              </div>

              {toast.type !== "idle" ? (
                <p className="adminStatus isSuccess" role="status">
                  {toast.text}
                </p>
              ) : null}
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};
