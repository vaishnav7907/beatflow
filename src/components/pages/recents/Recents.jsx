import React from 'react'
import { BsClockHistory } from "react-icons/bs";

const Recents = () => {
    return (
        <div>
            <div>
                {/* headerportion */}
                <div>

                    <div className='flex gap-3 '>
                        <div className='w-12 h-12 bg-linear-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center'>
                            <BsClockHistory className='w-6 h-6 text-white' />
                        </div>
                        <div>
                            <h3 className='text-4xl text-white'>Recently Played</h3>
                        </div>
                    </div>


                    <div>
                        <p className='text-gray-400 pt-1'>Your listening history</p>
                    </div>
                </div>

                {/* maincontent */}

                <div className='pt-10'>
                    <div className='flex gap-3'>
                        <div className='rounded-full bg-white  w-2 h-2 mt-3'> </div>
                        <h3 className='text-xl text-white mb-4  gap-2'>Today</h3>
                    </div>



                    <div className=' '>
                        <div className=' p-4 bg-gray-900/50 rounded-xl flex cursor-pointer justify-between'>

                            <div className='flex gap-3 items-center'>
                                <div className='w-16 h-16 rounded-lg bg-amber-500'></div>

                                <div className=''>
                                    <h3 className='text-white truncate'>midnight deams</h3>
                                    <p className='text-gray-400 text-sm truncate'> author </p>
                                </div>
                            </div>

                            <div className='p-4 flex gap-3'>
                                <p className='text-gray-500'>3:5</p>
                                <p className='text-gray-500'>2hours</p>

                            </div>

                        </div>






                    </div>



                    <div></div>
                    <div></div>
                </div>

            </div>
        </div>
    )
}

export default Recents
