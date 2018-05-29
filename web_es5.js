module.exports = {
	env: {
		browser: true,
		node: false,
	},
	plugins: ['glip'],
	extends: [
		'airbnb-base/legacy',
		'plugin:es5/no-es2015',
		'plugin:glip/base',
	],
	rules: {
		'es5/no-es6-methods': 'off',
		'glip/no-es6-methods': 'error',
	}
};
