import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
// import "./assets/images/tr1.png";
// import "./assets/images/tr2.png";
// import "./assets/images/p1.jpg";
// import "./assets/images/p2.jpg";
// import "./assets/images/p3.jpeg";
// import "./assets/images/p4.jpg";
// import "./assets/images/bac.jpg";
// import "./assets/images/grass.png";

function App() {
  return (
    <div>
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
