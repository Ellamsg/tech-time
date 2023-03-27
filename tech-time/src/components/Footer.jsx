
import React from "react";
import { Link } from "react-router-dom";




export default function Footer(){

   
    return (

    <div className="footer grid pt-[90px] pb-[240px] md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-6 justify-between p-6 bg-[#000F24] text-white text-left">
       <div className="foot1 pb-2">
         <img className="py-2" src="images/techtime.png"/>
         <p>mammdbmfbnvfgvnbnv</p>
         <div className="flex gap-[32px] pt-3 flex-row">
           <img className="social-icon" src="images/facebook.png"/>
           <img className="social-icon" src="images/twitter.png"/>
           <img className="social-icon" src="images/youtube.png"/>
           <img className="social-icon" src="images/insta.png"/>
           <img className="social-icon" src="images/discord.png"/>
         </div>
       </div>
        <div className="foot2">
          <h1 className="sub-head">useful inks</h1>
          <p>gome</p>
          <p>gome</p>
          <p>gome</p>
          <p>gome</p>
          <p>gome</p>
        </div>
        <div className="foot3">
        <h1 className="sub-head">useful inks</h1>
          <p>gome</p>
          <p>gome</p>
          <p>gome</p>
          <p>gome</p>
          <p>gome</p>
        </div>
        <div className="foot3">
            <h1 className="sub-head">subscribe us</h1>
            <div className="flex ">
         <input placeholder="enter text" className="h-[46px] border-2 border-[#054FB3] bg-[#2A2A2B]"  type="text" />
         <button className="bg-oceanblue w-[123px] px-3 h-[46px] text-white">subscribe</button>
            </div>
        </div>
    </div>
    )
}