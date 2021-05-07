import React, { useRef } from "react";
import Logo from "./Logo";
import Profile from "./Profile";
import Contacts from "./Contacts";
import Projects from "./Projects";
import Technology from "./Technology";
import "../index.css";

const Home = () => {
  const profileRef = useRef();
  const projectsRef = useRef();
  const technologyRef = useRef();
  const contactsRef = useRef();
  const homeRef = useRef();

  const handleProfileClick = (e) => {
    e.preventDefault();
    profileRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleProjectsClick = (e) => {
    e.preventDefault();
    projectsRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleTechnologyClick = (e) => {
    e.preventDefault();
    technologyRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleContactsClick = (e) => {
    e.preventDefault();
    contactsRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleHomeClick = (e) => {
    e.preventDefault();
    homeRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="main-container">
        <div className="main-container-logo" ref={homeRef}>
          <Logo handleProfileClick={handleProfileClick} />
        </div>
        <div className="main-container-profile" ref={profileRef}>
          <Profile handleProjectsClick={handleProjectsClick} />
        </div>
        <div className="main-container-projects" ref={projectsRef}>
          <Projects handleTechnologyClick={handleTechnologyClick} />
          {/* <div className="scroll-to-technology-container">
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
          </div> */}
        </div>
        <div className="main-container-technology" ref={technologyRef}>
          <Technology handleContactsClick={handleContactsClick} />
          {/* <div className="scroll-to-contacts-container">
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
          </div> */}
        </div>
        <div className="main-container-contacts" ref={contactsRef}>
          <Contacts handleHomeClick={handleHomeClick} />
          {/* <div className="scroll-to-btn-container">
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
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Home;
