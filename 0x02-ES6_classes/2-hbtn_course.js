

import default class HolbertonCourse {
	  constructor(name, length, students) {
		      if (typeof name !== 'string') throw new TypeError('name must be a string');
		      if (!Number.isInteger(length)) throw new TypeError('length must be a number');
		      if (!Array.isArray(students)) throw new TypeError('students type must be an Array');

		      this._name = name;
		      this._length = length;
		      this._students = students;
		    }

	  get name() {
		      return this._name;
		    }

	  set name(val) {
		      if (typeof val !== 'string') throw new TypeError('name must be a string');
		      this._name = val;
		    }

	  get length() {
		      return this._length;
		    }

	  set length(val) {
		      if (!Number.isInteger(val)) throw new TypeError('length must be a number');
		      this._length = val;
		    }

	  get students() {
		      return this._students;
		    }

	  set students(val) {
		      if (!Array.isArray(val)) throw new TypeError('students type must be an Array');
		      this._students = val;
		    }
}

rt default class ClassRoom {
	  constructor(maxStudentsSize) {
		      this._maxStudentsSize = maxStudentsSize;
		    }
}

rt default class ClassRoom {
	  constructor(maxStudentsSize) {
		      this._maxStudentsSize = maxStudentsSize;
		    }
}

rt default class ClassRoom {
	  constructor(maxStudentsSize) {
		      this._maxStudentsSize = maxStudentsSize;
		    }
}
module.exports = {
	rt default class ClassRoom {
		  constructor(maxStudentsSize) {
			      this._maxStudentsSize = maxStudentsSize;
			    }
	}
    env: {
      browser: false,
      es6: true,
      jest: true,
    },
    extends: [
      'airbnb-base',
      'plugin:jest/all',
    ],
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
      ecmaVersion: 2018,
      sourceType: 'module',
    },
    plugins: ['jest'],
    rules: {
      'no-console': 'off',
      'no-shadow': 'off',
      'no-restricted-syntax': [
        'error',
        'LabeledStatement',
        'WithStatement',
