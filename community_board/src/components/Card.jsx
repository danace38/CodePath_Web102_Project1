import React from "react";

function Card({ title, description, link }) {
    return (
      <div className="card">
        <h2>{title}</h2>
        <a href={link} className="button">Learn More</a>
      </div>
    )
  }
  
  export default Card;
