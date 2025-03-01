import React from 'react'

export function Tvcard({poster_path, title}) {
  return (
    <div
      className="h-[45vh] w-[200px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer flex items-end m-1"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${poster_path})`,
      }}
    >
      <div className='text-white p-1 text-xl w-full text-center bg-gray-900/60 rounded-b-xl'>
        {title}
      </div>
    </div>
  )
}
