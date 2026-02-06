// pages/Auth/AccountType.jsx
import React, { useMemo, useState } from "react";
import "./styles/auth-pages.css";

export const AccountType = () => {
  const initial = useMemo(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const mode = params.get("mode");
      if (mode === "invest") return "invest";
      return "borrow";
    } catch {
      return "borrow";
    }
  }, []);

  const [type, setType] = useState(initial);

  const goNext = (e) => {
    e.preventDefault();
    window.location.href = type === "invest" ? "/register-investor" : "/register-borrower";
  };

  return (
    <main className="auth" aria-labelledby="type-title">
      <section className="auth__hero">
        <div className="auth__container">
          <div className="auth__kicker">Register</div>
          <h1 className="auth__title" id="type-title">
            Choose your account type
          </h1>
          <p className="auth__lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Select one option to continue.
          </p>

          <form className="authForm" onSubmit={goNext}>
            <fieldset className="authForm__fieldset">
              <legend className="authForm__legend">I want to</legend>

              <label className={`authChoice ${type === "borrow" ? "isActive" : ""}`}>
                <input
                  type="radio"
                  name="accountType"
                  value="borrow"
                  checked={type === "borrow"}
                  onChange={() => setType("borrow")}
                />
                <span className="authChoice__body">
                  <span className="authChoice__title">Borrow for my business</span>
                  <span className="authChoice__text">Lorem ipsum dolor sit amet, consectetur.</span>
                </span>
                <span className="authChoice__mark" aria-hidden="true" />
              </label>

              <label className={`authChoice ${type === "invest" ? "isActive" : ""}`}>
                <input
                  type="radio"
                  name="accountType"
                  value="invest"
                  checked={type === "invest"}
                  onChange={() => setType("invest")}
                />
                <span className="authChoice__body">
                  <span className="authChoice__title">Invest as a funding partner</span>
                  <span className="authChoice__text">Lorem ipsum dolor sit amet, consectetur.</span>
                </span>
                <span className="authChoice__mark" aria-hidden="true" />
              </label>
            </fieldset>

            <div className="authForm__actions">
              <button className="authBtn" type="submit">
                Continue
              </button>
              <a className="authBtn authBtn--outline" href="/login">
                I already have an account
              </a>
            </div>

            <p className="authForm__fine">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. By continuing you agree to{" "}
              <a className="auth__link" href="/terms">
                Terms
              </a>{" "}
              and{" "}
              <a className="auth__link" href="/privacy">
                Privacy
              </a>
              .
            </p>
          </form>
        </div>
      </section>
    </main>
  );
};
