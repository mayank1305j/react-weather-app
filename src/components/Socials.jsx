import React, { useState } from "react";

const Socials = () => {
  const initial = {
    top: "0%",
    zIndex: -1,
  };

  const change = {
    top: "-300%",
    zIndex: 1,
  };

  const initial2 = {
    top: "0%",
    zIndex: -2,
  };

  const change2 = {
    top: "-150%",
    zIndex: 1,
  };

  const [styles, setStyle] = useState(true);
  return (
    <div
      className="socials"
      onClick={() => {
        setStyle(!styles);
      }}
    >
      <i class="ri-information-fill"></i>
      <div className="linkedin" style={styles === true ? initial : change}>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/mayank-joshi-9964a51b8/"
        >
          <i className="ri-linkedin-line"></i>
        </a>
      </div>

      <div className="github" style={styles === true ? initial2 : change2}>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/mayank1305j/react-weather-app"
        >
          <i className="ri-github-fill"></i>
        </a>
      </div>
    </div>
  );
};

export default Socials;
