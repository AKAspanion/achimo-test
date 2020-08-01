import React from "react";

export default function (props) {
  return (
    <div className="input-container">
      <input type="text" {...props}></input>
    </div>
  );
}
