import React from "react";
import "./styles/about.css";

export const About = (props) => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-grid">
          {/* <div className="about-media">
            <img src="img/about.jpg" alt="About us" />
          </div> */}

          <div className="about-content">
            <div className="about-text">
              <h2>About Us</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>

              <h3>Why Choose Us?</h3>
              <div className="about-lists">
                <ul>
                  {props.data
                    ? props.data.Why.map((d, i) => <li key={`${d}-${i}`}>{d}</li>)
                    : "loading"}
                </ul>

                <ul>
                  {props.data
                    ? props.data.Why2.map((d, i) => <li key={`${d}-${i}`}>{d}</li>)
                    : "loading"}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
