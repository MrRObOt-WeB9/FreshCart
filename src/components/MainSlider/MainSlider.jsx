import React, { useEffect, useState } from "react";
import style from "./MainSlider.module.css";
import slide1 from "../../assets/images/slider-image-1.jpeg";
import slide2 from "../../assets/images/slider-image-2.jpeg";
import slide3 from "../../assets/images/slider-image-3.jpeg";
import banner1 from "../../assets/images/blog-img-1.jpeg";
import banner2 from "../../assets/images/blog-img-2.jpeg";
import Slider from "react-slick";
export default function MainSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  };

  return (
    <>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-3/4">
          <Slider {...settings}>
            <div>
              <img
                src={slide1}
                className="w-full h-[20rem] object-cover"
                alt=""
              />
            </div>
            <div>
              <img
                src={slide2}
                className="w-full h-[20rem] object-cover"
                alt=""
              />
            </div>
            <div>
              <img
                src={slide3}
                className="w-full h-[20rem] object-cover"
                alt=""
              />
            </div>
          </Slider>
        </div>
        <div className="w-full md:w-1/4">
          <div className="flex md:flex-col">
            <div>
              <img src={banner1} className="w-full h-[10rem]" alt="" />
            </div>
            <div>
              <img src={banner2} className="w-full h-[10rem]" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
