import React from "react";

const ServiceCard = ({ title, description, imgSrc, isExpanded, onClick }) => {
  return (
    <div
      className={`service-card ${isExpanded ? "expanded" : ""}`}
      onClick={onClick}
    >
      <img className="service-image" src={imgSrc} alt={title} />
      <div className="service-info">
        <div className="service-title">{title}</div>
        <div className="hover-title">{title}</div>

        {
          <div className="service-description">
            <ul>
              {description.map((desc, idx) => (
                <li key={idx}>{desc}</li>
              ))}
            </ul>
          </div>
        }
      </div>
    </div>
  );
};

export default ServiceCard;
