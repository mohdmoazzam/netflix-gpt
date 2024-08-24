import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../redux/movieSlice";
import { topRatedMovies } from "../utils/mock";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const json = topRatedMovies;
  dispatch(addTopRatedMovies(json.results));
};

export default useTopRatedMovies;
