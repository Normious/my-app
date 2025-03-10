import React from "react";
import "../assets/styles.css";
import "../assets/animation.css";
import "../assets/responsive-css.css";

function Header() {
  return (
    <header className="header">
      <a className="head-logo"><span>green</span>future</a>

      <nav>
        <a className="nav-items" href="#hero">Home</a>
        <a className="nav-items" href="#about">About</a>
        <a className="nav-items" href="#project">Projects</a>
        <a className="nav-items" href="#blog">Blog</a>
        <a className="nav-items" href="#contact">Contact</a>
      </nav>

      <div className="head-cta">
        <button className="header-cta-btn">Login</button>
        <button className="header-cta-btn">Be a Partner</button>
      </div>
    </header>
  );
}

export default Header;
