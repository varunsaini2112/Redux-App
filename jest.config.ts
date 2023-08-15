import { Config } from "jest";

const config: Config = {
	verbose: true,
	silent: true,
	preset: "react-native",
	setupFilesAfterEnv: ["<rootDir>setup-tests.ts"],
	transformIgnorePatterns: [
		"node_modules/(?!(jest-)?(react-native|@react-native)|react-navigation|@react-navigation/.*)"
	],
	collectCoverage: true,
	coverageDirectory: "coverage",
	coverageReporters: ["json", "lcov"]
};

export default config;
