import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../redux/movieSlice";
import { nowPlayingMovies } from "../utils/mock";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const response = nowPlayingMovies;

  dispatch(addNowPlayingMovies(response.results));
};

export default useNowPlayingMovies;
