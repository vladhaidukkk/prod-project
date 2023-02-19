import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { type RuleSetRule } from 'webpack';
import { type BuildOptions } from '../types/config';

export function buildSassLoader({ isDev }: BuildOptions): RuleSetRule {
  return {
    test: /\.s[ac]ss$/,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: /\.module\./,
            localIdentName: isDev ? '[path][name]__[local]--[hash:base64:8]' : '[hash:base64:8]',
            exportLocalsConvention: 'camelCaseOnly',
          },
        },
      },
      'sass-loader',
    ],
  };
}
