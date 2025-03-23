import React from "react";
import "../assets/styles.css";
import "../assets/animation.css";
import "../assets/responsive-css.css";

function Contact() {
  return (
    <section id="contact">
      <div className="section-wrap">
        <div className="contact-grid">
          <div className="right">
            <img src="/images/tr2.png" alt="contact" />
          </div>

          <div className="left">
            <h3 className="section-title"><span>get in </span> touch</h3>
            <p>Let’s create something amazing together. Send us a message now!</p>

            <form action="https://api.web3forms.com/submit" method="POST">
              <input type="hidden" name="access_key" value="VITE_WEB3FORMS_ACCESS_KEY"></input>
              <input type="text" placeholder="Your name" spellCheck="false" />
              <input type="text" placeholder="Your email" spellCheck="false" />
              <textarea placeholder="Your message"></textarea>
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
