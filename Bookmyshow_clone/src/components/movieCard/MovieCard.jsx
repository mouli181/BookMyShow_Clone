import React from "react";
import "./moviecard.scss";
import {Link} from "react-router-dom";
const MovieCard = ({title, datas}) => {
  return (
    <div id="movieCard">
      <h1>{title}</h1>

      <div className="cards">

        {datas.map((data, index) => (
          <div className="card">
            <Link to="/new"><img src={data.image} id="img" key={index} alt="" /></Link>
            
            <h2 id="goat">{data.name}</h2>
            <h3>{data.genera}</h3>
            
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieCard;
