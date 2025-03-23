import React from "react";
import "../assets/styles.css";
import "../assets/animation.css";
import "../assets/responsive-css.css";
import { useAuth } from '../context/AuthContext';
import { logOut } from '../services/auth';

function Header() {
  const { currentUser } = useAuth();
  return (
    <header className="header">
      <a className="head-logo"><span>green</span>minds</a>

      <nav>
        <a className="nav-items" href="#hero">Home</a>
        <a className="nav-items" href="#about">About</a>
        <a className="nav-items" href="#project">Projects</a>
        <a className="nav-items" href="#blog">Blog</a>
        <a className="nav-items" href="#contact">Contact</a>
      </nav>

      <div className="head-cta">
        {currentUser ? (
          <div>
            <button className="header-cta-btn" onClick={() => window.location.href = '/Profile'}>
              Profile
            </button>
            <button className="header-cta-btn" onClick={logOut}>
              Logout
            </button>
          </div>
        ) : (
          <>
            <button className="header-cta-btn" onClick={() => window.location.href = '/login'}>Login</button>
            <button className="header-cta-btn" onClick={() => window.location.href = '/register'}>Register</button>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
