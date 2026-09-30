import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/style/Home.css";

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="home-page">

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
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/menu">
                  Menu
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/cart">
                  Cart
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/submit">
                  Submit
                </Link>
              </li>

            </ul>
          </div>

        </div>
      </nav>

      {/* Hero */}
      <section className="home-hero">
        <div className="home-overlay"></div>

        <div className="container home-hero-content">
          <p>PREMIUM WATCH COLLECTION</p>

          <h1>
            Timeless Style,
            <br />
            Perfect Time.
          </h1>

          <span>
            Discover elegant watches designed to make
            every moment special.
          </span>

          <div className="home-buttons">
            <Link to="/menu" className="home-btn">
              Explore Watches
            </Link>

            <Link to="/about" className="home-outline-btn">
              Discover More
            </Link>
          </div>
        </div>
      </section>

      {/* Brand Cards */}
      <section className="brand-section">
        <div className="container">

          <div className="section-title">
            <p>WATCH BRANDS</p>
            <h2>Explore Our Brands</h2>
          </div>

          <div className="brand-grid">

            <div className="brand-card">
              <div className="brand-icon">⌚</div>
              <h3>Rolex</h3>
              <p>
                Luxury watches known for timeless design
                and exceptional craftsmanship.
              </p>
              <Link to="/menu">Explore →</Link>
            </div>

            <div className="brand-card">
              <div className="brand-icon">⏱</div>
              <h3>Casio</h3>
              <p>
                Reliable and stylish watches designed
                for everyday performance.
              </p>
              <Link to="/menu">Explore →</Link>
            </div>

            <div className="brand-card">
              <div className="brand-icon">◷</div>
              <h3>Fossil</h3>
              <p>
                Modern watches combining classic designs
                with contemporary style.
              </p>
              <Link to="/menu">Explore →</Link>
            </div>

            <div className="brand-card">
              <div className="brand-icon">◉</div>
              <h3>Tissot</h3>
              <p>
                Swiss-inspired watches made for elegance
                and precision.
              </p>
              <Link to="/menu">Explore →</Link>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="home-footer">
        <div className="container">

          <div className="footer-content">

            <div>
              <h3>⌚ TIMEORA</h3>
              <p>
                Timeless Style, Perfect Time.
              </p>
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
              <p>📞 +91 98765 43210</p>
            </div>

          </div>

          <div className="footer-bottom">
            © 2026 TIMEORA. All Rights Reserved.
          </div>

        </div>
      </footer>

    </div>
  );
}

export default Home;