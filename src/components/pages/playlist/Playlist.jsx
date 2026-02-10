import React from 'react'
import { GoPlus } from "react-icons/go";

const Playlist = () => {
    return (
        <div>
            <div>

                {/* header area */}

                <div className='flex justify-between'>
                    <div>
                        <h1 className='text-4xl text-white mb-2'>Your Playlists</h1>
                        <p className='text-gray-400'>Curated collections of your favorite music</p>
                    </div>
                    <div className=''>
                        <button className='flex items-center gap-2 py-2 px-6 bg-white text-black rounded-full hover:bg-gray-200'>
                            <GoPlus />
                            <p className=''>Create Playlist</p>
                        </button>

                    </div>
                </div>

                {/* playlist area */}

                <div className=' flex justify-around  pt-16 gap-5 flex-wrap'>
                    <div className='  bg-amber-200 rounded-2xl lg:w-80 lg:h-80 sm:w-60 sm:h-60 flex flex-col'>
                        <div>
                            <img src="" alt="" />
                        </div>
                        <div className='mt-auto px-5 py-6'>
                            <h4 className='text-white text-xl mb-2'>chill vibes</h4>
                            <p className='text-gray-300 text-sm'>24 songs</p>
                        </div>
                    </div>



                    <div className='rounded-2xl lg:w-80 lg:h-80 sm:w-60 sm:h-60 bg-blue-400 flex flex-col'>
                        <div>
                            <img src="" alt="" />
                        </div>
                        <div className='mt-auto px-5 py-6'>
                            <h4 className='text-white text-xl mb-2'>workout vibes</h4>
                            <p className='text-gray-300 text-sm'>10 songs</p>
                        </div>
                    </div>


                    <div className='rounded-2xl lg:w-80 lg:h-80 sm:w-60 sm:h-60 bg-amber-600 flex flex-col '>
                        <div>
                            <img src="" alt="" />
                        </div>
                        <div className='mt-auto px-5 py-6'>
                            <h4 className='text-white text-xl mb-2'>night vibes</h4>
                            <p className='text-gray-300 text-sm'>36 songs</p>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Playlist
