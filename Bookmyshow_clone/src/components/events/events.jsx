import React from "react";
import "./events.scss";
const Events = ({ title, datas }) => {
  return (
    <div id="event">
      <h1>{title}</h1>

      <div className="image">
        {datas.map((data, index) => (
         <img src={data} alt="" key={index}/>
        ))}
      </div>


    </div>
  );
};

export default Events;
