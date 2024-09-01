import React from "react";
import { Button, Link } from "@nextui-org/react";
import { promises as fs } from "fs";

export default async function Header() {
  try {
    const filePath = process.cwd() + "/src/app/Upload/output.json";
    const file = await fs.readFile(filePath, "utf8");

    if (!file) {
      throw new Error("File is empty or not found");
    }

    const output = JSON.parse(file);

    return (
      <div className="bg-gradient-to-b from-blue-600 to-purple-500 flex flex-col items-center justify-center h-screen">
        <div className="text-center text-white">
          <h3 className="text-3xl font-bold mb-10">Celebrity {output.type}s</h3>
          <div className="flex justify-center space-x-8">
            {output.celebrities.map((celebrity: any, index: any) => (
              <div className="text-center" key={index}>
                <img
                  src={celebrity.imagesrc} // Using the imagesrc from each celebrity
                  alt={celebrity.name}      // Using the name as the alt text
                  className="w-60 h-60 rounded-lg" // Bigger, squarer, with little rounded corners
                />
                <p className="mt-2">{celebrity.name}</p> {/* Displaying the celebrity's name */}
              </div>
            ))}
          </div>
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
