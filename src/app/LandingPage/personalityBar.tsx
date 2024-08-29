import React from "react";
import personalityTypes from './personalities.json';


const PersonalityBar = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-8 gap-8">
    {personalityTypes.map((type) => (
      <div key={type.title} className="group relative flex justify-center items-center">
        <div className="w-24 h-24 bg-blue-500 text-white rounded-full flex items-center justify-center text-center transition-transform transform group-hover:scale-110">
          <span className="text-xl font-bold">{type.title.charAt(0)}</span>
        </div>
        <div className="absolute top-28 left-0 w-full bg-white p-4 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-4 transform transition-all duration-300 ease-in-out">
          <h3 className="text-lg font-bold mb-2">{type.title}</h3>
          <p className="text-sm text-gray-700">{type.description}</p>
        </div>
      </div>
    ))}
  </div>
  );
};

export default PersonalityBar;