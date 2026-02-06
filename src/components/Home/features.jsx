import React from "react";
import "./styles/features.css";

export const Features = (props) => {
  const features = props?.data ?? [];

  return (
    <section className="features" id="features" aria-labelledby="features-title">
      <div className="features__container">
        <header className="features__header">
          <div className="features__kicker">Platform Capabilities</div>
          <h2 className="features__title" id="features-title">
            Features
          </h2>
          <p className="features__lead">
            Smart finance tools designed for speed, clarity, and confident decision making.
          </p>
        </header>

        <div className="features__grid">
          {features.length ? (
            features.map((d, i) => (
              <article className="features__card" key={`${d.title}-${i}`}>
                <div className="features__icon">
                  <i className={d.icon} aria-hidden="true"></i>
                </div>

                <h3 className="features__card-title">{d.title}</h3>
                <p className="features__card-text">{d.text}</p>

                <div className="features__card-accent" />
              </article>
            ))
          ) : (
            "Loading..."
          )}
        </div>
      </div>
    </section>
  );
};
