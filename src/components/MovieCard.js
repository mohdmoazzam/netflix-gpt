import React from "react";
import { TMDB_POSTER_BASE_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="flex-shrink-0 w-48 h-[300px]">
      <img
        src={`${TMDB_POSTER_BASE_URL}${posterPath}`}
        alt="Movie Poster"
        className="w-full h-full object-cover rounded-lg"
      />
    </div>
  );
};

export default MovieCard;
