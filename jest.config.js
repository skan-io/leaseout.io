{
  "setupFiles": [
    "<rootDir>/src/testing/setup.js"
  ],
  "setupTestFrameworkScriptFile": "<rootDir>/src/testing/setup-framework.js",

  "moduleNameMapper": {
    "^.*\\.scss$": "<rootDir>/src/testing/mock-scss.js"
  },

  "transform": {
    ".+\\.js$": "babel-jest",
    "^.*\\.(png|gif)$": "<rootDir>/src/testing/mock-file.js"
  },
  "transformIgnorePatterns": [
    "<rootDir>/node_modules/(?!(oidc-client-react|refocus)/).*"
  ],

  "testMatch": ["**/*.test.js"],
  "testPathIgnorePatterns": [
    "<rootDir>/node_modules/*",
    "<rootDir>/build/*"
  ],

  "timers": "fake",
  "clearMocks": true,
  "resetMocks": false,

  "collectCoverage": true,

  "coverageDirectory": "./build/cov",
  "coverageReporters": ["lcov"],
  "coverageThreshold": {
    "global": {
      "branches": 100,
      "functions": 100,
      "lines": 100,
      "statements": 100
    }
  }
}
