import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Services from "./components/Services";
import CallToAction from "./components/CalltoAction";
const App = () => {
  window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
      // Adjust scroll threshold as needed
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <OurApproach />
        <Services />

        <CallToAction />

        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

const Hero = () => (
  <section className="hero">
    <video autoPlay loop muted playsInline className="background-video">
      <source src="./images/background.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div className="hero-content">
      <div className="hero-title">
        {" "}
        <h1>Redefining Digital Marketing for </h1>
        <h2 className="highlight">Modern Businesses</h2>
      </div>
      <p>
        Empowering brands with impactful strategies, creative storytelling, and
        data-driven insights.
      </p>
      <a href="#cta" className="cta-button">
        Get Started
      </a>
    </div>
  </section>
);

const OurApproach = () => (
  <section className="our-approach">
    <h2>Strategy Meets Innovation</h2>
    <p>
      At Innovator's Nexus, we’re committed to transforming your brand’s digital
      presence with tailored solutions that drive engagement and growth. Our
      approach combines creativity, analytics, and strategic insight to provide
      you with measurable results and a competitive edge.
    </p>
  </section>
);

// const CallToAction = () => {
//   return (
//     <section className="box-wrapper" id="cta">
//       <div className="call-to-action-card">
//         <div className="content-wrapper">
//           <div className="left-content">
//             <h1 className="heading">Partner with Us to Elevate Your Brand</h1>
//             <p className="paragraph">
//               We are eager to engage in a conversation that unlocks new avenues
//               for value creation and redefines the potential of your business.
//             </p>
//           </div>
//           <div className="right-content">
//             <form>
//               <div className="form-group">
//                 <label htmlFor="mobile-number">Mobile Number *</label>
//                 <div className="input-group">
//                   <input
//                     id="mobile-number"
//                     placeholder="081234 56789"
//                     type="tel"
//                     required
//                   />
//                 </div>
//               </div>
//               <div className="form-group">
//                 <label htmlFor="email">Email Address *</label>
//                 <div className="input-group">
//                   <input
//                     id="email"
//                     placeholder="Yourname@gmail.com"
//                     type="email"
//                     required
//                   />
//                 </div>
//               </div>
//               <button type="submit" className="submit-button">
//                 Submit <i className="fas fa-arrow-right"></i>
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

const Testimonials = () => (
  <section className="testimonials" id="testimonials">
    <h2>What Our Clients Say</h2>
    <blockquote>
      "Innovator’s Nexus has been a game-changer for our digital presence. From
      strategy to execution, they exceeded our expectations every step of the
      way."
      <cite> – Sree Kalaimagal School </cite>
    </blockquote>
    <blockquote>
      "They understand our brand and create content that truly connects with our
      audience. Our engagement has never been higher."
      <cite> – New Tuono Technologies and Services</cite>
    </blockquote>
  </section>
);

export default App;
