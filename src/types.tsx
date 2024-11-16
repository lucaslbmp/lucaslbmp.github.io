export type ButtonStyle = "primary" | "ghost" | "danger";

export type ExperienceDetails = {
  role: string;
  company: string;
  description: string;
  skills: string[];
  startDate: Date;
  endDate: Date;
};

export type ProjectDetails = {
  name: string;
  description: string;
  thumbnail: string;
  links: {
    demo?: string;
    repo: string;
  };
  skills?: string[];
};
