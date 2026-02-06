import React, { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./styles/navigation.css";

// IMPORT THE LOGO PROPERLY
import logo from "../../Assets/official_logo.png";

export const Navigation = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const closeMenu = () => setOpen(false);

  const links = useMemo(
    () => [
      { to: "/", label: "Home" },
      { to: "/#community", label: "Community" },
      { to: "/#about", label: "About" },
      { to: "/#services", label: "Services" },
      { to: "/#contact", label: "Contact" },
    ],
    [],
  );

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };

    const onScroll = () => setScrolled(window.scrollY > 10);

    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    closeMenu();
  }, [location.pathname, location.hash]);

  return (
    <nav
      className={`nav ${scrolled ? "isScrolled" : ""}`}
      id="menu"
      aria-label="Primary"
    >
      <div className="nav__container">
        <Link className="nav__brand" to="/" onClick={closeMenu}>
          <div className="nav__logo-container">
            <img
              src={logo}
              alt="The Capital Community Logo"
              className="nav__logo"
            />
          </div>

          <div className="nav__brandText">
            <div className="nav__brandTitle">The Capital Community</div>
            <small className="nav__brandSub">
              By Letsogankwe Business Solutions
            </small>
          </div>
        </Link>

        <button
          className={`nav__toggle ${open ? "isOpen" : ""}`}
          type="button"
          aria-controls="nav-links"
          aria-expanded={open}
          aria-label="Toggle navigation"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="nav__bar" />
          <span className="nav__bar" />
          <span className="nav__bar" />
        </button>

        <div className={`nav__links ${open ? "isOpen" : ""}`} id="nav-links">
          <ul className="nav__list">
            {links.map((l) => (
              <li className="nav__item" key={l.to}>
                <Link className="nav__link" to={l.to} onClick={closeMenu}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="nav__cta">
            <Link className="nav__button" to="/auth-selection" onClick={closeMenu}>
              Apply For Free
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
