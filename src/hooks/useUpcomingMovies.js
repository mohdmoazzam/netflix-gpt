import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../redux/movieSlice";
import { upcomingMovies } from "../utils/mock";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const json = upcomingMovies;
  dispatch(addUpcomingMovies(json.results));
};

export default useUpcomingMovies;
