const analyzeResume = async (resumeText: string): Promise<string | null> => {
  try {
    const response = await fetch('/api/analyzeResume', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ resumeText }),
    });

    if (!response.ok) {
      throw new Error('Failed to analyze resume');
    }

    const data = await response.json();
    return data.personalityType ?? null; // Use nullish coalescing to ensure null is returned if undefined
  } catch (error) {
    console.error('Error analyzing resume:', error);
    return null; // Return null in case of an error
  }
};
