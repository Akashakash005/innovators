import { useState } from "react";
import ServiceCard from "./ServiceCard"; // Adjust path as needed

const Services = () => {
  const [expandedCard, setExpandedCard] = useState(null); // Track the currently expanded card

  const handleCardClick = (index) => {
    setExpandedCard(expandedCard === index ? null : index); // Toggle card expansion
  };

  const services = [
    {
      title: "Social Media Management",
      description:
        "Expertly manage and grow your social media presence across various platforms. From crafting content calendars to engaging with your audience, we ensure your brand remains active, relevant, and positively represented. Our data-driven strategies help increase followers, engagement, and overall brand loyalty.",
      imgSrc: "./images/social_media.jpg",
    },
    {
      title: "Content Creation",
      description:
        "Create high-quality, engaging, and authentic content that resonates with your audience. We specialize in producing a variety of content types, including blog posts, videos, infographics, and social media visuals that reflect your brand's voice and values, ensuring meaningful connections with your target market.",
      imgSrc: "./images/content_creation.jpg",
    },
    {
      title: "Business Strategy",
      description:
        "Develop actionable strategies to achieve your business objectives. Our team collaborates with you to understand your goals, market landscape, and competitive edge. We deliver a strategic roadmap with measurable actions and insights to drive growth, innovation, and a stronger market presence.",
      imgSrc: "./images/business_strategy.jpg",
    },
    {
      title: "Web Development",
      description:
        "Build a responsive, modern, and user-friendly website tailored to your brand's needs. Our team of developers ensures your site is optimized for speed, accessibility, and SEO. From e-commerce solutions to portfolio websites, we create digital experiences that captivate and convert visitors into customers.",
      imgSrc: "./images/web_development.jpg",
    },
    {
      title: "Graphic Design",
      description:
        "Design stunning and impactful visuals that represent your brand's identity. Our graphic design services include logo creation, branding materials, digital graphics, and print collateral, all crafted to maintain consistency and appeal. We ensure your brand stands out with visuals that communicate professionalism and creativity.",
      imgSrc: "./images/graphic_design.jpg",
    },
  ];

  return (
    <div className="our_services">
      <h2>services we provide</h2>
      <section className="services" id="services">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            imgSrc={service.imgSrc}
            isExpanded={expandedCard === index} // Pass the expanded state for each card
            onClick={() => handleCardClick(index)} // Handle click to expand/collapse
          />
        ))}
      </section>
    </div>
  );
};

export default Services;
