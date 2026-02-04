import React from "react";
import "./styles/header.css";

export const Header = (props) => {
  return (
    <header id="header" className="site-header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="intro-text">
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                <a href="#features" className="btn btn-custom btn-lg page-scroll">
                  Apply For Free
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
