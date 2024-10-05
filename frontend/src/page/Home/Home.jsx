import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import ParticlesComponent from "../../components/ParticlesComponent/ParticlesComponent";
import MyCard from "../../components/Card/MyCard";
import PaperList from "../../components/PaperList/PaperList";
import ProfileImage from "/assets/selfie.jpg"; // Image of yourself
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGoogle,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons"; // For DBLP and OpenReview
import "./Home.css";

const Home = () => {
  return (
    <div className="app-container">
      <ParticlesComponent />
      <Sidebar />
      <main className="main-content">
        <section className="about-section">
          <div className="about-content">
            <div className="about-text">
              <h2>Yifang "Michael" Chen</h2>
              <p>
                I am Yifang "Michael" Chen, a student with a strong focus on
                research in LLM, Transformers, and Attention Mechanism.
              </p>
              <div className="social-links">
                <div className="social-item">
                  <a
                    href="https://scholar.google.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Google Scholar"
                  >
                    <FontAwesomeIcon icon={faGoogle} className="icon" />
                  </a>
                  <span>Google Scholar</span>
                </div>
                <div className="social-item">
                  <a
                    href="https://www.dblp.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="DBLP"
                  >
                    <FontAwesomeIcon icon={faFileAlt} className="icon" />
                  </a>
                  <span>DBLP</span>
                </div>
                <div className="social-item">
                  <a
                    href="https://openreview.net/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="OpenReview"
                  >
                    <FontAwesomeIcon icon={faFileAlt} className="icon" />
                  </a>
                  <span>OpenReview</span>
                </div>
                <div className="social-item">
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="LinkedIn"
                  >
                    <FontAwesomeIcon icon={faLinkedin} className="icon" />
                  </a>
                  <span>LinkedIn</span>
                </div>
                <div className="social-item">
                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="GitHub"
                  >
                    <FontAwesomeIcon icon={faGithub} className="icon" />
                  </a>
                  <span>GitHub</span>
                </div>
              </div>
            </div>
            <div className="about-image">
              <img src={ProfileImage} alt="Yifang 'Michael' Chen" />
            </div>
          </div>
        </section>
        <section className="education-section">
          <h2>Education</h2>
          <ul>
            <li>
              <strong>B.S. in Computer Science</strong>, New York University{" "}
              <span className="date">2020 - 2024</span>
            </li>
            <li>
              <strong>M.S. in Applied Data Science</strong>, University of
              Chicago <span className="date">2024 - 2026</span>
            </li>
          </ul>
        </section>
        <section className="paper-section">
          <h2>Research Papers</h2>
          <PaperList />
        </section>
      </main>
    </div>
  );
};

export default Home;
