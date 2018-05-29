module.exports = {
	rules: {
		'es5/no-es6-methods': 'off',
		'glip/no-es6-methods': 'error',
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
		'airbnb-base/legacy',
		'plugin:es5/no-es2015',
		'plugin:glip/base',
	]
};
