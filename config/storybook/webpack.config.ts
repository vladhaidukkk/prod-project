import path from 'node:path';
import { type RuleSetRule, type Configuration } from 'webpack';
import { type BuildOptions, type BuildPaths } from '../build/types/config';
import { buildSassLoader } from '../build/loaders/build-sass-loader';
import { buildSvgLoader } from '../build/loaders/build-svg-loader';

type WebpackInterceptorOptions = {
  config: Configuration;
};

export default ({ config }: WebpackInterceptorOptions): Configuration => {
  const paths: BuildPaths = {
    src: path.resolve(__dirname, '..', '..', 'src'),
    entry: '',
    output: '',
    html: '',
  };
  const buildOptions: BuildOptions = {
    mode: config.mode,
    port: '',
    paths,
    isDev: config.mode === 'development',
    analyzeBundle: false,
  };

  // Enable absolute paths
  config.resolve?.modules?.push(paths.src);

  if (config.module?.rules) {
    // Exclude svg from all loaders
    config.module.rules = config.module.rules.map((_rule) => {
      const rule = _rule as RuleSetRule;
      const ruleTest = rule.test as RegExp;

      if (ruleTest.test('.svg')) {
        return {
          ...rule,
          exclude: /\.svg$/i,
        };
      }

      return rule;
    });

    // Add custom loaders
    config.module?.rules?.push(buildSvgLoader());
    config.module?.rules?.push(buildSassLoader(buildOptions));
  }

  return config;
};
