import React from "react";
import { Button, Link } from "@nextui-org/react";
import { promises as fs } from "fs";

export default async function Share() {
  try {
    const filePath = process.cwd() + "/src/app/Upload/output.json";
    const file = await fs.readFile(filePath, "utf8");

    if (!file) {
      throw new Error("File is empty or not found");
    }

    const output = JSON.parse(file);

    return (
        <div className="bg-gradient-to-b from-orange-500 to-black h-screen flex flex-col items-center justify-center">

        <div className="text-center mt-20">
          <img
            src={output.imagesrc} 
            className="w-40 h-40 bg-white rounded-full mx-auto"
          />
          <div className="bg-gray-100 text-gray-800 py-2 px-4 rounded-full inline-block mt-4">
            Take a screenshot and share!
          </div>
          <h2 className="text-4xl text-white font-bold mt-4">
            I'm a {output.type}!
          </h2>
          <p className="mt-4 text-lg text-white max-w-xl mx-auto">
            {output.explanation}
          </p>
        </div>
      </div>
    );
  } catch (error: any) {
    console.error("Error reading or parsing the file:", error);
    return (
      <div className="bg-red-600 text-white p-4">
        <h2>Error loading data</h2>
        <p>{error.message}</p>
      </div>
    );
  }
}
