export interface IProjectLink {
  label: string;
  href: string;
}

export interface ITechChoice {
  tech: string;
  reason: string;
}

export interface ITroubleshooting {
  title: string;
  problem: string;
  reason: string;
  solution: string;
  result: string;
}

export interface IRetrospective {
  learned: string;
  apply: string;
}

export interface IProject {
  name: string;
  period: string;
  org: string;
  summary: string;
  metric: string;
  role: string;
  team: string;
  contributions: string[];
  stack: string[];
  description: string;
  links: IProjectLink[];
  techChoices: ITechChoice[];
  troubleshootings: ITroubleshooting[];
  retrospective: IRetrospective;
  videoUrl: string;
  thumbnail: string;
}
