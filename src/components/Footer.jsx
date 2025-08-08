import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          
          {/* Company Info */}
          <div className="footer-company">
            <div className="footer-logo">
              <img
                src="/images/logo.png"
                alt="Door In Interio Logo"
                className="footer-logo-img"
              />
              <div>
                <h3>DOOR IN INTERIO</h3>
                <p>Build Your Dream Home</p>
              </div>
            </div>
            <p>
              Gandhinagar's newest premium interior supply store. Your one-stop
              destination for plywood, veneer, hardware, paints, wallpapers, and
              complete interior solutions.
            </p>
            <div className="footer-tagline">|| भवतः स्वप्नगृहं निर्मामः ||</div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Our Products */}
          <div className="footer-section">
            <h4>Our Products</h4>
            <ul>
              <li>Premium Plywood & Veneer</li>
              <li>Fancy Hardware</li>
              <li>Decorative Paints</li>
              <li>Premium Wallpapers</li>
              <li>Wall Decor Items</li>
              <li>Kitchen Accessories</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-info">
              <div className="contact-item address">
                <FaMapMarkerAlt className="contact-icon" />
                <p>
                  GF-64,65 Suyash Solitaire, Nr. Podar International School, 
                  Kudasan, Gandhinagar, Gujarat - 382421
                </p>
              </div>
              <div className="contact-item phone">
                <FaPhone className="contact-icon" />
                <p>+91 9408715115</p>
              </div>
              <div className="contact-item email">
                <FaEnvelope className="contact-icon" />
                <p>info@doorininterio.com</p>
              </div>
            </div>

            {/* Social Media */}
            <div className="social-media">
              <h5>Follow Us</h5>
              <div className="social-icons">
                <a href="#"><FaFacebook /></a>
                <a href="#"><FaInstagram /></a>
                <a href="#"><FaTwitter /></a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          © 2025 Door In Interio. All rights reserved. | Open in Gandhinagar - Visit us today!
        </div>
      </div>
    </footer>
  );
};

export default Footer;
