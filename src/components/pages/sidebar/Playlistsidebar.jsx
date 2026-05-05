import React, { useState } from "react";
import { FaMusic, FaFire, FaCompactDisc } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { SiAccuweather } from "react-icons/si";
const Playlistsidebar = () => {

const navigation = useNavigate()

  const [active, setActive] = useState(0);

  const playlistsidebaritems = [

    {
      name:"Weather",
      icon:<SiAccuweather />,
      path:"/playlistforu"
    },

    {
      name: "Retro Vibes",
      icon: <FaCompactDisc />,
      path:"/playlistforu/retro"
    },

    {
      name: "Top Tracks",
      icon: <FaMusic />,
      path:"/playlistforu/toptracks"
    },

    {
      name: "Trending",
      icon: <FaFire />,
      path:"/playlistforu/trending"
    },

  ];

return (
 <div className="flex flex-col h-full text-white">

  {/* Back Arrow */}
  <div
    className="mb-8 flex justify-center cursor-pointer"
    onClick={() => { navigation("/dashboard/homepage") }}
  >
    <div className="p-3 rounded-xl bg-gradient-to-br from-purple-600 to-pink-500 shadow-lg hover:scale-110 transition">
      <FaArrowLeftLong size={18} />
    </div>
  </div>

  {/* Sidebar Container */}
  <div className="flex flex-col items-center gap-6 py-6 bg-black/40 backdrop-blur-xl border border-purple-500/20 rounded-3xl shadow-[0_0_40px_rgba(168,85,247,0.2)]">

    {playlistsidebaritems.map((items, index) => (
      <Link
      to={items.path}
        key={index}
        onClick={() => setActive(index)}
        className="relative flex flex-col items-center justify-center w-20 h-20 cursor-pointer group"
      >

        {/* Glow Effect */}
        <div
          className={`absolute inset-0 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition
          ${active === index ? "opacity-100 bg-purple-500/40" : "bg-pink-500/30"}
          `}
        ></div>

        {/* Button */}
        <div
          className={`relative z-10 flex flex-col items-center justify-center w-full h-full rounded-2xl border transition-all duration-300
          
          ${active === index
            ? "bg-gradient-to-br from-purple-600 to-pink-500 border-transparent shadow-lg"
            : "bg-white/5 border-white/10 group-hover:bg-white/10"}
          `}
        >

          {/* Icon */}
          <span className={`text-xl mb-1 transition
            ${active === index ? "text-white" : "text-gray-300 group-hover:text-white"}
          `}>
            {items.icon}
          </span>

          {/* Label */}
          <span className="text-[10px] tracking-wide text-gray-400 group-hover:text-white">
            {items.name}
          </span>

        </div>
      </Link>
    ))}

  </div>
</div>
);
};

export default Playlistsidebar;