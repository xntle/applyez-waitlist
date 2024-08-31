'use client'; // For Next.js client-side component

import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Button, Card } from '@nextui-org/react';
import pdfToText from 'react-pdftotext';
import analyzeResume from '../api/route';
import personalitiesData from './personalities.json';
import { match } from 'assert';

const Upload: React.FC = () => {
  const [extractedText, setExtractedText] = useState<string | null>(null);
  const [personalityType, setPersonalityType] = useState<string | null>(null);
  const [personalityInfo, setPersonalityInfo] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file && file.type === 'application/pdf') {
      try {
        const text = await extractTextFromPDF(file);
        setExtractedText(text);
        console.log('Extracted Text:', text);

        const personality = await analyzeResume(text);
        // setPersonalityType(personality);
        console.log('Personality Type:', personality);
        // Find the personality type in the JSON
        const matchedPersonality = personalitiesData.personalities.find(
          (p) => p.personality_type === personality
        );


        if (matchedPersonality) {
          setPersonalityInfo(matchedPersonality);
        } else {
          setError('Personality type not found in data.');
        }
      } catch (err: any) {
        setError(err.message);
      }
    } else {
      setError('Please upload a valid PDF file.');
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex justify-center items-center">
      <Card className="w-full max-w-lg p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-4">Upload Your Resume</h2>
        <div
          {...getRootProps()}
          className={`p-6 border-2 border-dashed rounded-lg cursor-pointer text-center ${
            isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
          }`}
        >
          <input {...getInputProps()} />
          {isDragActive ? (
            <p className="text-blue-500">Drop the files here...</p>
          ) : (
            <p className="text-gray-500">
              Drag 'n' drop your resume here, or click to select a PDF file
            </p>
          )}
        </div>
        {error && <p className="text-red-500 mt-4">{error}</p>}
        {personalityType && personalityInfo && (
          <div className="mt-4">
            <p>hi</p>
          </div>
        )}

      </Card>
    </div>
  );
};

async function extractTextFromPDF(file: File): Promise<string> {
  try {
    const text = await pdfToText(file);
    return text;
  } catch (error) {
    throw new Error('Failed to extract text from PDF');
  }
}

export default Upload;
