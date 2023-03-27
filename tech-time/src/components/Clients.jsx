
import React from "react";;

import Courses from "./Courses";
import Coursesdata from "./Coursesdata";
export default function Clients(){

   const newData = Coursesdata.map((item1) => {
      return <Courses {...item1} />;
    });
    return (

    <div className=" bg-[#F8F9FC] p-3 py-3">
     <div className="div flex justify-center ">
      <h1 className="heading"> Browse our popular courses</h1>
     </div>
     <div className="div  text-center grey">
        <p>Lorem ipsum dolootam in ducimus corrupti tempora. Cum corrupti mollitia modi earum voluptas?</p>
        <p>Lorem ipsum dolootam in ducimus corrupti tempora. Cum corrupti mollitia modi earum voluptas?</p>
     </div>
     <div className="div flex justify-center gap-6 grey font-bold mt-6">
        <p className="hover:text-oceanblue">All categories</p>
        <p className="hover:text-oceanblue">design</p>
        <p className="hover:text-oceanblue">development</p>
        <p className="hover:text-oceanblue">marketing</p>
     </div>
     <div className="courses-flex">{newData}</div>
     <button className="view-courses">view courses</button>
    </div>
    )
}