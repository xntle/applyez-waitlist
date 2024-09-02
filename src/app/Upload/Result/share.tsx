import React, { useState } from "react";

interface ShareProps {
  personalityInfo: any;
}

const Share: React.FC<ShareProps> = ({ personalityInfo }) => {
  const [copySuccess, setCopySuccess] = useState<string>("");

  const handleCopyLink = () => {
    const link = window.location.href; // Get the current page URL
    navigator.clipboard.writeText(link).then(
      () => {
        setCopySuccess("Link copied to clipboard!");
      },
      (err) => {
        setCopySuccess("Failed to copy link.");
        console.error("Could not copy text: ", err);
      }
    );
  };

  return (
    <div className="bg-gradient-to-b from-orange-500 to-black h-screen flex flex-col items-center justify-center">
      <div className="text-center mt-20">
        <img
          src={personalityInfo.imagesrc}
          alt={personalityInfo.type}
          className="w-40 h-40 bg-white rounded-full mx-auto"
        />
        <div className="bg-gray-100 text-gray-800 py-2 px-4 rounded-full inline-block mt-4">
          Share with your friends
        </div>
        <h2 className="text-4xl text-white font-bold mt-4">
          I&apos;m a {personalityInfo.type}!
        </h2>
        <p className="mt-4 text-lg text-white max-w-xl mx-auto">
          {personalityInfo.explanation}
        </p>

        <button
          onClick={handleCopyLink}
          className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full"
        >
          Copy Link
        </button>
        {copySuccess && (
          <p className="mt-2 text-green-500">{copySuccess}</p>
        )}
      </div>
    </div>
  );
};

export default Share;
