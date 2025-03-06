import React, { useEffect, useState } from "react";
import axios from "axios";
import { Tvcard } from "./Tvcard";
import { Pagination } from "./Pagination";

export function Tv({watchlist,
  handleaddtowatchlist,
  removefromwatchlist,}) {
  const [tv, setTv] = useState([]); // Holds the fetched TV show data
  const [pageNo, setPageNo] = useState(1);

  const handlePagePrev = () => {
    if (pageNo == 1) {
      setPageNo(pageNo);
    } else {
      setPageNo(pageNo - 1);
    }
  };

  const handlePageNext = () => {
    setPageNo(pageNo + 1);
  };

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/tv/top_rated?api_key=7d8f466711f593f5e39d2638f71c6234&language=en-US&page=${pageNo}`
      )
      .then((res) => {
        setTv(res.data.results);
      })
      .catch((err) => console.error("Error fetching TV shows:", err));
  }, [pageNo]);

  return (
    <div className="p-5">
      <div className="text-2xl font-bold text-center m-5">
        Trending Tv series
      </div>
      <div className="flex flex-row items-end flex-wrap justify-center gap-8">
        {tv.map((tvObj) => (
          <Tvcard
            key={tvObj.id}
            tvObj={tvObj}
            poster_path={tvObj.poster_path}
            name={tvObj.name}
            watchlist = {watchlist}
            handleaddtowatchlist={handleaddtowatchlist}
            removefromwatchlist={removefromwatchlist}
          />
        ))}
      </div>
      <Pagination
        pageNo={pageNo}
        handlePageNext={handlePageNext}
        handlePagePrev={handlePagePrev}
      />
    </div>
  );
}
