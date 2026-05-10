import axios from "axios";
import React, { useState, useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import { useplayer } from "../../context/Playerprovider";
import { CgPlayListAdd } from "react-icons/cg";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Playsongs from "../../dashboard/Playsongs";

const Categories = () => {
  const [query, setQuery] = useState("");
  const [songs, setSongs] = useState([]);
  const [searched, setSearched] = useState(false);
  const [playmusic, setPlaymusic] = useState(false);

  const navigate = useNavigate();

  const { setCurrentSong, setSonglist, setCurrentindex } = useplayer();

  // 🔍 SEARCH API

  const handleSearch = async (searchText) => {
    try {
      const q = searchText.trim();

      if (!q) {
        setSongs([]);
        setSearched(false);
        return;
      }

      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/Beatflow/searchsongs?query=${q}`
      );

      setSongs(res.data);
      setSearched(true);
    } catch (error) {
      console.log(error);
    }
  };

  // ⚡ LIVE SEARCH

  useEffect(() => {
    const delay = setTimeout(() => {
      handleSearch(query);
    }, 500);

    return () => clearTimeout(delay);
  }, [query]);

  // ❤️ ADD TO FAVORITES

  const addalltofav = async (songId) => {
    try {
      const token = localStorage.getItem("token");

      await axios.post(
        `${import.meta.env.VITE_API_URL}/Beatflow/addtofav`,
        { songId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("✅ Song added to favourites");
    } catch (error) {
      console.log("Favourite error", error.response?.data || error);
    }
  };

  return (
    <div className="w-full flex flex-col gap-7 pb-24">
      
      {/* Heading */}

      <div className="flex flex-col gap-2">
        <h1 className="text-2xl md:text-4xl lg:text-4xl text-white">
          Discover Music
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-zinc-400">
          Find your next favorite track
        </p>
      </div>

      {/* Search Bar */}

      <div className="relative w-full">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSearch(query);
          }}
          placeholder="Search for songs or artists..."
          className="  w-full  bg-zinc-900    border border-zinc-800  focus:border-green-500  outline-none  rounded-2xl  pl-5 pr-12  py-3 sm:py-4  text-white  placeholder:text-transparent  sm:placeholder:text-zinc-500  transition duration-300  "
        />

        <IoSearch
          onClick={() => handleSearch(query)}
          className="  text-zinc-400  absolute  right-4  top-1/2  -translate-y-1/2  cursor-pointer  hover:text-white  transition duration-300  "
          size={21}
        />
      </div>

      {/* Results */}

      <div className="flex flex-col gap-3">
        {searched &&
          (songs.length > 0 ? (
            songs.map((song, index) => (
              <div
                key={song._id}
                className="  group   bg-zinc-900  hover:bg-zinc-800  border border-zinc-800  rounded-2xl  p-3  transition-all duration-300  cursor-pointer  flex items-center  gap-3  "
                onClick={() => {
                  setCurrentSong(songs[index]);
                  setSonglist(songs);
                  setCurrentindex(index);
                  setPlaymusic(true);
                }}
              >
                {/* Song Image */}

                <div className="w-10 h-10 sm:w-16 sm:h-16 flex-shrink-0">
                  <img
                    src={`${import.meta.env.VITE_API_URL}/${song.songimage}`}
                    alt=""
                    className="  rounded-md  h-full  w-full  object-cover  group-hover:scale-105  transition duration-300
                      
                    "
                  />
                </div>

                {/* Song Details */}

                <div className="flex-1 min-w-0">
                  <h3
                    className="  text-white  text-sm sm:text-base  font-semibold  truncate  ">
                    {song.songname || song.title}
                  </h3>

                  <p
                    className="  text-zinc-400  text-xs sm:text-sm  truncate  mt-1 ">
                    {song.artist || "Unknown Artist"}
                  </p>
                </div>

                {/* Action Buttons */}

                <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
                  
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      addalltofav(song._id);
                    }}
                    className="  w-4 h-4 sm:w-9 sm:h-9  rounded-full  bg-zinc-800  hover:bg-red-500/20  flex items-center justify-center  transition duration-300  ">
                    <FaHeart className="text-red-400 text-xs sm:text-sm" />
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();

                      navigate("/dashboard/playlist", {
                        state: { songId: song._id },
                      });
                    }}
                    className=" w-4 h-4 sm:w-9 sm:h-9 rounded-full bg-green-500 hover:scale-110 flex items-center justify-center transition duration-300 ">
                    <CgPlayListAdd className="text-black text-lg sm:text-xl" />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="flex justify-center pt-10">
              <p className="text-zinc-500 text-sm sm:text-base">
                No songs found
              </p>
            </div>
          ))}
      </div>

      {/* Music Player */}

      {playmusic && (
        <div>
          <Playsongs />
        </div>
      )}
    </div>
  );
};

export default Categories;