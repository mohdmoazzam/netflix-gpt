import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  const poplarMovies = useSelector((store) => store.movies?.popularMovies);

  const topRatedMovies = useSelector((store) => store.movies?.topRatedMovies);

  const upcomingMovies = useSelector((store) => store.movies?.upcomingMovies);

  return (
    <div className="bg-black">
      <div className="-mt-40 relative z-20 pl-12">
        {/* Movie_List */}
        <MovieList title={"Now Playing"} movies={movies} />
        <MovieList title={"Top Rated"} movies={topRatedMovies} />
        <MovieList title={"Popular"} movies={poplarMovies} />
        <MovieList title={"Upcoming Movies"} movies={upcomingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
