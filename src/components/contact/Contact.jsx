import React from "react";
import "./contact.scss";

export default function Contact() {
  return (
    <section id="contact">
      <p className="section__text__p1">Get in Touch</p>
      <h1 className="title">Contact Me</h1>
      <div className="contact-info-upper-container">
        <div className="contact-info-container">
          <a href="mailto:omkarpatil2.0@outlook.com">
            <img
              src="./assets/email.png"
              alt="Email icon"
              className="icon contact-icon email-icon"
            />
          </a>
          <p>
            <a href="mailto:omkarpatil2.0@outlook.com">omkarpatil2.0@out.com</a>
          </p>
        </div>
        <div className="contact-info-container">
          <a
            href="https://www.linkedin.com/in/omkar-patil-75793022a"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="./assets/linkedin.png"
              alt="LinkedIn icon"
              className="icon contact-icon"
            />
          </a>

          <p>
            <a href="https://www.linkedin.com/in/omkar-patil-75793022a">
              LinkedIn
            </a>
          </p>
        </div>
      </div>
      <>
        <nav>
          <div className="nav-links-container">
            <ul className="nav-links">
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#experience">Skills</a>
              </li>
              <li>
                <a href="#works">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="footer-container">
          <p>Copyright &#169; 2024 Omkar Patil. All Rights Reserved.</p>
        </div>
      </>
    </section>
  );
}
