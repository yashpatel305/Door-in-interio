import { FaCheckCircle, FaAward, FaUsers, FaClock } from "react-icons/fa";
import { CiCircleChevRight } from "react-icons/ci";
import { FaHandPointRight } from "react-icons/fa";
import "./AboutSection.css";

const AboutSection = () => {
  const features = [
    "Brand new store in Gandhinagar",
    "Premium quality plywood and veneer",
    "Designer hardware and accessories",
    "Decorative paints and wallpapers",
    "Expert consultation and support",
    "Competitive pricing for bulk orders",
  ];

  const stats = [
    { icon: <FaUsers />, number: "NEW", label: "Store Opening" },
    { icon: <FaAward />, number: "Premium", label: "Quality Products" },
    { icon: <FaClock />, number: "Expert", label: "Consultation" },
    { icon: <FaCheckCircle />, number: "Best", label: "Prices in Town" },
  ];

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-row">
        {/* About Text */}
        <div className="about-content">
          <h2>Welcome to Door In Interio</h2>
          <p className="intro-text">
            Gandhinagar's newest premium interior supply destination! We've just
            opened our doors in Kudasan to serve homeowners and contractors with
            the finest quality materials and competitive prices.
          </p>
          <p>
            Whether you're renovating your home or working on a commercial
            project, our fresh inventory includes premium plywood, designer
            hardware, decorative paints, wallpapxers, and everything you need to
            create beautiful spaces.
          </p>

          <div className="features-grid">
            {features.map((feature, i) => (
              <div key={i} className="feature-item">
                <FaHandPointRight className="feature-icon" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="about-image">
          <img
            src="/images/about.avif"
            alt="Store"
          />
          <div className="image-tag">
            <p className="tag-title">Gandhinagar's</p>
            <p className="tag-sub">Newest Store</p>
          </div>
        </div>
      </div>

      {/* Bento Grid Cards */}
      <div className="stats-grid">
        {stats.map((stat, i) => (
          <div key={i} className="stat-card">
            <div className="stat-icon">{stat.icon}</div>
            <h3>{stat.number}</h3>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default AboutSection;
