import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    to_name: "Admin", // Replace with the actual recipient's name or leave blank to prompt user
    from_name: "",
    email: "",
    mobile: "", // Added mobile number to formData
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_lg67aj4",
        "template_ems56dp",
        formData,
        "5Bg6X9nUDVeHR5YU5"
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Message sent successfully!");
        setFormData({
          to_name: "Recipient Name",
          from_name: "",
          email: "",
          mobile: "",
          message: "",
        }); // Reset form
      })
      .catch((err) => {
        console.error("Failed to send message:", err);
        alert("Failed to send message. Please try again later.");
      });
  };

  return (
    <section className="box-wrapper" id="cta">
      <div className="call-to-action-card">
        <div className="content-wrapper">
          <div className="left-content">
            <h1 className="heading">Partner with Us to Elevate Your Brand</h1>
            <p className="paragraph">
              We are eager to engage in a conversation that unlocks new avenues
              for value creation and redefines the potential of your business.
            </p>
          </div>
          <div className="right-content">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="from_name">Your Name *</label>
                <div className="input-group">
                  <input
                    id="from_name"
                    name="from_name"
                    placeholder="Your Name"
                    type="text"
                    value={formData.from_name}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <div className="input-group">
                  <input
                    id="email"
                    name="email"
                    placeholder="Yourname@gmail.com"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="mobile">Mobile Number *</label>
                <div className="input-group">
                  <input
                    id="mobile"
                    name="mobile"
                    placeholder="08123456789"
                    type="tel"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <div className="input-group">
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Your message here"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <button type="submit" className="submit-button">
                Submit <i className="fas fa-arrow-right"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
