"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseconfig";

// Reusable Input component
const Input = (props) => (
  <input {...props} className={`px-3 py-2 rounded-md ${props.className}`} />
);

// Reusable Button component
const Button = ({ children, className, ...props }) => (
  <button
    className={`px-4 py-2 rounded-md font-semibold ${className}`}
    {...props}
  >
    {children}
  </button>
);

// Main component
export default function Component() {
  const [email, setEmail] = useState("");
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const root = document.documentElement;
      const hue = Math.random() * 360;
      root.style.setProperty("--gradient-hue", `${hue}deg`);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus("submitting");

    try {
      // Add email to Firestore
      await addDoc(collection(db, "waitlist"), {
        email,
        timestamp: new Date(),
      });

      console.log("Email added to waitlist:", email);
      setSubmitStatus("success");
      setEmail(""); // Clear the input field
    } catch (error) {
      console.error("Error adding email to waitlist:", error);
      setSubmitStatus("error");
    }
  };

  const features = [
    {
      title: "ATS-Friendly Resume Generator",
      description:
        "Optimize your resume for Applicant Tracking Systems (ATS) to ensure it gets noticed by recruiters.",
    },
    {
      title: "AI-Powered Cover Letter Generator",
      description:
        "Generate tailored cover letters that align with job descriptions, showcasing your unique strengths.",
    },
    {
      title: "Application Tracker",
      description:
        "Manage your job applications with ease, track progress, and never miss an opportunity.",
    },
    {
      title: "Resume Vibe Analyzer",
      description:
        "Analyze the tone and vibe of your resume to ensure it reflects the right personality and matches the job you're targeting.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden flex flex-col">
      <div className="absolute inset-0 bg-[#1a1a1a]"></div>
      <div className="absolute inset-0 opacity-30">
        <div className="relative w-full h-full">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full filter blur-3xl animate-blob"></div>
        </div>
      </div>

      <header className="relative z-10 bg-black bg-opacity-20 backdrop-filter backdrop-blur-lg border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2 text-purple-500"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
            <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
            <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
            <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
          </svg>
          <span className="text-xl font-bold">ApplyEZ</span>
        </div>
      </header>

      <main className="relative z-10 flex-grow container mx-auto px-4 py-16 flex flex-col">
        <motion.h1
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-center mb-8 whitespace-nowrap overflow-hidden text-ellipsis"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Get ready to impress with ApplyEZ!
        </motion.h1>
        <motion.p
          className="text-xl text-center mb-12 text-gray-300"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Be the first to experience our ATS-friendly resume generator, cover
          letter generator, and personality tester.
        </motion.p>
        <motion.form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="flex gap-2">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 flex-grow"
              required
            />
            <Button
              type="submit"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold"
              disabled={submitStatus === "submitting"}
            >
              {submitStatus === "submitting" ? "Joining..." : "Join Waitlist"}
            </Button>
          </div>
          {submitStatus === "success" && (
            <p className="mt-2 text-green-500">Successfully joined the waitlist!</p>
          )}
          {submitStatus === "error" && (
            <p className="mt-2 text-red-500">Error joining the waitlist. Please try again.</p>
          )}
        </motion.form>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-grow">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-6 shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
            >
              <h2 className="text-xl font-semibold mb-4">{feature.title}</h2>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </main>

      <footer className="relative z-10 bg-black bg-opacity-20 backdrop-filter backdrop-blur-lg border-t border-gray-800 py-4 mt-8">
        <div className="container mx-auto px-4 text-center text-sm text-gray-400">
          © 2024 ApplyEZ. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
