
import React from "react";
import { Link } from "react-router-dom";


export default function Clients(){

   
    return (

    <div className=" bg-[#F8F9FC] p-3 py-6">
     <div className="div flex justify-center ">
      <h1 className="heading"> Browse our popular courses</h1>
     </div>
     <div className="div  text-center grey">
        <p>Lorem ipsum dolootam in ducimus corrupti tempora. Cum corrupti mollitia modi earum voluptas?</p>
        <p>Lorem ipsum dolootam in ducimus corrupti tempora. Cum corrupti mollitia modi earum voluptas?</p>
     </div>
     <div className="div flex justify-center gap-6 grey font-bold my-6">
        <p className="hover:text-oceanblue">All categories</p>
        <p className="hover:text-oceanblue">design</p>
        <p className="hover:text-oceanblue">development</p>
        <p className="hover:text-oceanblue">marketing</p>
     </div>
    </div>
    )
}