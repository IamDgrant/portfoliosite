import React, { useRef } from "react";
import Logo from "./Logo";
import Profile from "./Profile";
import "../index.css";

const Home = () => {
  const profileRef = useRef();

  const handleScrollClick = () => {
    profileRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="main-container">
        <div className="main-container-logo">
          <Logo />
          <div className="scroll-to-btn">
            <button onClick={handleScrollClick}>SCROLL</button>
          </div>
        </div>

        <div className="main-container-profile" ref={profileRef}>
          <Profile />
        </div>
      </div>
    </>
  );
};

export default Home;
