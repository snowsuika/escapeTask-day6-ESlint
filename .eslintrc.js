module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['standard'],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    rules: {
        semi: ['error', 'always'],
        indent: ['off', 2],
        'comma-dangle': [2, 'always-multiline'],
        'space-before-function-paren': [
            'error',
            {
                anonymous: 'always',
                named: 'always',
                asyncArrow: 'always',
            },
        ],
    },
};
