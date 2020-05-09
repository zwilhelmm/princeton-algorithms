module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  collectCoverage: true,
  collectCoverageFrom: [
    "**/*.{js,jsx,ts,tsx}",
    // "!**/types/**",
    "!**/node_modules/**",
    "!**/coverage/**",
    "!**/jest.config.js",
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      // statements: -10,
    },
  },
  testPathIgnorePatterns: ["/node_modules/"],
  verbose: true,
  watchPlugins: [
    "jest-watch-master",
    "jest-watch-select-projects",
    "jest-watch-suspend",
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname",
  ],
};
