import React from "react";
import "./styles/legal-pages.css";

export const Terms = () => {
  return (
    <main className="legal" aria-labelledby="legal-title">
      <section className="legal__hero">
        <div className="legal__container">
          <div className="legal__kicker">Legal</div>
          <h1 className="legal__title" id="legal-title">
            Terms of Service
          </h1>
          <p className="legal__lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus
            error sit voluptatem accusantium doloremque laudantium.
          </p>

          <div className="legal__meta">
            <span className="legal__metaItem">
              <i className="fa fa-clock-o" aria-hidden="true"></i>
              <span>Last updated: Lorem 2025</span>
            </span>
            <span className="legal__metaItem">
              <i className="fa fa-file-text-o" aria-hidden="true"></i>
              <span>Version: Lorem-1.0</span>
            </span>
          </div>
        </div>
      </section>

      <section className="legal__section">
        <div className="legal__container">
          <div className="legal__layout">
            <aside className="legal__toc" aria-label="Terms table of contents">
              <div className="legal__tocCard">
                <div className="legal__tocTitle">On this page</div>
                <a className="legal__tocLink" href="#terms-1">
                  1. Lorem definitions
                </a>
                <a className="legal__tocLink" href="#terms-2">
                  2. Lorem eligibility
                </a>
                <a className="legal__tocLink" href="#terms-3">
                  3. Lorem accounts
                </a>
                <a className="legal__tocLink" href="#terms-4">
                  4. Lorem acceptable use
                </a>
                <a className="legal__tocLink" href="#terms-5">
                  5. Lorem payments
                </a>
                <a className="legal__tocLink" href="#terms-6">
                  6. Lorem disclaimers
                </a>
              </div>
            </aside>

            <article className="legal__article">
              <h2 className="legal__h2" id="terms-1">
                1. Lorem definitions
              </h2>
              <p className="legal__p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed
                cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
              </p>

              <h2 className="legal__h2" id="terms-2">
                2. Lorem eligibility
              </h2>
              <p className="legal__p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sagittis ipsum. Praesent mauris.
                Fusce nec tellus sed augue semper porta.
              </p>

              <h2 className="legal__h2" id="terms-3">
                3. Lorem accounts
              </h2>
              <p className="legal__p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris massa. Vestibulum lacinia arcu
                eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra.
              </p>
              <ul className="legal__list">
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                <li>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</li>
              </ul>

              <h2 className="legal__h2" id="terms-4">
                4. Lorem acceptable use
              </h2>
              <p className="legal__p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales ligula in libero. Sed
                dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh.
              </p>

              <h2 className="legal__h2" id="terms-5">
                5. Lorem payments
              </h2>
              <p className="legal__p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quam. In scelerisque sem at dolor.
                Maecenas mattis. Sed convallis tristique sem.
              </p>

              <h2 className="legal__h2" id="terms-6">
                6. Lorem disclaimers
              </h2>
              <p className="legal__p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quam. Etiam ultrices. Suspendisse
                in justo eu magna luctus suscipit. Sed lectus.
              </p>

              <div className="legal__card">
                <h3 className="legal__h3">Questions about these terms?</h3>
                <p className="legal__p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud.
                </p>
                <div className="legal__inlineBtns">
                  <a className="legal__btn" href="/faq">
                    Read FAQs
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
