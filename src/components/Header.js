import React from "react";

export default function Header() {
  return (
    <header>
      <div className="logo">
        <img alt="Innovator's Nexus Logo" src="/innovator_s_nexus_logo.png" />
        <h2>Innovator's Nexus</h2>
      </div>
      <nav>
        <a href="#services" aria-label="Services">
          Services
        </a>
        <a href="#footer" aria-label="About Us">
          About Us
        </a>
        <a href="#testimonials" aria-label="Testimonials">
          Testimonials
        </a>
      </nav>
      <div className="contact-button">
        <button>Contact Us</button>
      </div>
    </header>
  );
}
