// @ts-check

/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:astro/recommended'
  ],
  plugins: [ '@typescript-eslint', '@stylistic' ],
  env: {
    browser: true,
    node: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    // default eslint rules
    'array-callback-return': 'error',
    'no-await-in-loop': 'error',
    'no-constant-binary-expression': 'error',
    'no-self-compare': 'error',
    'no-template-curly-in-string': 'error',
    'no-unused-private-class-members': 'error',
    'arrow-body-style': [ 'error', 'as-needed' ],
    'curly': 'error',
    'default-case': 'error',
    'default-case-last': 'error',
    'default-param-last': 'error',
    'dot-notation': 'error',
    'eqeqeq': [ 'error', 'always' ],
    'multiline-comment-style': [ 'error', 'starred-block' ],
    'no-console': 'warn',
    'no-else-return': 'error',
    'prefer-template': 'error',
    'yoda': 'error',
    // typescript eslint rules
    '@typescript-eslint/array-type': 'error',
    // eslint stylistic rules
    '@stylistic/array-bracket-newline': [ 'error', { 'multiline': true } ],
    '@stylistic/array-bracket-spacing': [
      'error',
      'always', { 'singleValue': false }
    ],
    '@stylistic/arrow-parens': [ 'error', 'as-needed' ],
    '@stylistic/arrow-spacing': 'error',
    '@stylistic/block-spacing': 'error',
    '@stylistic/brace-style': 'error',
    '@stylistic/comma-dangle': [ 'error', 'never' ],
    '@stylistic/comma-spacing': [
      'error', {
        'before': false,
        'after': true
      }
    ],
    '@stylistic/comma-style': [ 'error', 'last' ],
    '@stylistic/dot-location': [ 'error', 'property' ],
    '@stylistic/eol-last': [ 'error', 'always' ],
    '@stylistic/function-call-argument-newline': [ 'error', 'consistent' ],
    '@stylistic/function-call-spacing': [ 'error', 'never' ],
    '@stylistic/function-paren-newline': [ 'error', { 'minItems': 3 } ],
    '@stylistic/generator-star-spacing': [
      'error',
      {
        'before': true,
        'after': false
      }
    ],
    '@stylistic/implicit-arrow-linebreak': [ 'error', 'beside' ],
    '@stylistic/jsx-closing-bracket-location': 'error',
    '@stylistic/jsx-curly-newline': [
      'error',
      {
        multiline: 'consistent',
        singleline: 'consistent'
      }
    ],
    '@stylistic/jsx-curly-spacing': [ 'error', { 'when': 'never' } ],
    '@stylistic/jsx-equals-spacing': [ 'error', 'never' ],
    '@stylistic/jsx-first-prop-new-line': [ 'error', 'multiline' ],
    '@stylistic/jsx-indent': [ 'error', 2 ],
    '@stylistic/jsx-indent-props': [ 'error', 2 ],
    '@stylistic/jsx-newline': [ 'error', { 'prevent': true } ],
    /*
     * NOTE： これを有効化することで .astro ファイルの <style> 内にたくさんの改行が発生する
     * "@stylistic/jsx-one-expression-per-line": [ 'error',
     *  { "allow": "literal" } ],
     */
    '@stylistic/jsx-pascal-case': 'error',
    '@stylistic/jsx-props-no-multi-spaces': 'error',
    '@stylistic/jsx-quotes': [ 'error', 'prefer-single' ],
    '@stylistic/jsx-self-closing-comp': [
      'error', {
        'component': true,
        'html': true
      }
    ],
    '@stylistic/jsx-sort-props': [
      'error',
      {
        'callbacksLast': true,
        'shorthandFirst': true
      }
    ],
    '@stylistic/jsx-tag-spacing': [
      'error',
      { 'beforeSelfClosing': 'always' }
    ],
    '@stylistic/jsx-wrap-multilines': [
      'error', {
        'declaration': 'parens-new-line',
        'return': 'parens-new-line',
        'arrow': 'parens-new-line',
        'condition': 'parens-new-line',
        'logical': 'parens-new-line',
        'prop': 'parens-new-line'
      }
    ],
    // NOTE: align 指定すると Go っぽくなるなあ、
    '@stylistic/key-spacing': [
      'error',
      {
        'beforeColon': false,
        'afterColon': true,
        'mode': 'strict'
      }
    ],
    '@stylistic/keyword-spacing': [
      'error', {
        'overrides': {
          'if': {
            'after': true,
            'before': true
          },
          'for': { 'after': true },
          'while': { 'after': true }
        }
      }
    ],
    '@stylistic/lines-between-class-members': [ 'error', 'always' ],
    '@stylistic/max-len': [ 'error', { 'code': 80 } ],
    /*
     * NOTE: 後で考える
     * '@stylistic/member-delimiter-style'
     */
    '@stylistic/multiline-ternary': [ 'error', 'always-multiline' ],
    '@stylistic/new-parens': 'error',
    '@stylistic/newline-per-chained-call': [
      'error',
      { 'ignoreChainWithDepth': 2 }
    ],
    '@stylistic/no-confusing-arrow': 'error',
    '@stylistic/no-extra-semi': 'error',
    '@stylistic/no-floating-decimal': 'error',
    '@stylistic/no-mixed-operators': 'error',
    '@stylistic/no-mixed-spaces-and-tabs': 'error',
    '@stylistic/no-multi-spaces': 'error',
    '@stylistic/no-multiple-empty-lines': [ 'error', { 'max': 2 } ],
    '@stylistic/no-trailing-spaces': 'error',
    '@stylistic/no-whitespace-before-property': 'error',
    '@stylistic/object-curly-newline': [ 'error', { 'multiline': true } ],
    '@stylistic/object-curly-spacing': [ 'error', 'always' ],
    '@stylistic/object-property-newline': 'error',
    '@stylistic/operator-linebreak': [ 'error', 'after' ],
    '@stylistic/padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: 'return'
      },
      {
        blankLine: 'always',
        prev: '*',
        next: [ 'if', 'for', 'while', 'switch' ]
      },
      {
        blankLine: 'always',
        prev: [ 'const', 'let', 'var' ],
        next: '*'
      },
      {
        blankLine: 'any',
        prev: [ 'const', 'let', 'var' ],
        next: [ 'const', 'let', 'var' ]
      },
      {
        blankLine: 'always',
        prev: [ 'case', 'default' ],
        next: '*'
      }
    ],
    '@stylistic/quotes': [ 'error', 'single' ],
    '@stylistic/rest-spread-spacing': [ 'error', 'never' ],
    '@stylistic/semi': [ 'error', 'never' ],
    '@stylistic/space-before-blocks': 'error',
    '@stylistic/space-before-function-paren': [
      'error',
      {
        'anonymous': 'always',
        'named': 'never',
        'asyncArrow': 'always'
      }
    ],
    '@stylistic/space-infix-ops': 'error',
    '@stylistic/space-unary-ops': 'error',
    '@stylistic/spaced-comment': [ 'error', 'always' ],
    '@stylistic/switch-colon-spacing': 'error',
    '@stylistic/template-curly-spacing': 'error',
    '@stylistic/type-annotation-spacing': 'error',
    '@stylistic/type-generic-spacing': 'error',
    '@stylistic/type-named-tuple-spacing': 'error',
    '@stylistic/wrap-regex': 'error',
    '@stylistic/indent': [ 'error', 2 ]
  },
  ignorePatterns: [ 'node_modules', 'dist' ],
  overrides: [
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro']
      }
    },
    {
      files: '*.cjs',
      env: { node: true },
      rules: { '@typescript-eslint/no-var-requires': 'off' }
    }
  ]
}
