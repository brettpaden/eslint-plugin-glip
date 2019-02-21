'use strict';

module.exports = {
	rules: require('./rules.js'),
	configs: {
		base: {
			rules: {
				'glip/no-camelcase': 'error',
				'glip/no-func-param-named-arguments': 'error',
				'import/newline-after-import': 'off',
				'import/no-dynamic-require': 'off',
				'arrow-body-style': 'off',
				'arrow-parens': ['error', 'always'],
				'brace-style': ['error', 'stroustrup'],
				'class-methods-use-this': 'off',
				camelcase: 'off',
				'comma-dangle': ['error', 'never'],
				'consistent-return': 'off',
				curly: 'error',
				'func-style': 'off',
				'global-require': 'off',
				'id-length': ['error', { exceptions: ['L', '_', '$'] }],
				indent: ['error', 'tab', { SwitchCase: 1 }],
				'max-len': ['error', {
					code: 100,
					ignoreTrailingComments: true,
					ignoreStrings: true,
					ignoreTemplateLiterals: true,
					ignoreRegExpLiterals: true
				}],
				'multiline-ternary': ['error', 'always-multiline'],
				'new-cap': 'off',
				'no-buffer-constructor': 'off',
				'no-continue': 'off',
				'no-loop-func': 'error',
				'no-param-reassign': 'off',
				'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
				'no-tabs': 'off',
				'no-underscore-dangle': [
					'error',
					{
						allow: [
							'_id',
							'_byId',
							'_events'
						],
						enforceInMethodNames: true,
					},
				],
				'operator-linebreak': ['error', 'after'],
				'prefer-destructuring': 'off', // Current Version of Node does not support
				'prefer-spread': 'off', // Current Version of Node does not support
				'prefer-rest-params': 'off', // Current Version of Node does not support
				'space-before-function-paren': ['error', 'never'],
				'spaced-comment': 'off',
				strict: 'off',
			},
		},
		server_es6: require('./server_es6.js'),
		server_utils_es6: require('./server_utils_es6.js'),
		server_es5: require('./server_es5.js'),
		web_es5: require('./web_es5.js')
	}
};
