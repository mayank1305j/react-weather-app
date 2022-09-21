import React, { useState, useEffect } from "react";
import Switch from "react-switch";

const Darkmode = () => {
  const [theme, setTheme] = useState("light");

  function ToggleTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <Switch
      className="switch"
      onChange={ToggleTheme}
      checked={theme === "dark"}
      onColor="#a276d9"
      onHandleColor="#191970"
      handleDiameter={30}
      uncheckedIcon={
        <svg viewBox="0 0 10 10" height="100%" width="100%" fill="yellow">
          <circle r={3} cx={5} cy={5} />
        </svg>
      }
      checkedIcon={
        <svg viewBox="0 0 10 10" height="100%" width="100%" fill="#fff">
          <circle r={3} cx={5} cy={5} />
        </svg>
      }
      uncheckedHandleIcon={
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            fontSize: 20,
          }}
        >
          🌤️
        </div>
      }
      checkedHandleIcon={
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            color: "yellow",
            fontSize: 18,
          }}
        >
          🌖
        </div>
      }
    />
  );
};

export default Darkmode;
