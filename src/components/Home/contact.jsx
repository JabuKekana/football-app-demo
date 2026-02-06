import React, { useMemo, useState } from "react";
import emailjs from "emailjs-com";
import "./styles/contact.css";

const initialState = { name: "", email: "", message: "" };

export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);
  const [status, setStatus] = useState({ type: "idle", text: "" });
  const [isSending, setIsSending] = useState(false);

  const contact = useMemo(() => {
    const d = props?.data ?? {};
    return {
      address: d.address ?? "loading",
      email: d.email ?? "loading",
      facebook: d.facebook ?? "/",
      twitter: d.twitter ?? "/",
      youtube: d.youtube ?? "/",
    };
  }, [props?.data]);

  const handleChange = (e) => {
    const { name: field, value } = e.target;
    setState((prev) => ({ ...prev, [field]: value }));
  };

  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSending) return;

    setIsSending(true);
    setStatus({ type: "info", text: "Sending your message..." });

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        e.target,
        "YOUR_PUBLIC_KEY",
      )
      .then(() => {
        clearState();
        setStatus({
          type: "success",
          text: "Message sent successfully. We will get back to you soon.",
        });
      })
      .catch(() => {
        setStatus({
          type: "error",
          text: "Something went wrong. Please try again in a moment.",
        });
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <div className="contactWrap">
      <section className="contact" id="contact" aria-labelledby="contact-title">
        <div className="contact__container">
          <header className="contact__header">
            <div className="contact__kicker">Contact</div>
            <h2 className="contact__title" id="contact-title">
              Get In Touch
            </h2>
            <p className="contact__lead">
              Fill out the form and our team will reply as soon as possible.
            </p>
          </header>

          <div className="contact__grid">
            <div className="contact__panel">
              <form
                className="contact__form"
                name="sentMessage"
                onSubmit={handleSubmit}
              >
                <div className="contact__row">
                  <label className="contact__field">
                    <span className="contact__label">Name</span>
                    <input
                      className="contact__input"
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your name"
                      required
                      value={name}
                      onChange={handleChange}
                      autoComplete="name"
                    />
                  </label>

                  <label className="contact__field">
                    <span className="contact__label">Email</span>
                    <input
                      className="contact__input"
                      type="email"
                      id="email"
                      name="email"
                      placeholder="you@example.com"
                      required
                      value={email}
                      onChange={handleChange}
                      autoComplete="email"
                      inputMode="email"
                    />
                  </label>
                </div>

                <label className="contact__field">
                  <span className="contact__label">Message</span>
                  <textarea
                    className="contact__textarea"
                    name="message"
                    id="message"
                    rows={5}
                    placeholder="Tell us what you need help with..."
                    required
                    value={message}
                    onChange={handleChange}
                  />
                </label>

                <div className="contact__actions">
                  <button
                    className="contact__button"
                    type="submit"
                    disabled={isSending}
                  >
                    {isSending ? "Sending..." : "Send Message"}
                  </button>

                  {status.type !== "idle" ? (
                    <p
                      className={[
                        "contact__status",
                        status.type === "success" ? "isSuccess" : "",
                        status.type === "error" ? "isError" : "",
                        status.type === "info" ? "isInfo" : "",
                      ].join(" ")}
                      role="status"
                      aria-live="polite"
                    >
                      {status.text}
                    </p>
                  ) : null}
                </div>
              </form>
            </div>

            <aside className="contact__side" aria-label="Contact information">
              <div className="contact__infoCard">
                <h3 className="contact__infoTitle">Contact Info</h3>

                <div className="contact__infoItem">
                  <div className="contact__infoIcon" aria-hidden="true">
                    <i className="fa fa-map-marker"></i>
                  </div>
                  <div className="contact__infoText">
                    <div className="contact__infoLabel">Address</div>
                    <div className="contact__infoValue">{contact.address}</div>
                  </div>
                </div>

                <div className="contact__infoItem">
                  <div className="contact__infoIcon" aria-hidden="true">
                    <i className="fa fa-envelope-o"></i>
                  </div>
                  <div className="contact__infoText">
                    <div className="contact__infoLabel">Email</div>
                    <a
                      className="contact__infoValue contact__emailLink"
                      href={`mailto:${contact.email}`}
                    >
                      {contact.email}
                    </a>
                  </div>
                </div>

                <div className="contact__social">
                  <a
                    className="contact__socialLink"
                    href={contact.facebook}
                    aria-label="Facebook"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                  </a>
                  <a
                    className="contact__socialLink"
                    href={contact.twitter}
                    aria-label="Twitter"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </a>
                  <a
                    className="contact__socialLink"
                    href={contact.youtube}
                    aria-label="YouTube"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa fa-youtube" aria-hidden="true"></i>
                  </a>
                </div>
              </div>

              <div className="contact__note" aria-hidden="true">
                <div className="contact__noteTitle">Secure by design</div>
                <div className="contact__noteText">
                  We never share your details. Messages are used only to respond
                  to your request.
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <footer className="footer" id="footer">
        <div className="footer__container">
          <p className="footer__text">
            &copy; 2025 Letsogankwe Business Solutions
            <span className="footer__sep" aria-hidden="true">
              •
            </span>
            <a className="footer__link" href="/faq">
              FAQ
            </a>
            <span className="footer__sep" aria-hidden="true">
              •
            </span>
            <a className="footer__link" href="/terms">
              Terms
            </a>
            <span className="footer__sep" aria-hidden="true">
              •
            </span>
            <a className="footer__link" href="/privacy">
              Privacy
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};
