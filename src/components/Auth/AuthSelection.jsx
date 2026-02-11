import React, { useState } from "react";
import "./styles/auth-selection.css";

export const AuthSelection = () => {
  const [selectedType, setSelectedType] = useState(null);

  const handleCardClick = (type) => {
    setSelectedType(type);
  };

  const handleContinue = () => {
    if (selectedType === 'borrow') {
      window.location.href = '/register/borrower';
    } else if (selectedType === 'invest') {
      window.location.href = '/register/investor';
    }
  };

  const handleLogin = () => {
    window.location.href = '/login';
  };

  return (
    <main className="authSelection" aria-labelledby="auth-title">
      <section className="authSelection__hero">
        <div className="authSelection__container">
          <div className="authSelection__welcome">
            <div className="authSelection__kicker">Access</div>
            <h1 className="authSelection__title" id="auth-title">
              Welcome to The Capital Community
            </h1>
            <p className="authSelection__lead">
              Join our platform to either secure funding for your business or invest 
              in promising ventures. Choose your path to get started.
            </p>
          </div>

          <div className="authSelection__cards">
            <div 
              className={`authSelection__card ${selectedType === 'borrow' ? 'isSelected' : ''}`}
              onClick={() => handleCardClick('borrow')}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && handleCardClick('borrow')}
            >
              <div className="authSelection__cardIcon" aria-hidden="true">
                <i className="fa fa-briefcase"></i>
              </div>
              <div className="authSelection__cardContent">
                <h2 className="authSelection__cardTitle">Apply for a Loan</h2>
                <p className="authSelection__cardText">
                  Get funding for your business with competitive rates and flexible 
                  repayment terms. Perfect for startups and growing businesses.
                </p>
              </div>
              <div className="authSelection__cardIndicator">
                {selectedType === 'borrow' && <span className="authSelection__check">✓</span>}
              </div>
            </div>

            <div 
              className={`authSelection__card authSelection__card--alt ${selectedType === 'invest' ? 'isSelected' : ''}`}
              onClick={() => handleCardClick('invest')}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && handleCardClick('invest')}
            >
              <div className="authSelection__cardIcon" aria-hidden="true">
                <i className="fa fa-line-chart"></i>
              </div>
              <div className="authSelection__cardContent">
                <h2 className="authSelection__cardTitle">Become an Investor</h2>
                <p className="authSelection__cardText">
                  Invest in vetted business opportunities and earn competitive returns. 
                  Diversify your portfolio with carefully selected ventures.
                </p>
              </div>
              <div className="authSelection__cardIndicator">
                {selectedType === 'invest' && <span className="authSelection__check">✓</span>}
              </div>
            </div>
          </div>

          {selectedType && (
            <div className="authSelection__actions">
              <div className="authSelection__selectedInfo">
                <p className="authSelection__selectedText">
                  You've selected: <strong>{selectedType === 'borrow' ? 'Loan Application' : 'Investor Registration'}</strong>
                </p>
              </div>
              
              <div className="authSelection__buttons">
                <button 
                  className="authSelection__button authSelection__button--primary"
                  onClick={handleContinue}
                >
                  Continue to {selectedType === 'borrow' ? 'Loan Application' : 'Investor Registration'}
                </button>
                
                <button 
                  className="authSelection__button authSelection__button--secondary"
                  onClick={() => setSelectedType(null)}
                >
                  Choose Different Option
                </button>
              </div>
            </div>
          )}

          <div className="authSelection__footer">
            <div className="authSelection__loginSection">
              <span className="authSelection__muted">Already have an account?</span>
              <button 
                className="authSelection__loginButton"
                onClick={handleLogin}
              >
                Login Here
              </button>
            </div>
            
            <p className="authSelection__legal">
              By continuing, you agree to our{' '}
              <a href="/terms" className="authSelection__link">Terms of Service</a> and{' '}
              <a href="/privacy" className="authSelection__link">Privacy Policy</a>.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};