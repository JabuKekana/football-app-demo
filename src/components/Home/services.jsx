import React from "react";
import "./styles/services.css";

export const Services = (props) => {
  const services = props?.data ?? [];

  return (
    <section className="services" id="services" aria-labelledby="services-title">
      <div className="services__container">
        <header className="services__header">
          <div className="services__kicker">What we do</div>
          <h2 className="services__title" id="services-title">
            Our Services
          </h2>
          <p className="services__lead">
            Modern financial services that help you move faster, stay compliant, and make smarter decisions.
          </p>
        </header>

        <div className="services__grid">
          {services.length ? (
            services.map((d, i) => (
              <article className="services__card" key={`${d.name}-${i}`}>
                <div className="services__icon">
                  <i className={d.icon} aria-hidden="true"></i>
                </div>

                <div className="services__body">
                  <h3 className="services__card-title">{d.name}</h3>
                  <p className="services__card-text">{d.text}</p>
                </div>

                <span className="services__corner" aria-hidden="true" />
              </article>
            ))
          ) : (
            "loading"
          )}
        </div>
      </div>
    </section>
  );
};
