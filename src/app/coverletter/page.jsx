"use client";

import React, { useState, useRef } from "react";
import pdfToText from "react-pdftotext";
import { jsPDF } from "jspdf";
import { saveAs } from "file-saver";
import { Document, Packer, Paragraph, TextRun } from "docx";

export default function Component() {
  const [coverLetter, setCoverLetter] = useState(
    "Dear Hiring Manager,\n\nI am writing to express my strong interest in the [Job Title] position at [Company Name]. With my background in [Your Relevant Experience], I am confident in my ability to contribute effectively to your team.\n\n[Your Skills and Achievements]\n\nThank you for considering my application. I look forward to the opportunity to discuss how I can contribute to [Company Name]'s success.\n\nSincerely,\n[Your Name]"
  );
  const [isEditing, setIsEditing] = useState(false);
  const [editedCoverLetter, setEditedCoverLetter] = useState(coverLetter);
  const [jobDescription, setJobDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [resumeText, setResumeText] = useState("");
  const fileInputRef = useRef(null);

  const handleFileUpload = async (event) => {
    const file = event.target.files?.[0];
    if (file && file.type === "application/pdf") {
      try {
        const text = await pdfToText(file);
        setResumeText(text);
        console.log("PDF text extracted successfully");
      } catch (error) {
        console.error("Error extracting text from PDF:", error);
        alert("Failed to extract text from PDF. Please try again or use a different file.");
      }
    } else {
      alert("Please upload a valid PDF file.");
    }
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleSaveEdit = () => {
    setCoverLetter(editedCoverLetter);
    setIsEditing(false);
  };

  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    doc.text(editedCoverLetter, 10, 10);
    doc.save("cover_letter.pdf");
  };

  const handleDownloadDOCX = () => {
    const doc = new Document({
      sections: [
        {
          children: [
            new Paragraph({ children: [new TextRun(editedCoverLetter)] }),
          ],
        },
      ],
    });

    Packer.toBlob(doc).then((blob) => {
      saveAs(blob, "cover_letter.docx");
    });
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(editedCoverLetter).then(
      () => {
        alert("Cover letter copied to clipboard!");
      },
      (err) => {
        console.error("Could not copy text: ", err);
      }
    );
  };

  const handleGenerateCoverLetter = async () => {
    if (!resumeText) {
      alert("Please upload a resume PDF first.");
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch('/api/generate-cover-letter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          jobDescription,
          resumeData: resumeText,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate cover letter');
      }

      const data = await response.json();
      setEditedCoverLetter(data.coverLetter);
      setCoverLetter(data.coverLetter);
    } catch (error) {
      console.error('Error generating cover letter:', error);
      alert('Failed to generate cover letter. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gradient-to-br from-gray-900 to-gray-700">
      <div className="w-full lg:w-64 bg-gray-800 p-4">
        <h2 className="text-xl font-bold text-white mb-4">Templates</h2>
        <div className="h-48 lg:h-[calc(100vh-8rem)] overflow-y-auto">
          <div className="space-y-2">
            <button className="w-full text-left px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded">
              Template 1
            </button>
            <button className="w-full text-left px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded">
              Template 2
            </button>
            <button className="w-full text-left px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded">
              Template 3
            </button>
          </div>
        </div>
      </div>
      <div className="flex-1 p-4 lg:p-8 space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">
              Generated Cover Letter
            </h2>
            <div className="bg-gray-800 rounded-lg p-4">
              {isEditing ? (
                <textarea
                  value={editedCoverLetter}
                  onChange={(e) => setEditedCoverLetter(e.target.value)}
                  className="w-full h-64 lg:h-[calc(100vh-20rem)] resize-none bg-gray-700 text-white p-2 rounded"
                />
              ) : (
                <div className="h-64 lg:h-[calc(100vh-20rem)] overflow-y-auto">
                  <div className="prose prose-invert">
                    <p className="whitespace-pre-wrap text-white">
                      {editedCoverLetter}
                    </p>
                  </div>
                </div>
              )}
            </div>
            <div className="flex flex-wrap gap-2">
              {isEditing ? (
                <button
                  onClick={handleSaveEdit}
                  className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={handleEditToggle}
                  className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
                >
                  Edit
                </button>
              )}
              <button
                onClick={handleDownloadPDF}
                className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded"
              >
                Download PDF
              </button>
              <button
                onClick={handleDownloadDOCX}
                className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded"
              >
                Download DOCX
              </button>
              <button
                onClick={handleCopyToClipboard}
                className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded"
              >
                Copy to Clipboard
              </button>
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">Upload Resume & Job Description</h2>
            <div className="bg-gray-800 rounded-lg p-4 flex flex-col h-64 lg:h-[calc(100vh-20rem)]">
              <div className="flex-1 mb-4">
                <textarea
                  value={jobDescription}
                  onChange={(e) => setJobDescription(e.target.value)}
                  placeholder="Paste job description here..."
                  className="w-full h-full resize-none bg-gray-700 text-white p-2 rounded"
                />
              </div>
              <div className="flex-1 relative">
                <input
                  type="file"
                  accept=".pdf"
                  onChange={handleFileUpload}
                  ref={fileInputRef}
                  className="hidden"
                />
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full h-full flex items-center justify-center bg-gray-700 hover:bg-gray-600 text-white rounded"
                >
                  {resumeText ? "PDF Uploaded" : "Click to upload PDF"}
                </button>
              </div>
            </div>
            <button
              onClick={handleGenerateCoverLetter}
              disabled={isLoading || !resumeText}
              className={`w-full px-4 py-2 ${
                isLoading || !resumeText ? 'bg-gray-500' : 'bg-blue-500 hover:bg-blue-600'
              } text-white rounded`}
            >
              {isLoading ? 'Generating...' : 'Generate Cover Letter'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
