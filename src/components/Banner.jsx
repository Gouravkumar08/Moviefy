import React from "react";

export function Banner() {
  return (
    <div
      className="h-[20vh] md:h-[80vh] bg-cover flex items-end"
      style={{
        backgroundImage:
          "url(https://thumbnails.cbsig.net/CBS_Production_Entertainment_VMS/2022/10/26/2091444291941/TGMAV_SAlone_16_9_1920x1080_1781067_1920x1080.jpg)",
      }}
    >
        <div className="text-white text-xl text-center w-full bg-gray-900/60 p-3">
            Top Gun : Maverick
        </div>
    </div>
  );
}
