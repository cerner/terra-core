import { SpacerSizes } from './_spacerConstants';

const SHORTHAND_DELIMITER = ' ';
const shLengthBoundaries = { min: 1, max: 4 };

const conflictingPropNamesError = (
  propName = '<SUPPLY SHORTHAND PROP NAME>',
  conflictingPropName = '<SUPPLY CONFLICTING PROP NAME>',
  componentName = 'Spacer',
) => new Error(`Expected only ${propName} or ${conflictingPropName} to be supplied to ${componentName} but both were provided. Validation failed.`);

const invalidShArgsLengthError = (
  propName = '<SUPPLY SHORTHAND PROP NAME>',
  valuesLength = '<SUPPLY RECEIVED ARGS LENGTH>',
  minLength = shLengthBoundaries.min,
  maxLength = shLengthBoundaries.max,
  componentName = 'Spacer',
) => new Error(`Invalid number of argument substrings provided to ${propName} in ${componentName}. Expected ${minLength}-${maxLength}. Received ${valuesLength}. Validation failed.`);

const invalidShArgValuesError = (
  propName = '<SUPPLY SHORTHAND PROP NAME>',
  invalidShValues = [],
  expectedValues = Object.values(SpacerSizes), // eslint-disable-line compat/compat
  componentName = 'Spacer',
) => new Error(`Expected ${propName} shorthand values to be one of ${expectedValues} but "${invalidShValues}" supplied to ${componentName}. Validation Failed.`);

export const ShorthandPropErrors = {
  conflictingPropName: conflictingPropNamesError,
  invalidShorthandLength: invalidShArgsLengthError,
  invalidShorthandArg: invalidShArgValuesError,
};

export const mapShorthandToObject = (propName = '', propVal = '') => {
  const shValues = propVal.split(SHORTHAND_DELIMITER);

  const generateShObject = (top, right, bottom, left) => ({
    [`${propName}Top`]: top,
    [`${propName}Right`]: right,
    [`${propName}Bottom`]: bottom,
    [`${propName}Left`]: left,
  });

  switch (shValues.length) {
    case 1:
      return generateShObject(shValues[0], shValues[0], shValues[0], shValues[0]);
    case 2:
      return generateShObject(shValues[0], shValues[1], shValues[0], shValues[1]);
    case 3:
      return generateShObject(shValues[0], shValues[1], shValues[2], shValues[1]);
    case 4:
      return generateShObject(shValues[0], shValues[1], shValues[2], shValues[3]);
    default:
      return {};
  }
};

export const shorthandValidator = (props = {}, propName = '') => {
  const propVal = props[propName];
  if (propVal === undefined || propVal === SpacerSizes.NONE) {
    return null;
  }

  const conflictingPropName = (() => {
    const propertyConflicts = (dir) => (props[`${propName}${dir}`] && (props[`${propName}${dir}`] !== SpacerSizes.NONE));

    const conflictProp = (
      (propertyConflicts('Top') ? `${propName}Top` : undefined)
      || (propertyConflicts('Right') ? `${propName}Right` : undefined)
      || (propertyConflicts('Bottom') ? `${propName}Bottom` : undefined)
      || (propertyConflicts('Left') ? `${propName}Left` : undefined)
    );

    return conflictProp;
  })();

  if (conflictingPropName) {
    return conflictingPropNamesError(propName, conflictingPropName);
  }

  const shValuesUnfiltered = propVal.split(SHORTHAND_DELIMITER);
  const shValues = shValuesUnfiltered.filter((val) => val); // Remove any falsey values (including empty strings)
  const shValueCountValid = shValues.length >= shLengthBoundaries.min && shValues.length <= shLengthBoundaries.max;

  if (!shValueCountValid) {
    return invalidShArgsLengthError(propName, shValues.length);
  }

  const invalidShValues = (() => {
    const sizes = Object.values(SpacerSizes); // eslint-disable-line compat/compat
    const invalidValues = shValues.filter((val) => sizes.indexOf(val) === -1);
    return invalidValues.length > 0 ? invalidValues : null;
  })();

  if (invalidShValues) {
    return invalidShArgValuesError(propName, invalidShValues);
  }

  return null;
};
