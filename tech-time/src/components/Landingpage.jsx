
import React from 'react'



export default function Landingpage(){

   
    return (

    <div className="flex text-white lg:px-6 lg:text-left  lg:flex-row  justify-between flex-col">
      <div className="left pt-5 lg:pt-[150px]">
     <div className=' text-white heading2 lg:w-[600px]  lg:text-[56px] text-[32px] md:text-[70px] leading-[50px] md:leading-[82px] '>
       <p>Grow your skill to </p> 
       <p>advance your career</p> 
        <p>path</p>
     </div>
        <div className="build lg:text-[16px] text-[10px]  py-3 satoshi">
           <p>Build your future with our quality education,The best and largest All-in-one</p> 
            <p>Online tutoring platform in the world </p>
        </div>
          <div className="buttons satoshi py-3 lg:justify-start justify-center flex gap-3">
            <button className='border-white gap-3 flex border-2 p-2 px-4'>
              <p>get started</p>
              <img className='mt-[5px]' src='images/arrows.png'/>
            
            
            </button>
            <button className='enroll font-bold'>Enroll Now</button>
          </div>
          <div className="imageIcons lg:justify-start py-3 justify-center flex gap-3 ">
            <div className="roundedimg">
               <img src='images/group.png'/>
            </div>
              <div className='satoshi'>
                <h1 className='text-2xl clash'>255k+</h1>
                <p>previews</p>
              </div>
          </div>
      </div>
      <div className="right flex justify-center">
        <img className=' lg:w-[675px] h-full' src='images/career.png' alt='career'/>
      </div>
        
    </div>
    )
}