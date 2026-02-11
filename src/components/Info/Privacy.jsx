import React from "react";
import "./styles/legal-pages.css";

export const Privacy = () => {
  return (
    <main className="legal" aria-labelledby="legal-title">
      <section className="legal__hero">
        <div className="legal__container">
          <div className="legal__kicker">Legal</div>
          <h1 className="legal__title" id="legal-title">
            Privacy Policy
          </h1>
          <p className="legal__lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.
          </p>

          <div className="legal__meta">
            <span className="legal__metaItem">
              <i className="fa fa-shield" aria-hidden="true"></i>
              <span>Security: Lorem standard</span>
            </span>
            <span className="legal__metaItem">
              <i className="fa fa-clock-o" aria-hidden="true"></i>
              <span>Last updated: Lorem 2025</span>
            </span>
          </div>
        </div>
      </section>

      <section className="legal__section">
        <div className="legal__container">
          <div className="legal__layout">
            <aside className="legal__toc" aria-label="Privacy table of contents">
              <div className="legal__tocCard">
                <div className="legal__tocTitle">On this page</div>
                <a className="legal__tocLink" href="#privacy-1">
                  1. Lorem overview
                </a>
                <a className="legal__tocLink" href="#privacy-2">
                  2. Lorem data we collect
                </a>
                <a className="legal__tocLink" href="#privacy-3">
                  3. Lorem how we use data
                </a>
                <a className="legal__tocLink" href="#privacy-4">
                  4. Lorem sharing
                </a>
                <a className="legal__tocLink" href="#privacy-5">
                  5. Lorem retention
                </a>
                <a className="legal__tocLink" href="#privacy-6">
                  6. Lorem rights
                </a>
              </div>
            </aside>

            <article className="legal__article">
              <h2 className="legal__h2" id="privacy-1">
                1. Lorem overview
              </h2>
              <p className="legal__p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua. Ut enim ad minim veniam.
              </p>

              <h2 className="legal__h2" id="privacy-2">
                2. Lorem data we collect
              </h2>
              <p className="legal__p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique
                senectus et netus et malesuada fames ac turpis egestas.
              </p>
              <ul className="legal__list">
                <li>Lorem ipsum: name, email, and message content.</li>
                <li>Lorem ipsum: usage data and device information.</li>
                <li>Lorem ipsum: cookies and similar technologies.</li>
              </ul>

              <h2 className="legal__h2" id="privacy-3">
                3. Lorem how we use data
              </h2>
              <p className="legal__p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed
                cursus ante dapibus diam.
              </p>

              <h2 className="legal__h2" id="privacy-4">
                4. Lorem sharing
              </h2>
              <p className="legal__p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sagittis ipsum. Praesent mauris.
                Fusce nec tellus sed augue semper porta.
              </p>

              <h2 className="legal__h2" id="privacy-5">
                5. Lorem retention
              </h2>
              <p className="legal__p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ipsum. Nulla metus metus, ullamcorper
                vel, tincidunt sed, euismod in, nibh.
              </p>

              <h2 className="legal__h2" id="privacy-6">
                6. Lorem rights
              </h2>
              <p className="legal__p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque volutpat condimentum velit. Class
                aptent taciti sociosqu ad litora torquent per conubia nostra.
              </p>

              <div className="legal__card">
                <h3 className="legal__h3">Contact for privacy questions</h3>
                <p className="legal__p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis.
                </p>
                <div className="legal__inlineBtns">
                  <a className="legal__btn" href="/terms">
                    Read Terms
                  </a>
                  <a className="legal__btn legal__btn--outline" href="#contact">
                    Contact
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
};
