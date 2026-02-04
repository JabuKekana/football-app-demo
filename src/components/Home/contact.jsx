import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";
import "./styles/contact.css";

const initialState = { name: "", email: "", message: "" };

export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name: field, value } = e.target;
    setState((prev) => ({ ...prev, [field]: value }));
  };

  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_PUBLIC_KEY")
      .then(
        () => clearState(),
        (error) => console.log(error.text)
      );
  };

  return (
    <div>
      <section id="contact" className="contact">
        <div className="contact-container">
          <div className="contact-grid">
            <div className="contact-form">
              <div className="section-title">
                <h2>Get In Touch</h2>
                <p>
                  Please fill out the form below to send us an email and we will
                  get back to you as soon as possible.
                </p>
              </div>

              <form name="sentMessage" onSubmit={handleSubmit}>
                <div className="contact-fields">
                  <div className="form-group">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                      placeholder="Name"
                      required
                      value={name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      placeholder="Email"
                      required
                      value={email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows={4}
                    placeholder="Message"
                    required
                    value={message}
                    onChange={handleChange}
                  />
                </div>

                <button type="submit" className="btn btn-custom btn-lg contact-submit">
                  Send Message
                </button>
              </form>
            </div>

            <aside className="contact-info">
              <div className="contact-item">
                <h3>Contact Info</h3>
                <p className="contact-line">
                  <span className="contact-label">
                    <i className="fa fa-map-marker" aria-hidden="true"></i> Address
                  </span>
                  <span className="contact-value">
                    {props.data ? props.data.address : "loading"}
                  </span>
                </p>
              </div>

              <div className="contact-item">
                <p className="contact-line">
                  <span className="contact-label">
                    <i className="fa fa-envelope-o" aria-hidden="true"></i> Email
                  </span>
                  <span className="contact-value">
                    {props.data ? props.data.email : "loading"}
                  </span>
                </p>
              </div>
            </aside>
          </div>

          <div className="social">
            <ul>
              <li>
                <a href={props.data ? props.data.facebook : "/"} aria-label="Facebook">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href={props.data ? props.data.twitter : "/"} aria-label="Twitter">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href={props.data ? props.data.youtube : "/"} aria-label="YouTube">
                  <i className="fa fa-youtube" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <footer id="footer" className="footer">
        <div className="footer-inner">
          <p>&copy; 2025 Letsogankwe Business Solutions</p>
        </div>
      </footer>
    </div>
  );
};
