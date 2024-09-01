'use client'; // For Next.js client-side component

import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Card } from "@nextui-org/react";
import pdfToText from "react-pdftotext";
import analyzeResume from "../../../pages/api/route";
import personalitiesData from "./personalities.json";
import Header from "./Result/header";
import Waitlist from "./Result/waitlist";
import Detail from "./Result/detail";
import Celebrities from "./Result/celebrity";
import Career from "./Result/career";
import OtherTypes from "./Result/othertypes";
import Teamwork from "./Result/teamwork";
import Share from "./Result/share";

const Upload: React.FC = () => {
  const [extractedText, setExtractedText] = useState<string | null>(null);
  const [personalityType, setPersonalityType] = useState<string | null>(null);
  const [personalityInfo, setPersonalityInfo] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file && file.type === "application/pdf") {
      try {
        const text = await extractTextFromPDF(file);
        setExtractedText(text);

        const personality = await analyzeResume(text);
        setPersonalityType(personality as string | null);

        if (personality) {
          const matchedPersonality = personalitiesData.find(
            (p) => p.type === personality
          );

          if (matchedPersonality) {
            setPersonalityInfo(matchedPersonality);
          } else {
            setError("Personality type not found in data.");
          }
        }
      } catch (err: any) {
        setError(err.message);
      }
    } else {
      setError("Please upload a valid PDF file.");
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-300 to-orange-200 flex justify-center items-center">
      {personalityInfo ? (
        <div className="w-full h-full bg-gradient-to-b from-green-600 to-green-500 text-white">
          {/* Header Component */}
          <Header personalityInfo={personalityInfo} />
          <Detail personalityInfo={personalityInfo} />
          <Celebrities personalityInfo={personalityInfo} />
          <Career personalityInfo={personalityInfo} />
          <OtherTypes />
          <Teamwork personalityInfo={personalityInfo} />    
            <Share personalityInfo={personalityInfo} />
            <Waitlist />

        </div>
      ) : (
        <Card className="w-full max-w-lg p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold text-center mb-4">
            Upload Your Resume
          </h2>
          <div
            {...getRootProps()}
            className={`p-6 border-2 border-dashed rounded-lg cursor-pointer text-center ${
              isDragActive ? "border-blue-500 bg-blue-50" : "border-gray-300"
            }`}
          >
            <input {...getInputProps()} />
            {isDragActive ? (
              <p className="text-blue-500">Drop the files here...</p>
            ) : (
              <p className="text-gray-500">
                Drag & drop your resume here, or click to select a PDF file
              </p>
            )}
          </div>
          {error && <p className="text-red-500 mt-4">{error}</p>}
        </Card>
      )}
    </div>
  );
};

// Function to extract text from the uploaded PDF using react-pdftotext
async function extractTextFromPDF(file: File): Promise<string> {
  try {
    const text = await pdfToText(file);
    return text;
  } catch (error) {
    throw new Error("Failed to extract text from PDF");
  }
}

export default Upload;
