import "./Home.css";
import React from "react";
import Navigation from "../../components/Navigation/Navigation";
import {
  FaGithub,
  FaGamepad,
  FaInstagram,
  FaLinkedin,
  FaSlack,
} from "react-icons/fa";
import OfficialImage from "/assets/official-removebg-preview.png"; // Adjust the path to where you have your image

const Home = () => {
  return (
    <div
      style={{ height: "100vh", width: "100vw" }}
      className="p-0 m-0 border-0"
    >
      <Navigation />
      <div
        id="body-content"
        className="container d-flex align-items-center justify-content-center"
      >
        <div className="row">
          <div className="col-md-6 text-body">
            <h2>
              Hello! <br /> I'm Michael Chen
            </h2>
            <h3>
              I am a <span>Software Engineer</span>
            </h3>
            <h4>I design and develop</h4>
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="https://github.com">
                  <FaGithub />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://itch.io">
                  <FaGamepad />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://instagram.com">
                  <FaInstagram />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://linkedin.com">
                  <FaLinkedin />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://slack.com">
                  <FaSlack />
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-6">
            <img src={OfficialImage} alt="Michael Chen" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
