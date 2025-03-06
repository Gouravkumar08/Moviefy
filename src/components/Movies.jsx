import React, { useState } from "react";
import {Moviecard} from "./Moviecard";
import { useEffect } from "react";
import axios from "axios";
import { Pagination } from "./Pagination";
export function Movies({
  watchlist,
  handleaddtowatchlist,
  removefromwatchlist,
}) {
  const [movies, setMovies] = useState([]);
  const [pageNo, setpageNo] = useState(1);

  const handlePagePrev = () => {
    if (pageNo == 1) {
      setpageNo(pageNo);
    } else {
      setpageNo(pageNo - 1);
    }
  };

  const handlePageNext = () => {
    setpageNo(pageNo + 1);
  };

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=7d8f466711f593f5e39d2638f71c6234&language=en-US&page=${pageNo}`
      )
      .then(
        function (res) {
          setMovies(res.data.results);
        },
        [pageNo]
      );
  });

  return (
    <div className="p-5">
      <div className="text-2xl font-bold text-center m-5">Trending Movies</div>
      
      <div className="flex flex-row items-end flex-wrap justify-center gap-8">
        {movies.map((movieObj) => {
          return (
            <Moviecard
              key={movieObj.id}
              movieObj={movieObj}
              poster_path={movieObj.poster_path}
              title={movieObj.title}
              handleaddtowatchlist={handleaddtowatchlist}
              removefromwatchlist={removefromwatchlist}
              watchlist={watchlist}
            />
          );
        })}
      </div>
      <Pagination
        pageNo={pageNo}
        handlePagePrev={handlePagePrev}
        handlePageNext={handlePageNext}
      />
    </div>
  );
}
