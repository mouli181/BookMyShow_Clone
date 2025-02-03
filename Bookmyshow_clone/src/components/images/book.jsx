import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Events from "../events/events";
import MovieCard from "../movieCard/MovieCard";
import Banner from "../banner/banner"
import "./book.scss";
import { book_images, events_images, recommended_images,music_images,entertainment, trends} from "./image";
import Trending from "../trending/trending";
// import { FaPlayCircle } from "react-icons/fa";


const Book = () => {
  return (
    <div id="book">
      <div className="slider">
        <Swiper
          modules={[ A11y]}
          spaceBetween={20}
          slidesPerView={1}
          
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {book_images.map((data, index) => (
            <SwiperSlide key={index} className="box">
              <img src={data} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <MovieCard title={"Recommended Movies"} datas={recommended_images}/>
      <Banner data={entertainment}/>
      <Events title={"The Best Of Live Events"} datas={events_images}/>
      <MovieCard title={"Your Music Studio"} datas={music_images}/>
      <Trending title={"Trending Searches Right Now"} datas={trends}/>


      

      
    </div>
  );
};

export default Book;
