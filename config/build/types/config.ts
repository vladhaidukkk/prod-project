import { Configuration } from 'webpack';
import { Port } from 'webpack-dev-server';

export type BuildMode = Configuration['mode'];

export type BuildPort = Port;

export type BuildPaths = {
  entry: string;
  output: string;
  html: string;
};

export type BuildEnv = {
  mode: BuildMode;
  port: BuildPort;
};

export type BuildOptions = {
  mode: BuildMode;
  port: BuildPort;
  paths: BuildPaths;
  isDev: boolean;
};
