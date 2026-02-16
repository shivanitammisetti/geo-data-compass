export interface StudentData {
  name: string;
  branch: string;
  academicScore: number;
  internships: number;
  projects: number;
  certifications: number;
  skills: string[];
}

export interface PredictionResult {
  placementProbability: number;
  advice: string[];
  strengths: string[];
  improvements: string[];
}

// Mock prediction logic (replace with real API call when backend is ready)
export async function predictPlacement(data: StudentData): Promise<PredictionResult> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1500));

  let score = 0;

  // Academic score contribution (max 30)
  score += Math.min(data.academicScore / 100, 1) * 30;

  // Skills contribution (max 25)
  score += Math.min(data.skills.length / 6, 1) * 25;

  // Internships (max 15)
  score += Math.min(data.internships / 3, 1) * 15;

  // Projects (max 15)
  score += Math.min(data.projects / 4, 1) * 15;

  // Certifications (max 15)
  score += Math.min(data.certifications / 3, 1) * 15;

  const probability = Math.min(Math.round(score), 100);

  const strengths: string[] = [];
  const improvements: string[] = [];
  const advice: string[] = [];

  if (data.academicScore >= 75) strengths.push("Strong academic foundation");
  else improvements.push("Aim for 75%+ academic score to stand out");

  if (data.skills.length >= 4) strengths.push("Diverse technical skill set");
  else improvements.push("Add more technical skills — aim for at least 4–5");

  if (data.internships >= 2) strengths.push("Solid internship experience");
  else improvements.push("Pursue internships to gain real-world exposure");

  if (data.projects >= 3) strengths.push("Good project portfolio");
  else improvements.push("Build more projects to demonstrate practical skills");

  if (data.certifications >= 2) strengths.push("Valuable certifications earned");
  else improvements.push("Earn certifications in trending technologies");

  if (probability >= 80) {
    advice.push("You're in a great position! Focus on interview preparation and soft skills.");
  } else if (probability >= 55) {
    advice.push("You're on the right track. Address the improvement areas to boost your chances.");
  } else {
    advice.push("Focus on building your profile systematically — every improvement counts.");
  }

  advice.push("Practice coding challenges on platforms like LeetCode or HackerRank.");
  advice.push("Network with alumni and attend career fairs for more opportunities.");

  return { placementProbability: probability, advice, strengths, improvements };
}
