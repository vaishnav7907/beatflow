import React, { useEffect, useState } from "react";
import Sidebar from "../../../pages/sidebar/Sidebar";
import Playlistsidebar from "../../../pages/sidebar/Playlistsidebar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useplayer } from "../../../context/Playerprovider";
import Playsongs from "../../../dashboard/Playsongs";

const Weatherplaylist = () => {
  //weather api=  https://api.openweathermap.org/data/2.5/weather?q=kerala&appid=d9ad3915f576967fe4c4d67e89acd522
  //  Thunderstorm, Drizzle, Rain, Snow, Atmosphere (mist, fog, smoke), Clear, and Clouds

  const [getweathersongs, setGetweathersongs] = useState([]);

  const fetchweathersong = async (weather) => {
    try {
      const getasongapi = await axios.get(
        `${import.meta.env.VITE_API_URL}/Beatflow/weathersongs?weather=${weather}`,
      );
      console.log(getasongapi.data);
      setGetweathersongs(getasongapi.data);
    } catch (error) {
      console.log("fetch weathersong error", error);
    }
  };

  // weatherapi=  "https://api.openweathermap.org/data/2.5/weather?q=kerala&appid=d9ad3915f576967fe4c4d67e89acd522"

  const [weathertype, setWeathertype] = useState("");

  const weatherset = async () => {
    try {
      const weatherapi = await axios.get(
        "https://api.openweathermap.org/data/2.5/weather?q=kerala&appid=d9ad3915f576967fe4c4d67e89acd522",
      );
      console.log(weatherapi.data);

      const mainweather = weatherapi.data.weather[0].main;
      setWeathertype(mainweather);
      fetchweathersong(mainweather);
    } catch (error) {
      console.log("weather api error", error);
    }
  };

  useEffect(() => {
    weatherset();
  }, []);

  const { setCurrentSong, setSonglist, setCurrentindex } = useplayer();

  const[playweathersongs,setPlayweathersongs]=useState(false)

  return (
    <div className="">
      <div className="px-8   w-full">
        {/* HEADER */}
        <div className="mb-10">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
            Weather Mood 🎧
          </h1>
          <p className="text-gray-400 mt-2 text-lg">
            Curated playlists based on your vibe & weather
          </p>
        </div>

        {/* WEATHER CARD */}
        <div className="mb-12 p-6 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl">
          <h2 className="text-2xl font-semibold tracking-wide">
            {weathertype}
          </h2>
          <p className="text-gray-400 mt-1">
            Perfect for calm & emotional tracks
          </p>
        </div>

        {/* SONG GRID */}
        <div className="w-full bg-white/5 backdrop-blur-xl border border-white/10 p-7 rounded-3xl grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
          {getweathersongs.map((song, index) => (
            <div
              key={song._id}
              className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-3 transition-all duration-300 hover:scale-105 hover:bg-white/10 hover:shadow-xl"
              onClick={() => {
                setPlayweathersongs(true)
                setSonglist(getweathersongs);
                setCurrentindex(index);
                setCurrentSong(getweathersongs[index])
              }}
            >
              {/* IMAGE */}
              <div className="w-full h-40 rounded-xl overflow-hidden mb-3">
                <img
                  src={`${import.meta.env.VITE_API_URL}/${song.songimage}`}
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* TEXT */}
              <div>
                <h1 className="text-white text-sm font-semibold truncate">
                  {song.songname}
                </h1>

                <p className="text-gray-400 text-xs mt-1 truncate">
                  {song.artist}
                </p>
              </div>
            </div>
          ))}
        </div>
        {playweathersongs && (
        <div className="fixed bottom-0 left-0 w-full z-50">
          <Playsongs />
        </div>
      )}
      </div>
    </div>
  );
};

export default Weatherplaylist;
