export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  year: string;
  category: 'Web' | 'Mobile' | 'Design' | 'Open Source';
  image: string;
  link?: string;
  repo?: string;
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  description: string;
  stack: string[];
};

export type Skill = {
  name: string;
  level: number; // 0-100
};

export type SkillGroup = {
  title: string;
  skills: Skill[];
};
