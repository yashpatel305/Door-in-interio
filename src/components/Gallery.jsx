import React from "react";
import "./Gallery.css";

const images = [
  {
    url: "/images/g-1.avif",
    title: "Modern Living Room Design",
    category: "Interior Design",
  },
  {
    url: "/images/g-2.jpg",
    title: "Modern Office Workspace",
    category: "Office Interior",

  },
  {
    url: "/images/g-3.jpg",
    title: "Luxury Bedroom Suite",
    category: "Bedroom Design",
  },
  {
    url: "/images/g-4.jpg",
    title: "Elegant Dining Area",
    category: "Dining Room",
  },
  {
    url: "/images/g-5.avif",
    title: "Modern Kitchen Design",
    category: "Kitchen Design",
  },
  {
    url: "/images/g-6.avif",
    title: "Cozy Living Space",
    category: "Living Room",
  },
];

function Gallery() {
  return (
    <section className="gallery-section" id="gallery">
      <div className="gallery-container">
        <div className="gallery-title">
          <h2>Our Portfolio</h2>
          <p>
            Explore our collection of beautiful homes and interiors we've
            designed for families across Gujarat.
          </p>
        </div>
        <div className="gallery-grid">
          {images.map((image, index) => (
            <div key={index} className="gallery-item">
              <img src={image.url} alt={image.title} />
              <div className="overlay">
                <div className="overlay-text">
                  <h4>{image.title}</h4>
                  <p>{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;