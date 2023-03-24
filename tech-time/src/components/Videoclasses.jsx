
import React from "react"

export default function Videoclasses(){

   
    return (
   
    <div className="p-6 flex flex-row gap-5  bg-[#F8F9FC] justify-center ">
     <div className='text-left'>
        <div className="text-[56px] leading-[70px] font-bold">
            <p>High quality video,audio</p>
            <p>& live classes</p>
        </div>
        <div>
            <p>jhhfmbhjgkhskh gjhhgdjk fhghkjs gsdhkG jhsdg</p>
            <p>jhhfmbhjgkhskh gjhhgdjk fhghkjs gsdhkG jhsdg</p>
            <p>jhhfmbhj</p>
        </div>
        <button className="px-4 my-4 p-2 bg-oceanblue">view courses</button>
        <div className=" grid grid-cols-2  gap-3">
            <div className="audio-classes icons-flex">
            <div className="icon">
                <img src="images/volume_up.png"/>
                </div>
                <div className="texts">Audio classes</div>
            </div>
            <div className="live-classes icons-flex">
            <div className="icon">
            <img src="images/search.png"/>
                </div>
                <div className="texts">Live classses</div>
            </div>
            <div className="Recorded-classes icons-flex">
               <div className="icon">
               <img src="images/autoplay.png"/>
               </div>
               <div className="texts">Recorded clases</div>
            </div>
            <div className="notes icons-flex">
            <div className="icon">
            <img src="images/description.png"/>
                </div>
                <div className="texts"></div>50+-Notes
            </div>

        </div>
     </div>

     <div className="flex justify-center bg-red relative">
         
           <img src="images/splash1.png"/>
     </div>
    </div>
    )
}