import React from "react";
import Profile from "./Profile";
import "../index.css";

const Home = () => {
  return (
    <>
      <div className="main-container">
        <div className="main-container-profile">
          <Profile />
        </div>
      </div>
    </>
  );
};

export default Home;
