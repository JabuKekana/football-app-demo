import React from "react";
import "./styles/about.css";

export const About = (props) => {
  const paragraph = props?.data?.paragraph ?? "loading...";
  const why = props?.data?.Why ?? [];
  const why2 = props?.data?.Why2 ?? [];

  return (
    <section className="about" id="about" aria-labelledby="about-title">
      <div className="about__container">
        <div className="about__grid">
          <aside className="about__panel" aria-hidden="true">
            <div className="about__panel-inner">
              <div className="about__panel-badge">Built for modern finance</div>

              <div className="about__panel-card">
                <div className="about__panel-card-title">Trust & Security</div>
                <div className="about__panel-meter">
                  <span className="about__panel-meter-fill" />
                </div>
                <div className="about__panel-card-foot">
                  <span>Risk controls</span>
                  <span className="about__panel-pill">Enabled</span>
                </div>
              </div>

              <div className="about__panel-card about__panel-card--alt">
                <div className="about__panel-card-title">Insights</div>
                <div className="about__panel-chips">
                  <span>Cashflow</span>
                  <span>Budgets</span>
                  <span>Goals</span>
                </div>
                <div className="about__panel-card-foot">
                  <span>Updated</span>
                  <span className="about__panel-pill about__panel-pill--outline">
                    Live
                  </span>
                </div>
              </div>
            </div>
          </aside>

          <div className="about__content">
            <header className="about__header">
              <div className="about__kicker">About</div>
              <h2 className="about__title" id="about-title">
                About Us
              </h2>
              <p className="about__lead">{paragraph}</p>
            </header>

            <div className="about__why">
              <h3 className="about__subtitle">Why Choose Us?</h3>

              <div className="about__lists" role="list">
                <ul className="about__list" aria-label="Reasons list one">
                  {why.length
                    ? why.map((d, i) => (
                        <li className="about__item" key={`${d}-${i}`}>
                          <span className="about__check" aria-hidden="true" />
                          <span className="about__item-text">{d}</span>
                        </li>
                      ))
                    : "loading"}
                </ul>

                <ul className="about__list" aria-label="Reasons list two">
                  {why2.length
                    ? why2.map((d, i) => (
                        <li className="about__item" key={`${d}-${i}`}>
                          <span className="about__check" aria-hidden="true" />
                          <span className="about__item-text">{d}</span>
                        </li>
                      ))
                    : "loading"}
                </ul>
              </div>
            </div>

            <div className="about__cta">
              <a className="about__button" href="#features">
                Explore Features
              </a>
              <a className="about__link" href="#contact">
                Talk to us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
