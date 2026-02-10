import React from 'react'

const Signin = () => {
    return (
        <div>
            <div className='h-70 w-120 bg-white/2 backdrop-blur-[.2em] border border-white/2 rounded-xl shadow-lg flex flex-col  items-center justify-center '>

                <form action="" className='flex flex-col gap-7 justify-center items-center'>
                    <div>
                        <h3 className='font-medium text-2xl  text-fuchsia-50'>
                            Sign In
                        </h3>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label htmlFor="" className='text-fuchsia-50' >Enter Email Address</label>
                        <input type="email" className='w-70  h-7  bg-white/2  border-white/0  rounded-[.5em] p-3 text-[#E9854F] placeholder-gray-500 ' placeholder='email . . .' />
                    </div>

                    <div>

                        <button className='w-30 h-9 rounded-2xl  bg-[#E9854F] hover:bg-amber-600 text-gray-950' >Let's Go</button>

                    </div>
                </form>

            </div>
        </div>
    )
}

export default Signin
