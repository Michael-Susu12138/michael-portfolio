// Sidebar.js

import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUserGraduate,
  faFileAlt,
  faEnvelope,
  faFile,
  faBlog,
} from "@fortawesome/free-solid-svg-icons";
import { faGoogle, faLinkedin } from "@fortawesome/free-brands-svg-icons"; // For external links

import OfficialImage from "/assets/official-removebg-preview.png"; // Corrected path
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="profile">
        <div className="avatar">
          <img src={OfficialImage} alt="Yifang 'Michael' Chen" />
        </div>
        <h2>Yifang "Michael" Chen</h2> {/* Reduced name size */}
        <p>Student Researcher</p>
      </div>
      <nav className="nav-menu">
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <FontAwesomeIcon icon={faHome} className="icon" />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/research"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <FontAwesomeIcon icon={faUserGraduate} className="icon" />
              Research
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/publications"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <FontAwesomeIcon icon={faFileAlt} className="icon" />
              Publications
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cv"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <FontAwesomeIcon icon={faFile} className="icon" />
              CV
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <FontAwesomeIcon icon={faEnvelope} className="icon" />
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <FontAwesomeIcon icon={faBlog} className="icon" />
              Blog
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
