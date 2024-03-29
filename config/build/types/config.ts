import { type Configuration } from 'webpack';
import { type Port } from 'webpack-dev-server';

export type BuildMode = Configuration['mode'];

export type BuildPort = Port;

export type BuildPaths = {
  src: string;
  entry: string;
  output: string;
  html: string;
};

export type BuildEnv = {
  mode: BuildMode;
  port: BuildPort;
  api: string;
  analyze: boolean;
};

export type BuildOptions = {
  mode: BuildMode;
  port: BuildPort;
  paths: BuildPaths;
  isDev: boolean;
  api: string;
  project: 'frontend' | 'storybook' | 'jest';
  analyzeBundle: boolean;
};
