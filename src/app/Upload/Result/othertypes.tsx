"use client"
import React, { useState } from "react";
import { Button } from "@nextui-org/react";

const OtherTypes = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const personalityTypes = [
    {
      id: 0,
      type: "Strategist",
      explanation:
        "You're the person who has a 5-year plan for your 5-year plan. You can see 10 moves ahead, but somehow still forget where you put your keys.",
      imagesrc: "/strategist.svg",
    },
    {
      id: 1,
      type: "Creator",
      explanation:
        "You're constantly coming up with ideas, most of which are way ahead of their time (and maybe a little impractical). Your brainstorming sessions are legendary, but so are your half-finished projects.",
      imagesrc: "/creator.svg",
    },
    {
      id: 2,
      type: "Techie",
      explanation:
        "You're the go-to person for anything with a plug or a code. You love solving problems—especially the ones you created while trying to 'improve' things.",
      imagesrc: "/techie.svg",
    },
    {
      id: 3,
      type: "Leader",
      explanation:
        "You lead by example, often into the fray. Your confidence is your superpower, but your team knows to duck when you start making 'gut decisions.'",
      imagesrc: "/leader.svg",
    },
    {
      id: 4,
      type: "Networker",
      explanation:
        "You know everyone, and everyone knows you. You're the social glue of any group, but sometimes you forget what you were actually supposed to be doing.",
      imagesrc: "/networker.svg",
    },
    {
      id: 5,
      type: "Organizer",
      explanation:
        "You have a place for everything, and everything is in its place. Your spreadsheets have spreadsheets, but your friends know to call you when they need a rescue mission.",
      imagesrc: "/organizer.svg",
    },
    {
      id: 6,
      type: "Adventurer",
      explanation:
        "You see life as one big adventure, and every day is a new opportunity to explore. Of course, your friends know to keep an eye on you, because sometimes your adventures need a bit of rescuing.",
      imagesrc: "/adventurer.svg",
    },
    {
      id: 7,
      type: "Caregiver",
      explanation:
        "You have a heart as big as your to-do list. You're always there to help, even when people don’t ask for it. But hey, who’s going to argue with free cookies?",
      imagesrc: "/caregiver.svg",
    },
  ];

  const nextTypes = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 > personalityTypes.length - 5 ? 0 : prevIndex + 1
    );
  };

  const prevTypes = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? personalityTypes.length - 5 : prevIndex - 1
    );
  };

  return (
    <div className="bg-gradient-to-b from-pink-500 to-red-500 flex flex-col items-center justify-center h-screen">
      <div className="text-center text-white">
        <h3 className="text-3xl font-bold mb-10">Other Types</h3>
        <div className="relative w-full max-w-7xl mx-auto">
          <div className="flex space-x-8 overflow-hidden">
            {personalityTypes.slice(currentIndex, currentIndex + 5).map((type, index) => (
              <div className="text-center w-1/5 flex-shrink-0" key={index}>
                <img
                  src={type.imagesrc}
                  alt={type.type}
                  className="w-40 h-40 rounded-full mx-auto"
                />
                <p className="mt-4 text-xl font-semibold">{type.type}</p>
                <p className="mt-2 text-sm">{type.explanation}</p>
              </div>
            ))}
          </div>
          {/* Arrows for navigation */}
          <div className="flex justify-between items-center absolute w-full bottom-0 px-4">
            <button
              onClick={prevTypes}
              className="text-white text-xl p-2 bg-black bg-opacity-50 rounded-full hover:bg-opacity-75"
            >
              &larr;
            </button>
            <button
              onClick={nextTypes}
              className="text-white text-xl p-2 bg-black bg-opacity-50 rounded-full hover:bg-opacity-75"
            >
              &rarr;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherTypes;
