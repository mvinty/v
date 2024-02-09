"use client"
import React from 'react'
import { useState } from 'react';
import Image from "next/image";
import Confetti from '../Confetti'

const Button = () => {
    const [showImage, setShowImage] = useState(false);

    const toggleImage = () => {
        setShowImage(true);
    };
  return (
     
    <div>
         {showImage && <div className='fixed inset-0 flex justify-center items-center'>
            <Confetti></Confetti>
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                 <Image 
          src="/m.gif"
          width={900}
          height={900}
          alt="cat pic"
            /> 
            <h1 className='font-bold text-6xl'>YIPEEEEEEEEE</h1>
            </div>
           
        </div>}
          
    <button onClick={toggleImage} className='bg-rose-500/75 rounded-full py-2 px-2 hover:bg-rose-500/50 mt-[-30px]'>
        YES!!!
    </button>
    </div>
    
  )
}

export default Button
