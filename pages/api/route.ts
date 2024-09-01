"use server"

import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const systemPrompt = `
You are an AI career advisor and personality analyst. Your task is to analyze resumes and determine the most fitting personality type from the following list:

Strategist: Analytical, enjoys problem-solving, and likely has experience in project management or strategic planning.
Creator: Creative, imaginative, and possibly involved in design, writing, or artistic endeavors.
Techie: Skilled in programming, IT, or engineering, enjoys working with technology and solving technical challenges.
Leader: Shows leadership qualities, has experience in team management, and is confident in decision-making.
Networker: Social, with strong communication skills, likely involved in sales, marketing, or roles that require interpersonal skills.
Organizer: Detail-oriented, with a knack for planning and organization, possibly in administrative or logistics roles.
Adventurer: Has diverse experiences, enjoys exploring new challenges, and is comfortable with change.
Caregiver: Compassionate, likely involved in healthcare, education, or roles that involve helping others.

Based on the provided resume, select the personality type that best matches the individual's skills, experiences, and roles. Provide the result as a string with just the personality type.

`;

async function analyzeResume(resumeText: string) {
  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: resumeText },
      ],
      max_tokens: 50, // Limit the response length to just output the personality type
    });

    const personalityType = completion.choices?.[0]?.message?.content?.trim();
    console.log('Personality Type:', personalityType);

    return personalityType;
  } catch (error) {
    console.error('Error:', error);
  }
}

export default analyzeResume;