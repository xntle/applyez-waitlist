import { OpenAI } from "openai";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { jobDescription, resumeData } = await req.json();

  const systemPrompt = `
You are an expert cover letter writer. Your task is to create a highly personalized, compelling cover letter using the provided template.
    `;

  const userPrompt = `
Job Description:
${jobDescription}

Applicant's Resume:
${resumeData}

Instructions:
1. Analyze the job description and identify key requirements, skills, and qualifications.
2. Carefully review the applicant's resume and identify relevant experiences, skills, and achievements that align with the job requirements.
3. Write a concise, engaging cover letter (maximum 350 words) using the following LaTeX-style format:

\\begin{document}

\\noindent
[Applicant's Name] \\\\
[Applicant's Website] | [Applicant's Email] | [Applicant's Phone] | [Applicant's Github] | [Applicant's LinkedIn]

\\vspace{1em}

\\noindent
[Company Name] \\hfill [Current Date] \\\\
[Company Address Line 1] \\\\
[Company Address Line 2] \\\\
[City, State ZIP Code]

\\vspace{1em}

\\noindent
Dear [Hiring Manager's Name],

\\vspace{1em}

[First paragraph: Introduce yourself and state the position you're applying for]

\\vspace{0.5em}

[Second paragraph: Highlight your relevant skills and experiences]

\\vspace{0.5em}

[Third paragraph: Explain why you're a good fit for the company]

\\vspace{0.5em}

[Fourth paragraph: Closing statement and call to action]

\\vspace{1em}

\\noindent
Sincerely, \\\\
[Applicant's Name]

\\end{document}

Output the cover letter in plain text format, interpreting the LaTeX-style commands for proper spacing and formatting. Replace placeholders with relevant information from the job description and resume. If some information is not present in the input, use appropriate placeholders.
  `;

  const openai_client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  try {
    const stream = await openai_client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt },
      ],
      stream: true,
    });

    let coverLetter = "";
    for await (const chunk of stream) {
      coverLetter += chunk.choices[0]?.delta?.content || "";
    }

    return NextResponse.json({ coverLetter });
  } catch (error) {
    console.error("Error generating cover letter:", error);
    return NextResponse.json(
      { error: "Failed to generate cover letter." },
      { status: 500 }
    );
  }
}
