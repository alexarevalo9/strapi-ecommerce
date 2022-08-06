module.exports = {
  roots: ["<rootDir>"],
  testPathIgnorePatterns: ["/node_modules/", ".tmp", ".cache", "dist"],
  preset: "ts-jest",
  testEnvironment: "node",
  // globalSetup: './test-utils/globalSetup',
  // globalTeardown: './test-utils/globalTeardown',
  // setupFiles: ['<rootDir>/.jest/setEnvVars.js'],
  verbose: true,
  transform: {
    "^.+\\.(ts)$": "ts-jest",
  },
  coverageThreshold: {
    global: {
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};
