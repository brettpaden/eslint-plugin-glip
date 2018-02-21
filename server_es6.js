module.exports = {
	rules: {
		'no-var': 'warn',
		'prefer-template': 'warn',
		'prefer-arrow-callback': 'warn',
		'object-shorthand': ['error', 'methods'],
	},
	env: {
		node: true,
	},
	parserOptions: {
		ecmaVersion: 6,
	},
	plugins: ['glip'],
	extends: [
		'airbnb-base',
		'plugin:glip/base',
	],
	globals: require('./server_globals.js')
};
