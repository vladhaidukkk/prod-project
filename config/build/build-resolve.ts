import { type ResolveOptions } from 'webpack';
import { type BuildOptions } from './types/config';

export function buildResolve({ paths }: BuildOptions): ResolveOptions {
  return {
    extensions: ['.js', '.ts', '.tsx'],
    mainFiles: ['index'],
    modules: [paths.src, 'node_modules'],
  };
}
