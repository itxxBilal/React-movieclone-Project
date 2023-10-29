import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h2>About Us</h2>
            <p>
              I'm Bilal, a passionate student learning web development. My goal
              is to become a full-stack developer, creating engaging and
              functional websites.
            </p>
          </div>
          <div className="footer-section">
            <h2>Contact Us</h2>
            <p className="Con">
              {" "}
              Email:{" "}
              <a href="mailto:contact.bilalofficial@gmail.com">For Email</a>
            </p>
            <p className="Con">
              Phone: <a href="tel:+923058880172">Click Here</a>
            </p>
          </div>
          <div className="footer-section">
            <h2>Follow Us</h2>
            <p>Connect with us on social media:</p>
            <div className="social-icons">
              <a href="https://www.facebook.com/m.bilal172" className="icon">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="https://twitter.com/itx_bilal172" className="icon">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="https://github.com/itxxBilal" className="icon">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://www.linkedin.com/in/bilal172/" className="icon">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
