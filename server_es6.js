module.exports = {
	rules: {
		'no-var': 'warn',
		'prefer-template': 'warn',
		'prefer-arrow-callback': 'warn',
		'object-shorthand': ['error', 'methods'],
		'import/no-extraneous-dependencies': [
			'error',
			{
				devDependencies: true,
				optionalDependencies: false,
				peerDependencies: false
			}
		],
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
	]
};
