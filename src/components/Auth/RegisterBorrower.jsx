import React, { useMemo, useState } from "react";
import "./styles/auth-pages.css";

export const RegisterBorrower = () => {
  const [step, setStep] = useState(1);

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    companyName: "",
    regNumber: "",
    companyType: "Sole Proprietorship",
    industry: "Finance",
    yearEstablished: "",
    employees: "1-5",
    revenue: "<$50K",
    commsEmail: true,
    commsNews: false,
    acceptTerms: true,
    acceptPrivacy: true,
  });

  const companyTypes = useMemo(
    () => ["Sole Proprietorship", "LLC", "Corporation", "Partnership", "Non-Profit"],
    []
  );

  const industries = useMemo(
    () => ["Finance", "Retail", "Manufacturing", "Technology", "Services", "Agriculture", "Other"],
    []
  );

  const set = (key) => (e) => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setForm((p) => ({ ...p, [key]: value }));
  };

  const next = (e) => {
    e.preventDefault();
    setStep((s) => Math.min(3, s + 1));
  };

  const back = (e) => {
    e.preventDefault();
    setStep((s) => Math.max(1, s - 1));
  };

  const submit = (e) => {
    e.preventDefault();
    window.location.href = "/borrower/dashboard";
  };

  return (
    <main className="auth" aria-labelledby="borrower-title">
      <section className="auth__hero">
        <div className="auth__container">
          <div className="auth__kicker">Borrower</div>
          <h1 className="auth__title" id="borrower-title">
            Create Borrower Account
          </h1>
          <p className="auth__lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Complete the steps below.</p>

          <div className="authSteps" aria-label="Progress">
            <div className={`authStep ${step >= 1 ? "isOn" : ""}`}>1</div>
            <div className={`authStep ${step >= 2 ? "isOn" : ""}`}>2</div>
            <div className={`authStep ${step >= 3 ? "isOn" : ""}`}>3</div>
          </div>

          <form className="authForm" onSubmit={step === 3 ? submit : next}>
            {step === 1 ? (
              <div className="authForm__grid">
                <div className="authField">
                  <label className="authLabel" htmlFor="b-fullName">
                    Full name
                  </label>
                  <input
                    className="authInput"
                    id="b-fullName"
                    value={form.fullName}
                    onChange={set("fullName")}
                    placeholder="Lorem Name"
                  />
                </div>

                <div className="authField">
                  <label className="authLabel" htmlFor="b-email">
                    Email address
                  </label>
                  <input
                    className="authInput"
                    id="b-email"
                    value={form.email}
                    onChange={set("email")}
                    placeholder="you@example.com"
                    inputMode="email"
                  />
                </div>

                <div className="authField">
                  <label className="authLabel" htmlFor="b-pass">
                    Password
                  </label>
                  <input
                    className="authInput"
                    id="b-pass"
                    type="password"
                    value={form.password}
                    onChange={set("password")}
                    placeholder="Lorem password"
                  />
                  <div className="authHint">Lorem: use 8+ characters.</div>
                </div>

                <div className="authField">
                  <label className="authLabel" htmlFor="b-pass2">
                    Confirm password
                  </label>
                  <input
                    className="authInput"
                    id="b-pass2"
                    type="password"
                    value={form.confirmPassword}
                    onChange={set("confirmPassword")}
                    placeholder="Confirm"
                  />
                </div>

                <div className="authField authField--full">
                  <label className="authLabel" htmlFor="b-phone">
                    Phone number
                  </label>
                  <input
                    className="authInput"
                    id="b-phone"
                    value={form.phone}
                    onChange={set("phone")}
                    placeholder="+27 ..."
                    inputMode="tel"
                  />
                </div>
              </div>
            ) : null}

            {step === 2 ? (
              <div className="authForm__grid">
                <div className="authField">
                  <label className="authLabel" htmlFor="b-company">
                    Company name
                  </label>
                  <input
                    className="authInput"
                    id="b-company"
                    value={form.companyName}
                    onChange={set("companyName")}
                    placeholder="Lorem Company"
                  />
                </div>

                <div className="authField">
                  <label className="authLabel" htmlFor="b-reg">
                    Company registration number
                  </label>
                  <input
                    className="authInput"
                    id="b-reg"
                    value={form.regNumber}
                    onChange={set("regNumber")}
                    placeholder="Lorem-123"
                  />
                </div>

                <div className="authField">
                  <label className="authLabel" htmlFor="b-type">
                    Company type
                  </label>
                  <select className="authSelect" id="b-type" value={form.companyType} onChange={set("companyType")}>
                    {companyTypes.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="authField">
                  <label className="authLabel" htmlFor="b-industry">
                    Industry
                  </label>
                  <select className="authSelect" id="b-industry" value={form.industry} onChange={set("industry")}>
                    {industries.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="authField">
                  <label className="authLabel" htmlFor="b-year">
                    Year established
                  </label>
                  <input className="authInput" id="b-year" value={form.yearEstablished} onChange={set("yearEstablished")} placeholder="2019" />
                </div>

                <div className="authField">
                  <label className="authLabel" htmlFor="b-employees">
                    Number of employees
                  </label>
                  <select className="authSelect" id="b-employees" value={form.employees} onChange={set("employees")}>
                    {["1-5", "6-10", "11-25", "26-50", "50+"].map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="authField authField--full">
                  <label className="authLabel" htmlFor="b-rev">
                    Annual revenue
                  </label>
                  <select className="authSelect" id="b-rev" value={form.revenue} onChange={set("revenue")}>
                    {["<$50K", "$50K-$100K", "$100K-$250K", "$250K-$500K", "$500K+"].map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            ) : null}

            {step === 3 ? (
              <div className="authForm__grid">
                <div className="authField authField--full">
                  <div className="authCardSmall">
                    <div className="authCardSmall__title">Account preferences</div>

                    <label className="authCheck">
                      <input type="checkbox" checked={form.commsEmail} onChange={set("commsEmail")} />
                      <span>Email updates</span>
                    </label>

                    <label className="authCheck">
                      <input type="checkbox" checked={form.commsNews} onChange={set("commsNews")} />
                      <span>Newsletter</span>
                    </label>

                    <label className="authCheck">
                      <input type="checkbox" checked={form.acceptTerms} onChange={set("acceptTerms")} />
                      <span>
                        Accept{" "}
                        <a className="auth__link" href="/terms">
                          Terms
                        </a>
                      </span>
                    </label>

                    <label className="authCheck">
                      <input type="checkbox" checked={form.acceptPrivacy} onChange={set("acceptPrivacy")} />
                      <span>
                        Accept{" "}
                        <a className="auth__link" href="/privacy">
                          Privacy
                        </a>
                      </span>
                    </label>

                    <p className="authHint">
                      For the demo, you can continue without real details. Lorem ipsum dolor sit amet.
                    </p>
                  </div>
                </div>
              </div>
            ) : null}

            <div className="authForm__actions authForm__actions--spread">
              <button className="authBtn authBtn--outline" type="button" onClick={back} disabled={step === 1}>
                Back
              </button>

              {step < 3 ? (
                <button className="authBtn" type="submit">
                  Next
                </button>
              ) : (
                <button className="authBtn" type="submit">
                  Create account
                </button>
              )}
            </div>

            <div className="auth__row">
              <span className="auth__muted">Already have an account?</span>
              <a className="auth__link" href="/login">
                Login
              </a>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};
