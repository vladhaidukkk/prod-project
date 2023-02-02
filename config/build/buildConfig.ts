import { Configuration } from 'webpack';
import { buildResolve } from './buildResolve';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { BuildOptions } from './types/config';

export function buildConfig(options: BuildOptions): Configuration {
  const { mode, paths } = options;

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash:8].js',
      path: paths.output,
      clean: true,
    },
    resolve: buildResolve(),
    module: {
      rules: buildLoaders(),
    },
    plugins: buildPlugins(options),
  };
}
