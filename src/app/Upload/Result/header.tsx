import React from "react";
import { Button, Link } from "@nextui-org/react";

interface HeaderProps {
  personalityInfo: any;
}

const Header: React.FC<HeaderProps> = ({ personalityInfo }) => {
  return (
    <div className="bg-gradient-to-b from-green-600 to-green-500 flex flex-col items-center justify-center text-white h-screen">
      <div className="absolute top-0 left-0 w-full p-4 flex justify-between items-center">
        <h3 className="text-2xl font-bold text-black-500">ApplyEZ</h3>
        <Button as={Link} color="default" href="Waitlist" variant="flat" style={{ backgroundColor: 'white', color: '#000' }}>
          Join the Waitlist
        </Button>
      </div>

      <div className="text-center mt-20">
        <img
          src={personalityInfo.imagesrc}
          className="w-40 h-40 bg-white rounded-full mx-auto"
          alt={personalityInfo.type}
        />
        <div className="bg-gray-100 text-gray-800 py-2 px-4 rounded-full inline-block mt-4">
          ApplyEZ
        </div>
        <h2 className="text-4xl font-bold mt-4">
          You are a {personalityInfo.type}
        </h2>
        <p className="mt-4 text-lg text-gray-200 max-w-xl mx-auto">
          {personalityInfo.explanation}
        </p>
      </div>
    </div>
  );
};

export default Header;
