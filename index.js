'use strict';

module.exports = {
	rules: require('./rules.js'),
	configs: {
		base: {
			rules: {
				'glip/no-camelcase': 'error',
				'glip/no-func-param-named-arguments': 'error',
				'spaced-comment': 'off',
				'no-tabs': 'off',
				indent: ['error', 'tab'],
				camelcase: 'off',
				'new-cap': 'off', // i.e. Errors.Invalid_Type() should only be used if Errors.Invalid_Type() is a constructor
				'prefer-destructuring': 'off',
				'arrow-parens': 'off', // arrow parrens around single parameter arrow functions
				'consistent-return': 'off',
				'brace-style': ['error', 'stroustrup'], // Disallows  "} else {"
				'comma-dangle': ['error', {
					arrays: 'only-multiline',
					objects: 'only-multiline',
					imports: 'always',
					exports: 'always',
					functions: 'never'
				}],
				'max-len': ['error', {
					code: 100,
					ignoreTrailingComments: true,
					ignoreStrings: true,
					ignoreTemplateLiterals: true,
					ignoreRegExpLiterals: true
				}],
				'import/no-dynamic-require': 'off',
				'space-before-function-paren': ['error', 'always'],
				strict: 'off',
				'import/newline-after-import': 'off',
				'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
				'func-style': ['error', 'expression'],
				'no-loop-func': 'error', // Disallows function declarations inside of loops
				'multiline-ternary': ['error', 'always-multiline'],
				'no-continue': 'off', // Allows use of continue statements
				'global-require': 'off',
				'space-before-function-paren': ['error', 'never'],
			},
		},
		server_es6: require('./server_es6.js'),
		server_es5: require('./server_es5.js'),
		web_es5: require('./web_es5.js')
	}
};
