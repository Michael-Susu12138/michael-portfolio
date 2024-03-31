import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar"
import ParticlesComponent from "../../components/ParticlesComponent/ParticlesComponent";
import MyCard from "../../components/Card/MyCard";
import SocialMediaIcons from "../../components/SocialMediaLinks/SocialMediaIcons";

import "./Home.css";

const Home = () => {
  return (
    <div className="app-container">
      <ParticlesComponent />
      <Sidebar />
      {/* <SocialMediaIcons></SocialMediaIcons> */}
      <main className="main-content">
        {/* <section className="about-section">About myself</section> */}
        <MyCard></MyCard>
      </main>
    </div>
  );
};

export default Home;
