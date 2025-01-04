export default {
	transform: {
		'^.+\\.jsx?$': 'babel-jest',
		'^.+\\.vue$': '@vue/vue3-jest',
	},
	transformIgnorePatterns: [
		'/node_modules/(?!(@babel/runtime|primevue|vue-router)/)', // Include necessary dependencies
	],
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/src/$1',
		'\\.(svg|jpg|jpeg|png|gif|webp|avif|mp4|webm|wav|mp3|m4a|aac|oga)$':
			'<rootDir>/__mocks__/fileMock.js',
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
