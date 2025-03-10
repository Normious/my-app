import React from "react";
import "../assets/styles.css";
import "../assets/animation.css";
import "../assets/responsive-css.css";

function About() {
  return (
    <section id="about">
      <div className="section-wrap">
        <h3 className="section-title"><span>About </span>us</h3>
        <p className="p1">
          Welcome to our initiative, "Plant Trees, Save the Life!" We are dedicated to creating a greener, healthier planet for everyone.
        </p>
        <p className="p2">
          At Green Future Project, we organize tree-planting campaigns, collaborate with local communities, and educate people about sustainability.
        </p>
        <button className="section-btn">Learn more</button>
        <img src="/images/grass.png" alt="grass" />
      </div>
    </section>
  );
}

export default About;
