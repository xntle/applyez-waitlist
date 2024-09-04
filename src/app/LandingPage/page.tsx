import React from "react";
import { Button, Link } from "@nextui-org/react";


export default function LandingPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-pink-300 to-orange-200 flex flex-col justify-center items-center">
      <div className="absolute top-0 left-0 w-full p-4 flex justify-between items-center">
        <h3 className="text-2xl font-bold text-black-500">ApplyEZ</h3>
        <div className="flex space-x-2">
          <Button 
            as={Link}
            href="/Coverletter"
            color="default"
            variant="flat"
            style={{ backgroundColor: 'white', color: '#000' }}
          >
            Cover Letter
          </Button>
          <Button as={Link} color="default" href="/Waitlist" variant="flat" style={{ backgroundColor: 'white', color: '#000' }}>
            Join The Waitlist
          </Button>
        </div>
      </div>


      {/* Main Content */}
      <div className="relative z-10 text-center ">
        <h1 className="text-4xl font-bold text-gray-800">
            What Vibe is Your Resume Giving?
        </h1>
        <p className="mt-4 text-lg">
            Upload your resume and we&apos;ll tell you how others really see you.
        </p>
        <Button as={Link} color="default" href="Upload" variant="flat"  className="mt-4 bg-white text-bold text-black px-20 py-6 text-1xl ">
            Start
        </Button>
        <p className="mt-4 text-sm text-gray-600">
          Your resume will not be stored or shared.
        </p>
        <p className="mt-4 text-sm text-blue-600">inspired by fide</p>
      </div>
    </div>
  );
}



