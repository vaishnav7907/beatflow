import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { CgPlayListAdd } from "react-icons/cg";
import { useplayer } from "../../context/Playerprovider";
const Favorites = () => {
  // const location = useLocation();
  // const songId = location.state?.songId;
const navigate=useNavigate()
  const [getfavsongs, setGetfavsongs] = useState([]);

  const getaddfavsongs = async () => {
    try {
      const token = localStorage.getItem("token");
      console.log(token);

      const favouriteapi = await axios.get(
        "http://localhost:5999/authentication/getallfav",
        { headers: { Authorization: `Bearer ${token}` } },
      );
      setGetfavsongs(favouriteapi.data);
    } catch (error) {
      console.error("Error fetching favourites", error.response?.data || error);
    }
  };
  useEffect(() => {
    getaddfavsongs();
  }, []);

  const deletefav = async (songId) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(
        `http://localhost:5999/authentication/removefavsongs/${songId}`,

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      setGetfavsongs((prev) =>
        prev.filter((item) => item.songId._id !== songId),
      );
    } catch (error) {
      console.log("removefav error", error);
    }
  };

  const totalduration = getfavsongs.reduce((total, item) => {
    return total + (item.songId.duration || 0);
  }, 0);

  const converttomin = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${minutes} min ${sec < 10 ? "0" : ""}${sec}sec`;
  };

  const { setCurrentSong, setSonglist, setCurrentindex } = useplayer();

  const favSongsOnly = getfavsongs.map((item) => item.songId); //without this one song is play

  //add to playlist

  const addSongToPlaylist = async (playlistId) => {
    if (!songId) {
      // navigation("/urplaylist");
      return;
    }

    try {
      await axios.post("http://localhost:5999/authentication/addsongplaylist", {
        playlistId,
        songId,
      });

      alert("✅ Song added!");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className=" p-5">
        {/* headerportion */}

        <div>
          <div className="flex items-center gap-3 flex-wrap">
            <div className="w-16 h-16 bg-linear-to-br from-red-500 to-pink-600 rounded-xl flex justify-center items-center">
              <MdFavorite className="text-white w-6 h-6 " />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-5xl text-white">
                Favorites
              </h1>
              <p className="text-gray-400">{getfavsongs.length} you love</p>
            </div>
          </div>
          <div></div>
        </div>

        {/* button  */}
        <div className="pt-7">
          <button className="px-6 py-2 sm:px-8 sm:py-3 bg-white text-black rounded-full hover:bg-gray-200 flex items-center gap-2 whitespace-nowrap">
            <MdFavorite />
            <h3>Play All Favorites</h3>
          </button>
        </div>

        {/* favourites */}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-7 justify-items-center">
          {getfavsongs.map((favsongs, index) => (
            <div
              className="relative rounded-2xl w-full max-w-xs min-h-[260px] p-3 flex flex-col items-center shadow-sm bg-gray-950 hover:scale-105 transition duration-300"
              onClick={() => {
                setSonglist(favSongsOnly);
                setCurrentindex(index);
                setCurrentSong(favSongsOnly[index]);
              }}
             key={favsongs._id} >
              {/* IMAGE */}
              <div className="h-32 sm:h-40 w-full rounded-xl overflow-hidden mb-4">
                <img
                  src={`http://localhost:5999/${favsongs.songId?.songimage}`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* TEXT */}
              <div className="w-full px-1">
                <h5 className="text-white text-sm font-semibold truncate">
                  {favsongs.songId?.songname}
                </h5>
                <p className="text-gray-400 text-xs truncate">
                  {favsongs.songId?.artist}
                </p>
              </div>

              <div className="absolute bottom-0 flex  justify-between w-full pl-3 pr-3 pb-2">
                <CgPlayListAdd
                  className="text-green-400 text-2xl cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation
                    navigate("/dashboard/playlist",
                      {
                        state: { songId: favsongs.songId._id },
                      });
                  }}
                />
                <FaHeart
                  className=" text-red-400 text-lg cursor-pointer hover:scale-110 transition duration-300"
                  onClick={() => deletefav(favsongs.songId._id)}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="  pt-7">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="border border-solid border-gray-900 rounded-xl p-6 grow">
              <h3 className="text-gray-400 text-sm mb-2">Total songs</h3>
              <p className="text-3xl text-white">{getfavsongs.length}</p>
            </div>

            <div className="border border-solid border-gray-900 rounded-xl text-sm sm:text-base md:text-lg flex justify-center items-center p-4 grow">
              <h3 className="text-gray-400   text-center italic">
                <span className="text-black text-2xl">“</span> Where words{" "}
                <span className="text-red-700 text-2xl">f</span>ail, music
                speaks <span className="text-black text-2xl">”</span>
              </h3>
            </div>

            <div className="border border-solid border-gray-900 rounded-xl p-6  grow">
              <h3 className="text-gray-400 text-sm mb-2">Total Duration</h3>
              <p className="text-3xl text-white">
                {" "}
                {converttomin(totalduration)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorites;
