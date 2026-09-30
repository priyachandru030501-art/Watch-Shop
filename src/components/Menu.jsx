import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/style/Menu.css";

function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const watches = [
    {
      name: "Classic Black",
      price: "₹2,499",
      image: "https://m.media-amazon.com/images/I/71FocyCMeWL._AC_UY1000_.jpg",
      text: "Elegant black watch for everyday style."
    },
    {
      name: "Royal Gold",
      price: "₹3,999",
      image: "https://finebuy.co.in/wp-content/uploads/2025/05/Audemars9.webp",
      text: "Premium gold finish with a luxurious look."
    },
    {
      name: "Silver Chronograph",
      price: "₹4,499",
      image: "https://m.media-amazon.com/images/I/61vEP5sAS7L._AC_UY1000_.jpg",
      text: "Modern chronograph design with stylish finish."
    },
    {
      name: "Smart Pro",
      price: "₹5,999",
      image: "https://laatukoru.com/cdn/shop/products/Jm_Smart_Pro_alykello_sininen_PJS0001B.jpg?v=1619133884",
      text: "Smart features combined with modern design."
    },
    {
      name: "Elegant Rose",
      price: "₹4,999",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7x4ZAVtPMZZNdCc5faVLdTcp2DmelxCbY_xO_8kX1CA&s=10",
      text: "Beautiful rose-gold design for a premium look."
    },
    {
      name: "Sport Edition",
      price: "₹3,499",
      image: "https://cdn3.ethoswatches.com/the-watch-guide/wp-content/uploads/2025/01/top-sport-watch-collections-motor-racing-diving-sports-athletes-integrated-bracelet-iconic-watches-special-3.jpg",
      text: "Sporty and durable watch for an active lifestyle."
    }
  ];

  return (
    <div className="menu-page">

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

      <section className="menu-hero">
        <div className="menu-overlay"></div>

        <div className="container menu-hero-content">
          <p>TIMEORA COLLECTION</p>
          <h1>Find Your Perfect Watch</h1>
          <span>
            Explore our collection of stylish and elegant watches.
          </span>
        </div>
      </section>

      {/* Watches */}

      <section className="watch-menu">
        <div className="container">

          <div className="menu-title">
            <p>OUR COLLECTION</p>
            <h2>Choose Your Watch</h2>
          </div>

          <div className="watch-grid">

            {watches.map((watch, index) => (
              <div className="watch-card" key={index}>

                <div className="watch-card-image">
                  <img src={watch.image} alt={watch.name} />
                </div>

                <div className="watch-card-content">
                  <small>TIMEORA</small>

                  <h3>{watch.name}</h3>

                  <p>{watch.text}</p>

                  <div className="watch-bottom">
                    <strong>{watch.price}</strong>

                    <Link to="/cart">
                      Add to Cart
                    </Link>
                  </div>
                </div>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Footer */}

      <footer className="menu-footer">
        <div className="container">

          <div className="menu-footer-content">

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

          <div className="menu-footer-bottom">
            © 2026 TIMEORA. All Rights Reserved.
          </div>

        </div>
      </footer>

    </div>
  );
}

export default Menu;