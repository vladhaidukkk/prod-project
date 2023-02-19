import { type RuleSetRule } from 'webpack';

export function buildBabelLoader(): RuleSetRule {
  return {
    test: /\.(js|tsx?)$/,
    use: 'babel-loader',
    exclude: /node_modules/,
  };
}
