import { useState } from "react";
import ServiceCard from "./ServiceCard"; // Adjust path as needed

const Services = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const handleCardClick = (index) => {
    setExpandedCard(expandedCard === index ? null : index); // Toggle card expansion
  };

  const services = [
    {
      title: "Social Media Management",
      description: [
        "Platform management and engagement",
        "Content calendar creation",
        "Audience interaction",
        "Data-driven growth strategies",
        "Brand reputation enhancement",
      ],
      imgSrc: "./images/social_media.jpg",
    },
    {
      title: "Content Creation",
      description: [
        "High-quality, engaging content",
        "Blog posts, videos, infographics",
        "Consistent brand voice",
        "Targeted audience connection",
        "Meaningful engagement",
      ],
      imgSrc: "./images/content_creation.jpg",
    },
    {
      title: "Business Strategy",
      description: [
        "Goal-oriented strategic planning",
        "Market analysis and insights",
        "Competitive positioning",
        "Growth and innovation strategies",
        "Operational optimization",
      ],
      imgSrc: "./images/business_strategy.jpg",
    },
    {
      title: "Web Development",
      description: [
        "Responsive and user-friendly designs",
        "E-commerce solutions",
        "SEO-optimized websites",
        "Portfolio and business sites",
        "Fast loading times",
      ],
      imgSrc: "./images/web_development.jpg",
    },
    {
      title: "Graphic Design",
      description: [
        "Custom logo and branding",
        "Digital and print materials",
        "Visual consistency across platforms",
        "Creative digital graphics",
        "Engaging infographics",
      ],
      imgSrc: "./images/graphic_design.jpg",
    },
  ];

  return (
    <section className="our_services" id="services">
      <h2>Services We Provide</h2>

      <div className="services">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description} // Ensure it's passed as an array
            imgSrc={service.imgSrc}
            isExpanded={expandedCard === index}
            onClick={() => handleCardClick(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
