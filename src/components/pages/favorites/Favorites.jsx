import React from 'react'
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
const Favorites = () => {
  return (
    <div >
      <div className=''>
        {/* headerportion */}
        <div>
             <div className='flex gap-3'>
          <div className='w-12 h-12 bg-linear-to-br from-red-500 to-pink-600 rounded-xl flex justify-center items-center'>  <MdFavorite className='text-white w-6 h-6 ' /></div>

          <h1 className='text-4xl text-white'>Favorites</h1>
        </div>
        <div>
          <p className='text-gray-400'>4 songs you love</p>
        </div>
        </div>
     

        {/* button  */}
        <div className='pt-7'>
          <button className='px-8 py-3 bg-white text-black rounded-full hover:bg-gray-200 flex items-center'>
            <MdFavorite />
            <h3>Play All Favorites</h3>
          </button>
        </div>

        {/* favourites */}

        <div className='flex justify-around pt-7 flex-wrap gap-5'>
          <div className='  bg-amber-200 rounded-2xl lg:w-60 lg:h-72 sm:w-56 sm:h-60 flex flex-col'>
            <div>
              <img src="" alt="" />
            </div>
            <div className='mt-auto px-5 py-6'>
              <h4 className='text-white text-xl mb-2'>chill vibes</h4>
              <p className='text-gray-300 text-sm'>24 songs</p>
            </div>
          </div>



          <div className='  bg-amber-600 rounded-2xl lg:w-60 lg:h-72 sm:w-56 sm:h-60 flex flex-col'>
            <div>
              <img src="" alt="" />
            </div>
            <div className='mt-auto px-5 py-6'>
              <h4 className='text-white text-xl mb-2'>chill vibes</h4>
              <p className='text-gray-300 text-sm'>24 songs</p>
            </div>
          </div>



          <div className='  bg-amber-900 rounded-2xl lg:w-60 lg:h-72 sm:w-56 sm:h-60 flex flex-col'>
            <div>
              <img src="" alt="" />
            </div>
            <div className='mt-auto px-5 py-6'>
              <h4 className='text-white text-xl mb-2'>chill vibes</h4>
              <p className='text-gray-300 text-sm'>24 songs</p>
            </div>
          </div>



          <div className='  bg-amber-100 rounded-2xl lg:w-60 lg:h-72 sm:w-56 sm:h-60 flex flex-col'>
            <div>
              <img src="" alt="" />
            </div>
            <div className='mt-auto px-5 py-6'>
              <h4 className='text-white text-xl mb-2'>chill vibes</h4>
              <p className='text-gray-300 text-sm'>24 songs</p>
            </div>
          </div>


        </div>

        <div className='  pt-7'>
          <div className='flex gap-6'>
            <div className='bg-gray-900 rounded-xl p-6 grow'>
              <h3 className='text-gray-400 text-sm mb-2'>Total songs</h3>
              <p className='text-3xl text-white'>4</p>
            </div>

            <div className='bg-gray-900 rounded-xl p-6  grow'>
              <h3 className='text-gray-400 text-sm mb-2'>Top Genre</h3>
              <p className='text-3xl text-white'>Electronic</p>
            </div>

            <div className='bg-gray-900 rounded-xl p-6  grow'>
              <h3 className='text-gray-400 text-sm mb-2'>Total Duration</h3>
              <p className='text-3xl text-white'>14 min</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Favorites
