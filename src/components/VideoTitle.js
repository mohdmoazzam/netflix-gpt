import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-full aspect-video pt-[20%] px-16 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-5xl font-extrabold drop-shadow-lg">{title}</h1>
      <p className="py-6 text-lg w-1/2 leading-relaxed">{overview}</p>
      <div className="flex items-center gap-x-4">
        <button className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 text-lg font-semibold rounded-md shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
          ▶️ Play
        </button>
        <button className="bg-gray-700 hover:bg-gray-800 text-white px-3 py-2 text-lg font-semibold rounded-md shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
          ℹ️ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
