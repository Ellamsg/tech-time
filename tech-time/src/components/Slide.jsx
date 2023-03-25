import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Slide() {
  const settings = {
    className: "center",
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    arrows: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
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

  return (
    <div className="bg-[#F8F9FC]  py-6">
      <div className="text-center">
        <h1 className="heading">what ouer client say</h1>
        <p className="grey">hdgjgfjnmg fhbgsmbb gjmbbm gjhmgnm fvfgkjnf b fnbmgmmngv b</p>
        <p className="grey">hdgjgfjnmg fhbgsmbb fhbmmgvknm gjmbbm gjb</p>
      </div>

      <Slider className=" flex gap-6 " {...settings}>
        <div className=" card   ">
        <div className="pad mx-2 p-3 ">
          <div>
            <p className="">
             
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              iusto vel, incidunt modi quia provident? Id hic sequi sapiente
              ipsa dolorem tempore exercitationem iusto, consequatur quod
              blanditiis, cum ipsum porro!
            </p>
          </div>

          <div className=" img-card  ">
            <img src="images/circle1.png" />
            <div>
              <p className="texts">Bella moon</p>
              <p className="grey">product designer</p>
            </div>
          </div>
          </div>
        </div>
        <div className=" card   ">
        <div className="pad mx-2 p-3 ">
          <div>
            <p>
             
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              iusto vel, incidunt modi quia provident? Id hic sequi sapiente
              ipsa dolorem tempore exercitationem iusto, consequatur quod
              blanditiis, cum ipsum porro!
            </p>
          </div>

          <div className=" img-card  ">
            <img src="images/circle1.png" />
            <div>
              <p className="texts">Bella moon</p>
              <p className="grey">product designer</p>
            </div>
          </div>
          </div>
        </div>
        <div className=" card   ">
        <div className="pad mx-2 p-3 ">
          <div>
            <p>
             
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              iusto vel, incidunt modi quia provident? Id hic sequi sapiente
              ipsa dolorem tempore exercitationem iusto, consequatur quod
              blanditiis, cum ipsum porro!
            </p>
          </div>

          <div className=" img-card  ">
            <img src="images/circle1.png" />
            <div>
              <p className="texts">Bella moon</p>
              <p className="grey">product designer</p>
            </div>
          </div>
          </div>
        </div>
        <div className=" card">
          <div className="pad mx-2 p-3 ">
        <div>
            <p>
             
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              iusto vel, incidunt modi quia provident? Id hic sequi sapiente
              ipsa dolorem tempore exercitationem iusto, consequatur quod
              blanditiis, cum ipsum porro!
            </p>
          </div>

          <div className=" img-card  ">
            <img src="images/circle1.png" />
            <div>
              <p className="texts">Bella moon</p>
              <p className="grey">product designer</p>
            </div>
            </div>
          </div>
        </div>
        
      </Slider>
    </div>
  );
}
