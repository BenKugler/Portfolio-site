import { ILink } from './link.interface';

export interface IProject {
  title: string;
  subtitle: string;
  tools: string;
  languages: string;
  description: string;
  links: ILink[];
  contributors: string;
}
