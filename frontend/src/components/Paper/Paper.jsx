import React from "react";
import "./Paper.css";

const Paper = ({ title, authors, publication, year, link }) => {
  return (
    <div className="paper">
      <h3>{title}</h3>
      <p>
        <strong>Authors:</strong> {authors}
      </p>
      <p>
        <strong>Published in:</strong> {publication}{" "}
        <span className="year">({year})</span>
      </p>
      {link && (
        <p>
          <a href={link} target="_blank" rel="noopener noreferrer">
            View Paper
          </a>
        </p>
      )}
    </div>
  );
};

export default Paper;
