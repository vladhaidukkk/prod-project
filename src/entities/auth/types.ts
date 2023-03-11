export type Viewer = {
  id: string;
  username: string;
};

export type AuthSchema = {
  viewer?: Viewer;
};
