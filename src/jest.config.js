module.exports = {
    collectCoverageFrom: [
      '**/*.(t|j)s',
      '!**/node_modules/**',
      '!**/dist/**',
      '!**/*.module.(t|j)s',
    ],
    coverageDirectory: './coverage',
    testEnvironment: 'node',
  };
  