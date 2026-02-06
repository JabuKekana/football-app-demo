import React from "react";
import "../Auth/styles/auth-pages.css";

export const DashboardStub = ({ title = "Dashboard" }) => {
  return (
    <main className="auth" aria-labelledby="dash-title">
      <section className="auth__hero">
        <div className="auth__container">
          <div className="auth__kicker">Demo</div>
          <h1 className="auth__title" id="dash-title">
            {title}
          </h1>
          <p className="auth__lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. This is a placeholder page for the frontend demo.
          </p>
          <div className="authForm">
            <div className="authCardSmall">
              <div className="authCardSmall__title">Next steps</div>
              <ul className="authHint">
                <li>Lorem: connect routing</li>
                <li>Lorem: add backend later</li>
                <li>Lorem: build dashboards and forms</li>
              </ul>
              <div className="authForm__actions">
                <a className="authBtn" href="/">
                  Return home
                </a>
                <a className="authBtn authBtn--outline" href="/account-type">
                  Create another account
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
