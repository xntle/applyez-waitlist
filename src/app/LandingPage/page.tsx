import React from 'react';
import personalityTypes from './personalities.json';
import PersonalityBar from './personalityBar';
import NavigationBar from '../Navbar/page';

const LandingPage = () => {
  return (
    <div className="bg-gray-100 text-gray-900 min-h-screen min-h-screen">
      {/* Header Section */}
    <NavigationBar></NavigationBar>
      {/* Main Content Section */}
      <main className="container mx-auto py-12 px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold">Your Resume say more about you than you think!</h2>
          <p className="mt-4 text-lg">
            Our quiz will analyze your resume to match you with one of several personality types. Discover which one you are!
          </p>
        </div>

        <div className="text-center mt-12">
          <a href="Upload" className="bg-yellow-500 text-white px-6 py-3 rounded-lg font-bold text-xl hover:bg-yellow-600">
            Get Started
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
