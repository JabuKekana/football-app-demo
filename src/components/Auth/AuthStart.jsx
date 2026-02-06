// pages/Auth/AuthStart.jsx
import React from "react";
import "./styles/auth-pages.css";

export const AuthStart = () => {
  return (
    <main className="auth" aria-labelledby="auth-title">
      <section className="auth__hero">
        <div className="auth__container">
          <div className="auth__kicker">Access</div>
          <h1 className="auth__title" id="auth-title">
            Welcome to The Capital Community
          </h1>
          <p className="auth__lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Choose your path to continue.
          </p>

          <div className="auth__cards">
            <a className="authCard" href="/account-type?mode=borrow">
              <div className="authCard__icon" aria-hidden="true">
                <i className="fa fa-briefcase"></i>
              </div>
              <h2 className="authCard__title">Apply for a Loan</h2>
              <p className="authCard__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae lorem.
              </p>
              <span className="authCard__cta">
                Continue <span aria-hidden="true">→</span>
              </span>
            </a>

            <a className="authCard authCard--alt" href="/account-type?mode=invest">
              <div className="authCard__icon" aria-hidden="true">
                <i className="fa fa-line-chart"></i>
              </div>
              <h2 className="authCard__title">Become an Investor</h2>
              <p className="authCard__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et sem sed.
              </p>
              <span className="authCard__cta">
                Continue <span aria-hidden="true">→</span>
              </span>
            </a>
          </div>

          <div className="auth__row">
            <span className="auth__muted">Returning user?</span>
            <a className="auth__link" href="/login">
              Login
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};
