import React from "react";

export function Pagination({handlePagePrev, handlePageNext, pageNo}) {
  return (
    
    <div className="bg-gray-400 p-2 mt-9 w-full flex justify-center ">
      <div onClick={handlePagePrev} className='px-8 hover:scale-125 duration-200 cursor-pointer hover:text-blue-600'>
        <i class="fa-solid fa-arrow-left"></i>
      </div>
      <div className="font-semibold">{pageNo}</div>
      <div onClick={handlePageNext} className='px-8 hover:scale-125 duration-200 cursor-pointer hover:text-blue-600'>
        <i class="fa-solid fa-arrow-right"></i>
      </div>
    </div>
  );
}
