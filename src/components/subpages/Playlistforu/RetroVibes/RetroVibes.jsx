import React, { useEffect, useState } from "react";
import axios from "axios";
import { useplayer } from "../../../context/Playerprovider";
import Playsongs from "../../../dashboard/Playsongs";
const RetroVibes = () => {
  const [songs, setSongs] = useState([]);

  const fetcholdsongs = async () => {
    try {
      const oldsongapi = await axios.get(`${import.meta.env.VITE_API_URL}/Beatflow/getoldsongs`)
      setSongs(oldsongapi.data)
    } catch (error) {
      console.log(error);
      
    }
  };
  useEffect(() => {
    fetcholdsongs();
  }, []);
  const { setCurrentSong, setSonglist, setCurrentindex } = useplayer();
  const[playretrosongs,setPlayretrosongs]=useState(false)

  return (
    <div className="">
      <div className="px-8 overflow-y-auto scroll-smooth w-full">
        
        <div className="mb-10">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(59,130,246,0.6)]">
            RETRO
          </h1>
          <p className="text-gray-400 mt-2 text-lg">
            Step into the past . . . with timeless melodies . . .
          </p>
        </div>

        <div className="mb-12 p-6 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl">
          <h2 className="text-2xl font-semibold tracking-wide"></h2>
          <p className="text-gray-400 mt-1">
            Perfect for calm & emotional tracks
          </p>
        </div>

        {/* SONG GRID */}
        
        <div className="w-full bg-white/5 backdrop-blur-xl border border-white/10 p-7 rounded-3xl grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7" >
          {songs.map((oldsongs,index)=>(
          <div className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-3 transition-all duration-300 hover:scale-105 hover:bg-white/10 hover:shadow-xl" key={oldsongs._id}
          onClick={() => {
                setPlayretrosongs(true)
                setSonglist(songs);
                setCurrentindex(index);
                setCurrentSong(songs[index])
              }}
          >
            {/* IMAGE */}
            <div className="w-full h-40 rounded-xl overflow-hidden mb-3">
              <img
                src={`${import.meta.env.VITE_API_URL}/${oldsongs.songimage}`}
                alt=""
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>

            {/* TEXT */}
            <div>


              <h1 className="text-white text-sm font-semibold truncate">{oldsongs.songname}</h1>

              <p className="text-gray-400 text-xs mt-1 truncate">{oldsongs.artist}</p>

            </div>
          </div>
          ))}
        </div>
        {playretrosongs && (
        <div className="fixed bottom-0 left-0 w-full z-50">
          <Playsongs />
        </div>
      )}
        
      </div>
    </div>
  );
};

export default RetroVibes;
