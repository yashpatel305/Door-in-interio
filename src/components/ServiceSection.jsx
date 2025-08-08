import {
  FaPalette,
  FaPaintRoller,
  FaImage,
  FaHome,
} from "react-icons/fa";
import { GiWoodenDoor,GiWoodPile } from "react-icons/gi";
import "./ServiceSection.css";

const ServiceSection = () => {
  const services = [
    {
      icon: GiWoodPile,
      title: "Premium Plywood & Veneer",
      description:
        "High-quality plywood, veneers, and laminated boards from trusted brands for all your furniture needs",
    },
    {
      icon: GiWoodenDoor,
      title: "Fancy Hardware",
      description:
        "Designer handles, hinges, locks, and architectural hardware to elevate your interiors",
    },
    {
      icon: FaPaintRoller,
      title: "Decorative Paints",
      description:
        "Premium textured paints, wallpapers, and decorative finishes to transform your walls",
    },
    {
      icon: FaImage,
      title: "Premium Wallpapers",
      description:
        "Extensive collection of designer wallpapers and wall coverings for every room",
    },
    {
      icon: FaPalette,
      title: "Wall Decor & Accessories",
      description:
        "Beautiful wall art, mirrors, and decorative items to complete your interior design",
    },
    {
      icon: FaHome,
      title: "Complete Interior Projects",
      description:
        "End-to-end interior project execution with our team of experienced contractors",
    },
  ];

  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <div className="services-title">
          <h2>Our Premium Products</h2>
          <p>
            Discover our extensive range of premium interior materials and
            supplies. Perfect for homeowners and contractors looking for quality
            and style.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-card-header">
                <div className="service-icon">
                  <service.icon size={24} />
                </div>
                <h3>{service.title}</h3>
              </div>
              <div className="service-card-content">
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
