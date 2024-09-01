const analyzeResume = async (resumeText: string) => {
  try {
    const response = await fetch('/api/analyzeResume', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ resumeText }),
    });

    console.log('Response status:', response.status);
    console.log('Response headers:', response.headers);

    if (!response.ok) {
      const errorDetails = await response.json();
      throw new Error(`Failed to analyze resume: ${errorDetails.message || 'Unknown error'}`);
    }

    const data = await response.json();
    console.log('Response data:', data);
    return data.personalityType;
  } catch (error) {
    console.error('Error analyzing resume:', error);
    return null;
  }
};
