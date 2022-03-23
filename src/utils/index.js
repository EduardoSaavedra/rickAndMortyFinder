import _camelCase from 'lodash/camelCase'
import _isArray from 'lodash/isArray'
import _isObject from 'lodash/isObject'

const caseConvertor = caseFunction => {
	return function convertCase(object) {
		// TODO: mejorar esta funcion con _mapKeys
		if (_isArray(object)) {
			if (object.length > 0 && _isObject(object[0]) === false) return object
			return object.map(convertCase)
		}
		return Object.keys(object).reduce(
			(acc, curr) =>
				Object.assign(acc, {
					[caseFunction(curr)]: _isObject(object[curr]) ? convertCase(object[curr]) : object[curr]
				}),
			{}
		)
	}
}

export const camelCase = caseConvertor(_camelCase)
