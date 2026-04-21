import axios from "axios";
import React, { useState, useEffect } from "react";
import { IoSearch } from "react-icons/io5";

const Categories = () => {
  const [query, setQuery] = useState("");
  const [songs, setSongs] = useState([]);
  const [searched, setSearched] = useState(false);

  // 🔍 API CALL
  const handleSearch = async (searchText) => {
    try {
      const q = searchText.trim();
      if (!q) {
        setSongs([]);
        setSearched(false);
        return;
      }

      const res = await axios.get(
        `http://localhost:5999/authentication/searchsongs?query=${q}`
      );

      setSongs(res.data);
      setSearched(true);
    } catch (error) {
      console.log(error);
    }
  };

  // ⚡ LIVE SEARCH (Debounce)
  useEffect(() => {
    const delay = setTimeout(() => {
      handleSearch(query);
    }, 500);

    return () => clearTimeout(delay);
  }, [query]);

  return (
    <div>
      <div className="flex flex-col gap-7">
        
        {/* Heading */}
        <div>
          <h1 className="text-4xl text-white mb-2">Discover Music</h1>
          <p className="text-gray-400">Find your next favorite track</p>
        </div>

        {/* 🔍 Search Bar */}
        <div className="flex justify-start items-center relative">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSearch(query);
            }}
            className="w-full bg-gray-900 border-gray-800 rounded-xl px-5 py-4 text-white"
            placeholder="Search for songs or artists..."
          />

          <IoSearch
            onClick={() => handleSearch(query)}
            className="text-gray-400 absolute right-3 cursor-pointer"
            size={21}
          />
        </div>

        {/* 🎵 Results */}
        <div>
          {searched && (
            songs.length > 0 ? (
              songs.map((song) => (
                <div
                  key={song._id}
                  className="text-white mt-3 p-3 bg-gray-900 rounded-lg hover:bg-gray-950 "
                >
                  <h3 className="text-lg font-semibold  ">
                    {song.songname || song.title}
                  </h3>
                  <p className="text-gray-400">
                    {song.artist || "Unknown Artist"}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-gray-500 mt-3">No songs found</p>
            )
          )}
        </div>

        {/* 🎼 Categories */}
        {/* <div className="flex gap-3">
          <button className="bg-gray-900 px-6 py-2 rounded-full hover:bg-gray-500">
            All
          </button>
          <button className="bg-gray-900 px-6 py-2 rounded-full hover:bg-gray-500">
            Tamil
          </button>
          <button className="bg-gray-900 px-6 py-2 rounded-full hover:bg-gray-500">
            Malayalam
          </button>
          <button className="bg-gray-900 px-6 py-2 rounded-full hover:bg-gray-500">
            Hindi
          </button>
        </div> */}

      </div>
    </div>
  );
};

export default Categories;