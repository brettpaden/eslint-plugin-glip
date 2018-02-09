module.exports = {
    'env': {
        'browser': true,
    },
    'plugins': ['glip'],
    'extends': [
        'airbnb-base/legacy',
        'plugin:es5/no-es2015',
        'plugin:glip/base',
    ],
    'globals': require('./web_globals.js')
}