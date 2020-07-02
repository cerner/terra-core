import {
  defaultPlaceholderValue,
  isCurrentPlaceholder,
  isValuePresent,
  getDisplay,
  getFirstValue,
  getOptGroupKey,
  getOptGroupKeyIndex,
} from '../../../src/native-select/_NativeUtils';

const mockIntl = {
  formatMessage: () => 'mock-test-display',
};

const testOptions = [
  {
    display: '1',
    value: 'value-1',
  },
  {
    display: '2',
    value: 'value-2',
  },
  {
    display: '3',
    value: 'value-3',
  },
  {
    display: '4',
    value: 'value-4',
  },
];

const testOptGroups = [
  {
    display: 'Group 1',
    options: [
      {
        display: '1',
        value: 'value-1',
      },
      {
        display: '2',
        value: 'value-2',
      },
    ],
  },
  {
    display: 'Group 2',
    options: [
      {
        display: '3',
        value: 'value-3',
      },
      {
        display: '4',
        value: 'value-4',
      },
    ],
  },
];

describe('NativeUtils', () => {
  // getDisplay
  it('should return valid placeholder display for getDisplay with default', () => {
    expect(getDisplay(defaultPlaceholderValue, [], false, mockIntl)).toEqual('mock-test-display');
  });

  it('should return invalid placehodler display for getDisplay with filter style', () => {
    expect(getDisplay(defaultPlaceholderValue, testOptions, true, mockIntl)).toEqual(undefined);
  });

  it('should return valid displays for getDisplay with options', () => {
    expect(getDisplay(null, testOptions, false)).toEqual(undefined);
    expect(getDisplay(undefined, testOptions, false)).toEqual(undefined);
    expect(getDisplay('value-0', testOptions, false)).toEqual(undefined);
    expect(getDisplay('value-1', testOptions, false)).toEqual('1');
    expect(getDisplay('value-2', testOptions, false)).toEqual('2');
    expect(getDisplay('value-3', testOptions, false)).toEqual('3');
    expect(getDisplay('value-4', testOptions, false)).toEqual('4');
  });

  it('should return valid displays for getDisplay with optGroups', () => {
    expect(getDisplay(null, testOptGroups, false)).toEqual(undefined);
    expect(getDisplay(undefined, testOptGroups, false)).toEqual(undefined);
    expect(getDisplay('value-0', testOptGroups, false)).toEqual(undefined);
    expect(getDisplay('value-1', testOptGroups, true)).toEqual('1');
    expect(getDisplay('value-2', testOptGroups, false)).toEqual('2');
    expect(getDisplay('value-3', testOptGroups, false)).toEqual('3');
    expect(getDisplay('value-4', testOptGroups, false)).toEqual('4');
  });

  // getFirstValue
  it('should return valid values for getFirstValue with placeholder', () => {
    expect(getFirstValue([])).toEqual(defaultPlaceholderValue);
  });

  it('should return valid value for getFirstValue with options', () => {
    expect(getFirstValue(testOptions, true)).toEqual('value-1');
  });

  it('should return valid value for getFirstValue with optGroups', () => {
    expect(getFirstValue(testOptGroups, true)).toEqual('value-1');
  });

  // isCurrentPlaceholder
  it('should return the correct bool for isCurrentPlaceholder', () => {
    expect(isCurrentPlaceholder('value-1', false)).toEqual(false);
    expect(isCurrentPlaceholder(defaultPlaceholderValue, true)).toEqual(false);
    expect(isCurrentPlaceholder(defaultPlaceholderValue)).toEqual(true);
  });

  // getOptGroupKey
  it('should return the correct string for geOptGroupKey', () => {
    expect(getOptGroupKey('zero', 0)).toEqual('zero-0');
    expect(getOptGroupKey('one', 3)).toEqual('one-3');
  });

  // getOptGroupKeyIndex
  it('should return the correct index for getOptGroupKeyIndex', () => {
    const testSet = ['one-0', 'two-0', 'two-1', 'three-0', 'three-1', 'three-2'];

    expect(getOptGroupKeyIndex('zero', testSet)).toEqual(0);
    expect(getOptGroupKeyIndex('one', testSet)).toEqual(1);
    expect(getOptGroupKeyIndex('two', testSet)).toEqual(2);
    expect(getOptGroupKeyIndex('three', testSet)).toEqual(3);
  });

  // isValuePresent
  it('should return the correct bool for isValuePresent', () => {
    // string
    expect(isValuePresent('test')).toEqual(true);
    expect(isValuePresent('')).toEqual(true);
    // empty
    expect(isValuePresent(undefined)).toEqual(false);
    expect(isValuePresent(null)).toEqual(false);
    expect(isValuePresent()).toEqual(false);
    // number
    expect(isValuePresent(-1)).toEqual(true);
    expect(isValuePresent(0)).toEqual(true);
    expect(isValuePresent(1)).toEqual(true);
    expect(isValuePresent(1.1)).toEqual(true);
  });
});
