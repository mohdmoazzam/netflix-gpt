import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../redux/movieSlice";
import { useEffect } from "react";

const useMovieTrailer = (movie_id) => {
  const dispatch = useDispatch();

  const getMovieVideos = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}/videos`,
      API_OPTIONS
    );

    const json = await response.json();
    const filterData = json.results?.filter(
      (video) => video?.type === "Trailer"
    );

    const trailer = filterData?.length ? filterData[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMovieTrailer;
