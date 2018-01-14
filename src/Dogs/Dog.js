import React from "react";
import "./dog-style.css";

const Dog = ({ imageURL }) => (
  <div className="dog-img-container">
    {imageURL ? (
      <img className="dog-img" alt="" src={imageURL} />
    ) : (
      <div>
        <i className="fas fa-spinner fa-3x" /> Fetching...
      </div>
    )}
  </div>
);

export default Dog;
