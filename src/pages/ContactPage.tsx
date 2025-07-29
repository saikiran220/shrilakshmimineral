import React, { useState } from "react"


const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero-content">
          <h1>Contact Us</h1>
          <p>Get in touch with us for inquiries and quotations</p>
        </div>
      </section>

      <section className="contact-content">
        <div className="contact-container">
          <div className="contact-info">
            <h2>Our Contact Information</h2>
            <div className="info-item">
              <h3>Address</h3>
              <p>Survey No. 467/1A & 467/1B, Chittampatti,<br />
                 Madurai (Dt), TN - 625101</p>
            </div>
            <div className="info-item">
              <h3>Phone</h3>
              <p>+91 98658 68606</p>
            </div>
            <div className="info-item">
              <h3>Email</h3>
              <p>info@shrilakshmiminerals.com</p>
            </div>
            <div className="info-item">
              <h3>Business Hours</h3>
              <p>Monday - Saturday: 9:00 AM - 6:00 PM<br />
                 Sunday: Closed</p>
            </div>
          </div>

          <div className="contact-form">
            <h2>Send us a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                ></textarea>
              </div>
              <button type="submit" className="submit-button">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      <section className="map-section">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.8147220402385!2d78.1234567!3d9.9876543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwNTknMTUuNiJOIDc4wrAwNycyNC40IkU!5e0!3m2!1sen!2sin!4v1234567890"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  )
}

export default ContactPage 