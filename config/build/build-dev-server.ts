import { type BuildOptions } from './types/config';
import { type Configuration } from 'webpack-dev-server';

export function buildDevServer({ port }: BuildOptions): Configuration {
  return {
    port,
    open: true,
    hot: true,
    historyApiFallback: true,
  };
}
