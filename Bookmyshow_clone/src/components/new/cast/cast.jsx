import React from 'react';
import { cast_images } from "../../images/image.jsx";
import "./cast.scss";

const Cast = ({title}) => {
  return (
    <div id="cast">
      <h1>{title}</h1>
      <div className="cpus">
          {cast_images.map((data, index) => (
          <div className="cpu">
            <img src={data.image} id="img" key={index} alt="" />
            <h2>{data.name}</h2>
            <h3>{data.genera}</h3>
           </div>
          ))}
    </div>
    </div>
  );
};

export default Cast;

