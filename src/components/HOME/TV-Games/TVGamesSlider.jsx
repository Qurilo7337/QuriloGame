import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Box from "@mui/material/Box";
import { TbGridDots } from "react-icons/tb";
import { IoPlayCircle } from "react-icons/io5";
import {TVGamesDATA} from './TVGamesDATA'
import "../SportsBelt/SportsBelt.css";



function TVGamesSlider() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
      };
      return (
        <div>   <div className="d-block d-md-none py-4">
        <div className="text-white text-left pb-2 pt-4 SSA_21px_font">TV Games</div>
   <Slider {...settings}>
     
       
     {TVGamesDATA.map((item) => (
           <div className="" style={{ width: "156px", height: "210px" }}>
             <div className="SSA_TG_Image_container">
               <span className="SSA_live-badge px-2">{item.badge}</span>
               <div className="SSA_TG_overlay px-1">
                 <img src={item.img} alt="" width="100%" />
                 <div className="SSA_TG_overlay-content">
                   <span className="SSA_TG_play-icon ">
                     <IoPlayCircle
                       className="p-0 m-0"
                       fill="#ff0960"
                       size={66}
                       style={{
                         backgroundColor: "#fff",
                         borderRadius: "50%",
                         border: "0px solid transparent",
                       }}
                     />
                   </span>
                 </div>
               </div>
               <span className="SSA_SSA_TG_overlay-text">{item.text}</span>
             </div>
           </div>
         ))}
     
   </Slider>
 </div></div>
  )
}

export default TVGamesSlider