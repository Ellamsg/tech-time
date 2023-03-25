import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function Nav() {
  let Links = [
    { name: "Home", link: "/" },
    { name: "Product", link: "/Product/:id" },
    { name: "Help", link: "Help" },
    { name: "Blog", link: "" },
    { name: "Landing", link: "" },
   
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="md:p-2 md:px-6">
        
      <div className=" sticky s  top-0 left-0 md:p-0  lg:text-xl text-xl text-[16px]">
        <div className="md:flex items-center md:py-4 justify-between lg:gap-6  ">
          <div className="md:pl-0 pl-2 text-white">
            <img src="images/techtime.png" />
          </div>

          <div
            onClick={() => setOpen(!open)}
            className=" absolute right-2 top-2 cursor-pointer md:hidden"
          >
            <img
              className="w-4"
              name={open ? "close" : "menu"}
              src="image/menu-svgrepo-com.svg"
            />
            <p className="text-white">.</p>
          </div>

          <ul
            className={`md:flex md:items-center md:bg-transparent bg-black w-full justify-end  text-white  
         absolute md:static md:z-auto z-[-1] 
        left-0   transition-all duration-500 
        ease-in ${open ? "top-0 " : "top-[-490px]"}`}
          >
            <div className="md:flex md:items-center  font-name">
              {Links.map((link) => (
                <div className="">
                  <li className=" px-2 ">
                    <Link to={link.link} className="  duration-500">
                      {link.name}
                    </Link>
                  </li>
                 
                </div>
                
              ))}
            </div>
            <button className="bg-red  enroll">enroll</button>
           
          </ul>
        </div>
      </div>
    </div>
  );
}
