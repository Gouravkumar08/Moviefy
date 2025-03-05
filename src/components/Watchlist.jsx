import React, { useState } from "react";
import genreids from '../utility/genre';

export function Watchlist({ watchlist, setWatchlist, removefromwatchlist }) {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const sortIncreasing = () => {
    let sortedInc = [...watchlist].sort((a, b) => a.vote_average - b.vote_average);
    setWatchlist(sortedInc);
  };

  const sortDecreasing = () => {
    let sortedDec = [...watchlist].sort((a, b) => b.vote_average - a.vote_average);
    setWatchlist(sortedDec);
  };

  return (
    <>
      <div className="flex justify-center my-8">
        <input
          type="text"
          onChange={handleSearch}
          className="px-3 h-[2rem] w-[20rem] border bg-gray-200 rounded-md outline-none"
          placeholder="Search"
        />
      </div>
      <div className="overflow-hidden rounded-lg border border-gray-300 m-8">
        <table className="w-full text-blue-900 text-center">
          <thead className="border-b-2">
            <tr>
              <th>Name</th>
              <th className="flex justify-center">
                <div className="p-2">
                  <i onClick={sortIncreasing} className="fa-solid fa-arrow-up cursor-pointer hover:text-blue-500"></i>
                </div>
                <div className="p-2">Ratings</div>
                <div className="p-2">
                  <i onClick={sortDecreasing} className="fa-solid fa-arrow-down cursor-pointer hover:text-blue-500"></i>
                </div>
              </th>
              <th>Popularity</th>
              <th>Genre</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {watchlist
              .filter((item) => {
                return item.title?.toLowerCase().includes(search.toLowerCase()) || 
                       item.name?.toLowerCase().includes(search.toLowerCase());
              })
              .map((item) => (
                <tr className="border-b-2" key={item.id}>
                  <td className="flex items-center px-4 py-2">
                    <img
                      className="h-[10rem] w-[10rem]"
                      src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                      alt={item.title || item.name}
                    />
                    <div className="mx-12">{item.title || item.name}</div>
                  </td>
                  <td>{item.vote_average}</td>
                  <td>{item.popularity}</td>
                  <td>{genreids[item.genre_ids?.[0]]}</td>
                  <td
                    className="text-red-500 hover:scale-125 duration-200 cursor-pointer"
                    onClick={() => removefromwatchlist(item)}
                  >
                    Delete
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}