import { type RuleSetRule } from 'webpack';

export function buildSvgLoader(): RuleSetRule {
  return {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ['@svgr/webpack'],
  };
}
