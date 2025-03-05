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
    localStorage.setItem("movieslist", JSON.stringify(newwatchlist));
    setWatchlist(newwatchlist);
    console.log(newwatchlist);
  };
  const removefromwatchlist = (movieObj) => {
    setWatchlist((prevWatchlist) => {
      const updatedWatchlist = prevWatchlist.filter(
        (movie) => movie.id !== movieObj.id
      );
      localStorage.setItem("movieslist", JSON.stringify(updatedWatchlist)); // Update localStorage
      return updatedWatchlist;
    });
  };

  useEffect(() => {
    let moviesfromlocalstorage = localStorage.getItem("movieslist");
    if (!moviesfromlocalstorage) {
      return;
    }
    setWatchlist(JSON.parse(moviesfromlocalstorage));
  }, []);
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
                <Movies
                  watchlist={watchlist}
                  handleaddtowatchlist={handleaddtowatchlist}
                  removefromwatchlist={removefromwatchlist}
                />
              </>
            }
          />
          <Route
            path="/tv"
            element={
              <>
                <TvBanner />
                <Tv
                  watchlist={watchlist}
                  handleaddtowatchlist={handleaddtowatchlist}
                  removefromwatchlist={removefromwatchlist}
                />
              </>
            }
          />
          <Route
            path="/watchlist"
            element={
              <Watchlist
                watchlist={watchlist}
                movieObj={movieObj}
                setWatchlist={setWatchlist}
                removefromwatchlist={removefromwatchlist}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
