import React, { useMemo } from "react";
import "./styles/investor-portfolio.css";

export const InvestorPortfolio = () => {
  const portfolio = useMemo(
    () => ({
      totals: {
        invested: 85000,
        active: 3,
        pending: 1,
        completed: 2,
        expectedReturn: 11200,
      },
      items: [
        { id: "INV-2001", loanId: "LN-1003", borrower: "Lorem Farms", amount: 15000, status: "Active", term: "18 months", risk: "A" },
        { id: "INV-2002", loanId: "LN-1002", borrower: "Lorem Tech Studio", amount: 25000, status: "Active", term: "24 months", risk: "C" },
        { id: "INV-2003", loanId: "LN-1001", borrower: "Lorem Bakery", amount: 10000, status: "Completed", term: "12 months", risk: "B" },
        { id: "INV-2004", loanId: "LN-1005", borrower: "Lorem Manufacturing", amount: 20000, status: "Pending", term: "36 months", risk: "D" },
        { id: "INV-2005", loanId: "LN-1004", borrower: "Lorem Services Co", amount: 15000, status: "Completed", term: "6 months", risk: "B" },
      ],
    }),
    []
  );

  const money = (n) => `${n.toLocaleString()} ZAR`;

  return (
    <main className="core" aria-labelledby="ipf-title">
      <section className="core__hero">
        <div className="core__container">
          <div className="core__kicker">Investor</div>
          <h1 className="core__title" id="ipf-title">
            Portfolio
          </h1>
          <p className="core__lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Track active investments and performance.
          </p>

          <div className="coreGrid coreGrid--stats">
            <div className="coreStatCard">
              <div className="coreStatCard__label">Total invested</div>
              <div className="coreStatCard__value">{money(portfolio.totals.invested)}</div>
            </div>
            <div className="coreStatCard">
              <div className="coreStatCard__label">Active</div>
              <div className="coreStatCard__value">{portfolio.totals.active}</div>
            </div>
            <div className="coreStatCard">
              <div className="coreStatCard__label">Pending</div>
              <div className="coreStatCard__value">{portfolio.totals.pending}</div>
            </div>
            <div className="coreStatCard">
              <div className="coreStatCard__label">Completed</div>
              <div className="coreStatCard__value">{portfolio.totals.completed}</div>
            </div>
            <div className="coreStatCard coreStatCard--wide">
              <div className="coreStatCard__label">Expected returns (demo)</div>
              <div className="coreStatCard__value">{money(portfolio.totals.expectedReturn)}</div>
              <div className="coreMuted">Lorem ipsum dolor sit amet. Values are placeholders.</div>
            </div>
          </div>

          <div className="coreCard coreCard--span3">
            <div className="coreCard__top">
              <div>
                <div className="coreCard__eyebrow">Investments</div>
                <h2 className="coreCard__title">Your positions</h2>
                <p className="coreCard__text">Lorem ipsum dolor sit amet. Review status and open details.</p>
              </div>

              <div className="coreActions__right">
                <a className="coreBtn coreBtn--outline" href="/investor/marketplace">
                  Browse marketplace
                </a>
                <a className="coreBtn" href="/messages">
                  Messages
                </a>
              </div>
            </div>

            <div className="coreTableWrap" role="region" aria-label="Portfolio table">
              <table className="coreTable">
                <thead>
                  <tr>
                    <th>Investment</th>
                    <th>Borrower</th>
                    <th>Risk</th>
                    <th>Term</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th></th>
                  </tr>
                </thead>

                <tbody>
                  {portfolio.items.map((it) => (
                    <tr key={it.id}>
                      <td>
                        <div className="coreRowTitle">
                          <strong>{it.id}</strong>
                          <span className="coreMuted">{it.loanId}</span>
                        </div>
                      </td>
                      <td>{it.borrower}</td>
                      <td>
                        <span className={`coreBadge coreBadge--risk${it.risk}`}>Risk {it.risk}</span>
                      </td>
                      <td>{it.term}</td>
                      <td>{money(it.amount)}</td>
                      <td>
                        <span className={`coreStatus coreStatus--${it.status.toLowerCase()}`}>{it.status}</span>
                      </td>
                      <td className="coreTable__right">
                        <a className="coreBtn coreBtn--ghost coreBtn--small" href="/investor/commitment">
                          View
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="coreHint">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Detailed schedules will be added later.
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
