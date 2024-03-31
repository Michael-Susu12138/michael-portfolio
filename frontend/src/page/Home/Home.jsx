import React from "react";
import Sidebar from "../../components/SideBar/SideBar";

import "./Home.css";

const Home = () => {
  return (
    <div className="app-container">
      <Sidebar />
      <main className="main-content">
        <section className="about-section">About myself</section>
      </main>
    </div>
  );
};

export default Home;
