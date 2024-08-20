import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBg from "./VideoBg";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;

  const mainMovie = movies[0];

  const { id, original_title, overview } = mainMovie;

  return (
    <div className="w-full overflow-hidden">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBg movie_id={id} />
    </div>
  );
};

export default MainContainer;
