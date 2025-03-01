import React from 'react'
export function TvBanner() {
  return (
    <div
      className="h-[20vh] md:h-[90vh] bg-cover flex items-end"
      style={{
        backgroundImage:
          "url(https://wallpapercat.com/w/full/7/e/d/163840-3840x2160-desktop-4k-succession-tv-series-background-image.jpg)",
      }}
    >
        <div className="text-white text-xl text-center w-full bg-gray-900/60 p-3">
            Succession
        </div>
    </div>
  )
}
