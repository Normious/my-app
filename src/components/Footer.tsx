import React from "react";
import "../assets/styles.css";
import "../assets/animation.css";
import "../assets/responsive-css.css";

function Footer() {
  return (
    <section id="footer">
      <div className="section-wrap">
        <div className="social">
          <i className="fa-brands fa-facebook-f"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-instagram" onClick={() => window.open('https://www.instagram.com/elevate_mw', '_blank')}></i>
          <i className="fa-brands fa-youtube"></i>
        </div>

<p className="copyright">© GreenMinds {new Date().getFullYear()}</p>
      </div>
    </section>
  );
}

export default Footer;
