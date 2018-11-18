import { element } from 'prop-types';
import and from './and';
import getComponentName from './utils/getComponentName';
import wrapValidator from './utils/wrapValidator';

function getTypeName(Type) {
  if (typeof Type === 'string') {
    return Type;
  }
  const type = getComponentName(Type);
  return type || 'Anonymous Component';
}

function validateElementType(Type, props, propName, componentName) {
  const { type } = props[propName];

  if (type === Type) {
    return null;
  }

  return new TypeError(`${componentName}.${propName} must be a React element of type ${getTypeName(Type)}`);
}

export default function elementTypeValidator(Type) {
  if (Type === '*') {
    return wrapValidator(element, 'elementType(*)', Type);
  }

  if (typeof Type !== 'string' && typeof Type !== 'function') {
    throw new TypeError(`Type must be a React Component, an HTML element tag name, or "*". Got an ${typeof Type}`);
  }

  function elementType(props, propName, componentName, ...rest) {
    if (props[propName] == null) {
      return null;
    }
    return validateElementType(Type, props, propName, componentName, ...rest);
  }
  elementType.isRequired = elementType; // covered by and + element

  const typeName = getTypeName(Type);
  const validatorName = `elementType(${typeName})`;
  return wrapValidator(and([element, elementType], validatorName), validatorName, Type);
}
