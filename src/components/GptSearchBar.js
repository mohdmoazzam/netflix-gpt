import React from "react";
import { langConfig } from "../utils/languageConstant";
import LanguageDropdown from "./LanguageDropdown";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "../redux/configSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();

  const lang = useSelector((store) => store.config.lang);

  const handleOnChange = (selectedLanguage) => {
    dispatch(changeLanguage(selectedLanguage));
  };

  return (
    <div className="bg-gray-900 py-2 flex items-center justify-around h-28">
      <div className="text-center relative">
        <h2 className="text-4xl font-bold text-white uppercase tracking-wide relative z-10 animate-text">
          GPT Search
        </h2>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-24 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-xl opacity-75 animate-pulse"></div>
        </div>
        <p className="text-gray-400 mt-2 text-sm z-10 relative">
          Find what you're looking for in seconds
        </p>
      </div>
      <form className="flex items-center bg-gray-800 rounded-lg shadow-md gap-2">
        <input
          type="text"
          placeholder={langConfig[lang].gptSearchPlaceholder}
          className="p-4 w-80 rounded-l-lg text-black focus:outline-none"
        />
        <button className="py-4 px-6 bg-red-700 text-white rounded-r-lg hover:bg-zinc-700 focus:outline-none w-22">
          {langConfig[lang].search}
        </button>
      </form>
      <LanguageDropdown onChange={handleOnChange} />
    </div>
  );
};

export default GptSearchBar;
