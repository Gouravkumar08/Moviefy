import React from "react";

export function Banner() {
  return (
    <div
      className="h-[20vh] md:h-[80vh] bg-cover flex items-end"
      style={{
        backgroundImage:
          "url(https://images4.alphacoders.com/130/1300727.jpg)",
      }}
    >
        <div className="text-white text-xl text-center w-full bg-gray-900/60 p-3">
            Top Gun : Maverick
        </div>
    </div>
  );
}
