// PaperList.js

import React from "react";
import Paper from "../Paper/Paper"; // Import the Paper component

const PaperList = () => {
  const papers = [
    {
      title: "Deep Learning Techniques for 3D Vision in Medical Imaging",
      authors: "Yifang 'Michael' Chen, John Doe, Jane Smith",
      publication: "International Conference on Computer Vision",
      year: 2023,
      link: "https://example.com/paper1",
    },
    {
      title: "Data Mining Applications in Healthcare",
      authors: "Yifang 'Michael' Chen, Alan Turing, Ada Lovelace",
      publication: "Journal of Data Science",
      year: 2024,
      link: "https://example.com/paper2",
    },
    // Add more papers as needed
  ];

  return (
    <div className="paper-list">
      {papers.map((paper, index) => (
        <Paper
          key={index}
          title={paper.title}
          authors={paper.authors}
          publication={paper.publication}
          year={paper.year}
          link={paper.link}
        />
      ))}
    </div>
  );
};

export default PaperList;
