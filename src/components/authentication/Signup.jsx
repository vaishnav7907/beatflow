import React, { useState } from "react";

const Signup = ({ tosignup }) => {
  const [emaill, setEmaill] = useState("");

  const [passwordd, setPasswordd] = useState("");

  const onchangeemail = (e) => {
    setEmaill(e.target.value);
  };

  const onchangepassword = (e) => {
    setPasswordd(e.target.value);
  };

  const submitt = (prev) => {
    prev.preventDefault();
    console.log(emaill, passwordd);
    tosignup();
  };

  return (
    <div>
      <div className="h-70 w-120 bg-white/2 backdrop-blur-[.2em] border border-white/2 rounded-xl shadow-lg  flex justify-center items-center">
        <form onSubmit={submitt} className="flex flex-col gap-5 items-center">
          <div>
            <h3 className="font-medium text-2xl  text-fuchsia-50">SignUp</h3>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-fuchsia-50">
              Enter Email Address
            </label>
            <input
              type="email"
              className="w-70  h-7  bg-white/2  border-white/0  rounded-[.5em] p-3 text-[#E9854F] placeholder-gray-500 "
              placeholder="email . . ."
              value={emaill}
              onChange={onchangeemail}
            />

            <label htmlFor="" className="text-fuchsia-50 ">
              Enter Password
            </label>
            <input
              type="password"
              className="w-70  h-7  bg-white/2  border-white/0  rounded-[.5em] p-3 text-[#E9854F] placeholder-gray-500"
              placeholder="password . . ."
              value={passwordd}
              onChange={onchangepassword}
            />
          </div>
          <div>
            <button
              className="w-30 h-9 rounded-2xl  bg-[#E9854F] hover:bg-amber-600 text-gray-950"
              type="submit"
            >
              Let's Go
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
