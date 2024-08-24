import React from "react";

const LanguageDropdown = ({ onChange }) => {
  return (
    <select
      className="p-2 bg-gray-800 text-white rounded-md border border-gray-700 shadow-md focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="en">English</option>
      <option value="hi">Hindi</option>
      <option value="es">Spanish</option>
    </select>
  );
};

export default LanguageDropdown;
