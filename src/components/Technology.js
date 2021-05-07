import React from "react";
import downBtn from "../assets/angle-double-down-solid.svg";

const Technology = ({handleContactsClick}) => {
  return (
    <>
      <div className="title-container">technology</div>
      <div className="scroll-to-contacts-container">
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
    </>
  );
};

export default Technology;
