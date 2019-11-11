module.exports = {
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
  "preset": 'ts-jest',
  "roots": [
    "<rootDir>/src"
  ],
  "snapshotSerializers": ["enzyme-to-json/serializer"],
  "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  "transform": {
    "^.+\\.tsx?$": "ts-jest"
  }
}