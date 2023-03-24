import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function Nav() {
  let Links = [
    { name: "Home", link: "/" },
    { name: "Product", link: "/Product/:id" },
    { name: "Help", link: "Help" },
    { name: "Blog", link: "" },
    { name: "Landing", link: "" },
    { name: "Landing", link: "" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="p-2 px-6">
        
      <div className="bg-red sticky   top-0 left-0 md:p-0  lg:text-xl text-xl md:text-base">
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
            className={`md:flex md:items-center bg-black justify lg:gap-[70px] text-white  
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
           
          </ul>
        </div>
      </div>
    </div>
  );
}
