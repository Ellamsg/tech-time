
import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function Slide(){
  const settings = {
    className: "center",
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    arrows:false,
   
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
            
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
      
  };
   
    return (

    <div className="">
      <div className="text-center">
        <h1 className="heading">what ouer client say</h1>
        <p>hdgjgfjnmg fhbgsmbb gjmbbm gjhmgnm fvfgkjnf  b  fnbmgmmngv b</p>
        <p>hdgjgfjnmg fhbgsmbb fhbmmgvknm gjmbbm gjb</p>
      </div>

      <Slider className="bg-red flex gap-6 " {...settings}>
          <div className="bg-green  p-3">
            <img src="images/splash1.png"/>
          </div>
          <div className="bg-green p-3">
          <img src="images/splash1.png"/>
          </div>
          <div className="bg-green p-3">
          <img src="images/splash1.png"/>
          </div>
          <div className="bg-green">
          <img src="images/splash1.png"/>
          </div>
          <div className="bg-green">
          <img src="images/splash1.png"/>
          </div>
          <div className="bg-green">
          <img src="images/splash1.png"/>
          </div>
        </Slider>
    </div>
    )
}