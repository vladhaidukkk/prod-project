import path from 'node:path';
import { Configuration, ProgressPlugin } from 'webpack';
import HtmlPlugin from 'html-webpack-plugin';

const config: Configuration = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src', 'index.ts'),
  output: {
    filename: '[name].[contenthash:8].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new ProgressPlugin(),
    new HtmlPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
    }),
  ],
};

export default config;
