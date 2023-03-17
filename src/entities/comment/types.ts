import { type Viewer } from 'entities/auth';

export type Comment = {
  id: string;
  text: string;
  user: Viewer;
};
