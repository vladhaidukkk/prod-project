import { Configuration } from 'webpack';

export type BuildMode = Configuration['mode'];

export type BuildPaths = {
  entry: string;
  output: string;
  html: string;
};

export type BuildOptions = {
  mode: BuildMode;
  paths: BuildPaths;
  isDev: boolean;
};
