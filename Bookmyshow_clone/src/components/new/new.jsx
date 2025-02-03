import React from "react";
import img2 from "../../assests/img2.avif";
import "./new.scss";
// import Cast from './components/new/cast/cast.jsx';
import Cast from "../new/cast/cast.jsx";
import Crew from "../new/crew/crew.jsx";
import You from "../new/You/you.jsx";
import { you_images } from "../images/image.jsx";
// import Footer from "../footer/footer.jsx";

const New = () => {
  return (
    <div id="modern">
      <div className="center">                                                                                            
        <div className="pic">
          <img src={img2} alt="" />
          <p>In cinemas</p>
        </div>
        <div className="words">
          <h1>The Greatest of All Time</h1>
        </div>

        <use href="/chunks/icons/common-icons-9e3509ac.svg#icon-star"></use>
      </div>
      <div className="center2">
        <h1>About the movie</h1>
        <p>
          Consequences of an unknown past haunt the present of a special
          anti-terrorist squad. How will they confront it?
        </p>
        <hr />
        <Cast title={"Cast"} />
        <hr />
        <Crew title={"Crew"} />
        <hr />
        <You title={"You might also like"} datas={you_images} />
      </div>
      
    </div>
  );
};

export default New;
