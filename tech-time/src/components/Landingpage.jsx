
import React from 'react'



export default function Landingpage(){

   
    return (

    <div className="flex text-white px-6 lg:text-left  lg:flex-row  justify-between flex-col">
      <div className="left lg:pt-[150px]">
     <div className='text-[64px] heading leading-[82px] '>
       <p>Grow your skill to </p> 
       <p>advance your career</p> 
        <p>path</p>
     </div>
        <div className="build py-3 satoshi">
           <p>build your career with the best and he said he would tell me</p> 
            <p>man said he woukd take me to the </p>
        </div>
          <div className="buttons satoshi py-3 lg:justify-start justify-center flex gap-3">
            <button className='border-white border-2 p-2 px-4'>Get started now</button>
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
      <div className="right">
        <img className='' src='images/career.png' alt='career'/>
      </div>
        
    </div>
    )
}