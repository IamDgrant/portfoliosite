import React from "react";
import downBtn from "../assets/angle-double-down-solid.svg";

const Logo = ({ handleProfileClick }) => {
  return (
    <>
      <div className="logo-container">
        <div className="dgrant">i am D. Grant</div>
        <div className="scroll-to-profile-container">
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
    </>
  );
};

export default Logo;
