import React from "react";

interface CareerProps {
  personalityInfo: any;
}

const Career: React.FC<CareerProps> = ({ personalityInfo }) => {
  return (
    <div className="bg-gradient-to-b from-purple-500 to-pink-500 flex flex-col items-center justify-center h-screen">
      <div className="text-center text-white">
        <h3 className="text-3xl font-bold mb-10">Alternate Career Path</h3>
        <div className="flex flex-col items-center">
          <img
            src={personalityInfo.alternate_career_path.imagesrc}
            alt={personalityInfo.alternate_career_path.title}
            className="w-40 h-40 rounded-full"
          />
          <h4 className="text-xl font-semibold mt-4">{personalityInfo.alternate_career_path.title}</h4>
          <p className="mt-2">{personalityInfo.alternate_career_path.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Career;
