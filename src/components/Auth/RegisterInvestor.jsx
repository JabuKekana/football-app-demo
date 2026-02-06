import React, { useMemo, useState } from "react";
import "./styles/auth-pages.css";

export const RegisterInvestor = () => {
  const [step, setStep] = useState(1);

  const [form, setForm] = useState({
    investorType: "Individual",
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    country: "South Africa",
    accredited: "Not Sure",
    taxId: "",
    dob: "",
    preferredIndustries: [],
    investmentRange: "$10K-$50K",
    risk: "Moderate",
    commsEmail: true,
    commsNews: false,
    acceptTerms: true,
    acceptPrivacy: true,
    ackKyc: true,
  });

  const industries = useMemo(
    () => ["Finance", "Retail", "Manufacturing", "Technology", "Services", "Agriculture", "Other"],
    []
  );

  const set = (key) => (e) => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setForm((p) => ({ ...p, [key]: value }));
  };

  const toggleIndustry = (value) => {
    setForm((p) => {
      const has = p.preferredIndustries.includes(value);
      const next = has ? p.preferredIndustries.filter((x) => x !== value) : [...p.preferredIndustries, value];
      return { ...p, preferredIndustries: next };
    });
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
    window.location.href = "/investor/dashboard";
  };

  return (
    <main className="auth" aria-labelledby="investor-title">
      <section className="auth__hero">
        <div className="auth__container">
          <div className="auth__kicker">Investor</div>
          <h1 className="auth__title" id="investor-title">
            Create Investor Account
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
                  <label className="authLabel" htmlFor="i-type">
                    Investor type
                  </label>
                  <select className="authSelect" id="i-type" value={form.investorType} onChange={set("investorType")}>
                    {["Individual", "Company", "Trust"].map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="authField">
                  <label className="authLabel" htmlFor="i-name">
                    Full name or entity name
                  </label>
                  <input className="authInput" id="i-name" value={form.name} onChange={set("name")} placeholder="Lorem Name" />
                </div>

                <div className="authField">
                  <label className="authLabel" htmlFor="i-email">
                    Email address
                  </label>
                  <input
                    className="authInput"
                    id="i-email"
                    value={form.email}
                    onChange={set("email")}
                    placeholder="you@example.com"
                    inputMode="email"
                  />
                </div>

                <div className="authField">
                  <label className="authLabel" htmlFor="i-pass">
                    Password
                  </label>
                  <input className="authInput" id="i-pass" type="password" value={form.password} onChange={set("password")} placeholder="Lorem password" />
                </div>

                <div className="authField">
                  <label className="authLabel" htmlFor="i-pass2">
                    Confirm password
                  </label>
                  <input
                    className="authInput"
                    id="i-pass2"
                    type="password"
                    value={form.confirmPassword}
                    onChange={set("confirmPassword")}
                    placeholder="Confirm"
                  />
                </div>

                <div className="authField authField--full">
                  <label className="authLabel" htmlFor="i-phone">
                    Phone number
                  </label>
                  <input className="authInput" id="i-phone" value={form.phone} onChange={set("phone")} placeholder="+27 ..." inputMode="tel" />
                </div>
              </div>
            ) : null}

            {step === 2 ? (
              <div className="authForm__grid">
                <div className="authField">
                  <label className="authLabel" htmlFor="i-country">
                    Country of residence
                  </label>
                  <input className="authInput" id="i-country" value={form.country} onChange={set("country")} placeholder="Lorem country" />
                </div>

                <div className="authField">
                  <label className="authLabel" htmlFor="i-accred">
                    Accredited investor?
                  </label>
                  <select className="authSelect" id="i-accred" value={form.accredited} onChange={set("accredited")}>
                    {["Yes", "No", "Not Sure"].map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                  <div className="authHint">Lorem: this helps us match opportunities.</div>
                </div>

                <div className="authField">
                  <label className="authLabel" htmlFor="i-tax">
                    Tax ID
                  </label>
                  <input className="authInput" id="i-tax" value={form.taxId} onChange={set("taxId")} placeholder="Lorem masked later" />
                </div>

                <div className="authField">
                  <label className="authLabel" htmlFor="i-dob">
                    Date of birth
                  </label>
                  <input className="authInput" id="i-dob" value={form.dob} onChange={set("dob")} placeholder="YYYY-MM-DD" />
                </div>
              </div>
            ) : null}

            {step === 3 ? (
              <div className="authForm__grid">
                <div className="authField authField--full">
                  <div className="authCardSmall">
                    <div className="authCardSmall__title">Investment preferences</div>

                    <div className="authMulti">
                      <div className="authLabel">Preferred industries</div>
                      <div className="authChips" role="list">
                        {industries.map((ind) => {
                          const on = form.preferredIndustries.includes(ind);
                          return (
                            <button
                              key={ind}
                              type="button"
                              className={`authChip ${on ? "isOn" : ""}`}
                              onClick={() => toggleIndustry(ind)}
                            >
                              {ind}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="authForm__grid authForm__grid--mini">
                      <div className="authField">
                        <label className="authLabel" htmlFor="i-range">
                          Investment range
                        </label>
                        <select className="authSelect" id="i-range" value={form.investmentRange} onChange={set("investmentRange")}>
                          {["<$10K", "$10K-$50K", "$50K-$100K", "$100K+"].map((t) => (
                            <option key={t} value={t}>
                              {t}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="authField">
                        <label className="authLabel" htmlFor="i-risk">
                          Risk tolerance
                        </label>
                        <select className="authSelect" id="i-risk" value={form.risk} onChange={set("risk")}>
                          {["Conservative", "Moderate", "Aggressive"].map((t) => (
                            <option key={t} value={t}>
                              {t}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="authDivider" />

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

                    <label className="authCheck">
                      <input type="checkbox" checked={form.ackKyc} onChange={set("ackKyc")} />
                      <span>KYC/AML acknowledgement</span>
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
