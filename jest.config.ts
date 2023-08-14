import { Config } from "jest";

const config: Config = {
	verbose: true,
	silent: true,
	preset: "react-native",
	setupFilesAfterEnv: [
		"<rootDir>setup-tests.ts",
		"@testing-library/jest-native/extend-expect"
	],
	transformIgnorePatterns: [
		"node_modules/(?!(jest-)?(react-native|@react-native)|react-navigation)"
	],
	transform: {
		"^.+\\.js$": "babel-jest"
	},
	moduleNameMapper: {
		"\\.(png|jpg|ico|jpeg|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
			"<rootDir>/__mock__/ImageMock.tsx"
	},
	collectCoverage: true,
	coverageDirectory: "reports/coverage",
	coverageReporters: ["json", "lcov"]
};

export default config;
