
import React from "react"

export default function Videoclasses(){

   
    return (
   
    <div className="lg:p-4 lg:pl-[40px]  flex lg:flex-row gap-[10px]  relative   flex-col bg-[#F8F9FC] lg:justify-start  justify-center ">
        
     <div className='text-left lg:pl-5    relative '>
     <img className="absolute w-[40px] lg:w-[43px] left-0" src="images/crown.png "/>
        <div className="heading lg:w-[680px] ">
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

     <div className=" flex justify-center  right-[110px] lg:absolute">
        <div className="relative">
        <img className=" lg:h-[480px] h-[300px]  " src="images/absolute.png"/>
        <div className="bg-white rounded-[10px] absolute lg:top-[120px] top-[70px] left-[50px] py-1 px-3">
            <p className="lg:text-12px text-[6px]">255k+ enrolled student</p>
        <img className=" lg:w-[157px] lg:h-[44px] h-[16px]" src="images/rows.png"/>
        </div>
        

        </div>  
           
     </div>
    </div>
    )
}