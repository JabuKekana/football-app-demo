// pages/Auth/Login.jsx
import React, { useMemo, useState } from "react";
import "./styles/auth-pages.css";

export const Login = () => {
  const [mode, setMode] = useState("login"); // login | forgot | reset
  const [form, setForm] = useState({
    email: "",
    password: "",
    remember: true,
    newPassword: "",
    confirmNewPassword: "",
  });

  const title = useMemo(() => {
    if (mode === "forgot") return "Password recovery";
    if (mode === "reset") return "Set a new password";
    return "Login";
  }, [mode]);

  const set = (key) => (e) => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setForm((p) => ({ ...p, [key]: value }));
  };

  const submitLogin = (e) => {
    e.preventDefault();
    window.location.href = "/dashboard";
  };

  const submitForgot = (e) => {
    e.preventDefault();
    setMode("reset");
  };

  const submitReset = (e) => {
    e.preventDefault();
    window.location.href = "/dashboard";
  };

  return (
    <main className="auth" aria-labelledby="login-title">
      <section className="auth__hero">
        <div className="auth__container">
          <div className="auth__kicker">Account</div>
          <h1 className="auth__title" id="login-title">
            {title}
          </h1>
          <p className="auth__lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. This is a frontend demo, so you can proceed without real details.
          </p>

          {mode === "login" ? (
            <form className="authForm" onSubmit={submitLogin}>
              <div className="authForm__grid authForm__grid--single">
                <div className="authField">
                  <label className="authLabel" htmlFor="l-email">
                    Email address
                  </label>
                  <input
                    className="authInput"
                    id="l-email"
                    value={form.email}
                    onChange={set("email")}
                    placeholder="you@example.com"
                    inputMode="email"
                  />
                </div>

                <div className="authField">
                  <label className="authLabel" htmlFor="l-pass">
                    Password
                  </label>
                  <input
                    className="authInput"
                    id="l-pass"
                    type="password"
                    value={form.password}
                    onChange={set("password")}
                    placeholder="Lorem password"
                  />
                </div>

                <div className="authRow">
                  <label className="authCheck authCheck--inline">
                    <input type="checkbox" checked={form.remember} onChange={set("remember")} />
                    <span>Remember me</span>
                  </label>

                  <button className="authLinkBtn" type="button" onClick={() => setMode("forgot")}>
                    Forgot password?
                  </button>
                </div>
              </div>

              <div className="authForm__actions">
                <button className="authBtn" type="submit">
                  Login
                </button>
                <a className="authBtn authBtn--outline" href="/auth/account-type">
                  Create an account
                </a>
              </div>
            </form>
          ) : null}

          {mode === "forgot" ? (
            <form className="authForm" onSubmit={submitForgot}>
              <div className="authForm__grid authForm__grid--single">
                <div className="authField">
                  <label className="authLabel" htmlFor="f-email">
                    Email address
                  </label>
                  <input
                    className="authInput"
                    id="f-email"
                    value={form.email}
                    onChange={set("email")}
                    placeholder="you@example.com"
                    inputMode="email"
                  />
                  <div className="authHint">Lorem: we will send a reset link (demo proceeds instantly).</div>
                </div>
              </div>

              <div className="authForm__actions">
                <button className="authBtn" type="submit">
                  Continue
                </button>
                <button className="authBtn authBtn--outline" type="button" onClick={() => setMode("login")}>
                  Back to login
                </button>
              </div>
            </form>
          ) : null}

          {mode === "reset" ? (
            <form className="authForm" onSubmit={submitReset}>
              <div className="authForm__grid authForm__grid--single">
                <div className="authField">
                  <label className="authLabel" htmlFor="r-pass">
                    New password
                  </label>
                  <input
                    className="authInput"
                    id="r-pass"
                    type="password"
                    value={form.newPassword}
                    onChange={set("newPassword")}
                    placeholder="New password"
                  />
                </div>

                <div className="authField">
                  <label className="authLabel" htmlFor="r-pass2">
                    Confirm new password
                  </label>
                  <input
                    className="authInput"
                    id="r-pass2"
                    type="password"
                    value={form.confirmNewPassword}
                    onChange={set("confirmNewPassword")}
                    placeholder="Confirm"
                  />
                </div>
              </div>

              <div className="authForm__actions">
                <button className="authBtn" type="submit">
                  Save password
                </button>
                <button className="authBtn authBtn--outline" type="button" onClick={() => setMode("login")}>
                  Back to login
                </button>
              </div>
            </form>
          ) : null}

          <div className="auth__row">
            <a className="auth__link" href="/">
              Return home
            </a>
            <span className="auth__dot" aria-hidden="true" />
            <a className="auth__link" href="/terms">
              Terms
            </a>
            <span className="auth__dot" aria-hidden="true" />
            <a className="auth__link" href="/privacy">
              Privacy
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};
