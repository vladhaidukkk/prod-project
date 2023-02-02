import { Configuration } from 'webpack';
import { buildDevServer } from './buildDevServer';
import { buildResolve } from './buildResolve';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { BuildOptions } from './types/config';

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
    resolve: buildResolve(),
    module: {
      rules: buildLoaders(),
    },
    plugins: buildPlugins(options),
  };
}
