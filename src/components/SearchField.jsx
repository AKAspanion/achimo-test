import React from "react";

export default function (props) {
  return (
    <div data-testid="search-input" className="input-container">
      <input data-testid="search-field" type="text" {...props}></input>
    </div>
  );
}
