'use strict'

module.exports = {
	rules: {
		'no-camelcase': (context) => ({
			VariableDeclarator: (node) => {
				if (node.id.name) {
					const first_character = node.id.name.charAt(0);
					const chars = node.id.name.split('');
					if (first_character === first_character.toLowerCase()) {
						for (let i = 1, n = chars.length; i < n; i++) {
							const char = chars[i];
							if (char === '_') {
								continue;
							}
							if (char === char.toUpperCase()) {
								context.report(node, 'Variables may not contain camelCase');
							}
						}
					}
				}
			}
		}),
		'no-func-param-named-arguments': (context) => {
			const check_parameters = (node) => {
				if (node && node.params && node.params.length) {
					node.params.forEach((param_node) => {
						if (param_node && param_node.name && param_node.name === 'arguments') {
							context.report(
								param_node,
								'Function parameter named \'arguements\' is not allowed'
							);
						}
					});
				}
			};
			const rule = {
				FunctionDeclaration: check_parameters,
				FunctionExpression: check_parameters,
				ArrowFunctionExpression: check_parameters,
			};
			return rule;
		}
	},
	configs: {
		base: {
			'rules': {
				'glip/no-camelcase': 'error',
				'glip/no-func-param-named-arguments': 'error',
				'spaced-comment': 'off',
				'no-tabs': 'off',
				'indent': ['error', 'tab'],
				'camelcase': 'off',
				'new-cap': 'off', // i.e. Errors.Invalid_Type() should only be used if Errors.Invalid_Type() is a constructor
				'prefer-destructuring': 'off',
				'arrow-parens': 'off', // arrow parrens around single parameter arrow functions
				'consistent-return': 'off',
				'brace-style': ['error', 'stroustrup'], // Disallows  "} else {"
				'comma-dangle': ['error', {
					'arrays': 'only-multiline',
					'objects': 'only-multiline',
					'imports': 'always',
					'exports': 'always',
					'functions': 'never'
				}],
				'max-len': ['error', {
					'code': 100,
					'ignoreTrailingComments': true,
					'ignoreStrings': true,
					'ignoreTemplateLiterals': true,
					'ignoreRegExpLiterals': true
				}],
				'import/no-dynamic-require': 'off',
				'space-before-function-paren': ['error', 'always'],
				'strict': 'off',
				'import/newline-after-import': 'off',
				'no-plusplus': ['error', { 'allowForLoopAfterthoughts': true }],
				'func-style': ['error', 'expression'],
				'no-loop-func': 'error',
			},
		},
		server_es6: require('./server_es6.js'),
		server_es5: require('./server_es5.js'),
		web_es5: require('./web_es5.js')
	}
}

