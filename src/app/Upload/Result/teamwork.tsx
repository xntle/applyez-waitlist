import React from "react";

interface TeamworkProps {
  personalityInfo: any;
}

const Teamwork: React.FC<TeamworkProps> = ({ personalityInfo }) => {
  return (
    <div className="bg-gradient-to-b from-red-500 to-orange-500 flex flex-col items-center justify-center h-screen">
      <div className="text-center text-white">
        <h3 className="text-3xl font-bold mb-10">
          {personalityInfo.type}s work well with...
        </h3>
        <div className="flex flex-col items-center">
          <img
            src={personalityInfo.works_well_with.imagesrc}
            alt={personalityInfo.works_well_with.personality_type}
            className="w-40 h-40 rounded-full"
          />
          <h4 className="text-xl font-semibold mt-4">
            {personalityInfo.works_well_with.personality_type}
          </h4>
          <p className="mt-2 max-w-xl">
            {personalityInfo.works_well_with.explanation}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Teamwork;
