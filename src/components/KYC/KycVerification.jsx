import React, { useMemo, useState } from "react";
import "./styles/kyc-pages.css";

export const KycVerification = () => {
  const questions = useMemo(
    () => [
      { id: "q1", label: "Lorem verification question 1", placeholder: "Lorem answer..." },
      { id: "q2", label: "Lorem verification question 2", placeholder: "Lorem answer..." },
      { id: "q3", label: "Lorem verification question 3", placeholder: "Lorem answer..." },
    ],
    []
  );

  const [form, setForm] = useState({
    govId: null,
    proofAddress: null,
    q1: "",
    q2: "",
    q3: "",
    signature: "",
    consent: true,
  });

  const [toast, setToast] = useState({ type: "idle", text: "" });

  const set = (key) => (e) => {
    const value =
      e.target.type === "file"
        ? e.target.files?.[0] ?? null
        : e.target.type === "checkbox"
        ? e.target.checked
        : e.target.value;

    setForm((p) => ({ ...p, [key]: value }));
  };

  const submit = (e) => {
    e.preventDefault();
    setToast({ type: "success", text: "KYC submitted (demo). Redirecting..." });
    setTimeout(() => {
      window.location.href = "/dashboard";
    }, 700);
  };

  return (
    <main className="kyc" aria-labelledby="kyc-title">
      <section className="kyc__hero">
        <div className="kyc__container">
          <div className="kyc__kicker">Verification</div>
          <h1 className="kyc__title" id="kyc-title">
            KYC and AML Verification
          </h1>
          <p className="kyc__lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. This is a demo page, so uploads are optional.
          </p>

          <form className="kycCard" onSubmit={submit}>
            <h2 className="kycCard__title">Upload documents</h2>

            <div className="kycGrid">
              <div className="kycField">
                <label className="kycLabel" htmlFor="kyc-id">
                  Government ID
                </label>
                <input className="kycFile" id="kyc-id" type="file" onChange={set("govId")} />
                <div className="kycHint">Lorem: passport, ID card, or driver license.</div>
              </div>

              <div className="kycField">
                <label className="kycLabel" htmlFor="kyc-proof">
                  Proof of address
                </label>
                <input className="kycFile" id="kyc-proof" type="file" onChange={set("proofAddress")} />
                <div className="kycHint">Lorem: utility bill or bank statement.</div>
              </div>
            </div>

            <div className="kycDivider" />

            <h2 className="kycCard__title">Additional questions</h2>

            <div className="kycGrid">
              {questions.map((q) => (
                <div className="kycField kycField--full" key={q.id}>
                  <label className="kycLabel" htmlFor={q.id}>
                    {q.label}
                  </label>
                  <input
                    className="kycInput"
                    id={q.id}
                    value={form[q.id]}
                    onChange={set(q.id)}
                    placeholder={q.placeholder}
                  />
                </div>
              ))}
            </div>

            <div className="kycDivider" />

            <h2 className="kycCard__title">Consent</h2>

            <div className="kycGrid">
              <div className="kycField kycField--full">
                <label className="kycLabel" htmlFor="kyc-sig">
                  Electronic signature
                </label>
                <input
                  className="kycInput"
                  id="kyc-sig"
                  value={form.signature}
                  onChange={set("signature")}
                  placeholder="Type your name (Lorem)"
                />
              </div>

              <div className="kycField kycField--full">
                <label className="kycCheck">
                  <input type="checkbox" checked={form.consent} onChange={set("consent")} />
                  <span>
                    I consent to verification checks and confirm the information is accurate (Lorem).
                  </span>
                </label>

                <div className="kycNotice">
                  <div className="kycNotice__title">Demo note</div>
                  <div className="kycNotice__text">
                    Lorem ipsum dolor sit amet. Real verification and storage will be implemented later.
                  </div>
                </div>
              </div>
            </div>

            <div className="kycActions">
              <button className="kycBtn kycBtn--outline" type="button" onClick={() => (window.location.href = "/dashboard")}>
                Back
              </button>

              <div className="kycActions__right">
                <button className="kycBtn" type="submit">
                  Submit verification
                </button>
              </div>
            </div>

            {toast.type !== "idle" ? (
              <p className="kycStatus isSuccess" role="status">
                {toast.text}
              </p>
            ) : null}

            <div className="kycLinks">
              <a className="kycLink" href="/terms">
                Terms
              </a>
              <span className="kycDot" aria-hidden="true" />
              <a className="kycLink" href="/privacy">
                Privacy
              </a>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};
