import { type RuleSetRule } from 'webpack';
import { buildBabelLoader } from './loaders/build-babel-loader';
import { buildFileLoader } from './loaders/build-file-loader';
import { buildSassLoader } from './loaders/build-sass-loader';
import { buildSvgLoader } from './loaders/build-svg-loader';
import { buildTypescriptLoader } from './loaders/build-typescript-loader';
import { type BuildOptions } from './types/config';

export function buildLoaders(options: BuildOptions): RuleSetRule[] {
  return [
    buildFileLoader(),
    buildSvgLoader(),
    buildSassLoader(options),
    buildBabelLoader(options),
    buildTypescriptLoader(),
  ];
}
