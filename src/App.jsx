import React, { useState } from 'react';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.className = darkMode ? 'light-mode' : 'dark-mode';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

   const scrollToContactForm = () => {
    const section = document.getElementById('contact-form');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <div className={`App ${darkMode ? 'dark' : 'light'}`}>
      <header className="App-header">
        <h1>SoftSell</h1>
        <p>Your trusted partner in software resale</p>
        <div className="cta-buttons">
          <button className="cta-button" onClick={scrollToContactForm}>Get a Quote</button>
          <button className="cta-button" onClick={scrollToContactForm}>Sell License</button>
        </div>
        <button className="toggle-dark-mode" onClick={toggleDarkMode}>
          {darkMode ? '🌙' : '☀️'}
        </button>
      </header>

      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">
            <img src="/icons8-upload.gif" alt="Upload License" />
            <h3>Upload License</h3>
            <p>Submit your software license details.</p>
          </div>
          <div className="step">
            <img src="/icons8-value.gif" alt="Get Valuation" />
            <h3>Get Valuation</h3>
            <p>Receive a competitive valuation instantly.</p>
          </div>
          <div className="step">
            <img src="/icons8-paid.gif" alt="Get Paid" />
            <h3>Get Paid</h3>
            <p>Receive payment quickly and securely.</p>
          </div>
        </div>
      </section>

      <section className="why-choose-us">
        <h2>Why Choose Us</h2>
        <ul>
          <li>
            <img src="/icons8-trust.gif" alt="Trusted" />
            <p>Trusted by thousands of customers worldwide</p>
          </li>
          <li>
            <img src="/icons8-secure.gif" alt="Secure" />
            <p>Secure transactions</p>
          </li>
          <li>
            <img src="/icons8-fast.gif" alt="Fast" />
            <p>Fast real-time valuations</p>
          </li>
          <li>
            <img src="/icons8-support.gif" alt="Customer Support" />
            <p>Excellent customer support</p>
          </li>
        </ul>
      </section>

      <section className="testimonials">
        <h2>Customer Testimonials</h2>
        <div className="testimonial">
          <p>"SoftSell made the process so easy! Highly recommend."</p>
          <p>- Jane Doe, IT Manager, TechCorp</p>
        </div>
        <div className="testimonial">
          <p>"Great service and fast payment. Will use again!"</p>
          <p>- John Smith, Software Engineer, DevSolutions</p>
        </div>
      </section>

      <section className="contact-form">
        <h2>Contact Us</h2>
        {formSubmitted ? (
          <p className="success-message">Your details are submitted successfully, we will contact you soon.</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input type="text" name="name" required />
            </label>
            <label>
              Email:
              <input type="email" name="email" required />
            </label>
            <label>
              Company:
              <input type="text" name="company" />
            </label>
            <label>
              License Type:
              <select name="licenseType" required>
                <option value="">Select...</option>
                <option value="os">Operating System</option>
                <option value="db">Database</option>
                <option value="security">Security</option>
                <option value="productivity">Productivity</option>
                <option value="other">Other</option>
              </select>
            </label>
            <label>
              Message:
              <textarea name="message" required></textarea>
            </label>
            <button type="submit">Submit</button>
          </form>
        )}
      </section>

      <footer className="footer">
        <p>© 2025 SoftSell. All rights reserved.</p>
        <div className="footer-links">
          <a href="/terms-and-conditions" className="footer-link">Terms and Conditions</a>
          <a href="/privacy-policy" className="footer-link">Privacy Policy</a>
          <a href="/contact-us" className="footer-link">Contact Us</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
