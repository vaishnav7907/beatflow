import React from "react";
import { FiMusic } from "react-icons/fi";
import { Outlet } from "react-router-dom";
import Sidebar from "../pages/sidebar/Sidebar";

const MainDashboard = () => {
  return (
    <div className="bg-black min-h-screen w-full overflow-hidden">
      
      {/* Layout */}

      <div className="flex h-screen">
        
        {/* Sidebar */}

        <div
          className="
            w-20 sm:w-24 md:w-50
            bg-black
            border-r border-zinc-800
            flex flex-col
            px-2 sm:px-3 md:px-5
            py-5
            gap-8
            transition-all duration-300
          "
        >
          {/* Logo */}

          <div className="flex items-center justify-center md:justify-start gap-3">
            
            <div
              className="
                bg-white
                p-2.5
                rounded-2xl
                flex items-center justify-center
                shadow-lg
              "
            >
              <FiMusic color="black" size={22} />
            </div>

            <h1
              className="
                hidden md:block
                text-white
                text-2xl
                font-bold
                tracking-wide
              "
            >
              BeatFlow
            </h1>
          </div>

          {/* Sidebar Menu */}

          <div className="flex-1 overflow-y-auto">
            <Sidebar />
          </div>
        </div>

        {/* Main Content */}

        <div
          className="
            flex-1
            overflow-y-auto
            px-4 sm:px-6 md:px-8
            py-5 sm:py-7
            pb-24
            scroll-smooth
          "
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;