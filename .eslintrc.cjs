module.exports = {
	overrides: [
		{
			files: ["*.astro"],
			plugins: ["astro"],
			env: {
				node: true,
				"astro/astro": true,
				es2021: true,
			},
			parser: "astro-eslint-parser",
			parserOptions: {
				parser: "@typescript-eslint/parser",
				extraFileExtensions: [".astro"],
				ecmaVersion: 'latest',
				sourceType: "module",
			},
			extends: [
				'airbnb-base',
			],
			rules: {
				"astro/no-conflict-set-directives": "error",
				"astro/no-unused-define-vars-in-style": "error",
				'no-param-reassign': 0,
				'no-restricted-syntax': 0,
				'no-irregular-whitespace': 0,
				"no-tabs": 0,
				'sort-keys': [1, 'asc', { natural: true, allowLineSeparatedGroups: true }],
				'import/order': 0,
				'import/extensions': 0,
				'import/no-extraneous-dependencies': 0,
				'import/prefer-default-export': 0,
				'import/export': 0,
				'import/order': [
					2,
					{
						groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
						'newlines-between': 'always',
						pathGroups: [
							{
								pattern: '@/**',
								group: 'internal',
							},
						],
						alphabetize: {
							order: 'asc',
						},
					},
				],
			},
		},
		{
			files: ["**/*.astro/*.js", "*.astro/*.js"],
			env: {
				browser: true,
				es2021: true,
			},
			parserOptions: {
				ecmaVersion: 'latest',
				sourceType: "module",
			},
			extends: [
				'airbnb-base',
			],
			rules: {
				"prettier/prettier": "off",
			},
		},
		{
			files: ["**/*.astro/*.ts", "*.astro/*.ts"],
			env: {
				browser: true,
				es2021: true,
			},
			parser: "@typescript-eslint/parser",
			parserOptions: {
				ecmaVersion: 'latest',
				sourceType: 'module',
				project: null,
			},
			extends: [
				'airbnb-base',
				'airbnb-typescript',
				'plugin:@typescript-eslint/recommended',
				'plugin:@typescript-eslint/recommended-requiring-type-checking',
				'prettier',
			],
			rules: {
				"prettier/prettier": "off",
				'@typescript-eslint/no-shadow': 0,
				'@typescript-eslint/consistent-type-imports': [
					'error',
					{ prefer: 'type-imports', disallowTypeAnnotations: false }
				],
				'no-param-reassign': 0,
				'no-restricted-syntax': 0,
				'no-irregular-whitespace': 0,
				'@typescript-eslint/no-loop-func': 0,
				'sort-keys': [1, 'asc', { natural: true, allowLineSeparatedGroups: true }],
				'import/order': 0,
				'import/extensions': 0,
				'import/no-extraneous-dependencies': 0,
				'import/prefer-default-export': 0,
				'import/export': 0,
				'import/order': [
					2,
					{
						groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
						'newlines-between': 'always',
						pathGroups: [
							{
								pattern: '@/**',
								group: 'internal',
							},
						],
						alphabetize: {
							order: 'asc',
						},
					},
				],
			},
		},
	],
}