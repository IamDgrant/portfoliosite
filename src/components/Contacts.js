import React from "react";
import upBtn from "../assets/angle-double-up-solid.svg";

const Contact = ({ handleHomeClick }) => {
  return (
    <>
      <div className="contact-container">
        <div className="title-container">contact</div>
        <div className="profile-links-container">
          i am on
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
        <div className="email-phone-container">
          <div className="contact-text">
            <p>
              If you have any questions about me or my projects and would like
              to contact me more directly, I would love to hear from you!
            </p>
          </div>
          <div className="contact-email">
            <div>email</div>
            <a href="mailto: iamdgrant@me.com">iamdgrant@me.com</a>
          </div>
          <div className="contact-phone">
          <div>phone</div>
            <a href="tel:1-786-356-9158">786.356.9158</a>
          </div>
        </div>
        <div className="scroll-to-contacts-container">
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
    </>
  );
};

export default Contact;
