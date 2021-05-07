import React, { useRef } from "react";
import Logo from "./Logo";
import Profile from "./Profile";
import Contacts from "./Contacts";
import Projects from "./Projects";
import Technology from "./Technology";
import downBtn from "../assets/angle-double-down-solid.svg";
import upBtn from "../assets/angle-double-up-solid.svg";
import "../index.css";

const Home = () => {
  const profileRef = useRef();
  const projectsRef = useRef();
  const technologyRef = useRef();
  const contactsRef = useRef();
  const homeRef = useRef();

  const handleProfileClick = () => {
    profileRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleProjectsClick = () => {
    projectsRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleTechnologyClick = () => {
    technologyRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleContactsClick = () => {
    contactsRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleHomeClick = () => {
    homeRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="main-container">
        <div className="main-container-logo" ref={homeRef}>
          <Logo />
          <div className="scroll-to-btn-container">
            <button
              onClick={handleProfileClick}
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
          <div className="scroll-to-btn-container">
            <button
              onClick={handleProjectsClick}
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
        <div className="main-container-projects" ref={projectsRef}>
          <Projects />
          <div className="scroll-to-btn-container">
            <button
              onClick={handleTechnologyClick}
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
        <div className="main-container-technology" ref={technologyRef}>
          <Technology />
          <div className="scroll-to-btn-container">
            <button
              onClick={handleContactsClick}
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
        <div className="main-container-contacts" ref={contactsRef}>
          <Contacts />
          <div className="scroll-to-btn-container">
            <button
              onClick={handleHomeClick}
              style={{
                cursor: "pointer",
                padding: "0",
                border: "none",
                background: "none",
              }}
            >
              <img
                src={upBtn}
                alt="down arrow"
                style={{
                  width: "40px",
                  height: "40px",
                }}
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
