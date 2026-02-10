import React, { useState } from 'react'
import { TbBrandNeteaseMusic } from "react-icons/tb";
import { TiTick } from "react-icons/ti";
import welcomeimg from "../../assets/welcomepageimg/wlcm4.png"
import Signup from './Signup';
import Signin from './Signin';


const WelcomeInterface = ({mera}) => {

// const [signn,Setsignn] = useState()
// const a = () => {
//   mera
// }

const a = () =>{
  mera(true)
} 

  return (
    <div style={{ backgroundImage: `url('${welcomeimg}')` }} className=' bg-zinc-900 flex flex-col bg-cover bg-center h-screen p-7  '>

      <div >

        {/* navbar */}

        <div className='flex justify-between  '>

          <div ><h1 className='text-white uppercase italic text-2xl'>aura</h1></div>
          <div className="hidden sm:block"> <h1> <TbBrandNeteaseMusic size={30} color='white' /> </h1> </div>

        </div>


        {/* WELCOMEPAGE */}

        <div className='flex items-center pl-5 gap-15 '>


          <div className='flex flex-col gap-9 mt-12' >

            <div className="flex flex-col gap-9">
              <div className="">
                <h1 className='flex flex-col   md:text-[77px] font-medium '>
                  <span className='text-white  '>Dark Mode</span>
                  <span class="text-[#E9854F]  ">Bright Memory . . .</span>

                </h1>
              </div>


              <div className="">
                <p className='text-white md:text-[20px] tracking-[3px] '>Feel the rhythm, hear the clarity, <br />
                  and lose yourself in music crafted for <br /> rich and
                  immersive listening experience.</p>
              </div>
            </div>





            <div className='flex flex-col gap-13 '>
              <div className="flex gap-4 ">
                <button className='bg-[#E9854F] px-8 h-12 border flex items-center justify-center rounded-2xl'><p className=''>Sign Up</p></button>
                <button className='px-8 h-12  border border-white flex items-center justify-center rounded-2xl'> <p className='text-gray-50 '>Sign In</p></button>
              </div>



              <div className="flex  flex-col sm:flex-row  gap-7 ">
                <div className='flex gap-1.5'>
                  <p className='mt-1'><TiTick color='white' /></p>
                  <p className='text-gray-50'>Pure-toned voice</p>
                </div>

                <div className='flex gap-1.5'>
                  <p className='mt-1'><TiTick color='white' /></p>
                  <p className='text-gray-50'>Minimal</p>
                </div>

                <div className='flex gap-1.5'>
                  <p className='mt-1'><TiTick color='white' /></p>
                  <p className='text-gray-50'>Pure sound , Pure experience</p>
                </div>
              </div>
            </div>

          </div>


              {/* signup */}
          <div className=''>
            <Signup tosignup={a}/>
            {/* <Signin/> */}
          </div>


        </div>





      </div>








    </div>
  )
}

export default WelcomeInterface
