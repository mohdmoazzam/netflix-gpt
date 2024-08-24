import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../redux/movieSlice";
import { videos } from "../utils/mock";

const useMovieTrailer = (movie_id) => {
  console.log(movie_id);
  const dispatch = useDispatch();

  const json = videos;
  const filterData = json.results?.filter((video) => video?.type === "Trailer");

  const trailer = filterData?.length ? filterData[0] : json.results[0];
  dispatch(addTrailerVideo(trailer));
};

export default useMovieTrailer;
