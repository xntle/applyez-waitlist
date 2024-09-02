import React from 'react';
// import personalityTypes from './personalities.json';
// import PersonalityBar from './personalityBar';
import NavigationBar from '../Navbar/page';

const LandingPage = () => {
  return (
    <div className="relative bg-gradient-to-r from-yellow-200 via-pink-200 to-pink-400 min-h-screen flex flex-col items-center justify-center text-gray-900"> 
      {/* Header Section */}
      <NavigationBar />

      {/* Main Content Section */}
      <main className="flex-1 w-full px-4 py-12">
        {/* Characters around the content */}
        <div className="absolute top-10 left-5">
        <img src="/images/leader.png" alt="Leader" />
        <p className="text-center mt-2">Creator</p>
        </div>

        {/* Main Text Content */}
        <div className="text-center mt-12">
          <h2 className="text-4xl font-bold">Discover your personal persona</h2>
          <p className="mt-4 text-lg">
            Upload your resume and we'll tell you how others really see you.
          </p>
          <a href="#upload" className="mt-8 inline-block bg-red-500 text-white px-8 py-4 rounded-full text-xl font-bold hover:bg-red-600">
            Continue
          </a>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Your Name or Organization. All rights reserved.</p>
          <p>
            <a href="#" className="text-blue-400 hover:underline">Privacy Policy</a> |
            <a href="#" className="text-blue-400 hover:underline">Terms of Service</a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
