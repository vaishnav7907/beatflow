import React, { useState } from "react";
import axios from "axios";

const Signin = ({ onLoginSuccess }) => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const submit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/Beatflow/login`,
        {
          Email,
          Password,
        }
      );

      localStorage.setItem("token", res.data.token);

      onLoginSuccess();
    } catch (error) {
      console.log(error);
      alert("Login failed ");
    }
  };

  return (
    <div className="h-70 w-120 bg-white/2 backdrop-blur-[.2em] border rounded-xl shadow-lg flex flex-col items-center justify-center">

      <form onSubmit={submit} className="flex flex-col gap-7 items-center">

        <h3 className="text-fuchsia-50 text-2xl font-medium">Sign In</h3>

        <input
          type="email"
          placeholder="email..."
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="password..."
          value={Password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">
          Let's Go
        </button>

      </form>
    </div>
  );
};

export default Signin;