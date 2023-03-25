
import React from "react"

export default function Videoclasses(){

   
    return (
   
    <div className="lg:p-4 p-3 flex lg:flex-row gap-[100px]     flex-col bg-[#F8F9FC]  justify-center ">
        
     <div className='text-left pl-5 border-red border-2 relative '>
     <img className="absolute left-0" src="images/crown.png "/>
        <div className="heading">
            <p>High quality video,audio</p>
            <p>& live classes</p>
        </div>
        <div className="satoshi grey">
            <p>jhhfmbhjgkhskh gjhhgdjk fhghkjs gsdhkG jhsdg</p>
            <p>jhhfmbhjgkhskh gjhhgdjk fhghkjs gsdhkG jhsdg</p>
            <p>jhhfmbhj</p>
        </div>
        <button className="px-4 my-4 p-2 bg-oceanblue text-white">view courses</button>
        <div className=" ">
            <div className=" flex gap-3">
            <div className="audio-classes icons-flex">
               <div className="icon icon-1">
                <img src="images/volume_up.png"/>
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
            <div className=" py-2 flex gap-3">
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