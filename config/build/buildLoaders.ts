import { type RuleSetRule } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { type BuildOptions } from './types/config';

export function buildLoaders({ isDev }: BuildOptions): RuleSetRule[] {
  const fileLoader: RuleSetRule = {
    test: /\.(png|jpe?g|gif)$/i,
    type: 'asset/resource',
  };

  const svgLoader: RuleSetRule = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ['@svgr/webpack'],
  };

  const sassLoader: RuleSetRule = {
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

  const babelLoader: RuleSetRule = {
    test: /\.(js|tsx?)$/,
    use: 'babel-loader',
    exclude: /node_modules/,
  };

  const typescriptLoader: RuleSetRule = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  return [fileLoader, svgLoader, sassLoader, babelLoader, typescriptLoader];
}
