import React, { useMemo, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./styles/reset-password.css";

export const ResetPassword = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const presetEmail = useMemo(() => location?.state?.email ?? "", [location?.state?.email]);

  const [form, setForm] = useState({
    email: presetEmail,
    password: "",
    confirm: "",
  });

  const [status, setStatus] = useState({ type: "idle", text: "" });
  const [saving, setSaving] = useState(false);

  const set = (key) => (e) => setForm((p) => ({ ...p, [key]: e.target.value }));

  const strength = useMemo(() => {
    const p = form.password;
    let score = 0;
    if (p.length >= 8) score += 1;
    if (/[A-Z]/.test(p)) score += 1;
    if (/[0-9]/.test(p)) score += 1;
    if (/[^A-Za-z0-9]/.test(p)) score += 1;

    const labels = ["Weak", "Fair", "Good", "Strong", "Very strong"];
    return { score, label: labels[score] };
  }, [form.password]);

  const submit = (e) => {
    e.preventDefault();
    if (saving) return;

    if (!form.password || !form.confirm) {
      setStatus({ type: "error", text: "Please enter and confirm your new password." });
      return;
    }

    if (form.password !== form.confirm) {
      setStatus({ type: "error", text: "Passwords do not match. Please try again." });
      return;
    }

    setSaving(true);
    setStatus({ type: "info", text: "Updating password (demo)..." });

    setTimeout(() => {
      setSaving(false);
      setStatus({ type: "success", text: "Password updated. Redirecting to login..." });
      setTimeout(() => {
        navigate("/login");
      }, 700);
    }, 900);
  };

  return (
    <main className="rp" aria-labelledby="rp-title">
      <section className="rp__hero">
        <div className="rp__container">
          <div className="rp__kicker">Account</div>

          <h1 className="rp__title" id="rp-title">
            Reset Password
          </h1>

          <p className="rp__lead">
            Set a new password for your account. This is a demo flow, so it proceeds without a token check for now.
          </p>

          <div className="rpCard">
            <form className="rpForm" onSubmit={submit}>
              <label className="rpField" htmlFor="rp-email">
                <span className="rpLabel">Email</span>
                <input
                  id="rp-email"
                  className="rpInput"
                  type="email"
                  value={form.email}
                  onChange={set("email")}
                  placeholder="you@example.com"
                  autoComplete="email"
                  inputMode="email"
                />
              </label>

              <label className="rpField" htmlFor="rp-pass">
                <span className="rpLabel">New password</span>
                <input
                  id="rp-pass"
                  className="rpInput"
                  type="password"
                  value={form.password}
                  onChange={set("password")}
                  placeholder="Create a strong password"
                  autoComplete="new-password"
                />
                <div className="rpStrength" aria-live="polite">
                  <span className="rpStrength__label">Strength</span>
                  <span className={`rpStrength__pill is${strength.score}`}>{strength.label}</span>
                </div>
              </label>

              <label className="rpField" htmlFor="rp-confirm">
                <span className="rpLabel">Confirm password</span>
                <input
                  id="rp-confirm"
                  className="rpInput"
                  type="password"
                  value={form.confirm}
                  onChange={set("confirm")}
                  placeholder="Re-type password"
                  autoComplete="new-password"
                />
              </label>

              <button className="rpBtn" type="submit" disabled={saving}>
                {saving ? "Saving..." : "Save new password"}
              </button>

              {status.type !== "idle" ? (
                <p
                  className={[
                    "rpStatus",
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

              <div className="rpLinks">
                <button className="rpLinkBtn" type="button" onClick={() => navigate(-1)}>
                  Back
                </button>
                <span className="rpDot" aria-hidden="true" />
                <Link className="rpLink" to="/login">
                  Return to login
                </Link>
              </div>
            </form>

            <aside className="rpSide" aria-label="Password tips">
              <div className="rpSide__title">Password tips</div>
              <ul className="rpSide__list">
                <li>Use at least 8 characters</li>
                <li>Add a number and a symbol</li>
                <li>Mix uppercase and lowercase</li>
                <li>Avoid common words</li>
              </ul>

              <div className="rpSide__note">
                Lorem ipsum dolor sit amet. Later, this page will validate a secure reset token.
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
};
