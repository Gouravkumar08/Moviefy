import "./App.css";
import { Navbar } from "./components/Navbar";
import { Movies } from "./components/Movies";
import { Watchlist } from "./components/Watchlist";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Banner } from "./components/Banner";
import { TvBanner } from "./components/TvBanner";
import { Tv } from "./components/Tv";

function App() {
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
                <Movies />
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
          <Route path="/watchlist" element={<Watchlist />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
