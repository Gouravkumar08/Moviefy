import React, { useState, useEffect } from "react";

export function Moviecard({
  movieObj,
  poster_path,
  title,
  handleaddtowatchlist,
  removefromwatchlist,
  watchlist, // Add watchlist as a prop
}) {
  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    if (liked) {
      removefromwatchlist(movieObj); // Remove from watchlist
    } else {
      handleaddtowatchlist(movieObj); // Add to watchlist
    }
    setLiked(!liked); // Toggle liked state
  };

  // Update liked state based on watchlist
  useEffect(() => {
    const isLiked = watchlist.some((item) => item.id === movieObj.id);
    setLiked(isLiked);
  }, [watchlist]); // Re-run effect when watchlist changes

  return (
    <div
      className="h-[45vh] w-[200px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer flex items-end m-1 flex-col justify-between"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${poster_path})`,
      }}
    >
      <div
        onClick={handleClick}
        className={`w-5 h-5 bg-gray-900/60 flex justify-center items-center text-l rounded-full cursor-pointer transition-all duration-300 m-4 ${
          liked ? "text-red-500" : "text-white"
        }`}
      >
        {liked ? "❤" : "♡"}
      </div>
      <div className="text-white p-1 text-xl w-full text-center bg-gray-900/60 rounded-b-xl">
        {title}
      </div>
    </div>
  );
}
