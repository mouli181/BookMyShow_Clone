import React from "react";
import "./trending.scss"
const Trending = ({ title, datas }) => {
  return (
    <div id="trending">
      <h1>{title}</h1>
      <div className="inbox">
        {datas.map((data, index) => (
          <div className="box">
            <h3>{data.name}</h3>
            <h4>{data.genera}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
