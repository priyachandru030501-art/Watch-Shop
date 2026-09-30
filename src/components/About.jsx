import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/style/About.css";

function About() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="about-page">

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">

          <Link className="navbar-brand fw-bold" to="/">
            ⌚ TIMEORA
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>

          <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
            <ul className="navbar-nav ms-auto">

              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/menu">Menu</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/cart">Cart</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/submit">Submit</Link>
              </li>

            </ul>
          </div>

        </div>
      </nav>

      {/* Hero */}

      <section className="about-hero">
        <div className="about-overlay"></div>

        <div className="container about-hero-content">
          <p>ABOUT TIMEORA</p>
          <h1>More Than Just Time</h1>
          <span>
            We create watches that become part of your story.
          </span>
        </div>
      </section>

      {/* About Content */}

      <section className="about-main">
        <div className="container">

          <div className="about-layout">

            <div className="about-image">
              <img
                src="https://images.alphacoders.com/650/650300.jpg"
                alt="TIMEORA Watch"
              />
            </div>

            <div className="about-content">

              <small>OUR STORY</small>

              <h2>Time That Defines You</h2>

              <p>
                TIMEORA is a modern watch brand created for
                people who believe that style and time should
                go together.
              </p>

              <p>
                Our collection brings together elegant designs,
                reliable quality and everyday comfort.
              </p>

              <p>
                From classic watches to modern styles,
                TIMEORA helps you choose a watch that matches
                your personality.
              </p>

              <Link to="/menu" className="about-btn">
                Explore Collection
              </Link>

            </div>

          </div>

        </div>
      </section>

      {/* Vision Mission */}

      <section className="vision-section">
        <div className="container">

          <div className="about-title">
            <p>WHAT WE BELIEVE</p>
            <h2>Our Vision & Mission</h2>
          </div>

          <div className="vision-grid">

            <div className="vision-card">
              <div>◉</div>
              <h3>Our Vision</h3>
              <p>
                To become a trusted destination for stylish,
                reliable and timeless watches.
              </p>
            </div>

            <div className="vision-card">
              <div>⌚</div>
              <h3>Our Mission</h3>
              <p>
                To offer quality watches with beautiful designs
                that fit every lifestyle and occasion.
              </p>
            </div>

            <div className="vision-card">
              <div>★</div>
              <h3>Our Values</h3>
              <p>
                Quality, style, trust and customer satisfaction
                are at the heart of TIMEORA.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Footer */}

      <footer className="about-footer">
        <div className="container">

          <div className="about-footer-content">

            <div>
              <h3>⌚ TIMEORA</h3>
              <p>Timeless Style, Perfect Time.</p>
            </div>

            <div>
              <h4>Quick Links</h4>
              <Link to="/">Home</Link>
              <Link to="/menu">Menu</Link>
              <Link to="/cart">Cart</Link>
              <Link to="/about">About</Link>
              <Link to="/submit">Submit</Link>
            </div>

            <div>
              <h4>Contact</h4>
              <p>📧 info@timeora.com</p>
              <p>📞 +91 00000 00000</p>
            </div>

          </div>

          <div className="about-footer-bottom">
            © 2026 TIMEORA. All Rights Reserved.
          </div>

        </div>
      </footer>

    </div>
  );
}

export default About;