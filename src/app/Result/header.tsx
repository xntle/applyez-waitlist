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
      <div className="bg-gradient-to-b from-green-600 to-green-500 flex flex-col items-center justify-center text-white h-screen">
        <div className="absolute top-0 left-0 w-full p-4 flex justify-between items-center">
          <h3 className="text-2xl font-bold text-black-500">ApplyEZ</h3>
          <Button
            as={Link}
            color="default"
            href="#"
            variant="flat"
            css={{ backgroundColor: "white", color: "#000" }}
          >
            Sign Up For Our Waitlist
          </Button>
        </div>

        <div className="text-center mt-20">
          <img
            src={output.imagesrc} // assuming output.imagesrc is "strategist.png"
            className="w-40 h-40 bg-white rounded-full mx-auto"
          />
          <div className="bg-gray-100 text-gray-800 py-2 px-4 rounded-full inline-block mt-4">
            ApplyEZ
          </div>
          <h2 className="text-4xl font-bold mt-4">
            You are a {output.type}
          </h2>
          <p className="mt-4 text-lg text-gray-200 max-w-xl mx-auto">
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
