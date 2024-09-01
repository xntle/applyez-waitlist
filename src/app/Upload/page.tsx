'use client'; // For Next.js client-side component

import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Button, Card } from '@nextui-org/react';
import { useRouter } from 'next/navigation'; // Updated for Next.js 13+
import pdfToText from 'react-pdftotext';
import analyzeResume from '../api/route';
import personalitiesData from './personalities.json';

const Upload: React.FC = () => {
  const [extractedText, setExtractedText] = useState<string | null>(null);
  const [personalityType, setPersonalityType] = useState<string | null>(null);
  const [personalityInfo, setPersonalityInfo] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter(); // Initialize useRouter

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file && file.type === 'application/pdf') {
      try {
        const text = await extractTextFromPDF(file);
        setExtractedText(text);
  
        const personality = await analyzeResume(text);
        setPersonalityType(personality);
  
        const matchedPersonality = personalitiesData.find(
          (p) => p.type === personality
        );
  
        if (matchedPersonality) {
          setPersonalityInfo(matchedPersonality);
  
          // Send the matched personality data to the API route
          const response = await fetch('/api/writeOutput', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(matchedPersonality),
          });
  
          if (response.ok) {
            console.log('Personality data saved to output.json');
            // Reroute to the result page after writing the file
            router.push('/Result');
          } else {
            const errorData = await response.json();
            console.error('Failed to save personality data:', errorData);
          }
        } else {
          setError('Personality type not found in data.');
        }
      } catch (err: any) {
        setError(err.message);
      }
    } else {
      setError('Please upload a valid PDF file.');
    }
  }, [router]);
  

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-300 to-orange-200 flex justify-center items-center">
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
              Drag & drop your resume here, or click to select a PDF file
            </p>
          )}
        </div>
        {error && <p className="text-red-500 mt-4">{error}</p>}
        {personalityType && personalityInfo && (
          <div className="mt-4">
            <h3 className="text-lg font-bold">Detected Personality Type:</h3>
            <p><strong>Type:</strong> {personalityInfo.type}</p>
            <p><strong>Description:</strong> {personalityInfo.explanation}</p>
            <p><strong>Funny Alternate Career:</strong> {personalityInfo.alternate_career_path.title}</p>
            <p>{personalityInfo.alternate_career_path.desc}</p>
            <p><strong>Practical Alternate Career:</strong> {personalityInfo.alternate_career_path.title}</p>
            <p>{personalityInfo.alternate_career_path.desc}</p>
            <p><strong>Celebrities:</strong> {personalityInfo.celebrities.join(", ")}</p>
          </div>
        )}
      </Card>
    </div>
  );
};

// Function to extract text from the uploaded PDF using react-pdftotext
async function extractTextFromPDF(file: File): Promise<string> {
  try {
    const text = await pdfToText(file);
    return text;
  } catch (error) {
    throw new Error('Failed to extract text from PDF');
  }
}

export default Upload;
