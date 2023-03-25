
import React from "react"

export default function Videoclasses(){

   
    return (
   
    <div className="lg:p-4  flex lg:flex-row gap-[100px]     flex-col bg-[#F8F9FC]   justify-center ">
        
     <div className='text-left lg:pl-5  border-red border-2 relative '>
     <img className="absolute w-[40px] lg:w-[43px] left-0" src="images/crown.png "/>
        <div className="heading lg:w-[680px]    ">
            <p>High quality video,audio & live classes</p>
        </div>
        <div className="satoshi lg:text-left text-center grey">
            <p>jhhfmbhjgkhskh gjhhgdjk fhghkjs gsdhkG jhsdg</p>
            <p>jhhfmbhjgkhskh gjhhgdjk fhghkjs gsdhkG jhsdg</p>
            <p>jhhfmb</p>
        </div>
        <div className="flex lg:justify-start justify-center">
        <button className="px-4 my-4 p-2  bg-oceanblue text-white">view courses</button>
        </div>
       
        <div className="  ">
            <div className=" flex gap-3  lg:justify-start justify-center ">
            <div className="audio-classes  icons-flex">
               <div className="icon icon-1">
                <img className="" src="images/volume_up.png"/>
                </div>
              <div className="texts">Audio classes</div>
            </div>
            <div className="live-classes icons-flex">
            <div className="icon icon-2">
            <img src="images/search.png"/>
                </div>
                <div className="texts">Live classses</div>
            </div>
            </div>
            <div className=" py-2 flex justify-center lg:justify-start gap-3">
            <div className="Recorded-classes icons-flex">
               <div className="icon icon-3">
               <img src="images/autoplay.png"/>
               </div>
               <div className="texts">Recorded clases</div>
            </div>
            <div className="notes icons-flex ">
            <div className="icon icon-4">
            <img src="images/description.png"/>
                </div>
                <div className="texts">50+-Notes</div>
            </div>
           </div>
        </div>
     </div>

     <div className="  border-red border-2 flex justify-center relative">
        <div className="">
        <img className=" lg:h-[430px] h-[300px]  " src="images/splash1.png"/>
        </div>  
           
     </div>
    </div>
    )
}