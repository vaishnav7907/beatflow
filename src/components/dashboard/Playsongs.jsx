import React from 'react'
import vv from "../../assets/welcomepageimg/vv.png"
// import { PiShuffleFill } from "react-icons/pi";
import { IoPlaySkipBackOutline } from "react-icons/io5";
import { IoPlaySkipForwardOutline } from "react-icons/io5";
import { FaRegCirclePlay } from "react-icons/fa6";
// import { FaRegCirclePause } from "react-icons/fa6";
import { FiVolume2 } from "react-icons/fi";
// import { FiVolumeX } from "react-icons/fi";

const Playsongs = () => {
  return (
    <div className='fixed  bottom-0 right-0 left-0 bg-linear-to-t from-black via-gray-900 to-transparent backdrop-blur-lg w-full p-6 border-t border-gray-800'>

        <div className='flex justify-between'>
            <div className='flex gap-3'>
                <div className='w-14 h-14 bg-amber-300 '><img src="" alt="" className='w-full h-full object-cover'/></div>
                <div className='pt-2'>
                    <h1 className='text-white text-sm truncate'>midn</h1>
                    <p className='text-gray-400 text-xs truncate'>gbygnuhmi</p>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <div className='flex gap-3 '>
                    {/* <button><PiShuffleFill color='white'className='w-5 h-5'/></button> */}
                    <button><IoPlaySkipBackOutline color='white'className='w-5 h-5'/></button>
                    <button><FaRegCirclePlay color='white'className='w-5 h-5'/></button>
                    {/* <button><FaRegCirclePause /></button> */}
                    <button><IoPlaySkipForwardOutline color='white'className='w-5 h-5'/></button>
                </div>
                <div className='flex gap-3 '>
                   <p className='text-white'>jh</p> 
                    <input type="range" className='w-full max-w-lg h-1 mt-2.5'/>
                    <p className='text-white'>jh</p>
                    
                </div>
            </div>

            <div className='flex gap-3 justify-center items-center'> 
                <div className='pt-3'>
                    <button><FiVolume2 className='w-5 h-5 text-white'/></button>
                    {/* <button><FiVolumeX /></button> */}
                </div>
                <div><input type="range" className='w-full max-w-lg h-1 mt-2.5'/></div>
            </div>
        </div>
      
    </div>
  )
}

export default Playsongs
