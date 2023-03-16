import { type RuleSetRule } from 'webpack';
import { type BuildOptions } from '../types/config';

export function buildBabelLoader({ isDev }: BuildOptions): RuleSetRule {
  return {
    test: /\.(js|tsx?)$/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: [
          '@babel/preset-env',
          ['@babel/preset-react', { runtime: 'automatic' }],
          '@babel/preset-typescript',
        ],
        plugins: [isDev && require.resolve('react-refresh/babel')].filter(Boolean),
      },
    },
    exclude: /node_modules/,
  };
}
