import React, { useState } from 'react'
import { IoSearch } from "react-icons/io5";
import listeningmusic from "../../assets/welcomepageimg/listeningmusic.png"
import listeningmusic2 from "../../assets/welcomepageimg/listeningmusic2.png"
import listeningmusic3 from "../../assets/welcomepageimg/listeningmusic33.png"
import listeningmusic4 from "../../assets/welcomepageimg/listeningmusic44.png"

const Homepage = () => {


    const [space , setSpace]= useState(true)
    return (
        <div className=' w-full flex flex-col gap-9  h-screen ' >
            <div className='flex flex-col gap-7'>



                <div>
                    <h1 className="text-4xl text-white mb-2">
                        Discover Music
                    </h1>

                    <p className="text-gray-400">Find your next favorite track</p>
                </div>

                {/* search bar */}
                <div className=' flex justify-start items-center relative '>
                    <input type="text" className=' w-full bg-gray-900  border-gray-800 rounded-xl px-12 py-4 text-white  ' placeholder="Search for songs or artists..." />
                    <IoSearch className='text-gray-400 absolute mr-2 w-10' size={21} />
                </div>


                {/* categoriesname */}
                <div className='flex gap-3'>


                    <button className=' bg-gray-900 px-6 py-2 rounded-full'><p>All</p></button>
                    <button className=' bg-gray-900 px-6 py-2 rounded-full'><p>Tamil</p></button>
                    <button className=' bg-gray-900 px-6 py-2 rounded-full'><p>Malayalam</p></button>
                    <button className=' bg-gray-900 px-6 py-2 rounded-full'> <p>Hindi</p></button>

                </div>
            </div>



            {/* featured section */}



            <div className='flex flex-col gap-5'>
                <div>
                    <h1 className='text-2xl text-white '>Featured</h1>
                </div>


                <div className='  w-full '>

                    <div className='h-64 bg-white rounded-2xl bg-linear-to-r from-gray-800 via-gray-900 to-black    flex justify-between items-center px-9 '>
                        <div className='flex flex-col gap-3'>
                            <h1 className='text-4xl text-white'>Your Weekly Mix</h1>
                            <p className='text-gray-400'>Personalized playlist just for you</p>
                            <button className='py-2 w-27 bg-white text-black rounded-full hover:bg-gray-200 '>Play Now</button>
                        </div>

                        <div className='w-48 h-48 bg-linear-to-br from-gray-700 to-gray-900 rounded-xl   '>

                        </div>


                    </div>
                </div>
            </div>

            {/* all songs */}

            <div>
                <div >

                    <div className=' '><h1>Songs</h1></div>

                    <div className='flex flex-wrap gap-9  justify-between'>
                        <div className='h-64 w-58 bg-gray-800 rounded-2xl '>
                            <div className='w-full h-47 object-cover overflow-hidden rounded-tl-2xl rounded-tr-2xl'>
                                <img src={listeningmusic} alt=""  className='opacity-80'/>
                            </div>

                            {/* spring */}

                            <div className='flex justify-center items-center pt-7'>
                                <h1 className='text-white text-2xl truncate'>Soft rebirth </h1>
                            </div>

                        </div>


                        <div className='h-64 w-58 bg-gray-800 rounded-2xl'>
                            <div className='w-full h-47 object-cover overflow-hidden rounded-tl-2xl rounded-tr-2xl'>
                                <img src={listeningmusic2} alt="" className='opacity-80'/>
                            </div>

                            {/* summmer */}
                            <div className='flex justify-center items-center pt-7'>
                                <h1 className='text-white text-2xl truncate'>Sun-kissed</h1>
                            </div>
                        </div>


                        <div className='h-64 w-58 bg-gray-800 rounded-2xl '>
                            <div  className='w-full h-47 object-cover overflow-hidden rounded-tl-2xl rounded-tr-2xl'>
                                <img src={listeningmusic3} alt="" className='opacity-80'/>
                            </div>
                            {/* autumn */}
                            <div className='flex justify-center items-center pt-7'>
                                <h1 className='text-white text-2xl truncate'>Amber hush</h1>
                            </div>
                        </div>

                        <div className='h-64 w-58 bg-gray-800 rounded-2xl'>
                            <div className='w-full h-47 object-cover overflow-hidden rounded-tl-2xl rounded-tr-2xl'>
                                <img src={listeningmusic4} alt="" className='opacity-80'/>
                            </div>
                            {/* winter */}

                            <div className='flex justify-center items-center pt-7'>
                                <h1 className='text-white text-2xl truncate '>Winter’s Veil</h1>
                            </div>

                        </div>
                    </div>

                </div>
            </div>


        </div>
    )
}

export default Homepage
