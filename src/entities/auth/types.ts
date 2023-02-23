export type Viewer = {
  id: number;
  username: string;
};

export type AuthSchema = {
  viewer?: Viewer;
};
