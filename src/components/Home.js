import React, { useRef } from "react";
import Logo from "./Logo";
import Profile from "./Profile";
import downBtn from "../assets/angle-double-down-solid.svg";
import upBtn from "../assets/angle-double-up-solid.svg";
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
          <div className="scroll-to-btn-container">
            <button
              onClick={handleScrollClick}
              style={{
                cursor: "pointer",
                padding: "0",
                border: "none",
                background: "none",
              }}
            >
              <img
                src={downBtn}
                alt="down arrow"
                style={{
                  width: "40px",
                  height: "40px",
                }}
              />
            </button>
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
