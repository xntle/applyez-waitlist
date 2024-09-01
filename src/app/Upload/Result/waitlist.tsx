"use client";
import React from "react";
import { Button, Card, CardBody } from "@nextui-org/react";

const Waitlist = () => {
  const features = [
    {
      title: "100% ATS Friendly Resume",
      description: "Ensure your resume passes through Applicant Tracking Systems with ease.",
      icon: InboxIcon,
    },
    {
      title: "Curate Cover Letters",
      description: "Generate cover letters tailored to specific job descriptions using AI.",
      icon: MergeIcon,
    },
    {
      title: "Tailor Your Resume",
      description: "Adjust your resume based on job descriptions to stand out.",
      icon: ComponentIcon,
    },
    {
      title: "Track Your Applications",
      description: "Keep a record of your job applications and monitor progress.",
      icon: SearchIcon,
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-black to-black text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
            Want to Know How Well Your Resume Does with ATS Scanning?
          </h1>
          <p className="mt-4 text-lg max-w-[600px] mx-auto text-zinc-200">
            ApplyEZ can help you create a 100% ATS-friendly resume, curate cover letters using AI, tailor your resume based on job descriptions, and track your applications.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-gray-800 text-white p-6 rounded-lg">
              <CardBody className="flex flex-col items-center space-y-4">
                <feature.icon className="text-white h-8 w-8 mb-2 border-2 border-gray-500 rounded-full" />
                <h2 className="text-xl font-bold">{feature.title}</h2>
                <p className="text-zinc-200">{feature.description}</p>
              </CardBody>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
        <Button
  as="a"
  href="/waitlist-page"
  color="default"
  style={{ width: 'auto', padding: '1rem 2rem' }} // Manually set width and padding
  className="bg-white text-black"
>
  Join the Waitlist
</Button>

        </div>
      </div>
    </section>
  );
};

// Icons used in the features
function InboxIcon(props:any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
      <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
    </svg>
  );
}

function MergeIcon(props:any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m8 6 4-4 4 4" />
      <path d="M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22" />
      <path d="m20 22-5-5" />
    </svg>
  );
}

function ComponentIcon(props:any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z" />
      <path d="m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z" />
      <path d="M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z" />
      <path d="m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z" />
    </svg>
  );
}

function SearchIcon(props:any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

export default Waitlist;
