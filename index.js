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
		})
	},
	configs: {
		base: {
			'rules': {
				'glip/no-camelcase': 'error',
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
			},
		},
		server_es6: require('./server_es6.js'),
		server_es5: require('./server_es5.js'),
		web_es5: require('./web_es5.js')
	}
}

