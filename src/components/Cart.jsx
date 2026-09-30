import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/style/Cart.css";

function Cart() {
  const [isOpen, setIsOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const price = 2499;
  const subtotal = price * quantity;

  return (
    <div className="cart-page">

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

      <section className="cart-hero">
        <div className="cart-overlay"></div>

        <div className="container cart-hero-content">
          <p>TIMEORA</p>
          <h1>Your Shopping Cart</h1>
          <span>Review your selected watch before checkout.</span>
        </div>
      </section>

      {/* Cart */}

      <section className="cart-section">
        <div className="container">

          <div className="cart-layout">

            {/* Left */}

            <div className="cart-items">

              <div className="cart-heading">
                <h2>Cart Items</h2>
                <span>1 Product</span>
              </div>

              <div className="cart-item">

                <div className="cart-image">
                  <img
                    src="https://m.media-amazon.com/images/I/71FocyCMeWL._AC_UY1000_.jpg"
                    alt="Classic Black Watch"
                  />
                </div>

                <div className="cart-item-info">

                  <small>TIMEORA COLLECTION</small>

                  <h3>Classic Black</h3>

                  <p>
                    Premium classic watch with elegant
                    black design.
                  </p>

                  <h4>₹{price.toLocaleString("en-IN")}</h4>

                  <div className="quantity-box">
                    <span>Quantity:</span>

                    <button
                      onClick={() =>
                        setQuantity(quantity > 1 ? quantity - 1 : 1)
                      }
                    >
                      −
                    </button>

                    <strong>{quantity}</strong>

                    <button
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      +
                    </button>
                  </div>

                  <button className="remove-btn">
                    🗑 Remove
                  </button>

                </div>

              </div>

            </div>

            {/* Right */}

            <div className="order-summary">

              <h2>Order Summary</h2>

              <div className="summary-line">
                <span>
                  Classic Black × {quantity}
                </span>

                <span>
                  ₹{subtotal.toLocaleString("en-IN")}
                </span>
              </div>

              <div className="summary-line">
                <span>Delivery</span>
                <span className="free">FREE</span>
              </div>

              <hr />

              <div className="summary-total">
                <span>Total</span>
                <strong>
                  ₹{subtotal.toLocaleString("en-IN")}
                </strong>
              </div>

              <Link to="/submit" className="checkout-btn">
                Proceed to Checkout →
              </Link>

              <Link to="/menu" className="continue-btn">
                ← Continue Shopping
              </Link>

            </div>

          </div>

        </div>
      </section>

      {/* Footer */}

      <footer className="cart-footer">
        <div className="container">

          <div className="cart-footer-content">

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

          <div className="cart-footer-bottom">
            © 2026 TIMEORA. All Rights Reserved.
          </div>

        </div>
      </footer>

    </div>
  );
}

export default Cart;