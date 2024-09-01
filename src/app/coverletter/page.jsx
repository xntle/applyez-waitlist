"use client";

import { useState } from "react";

const CoverLetterForm = () => {
  const [jobDescription, setJobDescription] = useState("");
  const [resumeData, setResumeData] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const requestData = {
      jobDescription,
      resumeData,
    };

    try {
      const response = await fetch("/api/generate-cover-letter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestData),
      });

      const result = await response.json();
      setCoverLetter(result.coverLetter);
    } catch (error) {
      console.error("Error generating cover letter:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary to-secondary p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8 text-center">Cover Letter Generator</h1>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2">
            <form onSubmit={handleSubmit} className="bg-white/75 backdrop-blur-lg rounded-2xl shadow-lg p-6 space-y-4">
              <div>
                <label htmlFor="jobDescription" className="block mb-1 text-sm font-medium text-gray-700">
                  Job Description
                </label>
                <textarea
                  id="jobDescription"
                  value={jobDescription}
                  onChange={(e) => setJobDescription(e.target.value)}
                  className="w-full px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                  rows="6"
                  placeholder="Paste the job description here"
                />
              </div>
              <div>
                <label htmlFor="resumeData" className="block mb-1 text-sm font-medium text-gray-700">
                  Resume Data
                </label>
                <textarea
                  id="resumeData"
                  value={resumeData}
                  onChange={(e) => setResumeData(e.target.value)}
                  className="w-full px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                  rows="6"
                  placeholder="Paste your resume data here"
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 text-white bg-primary rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                disabled={isLoading}
              >
                {isLoading ? "Generating..." : "Generate Cover Letter"}
              </button>
            </form>
          </div>
          <div className="w-full md:w-1/2">
            <div className="bg-white/75 backdrop-blur-lg rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Generated Cover Letter</h2>
              {coverLetter ? (
                <div className="prose text-gray-700">
                  <p>{coverLetter}</p>
                </div>
              ) : (
                <p className="text-gray-500">Your generated cover letter will appear here.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverLetterForm;
