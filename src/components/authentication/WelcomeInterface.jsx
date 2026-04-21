import React, { useState } from "react";

import Signup from "./Signup";
import { PiUserSwitch } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

const WelcomeInterface = () => {     //{setIsLogin}
  // const [signn,Setsignn] = useState()
  // const a = () => {
  //   mera
  // }

const navigation = useNavigate()

  

 


  return (
    <div className={"bg-black  min-h-screen flex  justify-center items-center  "  } >
      <div className=" ">
        <div className="flex justify-center items-center flex-col gap-7" > 

          <div >
              <h1 className="text-white text-6xl font-bold "><span className="text-red-600">F</span><span className="animate-pulse">eel</span> <span className="animate-pulse">The</span> <span className="animate-pulse">Beat</span></h1>
          </div>

          <div className="flex text-white hover:text-red-500 hover:scale-110 transition duration-300">
            <PiUserSwitch size={30} onClick={()=>navigation("/authentication")}/>
         </div>




             


          {/* <div className='hidden'>
            <Signup  tosignup={handleLogin}/>
            
          </div> */}
           
        
        </div>



        {/* signup */}
       
      </div>
    </div>
  );
};

export default WelcomeInterface;
