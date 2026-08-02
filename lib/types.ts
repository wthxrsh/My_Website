export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Project {
  slug: string;
  name: string;
  description: string;
  stack: string[];
  githubUrl: string;
  liveUrl?: string;
}

export interface ExperienceItem {
  role: string;
  org: string;
  period: string;
  description: string;
  status?: "current" | "incoming";
}

export interface Interest {
  label: string;
}
