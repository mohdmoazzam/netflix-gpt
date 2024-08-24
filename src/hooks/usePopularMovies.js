import { useDispatch } from "react-redux";
import { addPopularMovies } from "../redux/movieSlice";
import { popularMovies } from "../utils/mock";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const json = popularMovies;
  dispatch(addPopularMovies(json.results));
};

export default usePopularMovies;
