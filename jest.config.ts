import { type Config } from 'jest';

const config: Config = {
  clearMocks: true,
  moduleDirectories: ['node_modules'],
  moduleFileExtensions: [
    'js',
    'mjs',
    'cjs',
    'jsx',
    'ts',
    'tsx',
    'json',
    'node',
  ],
  testEnvironment: 'jsdom',
  testMatch: [
    '**/__tests__/**/*.[jt]s?(x)',
    '**/?(*.)+(spec|test).[tj]s?(x)',
  ],
  testPathIgnorePatterns: ['/node_modules/'],
};

export default config;
