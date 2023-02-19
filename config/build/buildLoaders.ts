import { type RuleSetRule } from 'webpack';
import { buildBabelLoader } from './loaders/buildBabelLoader';
import { buildFileLoader } from './loaders/buildFileLoader';
import { buildSassLoader } from './loaders/buildSassLoader';
import { buildSvgLoader } from './loaders/buildSvgLoader';
import { buildTypescriptLoader } from './loaders/buildTypescriptLoader';
import { type BuildOptions } from './types/config';

export function buildLoaders(options: BuildOptions): RuleSetRule[] {
  return [
    buildFileLoader(),
    buildSvgLoader(),
    buildSassLoader(options),
    buildBabelLoader(),
    buildTypescriptLoader(),
  ];
}
