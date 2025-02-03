import React from "react";
import { crew_images } from "../../images/image.jsx";
import "./crew.scss";

const Crew = ({ title }) => {
  return (
    <div id="crew">
      <h1>{title}</h1>
      <div className="pictures">
        {crew_images.map((data, index) => (
          <div className="picture">
            <img src={data.image} id="img" key={index} alt="" />
            <h2>{data.name}</h2>
            <h3>{data.genera}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Crew;
