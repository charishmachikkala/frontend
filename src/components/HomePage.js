import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/HomePage.css";
import homepage from '../images/main.jpeg';
import data from '../images/data.png';
import team1 from '../images/team1.jpg';
import team2 from '../images/team2.jpg';
import team3 from '../images/team3.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faUsers } from '@fortawesome/free-solid-svg-icons';

const HomePage = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array of team images
  const teamImages = [team1, team2, team3];

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === teamImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? teamImages.length - 1 : prevIndex - 1
    );
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleGetStartedClick = () => {
    navigate("/check");
  };

  const handleMouseEnter = (card) => {
    setHoveredCard(card);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  return (
    <div className="containerr">
      {/* Header */}
      <header className="title">
        <div className="logo1">
          <img src={data} alt="Data Dialect" />
        </div>
        <nav className="main-navbar">
          <ul>
            <li onClick={() => scrollToSection("home")}>
              <FontAwesomeIcon icon={faHome} /> Home
            </li>
            <li onClick={() => scrollToSection("about")}>
              <FontAwesomeIcon icon={faInfoCircle} /> About
            </li>
            <li onClick={() => scrollToSection("team")}>
              <FontAwesomeIcon icon={faUsers} /> Team
            </li>
            <li className="get-started" onClick={handleGetStartedClick}>
              Get Started
            </li>
          </ul>
        </nav>
      </header>

      {/* Main Section */}
      <section id="home" className="full-page main-section">
        <div className="home-content">
          <div className="intro">
            <h1>Welcome to <span>Data Dialect</span></h1>
            <p>Unlocking Insights: Where Conversations Meet Intelligence</p>
            <button>Know More</button>
          </div>
          <div className="data-icons">
            <img src={homepage} alt="Video" />
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="full-page about-us1">
        <h2>About Us</h2>
        <div className="cards">
          <div
            className={`card1 ${hoveredCard === "whatwedo" ? "hovered" : ""}`}
            onMouseEnter={() => handleMouseEnter("whatwedo")}
            onMouseLeave={handleMouseLeave}
          >
            {hoveredCard === "whatwedo" ? (
              <div className="card-hover-text">
                We provide solutions to unlock insights from data.At DATA DIALECT, we're passionate about preserving and celebrating cultural diversity. Our platform collects and showcases unique regional content from users around the world, including:

- Local folklore and traditions
- Regional music and folk songs
- Famous places and landmarks
- Traditional cuisine and recipes
- Cultural stories and experiences

              </div>
            ) : (
              "What We Do"
            )}
          </div>
          <div
            className={`card1 ${hoveredCard === "mission" ? "hovered" : ""}`}
            onMouseEnter={() => handleMouseEnter("mission")}
            onMouseLeave={handleMouseLeave}
          >
            {hoveredCard === "mission" ? (
              <div className="card-hover-text">
                Our mission is to empower users through data-driven insights.At Data Dialect, our vision is to celebrate and preserve cultural diversity, making it accessible for all. Our mission is to collect, curate, and share regional stories, traditions, and experiences, fostering cross-cultural understanding and appreciation.
              </div>
            ) : (
              "Mission and Vision"
            )}
          </div>
          <div
            className={`card1 ${hoveredCard === "howitworks" ? "hovered" : ""}`}
            onMouseEnter={() => handleMouseEnter("howitworks")}
            onMouseLeave={handleMouseLeave}
          >
            {hoveredCard === "howitworks" ? (
              <div className="card-hover-text">
                We utilize advanced algorithms to process and analyze data.Users:

- Share regional stories, songs & traditions
- Preserve cultural heritage
- Earn rewards

Admins:

- Access curated cultural database
- Gain regional insights
- Utilize data for research & education

              </div>
            ) : (
              "How It Works"
            )}
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section id="team" className="full-page team">
        <h2 class="ourteam">Meet Our Team</h2>
        <div className="team-slider">
          <button className="arrow left-arrow" onClick={handlePrev}>
            &#10094;
          </button>
          <img src={teamImages[currentImageIndex]} alt="Team" />
          <button className="arrow right-arrow" onClick={handleNext}>
            &#10095;
          </button>
        </div>
      </section>

   
      {/* Footer */}
      <footer className="footer1">
        <div className="footer-containerr">
          <div className="footer-logo">
            <img src={data} alt="Data Dialect" />
        </div>
        <div className="footer-details">
          <p>123 Street, City, Country</p>
          <p>Phone: 123-456-7890 <br></br> Email: info@datadialect.com</p>
          <div className="social-media">
         <a href="https://in.linkedin.com/" aria-label="LinkedIn">LinkedIn</a>
         <a href="https://www.facebook.com/" aria-label="Facebook">Facebook</a>
         <a href="https://www.instagram.com/" aria-label="Instagram">Instagram</a>
        </div>
        </div>
       
        </div>
        <p className="footer-bottom-text">© 2024 Data Dialect. All rights reserved.</p>
        </footer>

    </div>
  );
};

export default HomePage;
