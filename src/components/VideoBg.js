import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBg = ({ movie_id }) => {
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  useMovieTrailer(movie_id);

  return (
    <div className="w-screen">
      <iframe
        className="w-full aspect-video"
        src={`https://www.youtube.com/embed/Idh8n5XuYIA?si=${trailerVideo?.key}&autoplay=1&mute=1&controls=0`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBg;
