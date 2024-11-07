import React from "react";

const ServiceCard = ({ title, description, imgSrc, isExpanded, onClick }) => {
  return (
    <div
      className={`service-card ${isExpanded ? "expanded" : ""}`}
      onClick={onClick} // Use click to toggle expansion
    >
      <img src={imgSrc} alt={title} className="service-image" />
      <div className="service-info">
        <h3 className="service-title">{title}</h3>
        <h3 className="hover-title">{title}</h3>
        <p className="service-description">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
