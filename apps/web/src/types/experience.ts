export type WorkExperience = {
  id: string;
  company: string;
  companyDescription: string;
  role: string;
  startDate: string;
  endDate?: string | null;
  location: string;
  isCurrentRole: boolean;
  technologies: string[];
  highlights: string[];
  description: string;
};
