import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => (
  <footer className="footer">
    <section className="footer-links" id="footer">
      <div className="left-footer">
        <div className="footer-about">
          <h4>About Us</h4>
          <p>
            We are a forward-thinking company dedicated to transforming ideas
            into impactful solutions. Our mission is to empower businesses
            through innovation and collaboration, ensuring long-term success in
            a dynamic market.
          </p>
        </div>
      </div>
      <div className="right-footer">
        <div className="footer-services">
          <h4>Services</h4>
          <ul>
            <li>Social Media</li>
            <li>Content Creation</li>
            <li>Strategy & Analytics</li>
            <li>Web Development</li>
            <li>Design</li>
          </ul>
        </div>
        <div className="footer-contact">
          <h4>Contact</h4>
          {/* <p>info@innovatorsnexus.com</p> */}
          <a
            href="https://wa.me/9488026106"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-white hover:text-green-700"
          >
            <i className="fab fa-whatsapp"></i>
            <span className="ml-2">9488026106</span>
          </a>
          <a
            href="mailto:youremail@example.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-white hover:text-gray-300"
          >
            <i className="fas fa-envelope"></i>
            <span className="ml-2">innovators__nexus</span>
          </a>
        </div>
        <div className="footer-social">
          <h4>Follow Us:</h4>
          <div className="social-links">
            <a
              href="https://www.facebook.com/share/sy8QLBfCHZUq3Bb5/?mibextid=LQQJ4d"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            <a href="https://www.instagram.com/innovators__nexus">Twitter</a>
            <a
              href="https://www.instagram.com/innovators__nexus"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  </footer>
);

export default Footer;
