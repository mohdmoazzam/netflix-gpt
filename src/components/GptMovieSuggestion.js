import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DEFAULT_POSTER_URL } from "../utils/constants";
import { addGptMovies } from "../redux/movieSlice";

const GptMovieSuggestion = () => {
  const dispatch = useDispatch();
  const gptMovies = useSelector((store) => store.movies?.gptMovies);

  useEffect(() => {
    return () => {
      dispatch(addGptMovies(null));
    };
  }, []);

  return (
    <div className="flex flex-wrap gap-6 justify-center mt-5">
      {gptMovies?.data?.length &&
        gptMovies.data.map((movie) => (
          <div
            key={movie?.title}
            className="bg-white rounded-md shadow-md overflow-hidden w-72 transition-transform transform hover:-translate-y-2"
          >
            <img
              src={DEFAULT_POSTER_URL}
              alt="poster"
              className="w-full h-48 object-cover"
            />
            <h1 className="text-xl font-semibold mt-4 mb-2 text-gray-800 text-center px-4">
              {movie?.title}
            </h1>
            <h2 className="text-lg font-medium text-yellow-500 text-center mb-2 flex items-center justify-center">
              <svg
                className="w-5 h-5 mr-1 text-yellow-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.2 3.674a1 1 0 00.95.69h3.862c.97 0 1.371 1.24.588 1.81l-3.124 2.272a1 1 0 00-.364 1.118l1.2 3.674c.3.921-.755 1.688-1.538 1.118l-3.124-2.272a1 1 0 00-1.175 0l-3.124 2.272c-.782.57-1.838-.197-1.538-1.118l1.2-3.674a1 1 0 00-.364-1.118L2.45 9.1c-.782-.57-.382-1.81.588-1.81h3.862a1 1 0 00.95-.69l1.2-3.674z" />
              </svg>
              {movie.rating}
            </h2>
            <p className="text-gray-600 text-sm px-4 pb-4 text-center">
              {movie?.description}
            </p>
          </div>
        ))}
    </div>
  );
};

export default GptMovieSuggestion;
