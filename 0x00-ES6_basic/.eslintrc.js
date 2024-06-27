module.exports = {
	  env: {
		      browser: false,
		      es6: true,
		      jest: true
		    },
	  extends: [
		      'airbnb-base',
		      'plugin:jest/all'
		    ],
	  globals: {
		      Atomics: 'readonly',
		      SharedArrayBuffer: 'readonly'
		    },
	  parserOptions: {
		      ecmaVersion: 2018,
		      sourceType: 'module'
		    },
	  plugins: ['jest'],
	  rules: {
		      'no-console': 'off',
		      'no-shadow': 'off',
		      'no-restricted-syntax': [
			            'error',
			            'LabeledStatement',
			            'WithStatement'
			          ],
		      'no-multiple-empty-lines': ['error', { 'max': 0 }],
		      'no-tabs': ['error'],
		      'no-mixed-spaces-and-tabs': ['error']
		    },
	  overrides: [
		      {
			            files: ['*.js'],
			            excludedFiles: 'babel.config.js'
			          }
		    ]
};

