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
          <i className="fa-brands fa-linkedin-in"></i>
          <i className="fa-brands fa-youtube"></i>
        </div>

<p className="copyright">© GreenFuture {new Date().getFullYear()}</p>
      </div>
    </section>
  );
}

export default Footer;
