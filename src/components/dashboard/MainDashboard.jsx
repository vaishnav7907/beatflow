import React, { Component, useState } from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { GoHome } from "react-icons/go";
import { BiCategory } from "react-icons/bi";
import { TbFileMusic, TbPlaylist } from "react-icons/tb";
import { MdFavoriteBorder } from "react-icons/md";
import { MdOutlineWatchLater } from "react-icons/md";
import Homepage from "./Homepage";
import { FiMusic } from "react-icons/fi";
import Playsongs from "./Playsongs";
import Categories from "../pages/categories/Categories";
import Playlist from "../pages/playlist/Playlist";
import Favorites from "../pages/favorites/Favorites";
import Recents from "../pages/recents/Recents";

import { Link, Links, NavLink, Outlet, Route, Routes } from "react-router-dom";

const MainDashboard = () => {


  const sidebar = [
    {
      icons: <GoHome size={23} className="text-slate-400 hover:text-white" />,
      name: "Home",
      path: "homepage",
      
    },

    {
      icons: (
        <BiCategory size={23} className="text-slate-400 hover:text-white" />
      ),
      name: "Categories",
      path: "categories",
    },

    {
      icons: (
        <TbPlaylist size={23} className="text-slate-400 hover:text-white" />
      ),
      name: "Playlist",
      path: "playlist",
    },

    {
      icons: (
        <MdFavoriteBorder
          size={23}
          className="text-slate-400 hover:text-white"
        />
      ),
      name: "Favorites",
      path: "favorites",
    },

    {
      icons: (
        <MdOutlineWatchLater
          size={23}
          className="text-slate-400 hover:text-white "
        />
      ),
      name: "Recents",
      path: "recents",
    },
  ];

  return (
    <div className=" bg-black min-h-screen w-screen  ">
      <div className="flex ">
        {/* sidebar search */}

        <div className="px-3 py-9  w-60 flex flex-col gap-7 h-screen border-2 border-r-slate-800  ">
          <div className="flex px-1">
            <div className="bg-white h-9 w-9 rounded-xl flex justify-center items-center">
              <FiMusic color="black" size={23} />
            </div>

            <div className="pl-3">
              <h1 className="text-white text-2xl">BeatFlow</h1>
            </div>
          </div>

          <ul>
            {sidebar.map((data, index) => {
              return (
                <Link
                  to={data.path}
                  key={index}
                  className="px-4 py-3 flex gap-1.5 hover:bg-slate-800 w-55 rounded-md   cursor-pointer   "
                  
                >
                  <div>{data.icons}</div>
                  <p className="text-slate-400 hover:text-white">{data.name}</p>
                </Link>

                
              );
            })}
          </ul>
        </div>

        {/* main content */}

        <div className="h-screen  flex-2  p-8 overflow-x-scroll ">


          <Outlet />

          
        </div>
      </div>

      {/* music player */}
      <div className="">
        <Playsongs />
      </div>
    </div>
  );
};

export default MainDashboard;
