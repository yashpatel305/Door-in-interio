import React from "react";
import "./HeroSection.css"; // Use the CSS we created earlier
import { IoLogoWhatsapp } from "react-icons/io5";

const HeroSection = () => {
  const handleWhatsApp = () => {
    const phone = "919408715115";
    const message = "Hi, I want to know more about your services!";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const handleOpenMap = () => {
    window.open("https://maps.app.goo.gl/wauN5ey33toCXubs6", "_blank");
  };
  return (
    <section id="home" className="hero-section" aria-labelledby="hero-heading">
      <div className="container">
        <div className="grid">
          {/* Left Content */}
          <div className="text-content">


            <h1 id="hero-heading" className="title">
              Transform Your Space with <span>Door In Interio</span>
            </h1>

            <p className="description">
              Your one-stop destination for premium plywood, veneer, hardware,
              decorative paints, wallpapers, and complete interior solutions.
              Now open in Kudasan, Gandhinagar!
            </p>

            <div className="buttons">
              <button className="btn-primary" onClick={handleOpenMap}>
                Visit Our Store <span className="arrow">→</span>
              </button>
              <button onClick={handleWhatsApp} className="btn-outline">
                <IoLogoWhatsapp className="whatsapp" /> : 9408715115
              </button>
            </div>

            <div className="stats">
              <div>
                <h3>New</h3>
                <p>Store Opening</p>
              </div>
              <div>
                <h3>Premium</h3>
                <p>Quality Products</p>
              </div>
              <div>
                <h3>Expert</h3>
                <p>Project Support</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="image-container">
            <div className="image-card">
              <img
                src="/images/hero-image.png"
                alt="Premium interior materials on display at Door In Interio"
                loading="eager"
                fetchpriority="high"
              />
              <div className="image-badge">
                <p className="bold">Visit Us</p>
                <p className="small">in Kudasan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
