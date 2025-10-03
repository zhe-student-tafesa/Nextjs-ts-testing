import nextJest from 'next/jest.js'
import type { Config } from 'jest'

const createJestConfig = nextJest({
  dir: './', // next.js app root folder
})

const customJestConfig: Config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testEnvironment: "jsdom",
}

export default createJestConfig(customJestConfig)
