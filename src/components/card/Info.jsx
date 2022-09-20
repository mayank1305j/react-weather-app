import React from "react";

const Info = (props) => {
  return (
    <div className="info">
      <p>{props.name}</p> <p>{props.data}</p>
    </div>
  );
};

export default Info;
