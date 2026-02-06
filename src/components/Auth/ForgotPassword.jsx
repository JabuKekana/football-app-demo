import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./styles/forgot-password.css";

export const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState({ type: "idle", text: "" });
  const [sending, setSending] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (sending) return;

    setSending(true);
    setStatus({ type: "info", text: "Sending reset link (demo)..." });

    setTimeout(() => {
      setSending(false);
      setStatus({ type: "success", text: "Reset link sent. Redirecting to set a new password..." });
      setTimeout(() => {
        navigate("/reset-password", { state: { email } });
      }, 650);
    }, 900);
  };

  return (
    <main className="fp" aria-labelledby="fp-title">
      <section className="fp__hero">
        <div className="fp__container">
          <div className="fp__kicker">Account</div>

          <h1 className="fp__title" id="fp-title">
            Forgot Password
          </h1>

          <p className="fp__lead">
            Enter your email and we will send a reset link. This is a demo flow, so it proceeds even without a backend.
          </p>

          <div className="fpCard">
            <form className="fpForm" onSubmit={submit}>
              <label className="fpField" htmlFor="fp-email">
                <span className="fpLabel">Email</span>
                <input
                  id="fp-email"
                  className="fpInput"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  autoComplete="email"
                  inputMode="email"
                />
              </label>

              <button className="fpBtn" type="submit" disabled={sending}>
                {sending ? "Sending..." : "Send reset link"}
              </button>

              {status.type !== "idle" ? (
                <p
                  className={[
                    "fpStatus",
                    status.type === "success" ? "isSuccess" : "",
                    status.type === "error" ? "isError" : "",
                    status.type === "info" ? "isInfo" : "",
                  ].join(" ")}
                  role="status"
                  aria-live="polite"
                >
                  {status.text}
                </p>
              ) : null}

              <div className="fpLinks">
                <button className="fpLinkBtn" type="button" onClick={() => navigate(-1)}>
                  Back
                </button>
                <span className="fpDot" aria-hidden="true" />
                <Link className="fpLink" to="/login">
                  Return to login
                </Link>
              </div>
            </form>

            <aside className="fpSide" aria-label="Security info">
              <div className="fpSide__title">Secure by design</div>
              <div className="fpSide__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Password resets will be verified with email tokens later.
              </div>
              <div className="fpSide__pill">
                <i className="fa fa-shield" aria-hidden="true"></i>
                <span>Fintech-ready flow</span>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
};
