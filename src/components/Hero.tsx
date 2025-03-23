import React from "react";
import Header from "./Header"; // Importing the Header component
import "../assets/styles.css";
import "../assets/animation.css";
import "../assets/responsive-css.css";

function Hero() {
  return (
    <section id="hero">
      <div className="section-wrap">
        <Header /> {/* Using the Header component */}

        <div className="hero-content">
          <div className="left">
            <h1 className="main-text">Plant <span>a Tree,</span> Save <span> a Life!</span></h1>
            <h2 className="sub-text">Join us in creating a greener tomorrow, one tree at a time.</h2>
            <div className="hero-cta">
              <button className="hero-cta-btn btn1" onClick={() => window.open('https://www.instagram.com/elevate_mw', '_blank')}>Plant a tree</button>
              <button className="hero-cta-btn btn2" onClick={() => window.open('https://www.instagram.com/elevate_mw', '_blank')}>Learn more</button>
            </div>
          </div>

          <div className="right">
            <img src="/images/tr1.png" alt="big-tree-image" />
          </div>
        </div>

        {/* <div className="social">
          <i className="fa-brands fa-facebook-f"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-linkedin-in"></i>
          <i className="fa-brands fa-youtube"></i>
        </div> */}
      </div>
    </section>
  );
}

export default Hero;
