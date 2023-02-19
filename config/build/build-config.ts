import { type Configuration } from 'webpack';
import { buildDevServer } from './build-dev-server';
import { buildResolve } from './build-resolve';
import { buildLoaders } from './build-loaders';
import { buildPlugins } from './build-plugins';
import { type BuildOptions } from './types/config';

export function buildConfig(options: BuildOptions): Configuration {
  const { mode, paths, isDev } = options;

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash:8].js',
      path: paths.output,
      clean: true,
    },
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
    resolve: buildResolve(options),
    module: {
      rules: buildLoaders(options),
    },
    plugins: buildPlugins(options),
  };
}
