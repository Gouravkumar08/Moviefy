import "./App.css";
import { Navbar } from "./components/Navbar";
import { Movies } from "./components/Movies";
import { Watchlist } from "./components/Watchlist";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Banner } from "./components/Banner";
import { TvBanner } from "./components/TvBanner";
import { Tv } from "./components/Tv";
import { useState } from "react";
import { useEffect } from "react";

function App(movieObj) {
  let [watchlist, setWatchlist] = useState([]);
  let handleaddtowatchlist = (movieObj) => {
    let newwatchlist = [...watchlist, movieObj];
    setWatchlist(newwatchlist);
    console.log(newwatchlist);
  };
  const removefromwatchlist = (movieObj) => {
    setWatchlist((prevWatchlist) =>
      prevWatchlist.filter((movie) => movie.id !== movieObj.id)
    );
  };
  useEffect(() => {
    console.log("Updated Watchlist:", watchlist);
  }, [watchlist]); // Logs whenever watchlist updates
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Movies watchlist={watchlist}handleaddtowatchlist={handleaddtowatchlist} removefromwatchlist={removefromwatchlist} />
              </>
            }
          />
          <Route
            path="/tv"
            element={
              <>
                <TvBanner />
                <Tv />
              </>
            }
          />
          <Route path="/watchlist" element={<Watchlist watchlist={watchlist} movieObj={movieObj}/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
