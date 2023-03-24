
import React from 'react'



export default function Landingpage(){

   
    return (

    <div className="flex text-white px-6 text-left  md:flex-row justify-between flex-col">
      <div className="left">
     <div className='text-[64px]  leading-[82px]'>
       <p>Grow your skill to</p> 
       <p>advance your career</p> 
        <p>path</p>
     </div>
        <div className="build ">
           <p>build your career with the best and he said he would tell me</p> 
            <p>man said he woukd take me to the </p>
        </div>
          <div className="buttons flex gap-3">
            <button className='border-white border-2 p-2 px-4'>Get started now</button>
            <button className='bg-white text-oceanblue p-2 px-4'>enroll now</button>
          </div>
          <div className="imageIcons flex gap-3 ">
            <div className="roundedimg">
               <img src='images/group.png'/>
            </div>
              <div>
                <h1 className='text-2xl '>255k</h1>
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