import React, { useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./styles/dev-pages.css";

export const DevPages = () => {
  const navigate = useNavigate();

  const groups = useMemo(
    () => [
      {
        title: "Home",
        items: [{ label: "Landing page", to: "/" }],
      },
      {
        title: "Information Pages",
        items: [
          { label: "FAQ", to: "/faq" },
          { label: "Terms of Service", to: "/terms" },
          { label: "Privacy Policy", to: "/privacy" },
        ],
      },
      {
        title: "Auth Flow",
        items: [
          { label: "Auth Selection", to: "/auth/selection" },
          { label: "Borrower Registration", to: "/register/borrower" },
          { label: "Investor Registration", to: "/register/investor" },
          { label: "Login", to: "/login" },
          { label: "Forgot Password", to: "/forgot-password" },
          { label: "Reset Password", to: "/reset-password" },
        ],
      },
      {
        title: "Borrower",
        items: [
          { label: "Borrower Dashboard", to: "/borrower/dashboard" },
          { label: "Borrower Profile", to: "/borrower/profile" },
          { label: "Loan Application", to: "/borrower/loan-application" },
        ],
      },
      {
        title: "Investor",
        items: [
          { label: "Investor Marketplace", to: "/investor/marketplace" },
          { label: "Investor Portfolio", to: "/investor/portfolio" },
          { label: "Investor Profile", to: "/investor/profile" },
          { label: "Investment Commitment", to: "/investor/commitment" },
        ],
      },
      {
        title: "Platform Operations",
        items: [
          { label: "Messaging Center", to: "/messages" },
          { label: "KYC Verification", to: "/kyc" },
          { label: "Admin Review Loan", to: "/admin/review-loan" },
          { label: "Admin User Management", to: "/admin/users" },
          { label: "Admin Platform Settings", to: "/admin/settings" },
        ],
      },
    ],
    []
  );

  return (
    <main className="dev" aria-labelledby="dev-title">
      <section className="dev__hero">
        <div className="dev__container">
          <div className="dev__kicker">Development</div>
          <h1 className="dev__title" id="dev-title">
            Page Index
          </h1>
          <p className="dev__lead">
            Quick access to everything built so far. This is a development-only hub for review.
          </p>

          <div className="dev__topActions">
            <button className="devBtn devBtn--outline" type="button" onClick={() => navigate(-1)}>
              Back
            </button>
            <Link className="devBtn" to="/">
              Go to Home
            </Link>
          </div>

          <div className="devGrid">
            {groups.map((g) => (
              <section className="devCard" key={g.title} aria-label={g.title}>
                <header className="devCard__header">
                  <h2 className="devCard__title">{g.title}</h2>
                  <div className="devCard__count">{g.items.length} pages</div>
                </header>

                <div className="devList" role="list">
                  {g.items.map((it) => (
                    <Link key={it.to} className="devListItem" to={it.to} role="listitem">
                      <span className="devListItem__label">{it.label}</span>
                      <span className="devListItem__path">{it.to}</span>
                      <span className="devListItem__arrow" aria-hidden="true">
                        →
                      </span>
                    </Link>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <div className="devNote">
            <div className="devNote__content">
              <strong>Note:</strong> This is a development-only tool for reviewing pages. It will not be available to the public.
              <div className="devNote__updates">
                <span className="devNote__badge">Recent Updates</span>
                <ul className="devNote__list">
                  <li>Merged "Auth Start" and "Account Type" into single "Auth Selection" page</li>
                  <li>Removed redundant "/account-type" page from auth flow</li>
                  <li>Streamlined user journey with one-step path selection</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};