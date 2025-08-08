import { LuPhone } from "react-icons/lu";
import { GrLocation } from "react-icons/gr";
import { FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleCall = () => {
    window.location.href = "tel:+917414933099";
  };

  const handleOpenMap = () => {
    window.open("https://maps.app.goo.gl/wauN5ey33toCXubs6", "_blank");
  };

  const handleWhatsApp = () => {
    const phone = "919408715115";
    const message = "Hi, I want to know more about your services!";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const handleToggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* Top Info Line */}
      <header className="firstLine">
        <div className="detail">
          <p onClick={handleCall}>
            <LuPhone /> +91 7414933099
          </p>
          <p onClick={handleOpenMap}>
            <GrLocation /> Gandhinagar, Gujarat
          </p>
        </div>
        <p className="sanskrit">|| भवतः स्वप्नगृहं निर्मामः ||</p>
      </header>

      {/* Sticky Navbar */}
      <nav className="navbar">
        <div className="logoName">
          <img src="/images/logo.png" alt="Logo" />
          <div className="name">
            <h1>Door In Interio</h1>
            <p>Build Your Dream Home</p>
          </div>
        </div>

        <div className="menu-icon" onClick={handleToggleMenu}>
          {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </div>

        <div className={`navbarItem ${menuOpen ? "open" : ""}`}>
          <a href="#home" onClick={closeMenu}>
            Home
          </a>
          <a href="#services" onClick={closeMenu}>
            Services
          </a>
          <a href="#about" onClick={closeMenu}>
            About
          </a>
          <a href="#gallery" onClick={closeMenu}>
            Gallery
          </a>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
          <button onClick={handleWhatsApp}>Contact Us</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
