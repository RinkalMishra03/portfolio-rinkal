export interface SemesterResult {
  semester: string;
  session: string;
  sgpi: number;
  marksObtained: string;
  totalMarks: string;
  status: string;
  highlights: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  duration: string;
  period: string;
  grade?: string;
  certificateId: string;
  studentId?: string;
  verificationLink?: string;
  technologies: string[];
  description: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  technologies: string[];
  category: "fullstack" | "frontend" | "backend" | "cybersecurity";
  githubLink: string;
  liveLink?: string;
  problem: string;
  solution: string;
  impact: string[];
  features: string[];
}

export interface Achievement {
  id: string;
  title: string;
  category: "award" | "hackathon" | "leadership" | "community";
  date: string;
  organizingBody: string;
  description: string;
  impact: string;
}
