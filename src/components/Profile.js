import React from "react";
import cogs from "../assets/cogs-solid.svg";
import headphones from "../assets/headphones-alt-solid.svg";

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-title-container">I am D. Grant</div>
      <div className="profile-about-container">
        <div className="about-sd">
          <div>I am a Software Engineer</div>
          <div className="cogs">
            <img
              src={cogs}
              alt="cogs"
              style={{ height: "30px", width: "30px" }}
            />
          </div>
        </div>
        <div className="about-mp">
          <div>I am a Music Producer</div>
          <div className="headphones">
            <img
              src={headphones}
              alt="headphones"
              style={{ height: "30px", width: "30px" }}
            />
          </div>
        </div>
      </div>
      <div className="profile-links-container">
        I am on{" "}
        <div className="linkedin-highlight">
          {" "}
          <a
            href="https://www.linkedin.com/in/andre-grant-43a6221aa/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>{" "}
        </div>
        and{" "}
        <div className="github-highlight">
          {" "}
          <a
            href="https://github.com/IamDgrant"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
