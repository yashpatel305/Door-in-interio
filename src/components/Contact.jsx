import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        {/* Header */}
        <div className="contact-header">
          <h2>Visit Our Store</h2>
          <p>
            Come explore Gandhinagar's newest interior supply destination. WhatsApp us or visit our showroom in Kudasan!
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Information Card */}
          <div className="contact-info-content">
            <h3>Visit Our Showroom</h3>
            
            <div className="info-items">
              <div className="info-item">
                <div className="info-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="info-content">
                  <h4>Address</h4>
                  <p>
                    GF-64,65 Suyash Solitaire,<br />
                    Nr. Podar International School,<br />
                    Kudasan, Gandhinagar,<br />
                    Gujarat - 382421
                  </p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <FaPhone />
                </div>
                <div className="info-content">
                  <h4>WhatsApp Business</h4>
                  <p className="highlight">+91 9408715115</p>
                  <p className="note">Message us anytime!</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <FaEnvelope />
                </div>
                <div className="info-content">
                  <h4>Email</h4>
                  <p>doorininterio.rj@gmail.com</p>
                  <p>www.doorin.in</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <FaClock />
                </div>
                <div className="info-content">
                  <h4>Store Hours</h4>
                  <p>Monday - Saturday: 9:00 AM - 8:00 PM</p>
                  <p>Sunday: 10:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Card */}
          <div className="map-card">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d898.6173425618421!2d72.63149533627596!3d23.177320411047962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2ba72dc94957%3A0xf1328fc46a0e6380!2sdoor%20in%20interio!5e1!3m2!1sen!2sin!4v1753988897813!5m2!1sen!2sin" 
              width="100%" 
              height="400" 
              style={{border: 0}} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Door In Interio Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
