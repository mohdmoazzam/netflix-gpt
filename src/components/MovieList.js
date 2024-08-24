import React from "react";
import MovieCard from "./MovieCard";
import { GrNext, GrPrevious } from "react-icons/gr";

import { useRef } from "react";

const MovieList = ({ title, movies }) => {
  const listRef = useRef(null);

  const scroll = (scrollOffset) => {
    listRef.current.scrollBy({ left: scrollOffset, behavior: "smooth" });
  };

  return (
    <div>
      <h1 className="text-xl font-bold mb-4 text-white">{title}</h1>
      <div className="relative">
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
          onClick={() => scroll(-300)}
        >
          <GrPrevious className="text-xl" />
        </button>

        <div
          className="flex overflow-x-auto space-x-4 scrollbar-hide"
          ref={listRef}
        >
          {movies?.map((movie) => (
            <MovieCard key={movie?.id} posterPath={movie?.poster_path} />
          ))}
        </div>

        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
          onClick={() => scroll(300)}
        >
          <GrNext className="text-xl" />
        </button>
      </div>
    </div>
  );
};
export default MovieList;
