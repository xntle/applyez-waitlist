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
        <div className="bg-gradient-to-b from-green-500 to-blue-600 flex flex-col items-center justify-center h-screen">
        <div className="text-center text-white">
          <h3 className="text-3xl font-bold">Dreams About 💭</h3>
          <p className="mt-2">{output.detail.dream_about}</p>

          <h3 className="text-3xl font-bold mt-8">Hates 😡</h3>
          <p className="mt-2">{output.detail.hates}</p>

          <h3 className="text-3xl font-bold mt-8">Most Likely To ✨</h3>
          <p className="mt-2">{output.detail.most_likely_to}</p>

          <h3 className="text-3xl font-bold mt-8">Your Motto 💬</h3>
          <p className="mt-2">{output.detail.motto}</p>
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
