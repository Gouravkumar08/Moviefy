import React from "react";
import logo from "../assets/Movie-logo.png/";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div className="flex border border-b-zinc-300 space-x-8 items-center pl-3 py-3 bg-gradient-to-br from-blue-300  to-gray-black">
      <Link to="/">
        <img
          className="w-[35px] cursor-pointer hover:scale-110 duration-300 animate-bounce"
          src={logo}
          alt="Movie Logo"
        />
      </Link>
      <Link
        to="/"
        className="text-blue-900 font-semibold text-2xl hover:cursor-pointer hover:scale-110 duration-300 hover:text-red-400"
      >
        Movies
      </Link>
      <Link
        to="/tv"
        className="text-blue-900 font-semibold text-2xl hover:cursor-pointer hover:scale-110 duration-300 hover:text-red-400"
      >
        Tv
      </Link>
      <Link
        to="/watchlist"
        className="text-blue-900 font-semibold text-2xl hover:cursor-pointer hover:scale-110 duration-300 hover:text-red-400"
      >
        Watchlist
      </Link>
    </div>
  );
};
