import React from "react";
import "./styles/header.css";

export const Header = (props) => {
  const title = props?.data?.title ?? "Loading";
  const paragraph = props?.data?.paragraph ?? "Loading";

  return (
    <header className="header" id="header" aria-label="Intro section">
      <div className="header__bg" />
      <div className="header__container">
        <div className="header__content">
          <div className="header__badge" aria-hidden="true">
            Welcome
          </div>

          <h1 className="header__title">
            {title}
            <span className="header__title-accent" />
          </h1>

          <p className="header__subtitle">{paragraph}</p>

          <div className="header__cta">
            <a className="header__button" href="/auth-selectio">
              Apply For Free
            </a>
            <a className="header__link" href="#about">
              Learn more
            </a>
          </div>

          <div className="header__stats" aria-label="Key highlights">
            <div className="header__stat">
              <span className="header__stat-number">Fast</span>
              <span className="header__stat-label">Onboarding</span>
            </div>
            <div className="header__stat">
              <span className="header__stat-number">Secure</span>
              <span className="header__stat-label">Transactions</span>
            </div>
            <div className="header__stat">
              <span className="header__stat-number">Smart</span>
              <span className="header__stat-label">Insights</span>
            </div>
          </div>
        </div>

        <div className="header__visual" aria-hidden="true">
          <div className="header__card header__card--top">
            <div className="header__card-row">
              <span className="header__dot" />
              <span className="header__dot" />
              <span className="header__dot" />
            </div>
            <div className="header__card-title">Cash Flow</div>
            <div className="header__spark" />
            <div className="header__card-footer">
              <span>Today</span>
              <span className="header__pill">+12.4%</span>
            </div>
          </div>

          <div className="header__card header__card--bottom">
            <div className="header__card-title">Portfolio Snapshot</div>
            <div className="header__bars">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <div className="header__card-footer">
              <span>Updated</span>
              <span className="header__pill header__pill--outline">Live</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
