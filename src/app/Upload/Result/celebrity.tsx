import React from "react";

interface CelebritiesProps {
  personalityInfo: any;
}

const Celebrities: React.FC<CelebritiesProps> = ({ personalityInfo }) => {
  return (
    <div className="bg-gradient-to-b from-blue-600 to-purple-500 flex flex-col items-center justify-center h-screen">
      <div className="text-center text-white">
        <h3 className="text-3xl font-bold mb-10">Celebrity {personalityInfo.type}s</h3>
        <div className="flex justify-center space-x-8">
          {personalityInfo.celebrities.map((celebrity: any, index: any) => (
            <div className="text-center" key={index}>
              <img
                src={celebrity.imagesrc} // Using the imagesrc from each celebrity
                alt={celebrity.name}      // Using the name as the alt text
                className="w-60 h-60 rounded-lg" // Bigger, squarer, with little rounded corners
              />
              <p className="mt-2">{celebrity.name}</p> {/* Displaying the celebrity's name */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Celebrities;
