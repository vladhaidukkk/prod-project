import path from 'node:path';
import { buildConfig } from './config/build/buildConfig';
import {
  type BuildEnv,
  type BuildMode,
  type BuildPaths,
  type BuildPort,
} from './config/build/types/config';

export default (env: BuildEnv) => {
  const mode: BuildMode = env.mode ?? 'development';
  const isDev = mode === 'development';
  const port: BuildPort = env.port ?? 3000;

  const paths: BuildPaths = {
    src: path.resolve(__dirname, 'src'),
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: path.resolve(__dirname, 'dist'),
    html: path.resolve(__dirname, 'public', 'index.html'),
  };

  return buildConfig({
    mode,
    port,
    paths,
    isDev,
  });
};
