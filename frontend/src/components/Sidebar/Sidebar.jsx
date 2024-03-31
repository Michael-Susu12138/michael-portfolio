import React from "react";
import { NavLink } from "react-router-dom"; // Assuming you're using react-router for navigation
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faFolderOpen,
  faEnvelope,
  faBlog,
} from "@fortawesome/free-solid-svg-icons";

import OfficialImage from "/assets/official-removebg-preview.png";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="profile">
        <div className="avatar">
          <img src={OfficialImage} alt="Yifang(Michael) Chen" />
        </div>
        <h1>Yifang(Michael) Chen</h1>
        <p>Software Engineer</p>
      </div>
      <nav className="nav-menu">
        <ul>
          <li>
            <NavLink to="/" activeClassName="active">
              <FontAwesomeIcon icon={faHome} className="icon" />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active">
              <FontAwesomeIcon icon={faUser} className="icon" />
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/portfolio" activeClassName="active">
              <FontAwesomeIcon icon={faFolderOpen} className="icon" />
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active">
              <FontAwesomeIcon icon={faEnvelope} className="icon" />
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog" activeClassName="active">
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
