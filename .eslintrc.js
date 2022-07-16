module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: ['plugin:vue/vue3-essential', 'airbnb-base', 'prettier'],
    parserOptions: {
        ecmaVersion: 12,
    },
    plugins: ['vue'],
    rules: {
        indent: ['error', 4],
        'max-len': [
            'warn',
            {
                code: 100,
            },
        ],
        'no-console': 'warn',
        'no-debugger': 'warn',
        'no-labels': [
            'error',
            {
                allowLoop: true,
            },
        ],
        'no-plusplus': [
            'error',
            {
                allowForLoopAfterthoughts: true,
            },
        ],
        'no-restricted-syntax': ['error', 'ForInStatement', 'WithStatement'],
    },
};
