// pages/Investor/InvestorMarketplace.jsx
import React, { useMemo, useState } from "react";
import "./styles/investor-marketplace.css";

export const InvestorMarketplace = () => {
  const loans = useMemo(
    () => [
      { id: "LN-1001", borrower: "Lorem Bakery", amount: 120000, purpose: "Equipment Purchase", term: "12 months", risk: "B", industry: "Retail", fundedPct: 42 },
      { id: "LN-1002", borrower: "Lorem Tech Studio", amount: 300000, purpose: "Expansion", term: "24 months", risk: "C", industry: "Technology", fundedPct: 68 },
      { id: "LN-1003", borrower: "Lorem Farms", amount: 180000, purpose: "Inventory", term: "18 months", risk: "A", industry: "Agriculture", fundedPct: 81 },
      { id: "LN-1004", borrower: "Lorem Services Co", amount: 90000, purpose: "Working Capital", term: "6 months", risk: "B", industry: "Services", fundedPct: 24 },
      { id: "LN-1005", borrower: "Lorem Manufacturing", amount: 450000, purpose: "R&D", term: "36 months", risk: "D", industry: "Manufacturing", fundedPct: 15 },
    ],
    []
  );

  const [filters, setFilters] = useState({
    risk: "All",
    industry: "All",
    term: "All",
    search: "",
  });

  const set = (key) => (e) => setFilters((p) => ({ ...p, [key]: e.target.value }));

  const filtered = useMemo(() => {
    const s = filters.search.trim().toLowerCase();
    return loans.filter((l) => {
      const okRisk = filters.risk === "All" || l.risk === filters.risk;
      const okInd = filters.industry === "All" || l.industry === filters.industry;
      const okTerm = filters.term === "All" || l.term === filters.term;
      const okSearch = !s || `${l.id} ${l.borrower} ${l.purpose}`.toLowerCase().includes(s);
      return okRisk && okInd && okTerm && okSearch;
    });
  }, [filters, loans]);

  return (
    <main className="core" aria-labelledby="im-title">
      <section className="core__hero">
        <div className="core__container">
          <div className="core__kicker">Investor</div>
          <h1 className="core__title" id="im-title">
            Marketplace
          </h1>
          <p className="core__lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Browse opportunities and invest in minutes.
          </p>

          <div className="coreCard coreCard--span3">
            <div className="coreFilters">
              <div className="coreSearch">
                <i className="fa fa-search" aria-hidden="true"></i>
                <input
                  className="coreSearch__input"
                  value={filters.search}
                  onChange={set("search")}
                  placeholder="Search by borrower, purpose, or loan id..."
                  aria-label="Search loans"
                />
              </div>

              <select className="coreSelect" value={filters.risk} onChange={set("risk")} aria-label="Filter by risk">
                {["All", "A", "B", "C", "D"].map((v) => (
                  <option key={v} value={v}>
                    Risk {v}
                  </option>
                ))}
              </select>

              <select className="coreSelect" value={filters.industry} onChange={set("industry")} aria-label="Filter by industry">
                {["All", "Retail", "Technology", "Agriculture", "Services", "Manufacturing"].map((v) => (
                  <option key={v} value={v}>
                    {v}
                  </option>
                ))}
              </select>

              <select className="coreSelect" value={filters.term} onChange={set("term")} aria-label="Filter by term">
                {["All", "6 months", "12 months", "18 months", "24 months", "36 months"].map((v) => (
                  <option key={v} value={v}>
                    {v}
                  </option>
                ))}
              </select>

              <a className="coreBtn coreBtn--outline" href="/investor/profile">
                Update preferences
              </a>
            </div>
          </div>

          <div className="coreGrid coreGrid--cards">
            {filtered.map((l) => (
              <article className="coreLoanCard" key={l.id} aria-label={`Loan ${l.id}`}>
                <div className="coreLoanCard__top">
                  <div className="coreLoanCard__meta">
                    <div className="coreBadge">Risk {l.risk}</div>
                    <div className="corePill corePill--soft">{l.industry}</div>
                  </div>

                  <a className="coreLoanCard__link" href="/investor/commitment" aria-label={`Invest in ${l.id}`}>
                    Invest <span aria-hidden="true">→</span>
                  </a>
                </div>

                <h2 className="coreLoanCard__title">{l.borrower}</h2>
                <p className="coreLoanCard__text">
                  {l.purpose} • {l.term}
                </p>

                <div className="coreLoanCard__stats">
                  <div className="coreStat">
                    <div className="coreStat__label">Amount</div>
                    <div className="coreStat__value">{l.amount.toLocaleString()} ZAR</div>
                  </div>
                  <div className="coreStat">
                    <div className="coreStat__label">Funding</div>
                    <div className="coreStat__value">{l.fundedPct}%</div>
                  </div>
                </div>

                <div className="coreProgress coreProgress--tight">
                  <div className="coreProgress__bar" role="progressbar" aria-valuenow={l.fundedPct} aria-valuemin={0} aria-valuemax={100}>
                    <div className="coreProgress__fill" style={{ width: `${l.fundedPct}%` }} />
                  </div>
                </div>

                <div className="coreLoanCard__bottom">
                  <a className="coreBtn coreBtn--ghost" href="/messages">
                    Ask a question
                  </a>
                  <a className="coreBtn" href="/investor/commitment">
                    Invest now
                  </a>
                </div>
              </article>
            ))}

            {filtered.length === 0 ? (
              <div className="coreCard coreCard--span3">
                <h2 className="coreCard__title">No results</h2>
                <p className="coreCard__text">Lorem ipsum dolor sit amet. Try adjusting filters.</p>
              </div>
            ) : null}
          </div>
        </div>
      </section>
    </main>
  );
};
