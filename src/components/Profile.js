import React from "react";
import cogs from "../assets/cogs-solid.svg";
import headphones from "../assets/headphones-alt-solid.svg";

const Profile = () => {
  return (
    <div className="profile-container">
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
    </div>
  );
};

export default Profile;
