import React from "react";
import GptSearchBar from "../components/GptSearchBar";
import GptMovieSuggestion from "../components/GptMovieSuggestion";

const GptSearch = () => {
  return (
    <div className="bg-gradient-to-b from-gray-800 to-blue-900 min-h-screen">
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearch;
