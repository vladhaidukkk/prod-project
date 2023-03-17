export type Viewer = {
  id: string;
  username: string;
  avatar?: string;
};

export type AuthSchema = {
  viewer?: Viewer;
  initialized: boolean;
};
