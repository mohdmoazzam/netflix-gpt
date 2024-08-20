import React from "react";

const ProfileDropdown = ({ handleSignOut }) => {
  return (
    <div className="relative">
      <div className="absolute right-0 top-5 mt-2 w-48 bg-black text-white rounded-md shadow-lg z-20">
        <ul className="py-2">
          <li className="px-4 py-2 text-sm hover:bg-gray-800 rounded-md cursor-pointer text-center">
            Profile
          </li>
          <li
            className="px-4 py-2 text-sm hover:bg-gray-800 rounded-md cursor-pointer text-center"
            onClick={handleSignOut}
          >
            Sign Out
          </li>
        </ul>
      </div>
      <div className="absolute right-2 top-5 w-0 h-0 border-x-8 border-x-transparent border-b-8 border-b-black"></div>
    </div>
  );
};

export default ProfileDropdown;
