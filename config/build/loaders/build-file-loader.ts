import { type RuleSetRule } from 'webpack';

export function buildFileLoader(): RuleSetRule {
  return {
    test: /\.(png|jpe?g|gif)$/i,
    type: 'asset/resource',
  };
}
