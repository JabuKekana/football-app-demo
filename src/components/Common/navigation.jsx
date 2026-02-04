import React, { useEffect, useState } from "react";
import "./styles/navigation.css";

export const Navigation = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top nav-wrap">
      <div className="container nav-inner">
        <a className="navbar-brand page-scroll brand" href="#page-top" onClick={closeMenu}>
          <div className="brand-text">
            <div className="brand-title">The Capital Community</div>
            <small className="brand-sub">By Letsogankwe Business Solutions</small>
          </div>
        </a>

        <button
          type="button"
          className={`navbar-toggle ${open ? "" : "collapsed"} nav-toggle`}
          aria-controls="nav-links"
          aria-expanded={open}
          aria-label="Toggle navigation"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>

        <div className={`nav-collapse ${open ? "open" : ""}`} id="nav-links">
          <ul className="nav navbar-nav navbar-right nav-links">
            <li><a href="#features" className="page-scroll" onClick={closeMenu}>Community</a></li>
            <li><a href="#about" className="page-scroll" onClick={closeMenu}>About</a></li>
            <li><a href="#services" className="page-scroll" onClick={closeMenu}>Services</a></li>
            <li><a href="#portfolio" className="page-scroll" onClick={closeMenu}>Gallery</a></li>
            <li><a href="#testimonials" className="page-scroll" onClick={closeMenu}>Testimonials</a></li>
            <li><a href="#contact" className="page-scroll" onClick={closeMenu}>Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
