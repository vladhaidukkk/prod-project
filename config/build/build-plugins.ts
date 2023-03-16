import {
  ProgressPlugin,
  type WebpackPluginInstance,
  DefinePlugin,
  HotModuleReplacementPlugin,
} from 'webpack';
import HtmlPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import ReactRefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { type BuildOptions } from './types/config';

export function buildPlugins({
  paths,
  isDev,
  api,
  project,
  analyzeBundle,
}: BuildOptions): WebpackPluginInstance[] {
  const plugins: WebpackPluginInstance[] = [
    new ProgressPlugin(),
    new HtmlPlugin({
      template: paths.html,
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    new DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
      __API__: JSON.stringify(api),
      __PROJECT__: JSON.stringify(project),
    }),
  ];

  if (analyzeBundle) {
    plugins.push(new BundleAnalyzerPlugin());
  }

  if (isDev) {
    plugins.push(new HotModuleReplacementPlugin());
    plugins.push(new ReactRefreshPlugin());
  }

  return plugins;
}
