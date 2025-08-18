export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image?: string;
  heroImage?: string | null;
  screenshots: string[];
  screenshotCount: number;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  status: 'completed' | 'in-progress' | 'archived';
  featured: boolean;
  category: string[];
  startDate?: string;
  endDate?: string;
  teamSize?: number;
  role?: string;
  highlights?: string[];
}

export interface ProjectCardProps
  extends Pick<
    Project,
    | 'id'
    | 'title'
    | 'description'
    | 'image'
    | 'heroImage'
    | 'technologies'
    | 'githubUrl'
    | 'liveUrl'
  > {
  status?: Project['status'];
  featured?: boolean;
}

export interface ProjectsFilterState {
  category: string;
  technology: string;
  status: Project['status'] | 'all';
}
