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
<div className="bg-gradient-to-b from-purple-500 to-pink-500 flex flex-col items-center justify-center h-screen">
<div className="text-center text-white">
  <h3 className="text-3xl font-bold mb-10">Alternate Career Path</h3>
  <div className="flex flex-col items-center">
    <img
      src={output.alternate_career_path.imagesrc}
      alt={output.alternate_career_path.title}
      className="w-40 h-40 rounded-full"
    />
    <h4 className="text-xl font-semibold mt-4">{output.alternate_career_path.title}</h4>
    <p className="mt-2">{output.alternate_career_path.desc}</p>
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


