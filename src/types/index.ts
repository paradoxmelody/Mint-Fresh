export type SocialConfig = {
  email?: string;
  linkedin?: string;
  twitter?: string;
  github?: string;
};

export type universe = {
  
};

export type Project = {
  name: string;
  description: string;
  link: string;
  technologies: string[];
};

export type Experience = {
  company: string;
  title: string;
  dateRange: string;
  bullets: string[];
};

export type Education = {
  school: string;
  degree: string;
  dateRange: string;
  achievements: string[];
};

export type SiteConfig = {
  themeswitch(themeswitch: any): unknown;
  blog: boolean;
  name: string;
  title: string;
  description: string;
  social: SocialConfig;
  aboutMe: string;
  skills: string[];
  projects: Project[];
  experience: Experience[];
  education: Education[];
  image: string;
  dancingGIF?: string;
};