module.exports = {
    // scoped packages are not prefixed
    extends: ['@commitlint/config-conventional'],
    rules: {
        'type-enum': [2, 'always', ['feat', 'fix', 'refactor', 'docs', 'test', 'style', 'chore', 'revert']],
        'type-case': [2, 'always', ['lower-case', 'upper-case']],
        'scope-case': [0, 'never'],
        'subject-case': [0, 'never'],
        'scope-empty': [2, 'never'],
    },
}