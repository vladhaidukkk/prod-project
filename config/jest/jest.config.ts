import { type Config } from 'jest';

const config: Config = {
  clearMocks: true,
  moduleDirectories: ['node_modules'],
  moduleFileExtensions: ['js', 'mjs', 'cjs', 'jsx', 'ts', 'tsx', 'json', 'node'],
  moduleNameMapper: {
    '\\.s[ac]ss$': 'identity-obj-proxy',
    '\\.svg$': '<rootDir>/config/jest/mocks/svg.tsx',
  },
  modulePaths: ['<rootDir>/src'],
  rootDir: '../../',
  setupFilesAfterEnv: ['<rootDir>/config/jest/jest.setup.ts'],
  testEnvironment: 'jsdom',
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.[jt]s?(x)',
    '<rootDir>/src/**/?(*.)+(spec|test).[tj]s?(x)',
  ],
  testPathIgnorePatterns: ['/node_modules/'],
};

export default config;
