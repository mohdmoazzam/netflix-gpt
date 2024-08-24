import React from "react";
import { useNavigate } from "react-router-dom";

const ProfileDropdown = ({ handleSignOut }) => {
  const navigate = useNavigate();

  const handleGptSearchClick = () => {
    navigate("/gpt-search");
  };

  return (
    <div className="relative">
      <div className="absolute right-0 top-5 mt-2 w-56 bg-white text-gray-800 rounded-lg shadow-lg z-20">
        <ul className="py-2">
          <li className="px-4 py-3 text-sm hover:bg-blue-500 hover:text-white rounded-t-lg cursor-pointer text-center transition-all duration-150 ease-in-out">
            Profile
          </li>
          <li
            className="px-4 py-3 text-sm text-center cursor-pointer rounded-none transition-all duration-150 ease-in-out hover:bg-gradient-to-r hover:from-blue-500 hover:via-purple-500 hover:to-cyan-500 hover:text-white"
            onClick={handleGptSearchClick}
          >
            GPT Search
          </li>
          <li
            className="px-4 py-3 text-sm hover:bg-red-500 hover:text-white rounded-b-lg cursor-pointer text-center transition-all duration-150 ease-in-out"
            onClick={handleSignOut}
          >
            Sign Out
          </li>
        </ul>
      </div>
      <div className="absolute right-2 top-5 w-0 h-0 border-x-8 border-x-transparent border-b-8 border-b-white"></div>
    </div>
  );
};

export default ProfileDropdown;
