import path from 'node:path';
import { type RuleSetRule, type Configuration, DefinePlugin } from 'webpack';
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
    isDev: true, // For Storybook we only need style-loader without MiniCssExtractPlugin.loader
    api: '',
    analyzeBundle: false,
  };

  // Enable absolute paths + with unshift Storybook will search in src and after that in node_modules
  config.resolve?.modules?.unshift(paths.src);

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

    // Add custom plugins
    config.plugins?.push(
      new DefinePlugin({
        __IS_DEV__: JSON.stringify(true),
        __API__: JSON.stringify(''),
      })
    );
  }

  return config;
};
