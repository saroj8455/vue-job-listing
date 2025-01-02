export default {
	transform: {
		'^.+\\.jsx?$': 'babel-jest',
		'^.+\\.vue$': '@vue/vue3-jest',
	},
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/src/$1',
	},
	testEnvironment: 'jsdom',
	testEnvironmentOptions: {
		customExportConditions: ['node', 'node-addons'],
	},
	collectCoverage: false,
	collectCoverageFrom: [
		'src/**/*.{js,vue}',
		'!src/main.js', // Exclude entry file
	],
	coverageReporters: ['html', 'text-summary'],
};
