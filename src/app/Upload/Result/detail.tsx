import React from "react";

interface DetailProps {
  personalityInfo: any;
}

const Detail: React.FC<DetailProps> = ({ personalityInfo }) => {
  return (
    <div className="bg-gradient-to-b from-green-500 to-blue-600 flex flex-col items-center justify-center h-screen">
      <div className="text-center text-white">
        <h3 className="text-3xl font-bold">Dreams About 💭</h3>
        <p className="mt-2">{personalityInfo.detail.dream_about}</p>

        <h3 className="text-3xl font-bold mt-8">Hates 😡</h3>
        <p className="mt-2">{personalityInfo.detail.hates}</p>

        <h3 className="text-3xl font-bold mt-8">Most Likely To ✨</h3>
        <p className="mt-2">{personalityInfo.detail.most_likely_to}</p>

        <h3 className="text-3xl font-bold mt-8">Your Motto 💬</h3>
        <p className="mt-2">{personalityInfo.detail.motto}</p>
      </div>
    </div>
  );
};

export default Detail;
