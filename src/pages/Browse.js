import React from "react";
import Header from "../components/Header";
import MainContainer from "../components/MainContainer";
import SecondaryContainer from "../components/SecondaryContainer";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

const Browse = () => {
  useNowPlayingMovies();

  usePopularMovies();

  useTopRatedMovies();

  useUpcomingMovies();

  return (
    <div>
      <Header />
      {/* Main Container(Video background) */}
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
