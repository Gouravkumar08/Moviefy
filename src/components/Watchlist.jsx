import React from "react";

export function Watchlist({watchlist, movieObj}) {
  return (
    <>
      <div className="flex justify-center flex-wrap gap-4 m-4 ">
        <div className="flex justify-center rounded-xl text-center text-bold text-white bg-blue-400 h-[2.5rem] w-[7rem] items-center hover:scale-110 cursor-pointer">
          All Genre
        </div>
        <div className="flex justify-center rounded-xl text-center text-bold text-white bg-blue-400 h-[2.5rem] w-[7rem] items-center hover:scale-110 cursor-pointer ">
          Action
        </div>
      </div>

      <div className="flex justify-center my-8">
        <input
          type="text"
          className="px-3 h-[2rem] w-[20rem] border bg-gray-200 rounded-md outline-none"
          placeholder="Search"
        />
      </div>
      <div className="overflow-hidden rounded-lg border border-gray-300 m-8">
        <table className="  w-full text-blue-900 text-center">
          <thead className="border-b-2">
            <tr>
              <th>Name</th>
              <th>Ratings</th>
              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
          {watchlist.map((movieObj) => (
    <tr className="border-b-2" key={movieObj.id}>
      <td className="flex items-center px-4 py-2">
        <img
          className="h-[10rem] w-[10rem]"
          src={`https://image.tmdb.org/t/p/original${movieObj.poster_path}`}
          alt={movieObj.title}
        />
        <div className="mx-12">{movieObj.title}</div>
      </td>
      <td>{movieObj.vote_average}</td>
      <td>{movieObj.popularity}</td>
      <td> {/* Add genres dynamically if available */} </td>
      <td
        className="text-red-500 hover:scale-125 duration-200 cursor-pointer"
        onClick={() => removefromwatchlist(movieObj)}
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
