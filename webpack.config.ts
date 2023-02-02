import path from 'node:path';
import { buildConfig } from './config/build/buildConfig';
import { BuildMode, BuildPaths } from './config/build/types/config';

const mode: BuildMode = 'development';
const isDev = mode === 'development';

const paths: BuildPaths = {
  entry: path.resolve(__dirname, 'src', 'index.ts'),
  output: path.resolve(__dirname, 'dist'),
  html: path.resolve(__dirname, 'public', 'index.html'),
};

export default buildConfig({
  mode,
  paths,
  isDev,
});
