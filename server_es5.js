module.exports = {
    'env': {
        'node': true,
    },
    'parserOptions': {
        'ecmaVersion': 6,
    },
    'plugins': ['glip'],
    'extends': [
        'airbnb-base/legacy',
        'plugin:es5/no-es2015',
        'plugin:glip/base',
    ],
    'globals': require('./server_globals.js')
}