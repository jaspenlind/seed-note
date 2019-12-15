module.exports = {
  collectCoverageFrom: ["src/**/{!(*.d.ts),}.{ts,js,.tsx,.jsx}"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  moduleNameMapper: {
    "^.+\\.(css|scss)$": "identity-obj-proxy"
  },
  modulePathIgnorePatterns: ["<rootDir>/dist/"],
  preset: "ts-jest",
  roots: ["<rootDir>/src", "<rootDir>/test"],
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  verbose: true,
  globals: {
    "ts-jest": {
      isolatedModules: true
    }
  }
};