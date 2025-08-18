export interface WorkExperience {
  id: string;
  company: string;
  companyDescription: string;
  role: string;
  employmentType: 'full-time' | 'part-time' | 'contract' | 'consultant';
  startDate: string;
  endDate?: string | null;
  duration?: string;
  location: string;
  isCurrentRole: boolean;
  keyAchievements: string[];
  businessValue: string[];
  technologies: string[];
  teamCollaboration: string[];
  highlights: string[];
  description: string;
  impactMetrics?: string[];
}

export interface WorkExperienceCardProps
  extends Pick<
    WorkExperience,
    | 'company'
    | 'role'
    | 'duration'
    | 'description'
    | 'technologies'
    | 'highlights'
  > {
  isCurrentRole?: boolean;
  employmentType?: WorkExperience['employmentType'];
}
