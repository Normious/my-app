import React from "react";
import "../assets/styles.css";
import "../assets/animation.css";
import "../assets/responsive-css.css";

function Projects() {
  return (
    <section id="project">
      <div className="section-wrap">
        <h3 className="section-title"><span>our </span>project</h3>

        <div className="project-grid">
          <div className="card">
            <img src="/images/p1.jpg" alt="Project 1"/>
            <h4 className="card-title">Greening Urban Spaces</h4>
          </div>
          <div className="card">
            <img src="/images/p2.jpg" alt="Project 2"/>
            <h4 className="card-title">Reforesting Degraded Lands</h4>
          </div>
          <div className="card">
            <img src="/images/p3.jpeg" alt="Project 3"/>
            <h4 className="card-title">School Green Initiatives</h4>
          </div>
          <div className="card">
            <img src="/images/p4.jpg" alt="Project 4"/>
            <h4 className="card-title">Climate Action Drives</h4>
          </div>
        </div>

        <button className="section-btn">See all</button>
      </div>
    </section>
  );
}

export default Projects;