import { ResolveOptions } from 'webpack';

export function buildResolve(): ResolveOptions {
  return {
    extensions: ['.js', '.ts', '.tsx'],
  };
}
