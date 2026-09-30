import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/style/Submit.css";

function Submit() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="submit-page">

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

      <section className="submit-hero">
        <div className="submit-overlay"></div>

        <div className="container submit-hero-content">
          <p>TIMEORA</p>
          <h1>Make It Yours.</h1>
          <span>
            Choose your watch and place your order with us.
          </span>
        </div>
      </section>

      {/* Form Section */}

      <section className="submit-section">
        <div className="container">

          <div className="submit-layout">

            {/* Left Content */}

            <div className="submit-info">

              <small>YOUR TIME. YOUR STYLE.</small>

              <h2>
                Ready to Find
                <br />
                Your Perfect Watch?
              </h2>

              <p>
                Fill in your details and our team will help
                you complete your watch order.
              </p>

              <div className="check-item">
                <span>✓</span>
                <div>
                  <h4>Premium Quality</h4>
                  <p>Beautiful designs with reliable quality.</p>
                </div>
              </div>

              <div className="check-item">
                <span>✓</span>
                <div>
                  <h4>Secure Ordering</h4>
                  <p>Your information is handled securely.</p>
                </div>
              </div>

              <div className="check-item">
                <span>✓</span>
                <div>
                  <h4>Fast Support</h4>
                  <p>Our team is ready to assist you.</p>
                </div>
              </div>

            </div>

            {/* Form */}

            <div className="order-form">

              <h2>Place Your Order</h2>
              <p>Enter your details below.</p>

              <form>

                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    placeholder="Enter phone number"
                  />
                </div>

                <div className="form-group">
                  <label>Select Watch</label>

                  <select>
                    <option>Classic Black - ₹2,499</option>
                    <option>Royal Gold - ₹3,999</option>
                    <option>Silver Chronograph - ₹4,499</option>
                    <option>Smart Pro - ₹5,999</option>
                    <option>Elegant Rose - ₹4,999</option>
                    <option>Sport Edition - ₹3,499</option>
                  </select>

                </div>

                <div className="form-group">
                  <label>Delivery Address</label>

                  <textarea
                    rows="4"
                    placeholder="Enter your address"
                  ></textarea>

                </div>

                <div className="form-group">
                  <label>Special Request</label>

                  <textarea
                    rows="3"
                    placeholder="Any special request?"
                  ></textarea>

                </div>

                <button type="submit" className="submit-btn">
                  Submit Order →
                </button>

              </form>

            </div>

          </div>

        </div>
      </section>

      {/* Why Timeora */}

      <section className="why-timeora">
        <div className="container">

          <div className="submit-title">
            <p>WHY TIMEORA</p>
            <h2>Made For Your Time</h2>
          </div>

          <div className="why-grid">

            <div className="why-card">
              <div>⌚</div>
              <h3>Timeless Design</h3>
              <p>
                Designs that stay stylish through every season.
              </p>
            </div>

            <div className="why-card">
              <div>★</div>
              <h3>Quality First</h3>
              <p>
                We focus on quality, comfort and finishing.
              </p>
            </div>

            <div className="why-card">
              <div>♥</div>
              <h3>Made For You</h3>
              <p>
                Find a watch that matches your personality.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Footer */}

      <footer className="submit-footer">
        <div className="container">

          <div className="submit-footer-content">

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
              <p>📞 +91 98765 43210</p>
            </div>

          </div>

          <div className="submit-footer-bottom">
            © 2026 TIMEORA. All Rights Reserved.
          </div>

        </div>
      </footer>

    </div>
  );
}

export default Submit;