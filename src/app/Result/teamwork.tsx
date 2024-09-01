
import React from "react";
import { Button, Link , Image} from "@nextui-org/react";
import { promises as fs } from "fs";

export default async function Teamwork() {
  try {
    const filePath = process.cwd() + "/src/app/Upload/output.json";
    const file = await fs.readFile(filePath, "utf8");

    if (!file) {
      throw new Error("File is empty or not found");
    }

    const output = JSON.parse(file);

    return (
<div className="bg-gradient-to-b from-red-500 to-orange-500 flex flex-col items-center justify-center h-screen">
<div className="text-center text-white">
  <h3 className="text-3xl font-bold mb-10">{output.type}s work well with...</h3>
  <div className="flex flex-col items-center">
    <Image
      src={output.works_well_with.imagesrc}
      alt={output.works_well_with.personality_type}
      className="w-40 h-40 rounded-full"
    />
    <h4 className="text-xl font-semibold mt-4">{output.works_well_with.personality_type}</h4>
    <p className="mt-2 max-w-xl">{output.works_well_with.explanation}</p>
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
