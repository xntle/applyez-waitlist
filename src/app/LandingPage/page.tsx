
import React from "react";
import { Link, Button } from "@nextui-org/react";

export default function LandingPage() {
  return (
    <div className="relative bg-gradient-to-b from-pink-300 to-orange-200 min-h-screen flex flex-col items-center justify-center text-gray-900 overflow-hidden">
      {/* Navigation Bar */}
      <div className="absolute top-0 left-0 w-full p-4 flex justify-between items-center">
        <h3 className="text-2xl font-bold text-black-500">ApplyEZ</h3>
        <Button as={Link} color="default" href="#" variant="flat" css={{ backgroundColor: 'white', color: '#000' }}>
            Sign Up For Our Waitlist
        </Button>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center ">
        <h1 className="text-4xl font-bold text-gray-800">
            What Vibe is Your LinkedIn Giving?
        </h1>
        <p className="mt-4 text-lg">
            Upload your resume and we'll tell you how others really see you.
        </p>
        <Button as={Link} color="default" href="Upload" variant="flat"  className="mt-4 bg-red-600 text-bold text-white px-20 py-6 text-2xl rounded-full">
            Start
        </Button>
        <p className="mt-4 text-sm text-gray-600">
          Your resume will not be stored or shared.
        </p>
      </div>
    </div>
  );
}



