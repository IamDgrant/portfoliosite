import React from "react";
import downBtn from "../assets/angle-double-down-solid.svg";

const Projects = ({ handleTechnologyClick }) => {
  return (
    <>
      <div className="title-container">projects</div>
      <div className="scroll-to-technology-container">
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
    </>
  );
};

export default Projects;
