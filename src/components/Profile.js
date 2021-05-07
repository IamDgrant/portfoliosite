import React from "react";
import downBtn from "../assets/angle-double-down-solid.svg";
import cogs from "../assets/cogs-solid.svg";
import headphones from "../assets/headphones-alt-solid.svg";

const Profile = ({ handleProjectsClick }) => {
  return (
    <div className="profile-container">
      <div className="title-container">about me</div>
      <div className="profile-about-container">
        <div className="about-sd">
          <div>i am a Software Engineer</div>
          <div className="cogs">
            <img
              src={cogs}
              alt="cogs"
              style={{ height: "30px", width: "30px" }}
            />
          </div>
        </div>
        <div className="about-mp">
          <div>i am a Music Producer</div>
          <div className="headphones">
            <img
              src={headphones}
              alt="headphones"
              style={{ height: "30px", width: "30px" }}
            />
          </div>
        </div>
      </div>
      <div className="scroll-to-profile-container">
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
  );
};

export default Profile;
