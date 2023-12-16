import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css"; // Add your custom styles if needed

import check from "../../../Images/SliderMain-1.png";
import check2 from "../../../Images/SliderMain-2.png";
import check3 from "../../../Images/SliderMain-3.png";
import check4 from "../../../Images/SliderMain-4.png";
import check5 from "../../../Images/SliderMain-5.png";
const images = [
  {
    img: check,
    gradient: ["#4A0282", "#5110A0", "#632AD9"],
  },
  {
    img: check2,
    gradient: ["#8b11b6", "#550e6e", "#2d053b"],
  },
  {
    img: check3,
    gradient: ["#4A0282", "#5110A0", "#632AD9"],
  },
  {
    img: check4,
    gradient: ["#8b11b6", "#550e6e", "#2d053b"],
  },
  {
    img: check5,
    gradient: ["#4A0282", "#5110A0", "#632AD9"],
  },
]; // Add more images as needed

const MainSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // This controls the number of slides to show
    centerMode: true,
    focusOnSelect: true,
    centerPadding: "16%", // Adjust this value to control the amount of space on either side of the active slide
    beforeChange: (current, next) => setActiveIndex(next),
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  // const gradients = [
  //   ["#4A0282", "#5110A0", "#632AD9"],
  //   ["#8b11b6", "#550e6e", "#2d053b"],
  // ];

  return (
    <div className="App py-5">
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div
            key={idx}
            className={idx === activeIndex ? "centerSlide" : "sideSlide"}
          >
            <div className="slideContent">
              <div 
                className={`bg-gradient-to-r from-[${img.gradient[0]}] via-[${img.gradient[1]}] to-[${img.gradient[2]}] w-[112%] h-[480px] rounded-3xl shadow-lg flex`}
              >
                <div className="row align-items-center">
                  <div className="col-md-6 col-12 order-md-1 order-2 pb-4">
                    <div class=" px-md-5 px-2  ">
                      <div class="text-white text-center">
                        <span className="SSA_font_16px px-4 py-1 SSA_slider_demobtn">
                          Live Casino
                        </span>
                        <div className="SSA_font_32px py-3">
                          Get Royal Money Upto ₹16,000
                        </div>
                        <div
                          className="mx-5 mb-3 SSA_font_14px py-md-3 py-2"
                          style={{
                            backgroundColor: "red",
                            borderRadius: "6px",
                          }}
                        >
                          GET NOW
                        </div>
                        <div className="SSA_font_11px pt-1 px-2">
                          Play like royalty with this bonus! Available Daily.
                          Promo Code is Royalty
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-12 order-md-2 order-1">
                    <img
                      src={img.img}
                      alt="money"
                      width="100%"
                      height="auto"
                      object-fit="cover"
                      className="justify-end  ml-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MainSlider;
