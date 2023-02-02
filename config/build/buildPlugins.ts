import { ProgressPlugin, WebpackPluginInstance } from 'webpack';
import HtmlPlugin from 'html-webpack-plugin';
import { BuildOptions } from './types/config';

export function buildPlugins({ paths }: BuildOptions): WebpackPluginInstance[] {
  return [
    new ProgressPlugin(),
    new HtmlPlugin({
      template: paths.html,
    }),
  ];
}
