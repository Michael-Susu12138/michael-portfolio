import React, { useEffect, useRef, useState } from "react";
import Navigation from "../../components/Navigation/Navigation";
import Particles from "react-tsparticles";
import Typed from "typed.js";
import {
  FaGithub,
  FaGamepad,
  FaInstagram,
  FaLinkedin,
  FaSlack,
} from "react-icons/fa";
import OfficialImage from "/assets/official-removebg-preview.png";
import "./Home.css";

const Home = () => {
  const typedSpan = useRef(null);
  const [initParticles, setInitParticles] = useState(false);

  useEffect(() => {
    if (typedSpan.current) {
      const typed = new Typed(typedSpan.current, {
        strings: ["Websites", "Mobile Applications", "Games"],
        typeSpeed: 60,
        backSpeed: 70,
        loop: true,
      });

      return () => {
        typed.destroy();
      };
    }
  }, []);

  const particlesOptions = {
    particles: {
      number: {
        value: 50,
      },
      color: {
        value: "#ffffff",
      },
      opacity: {
        value: 0.5,
      },
      size: {
        value: 3,
      },
      move: {
        speed: 3,
      },
      line_linked: {
        enable: true,
        color: "#ffffff",
      },
    },
  };

  return (
    <div
      className="p-0 m-0 border-0"
      style={{ height: "100vh", width: "100vw" }}
    >
      <Particles id="tsparticles" options={particlesOptions} />
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
            <h4>
              I design and develop{" "}
              <span ref={typedSpan} className="words"></span>
            </h4>
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
