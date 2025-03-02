import React, { useEffect, useState } from "react";
import style from "./CategorySlider.module.css";
import Slider from "react-slick";
import axios from "axios";

export default function CategorySlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    className: "center",
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          rows: 2,
          slidesPerRow: 1,
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          rows: 2,
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [categoryImages, setCategoryImages] = useState([]);
  const [loading, setLoading] = useState(true);
  async function getCategoryImages() {
    let { data } = await axios.get(
      `https://ecommerce.routemisr.com/api/v1/categories`
    );
    setCategoryImages(data.data);
    setLoading(false);
  }
  useEffect(() => {
    getCategoryImages();
  }, []);

  return (
    <>
      <div className="slider-container">
        <Slider {...settings}>
          {categoryImages.map((obj, index) => (
            <div key={index}>
              <img
                src={obj.image}
                className="w-full h-[12.5rem] object-cover object-top cursor-grab"
              />
              <p className="font-bold text-center text-xl">{obj.name}</p>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}
