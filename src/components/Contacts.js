import React from "react";

const Contact = () => {
  return (
    <>
    <div className="title-container">contact</div>
      <div className="profile-links-container">
        i am on{" "}
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
    </>
  );
};

export default Contact;
