
import React from 'react'
import Classes from '../components/Classes'
import Community from '../components/Community'
import Landingpage from '../components/Landingpage'
import Logo from '../components/Logo'
import Slider from '../components/Slider'
import Videoclasses from '../components/Videoclasses'



export default function Home(){

   
    return (

    <div className="home">
    <Landingpage/>  
    <Logo/>
    <Videoclasses/>
    <Classes/>
    <Slider/>
    <Community/>
  
    </div>
    )
}